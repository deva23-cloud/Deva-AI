require("dotenv").config();

const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.disable("x-powered-by");
app.use(express.json({ limit: "32kb" }));

app.use(session({
  name: "deva.sid",
  secret: process.env.SESSION_SECRET || "development-only-change-this-secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 8 * 60 * 60 * 1000
  }
}));

function isConfigured() {
  return Boolean(process.env.APP_PASSWORD && process.env.SESSION_SECRET);
}

function requireLogin(req, res, next) {
  if (req.session && req.session.authenticated) return next();
  return res.status(401).json({ error: "Please sign in first." });
}

app.post("/api/login", (req, res) => {
  const password = String(req.body?.password || "");
  const expected = String(process.env.APP_PASSWORD || "");

  if (!expected || !process.env.SESSION_SECRET) {
    return res.status(503).json({ error: "Set APP_PASSWORD and SESSION_SECRET in the cloud environment secrets." });
  }

  // Compare equal-length buffers to avoid a simple timing leak.
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  const crypto = require("crypto");
  const valid = a.length === b.length && crypto.timingSafeEqual(a, b);

  if (!valid) return res.status(401).json({ error: "Incorrect password." });
  req.session.authenticated = true;
  res.json({ ok: true });
});

app.post("/api/logout", (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.get("/api/status", (req, res) => {
  res.json({
    authenticated: Boolean(req.session?.authenticated),
    aiConfigured: Boolean(process.env.AI_API_KEY && process.env.AI_BASE_URL && process.env.AI_MODEL)
  });
});

app.post("/api/chat", requireLogin, async (req, res) => {
  const message = String(req.body?.message || "").trim();
  if (!message || message.length > 6000) {
    return res.status(400).json({ error: "Enter a message of up to 6,000 characters." });
  }

  const { AI_API_KEY, AI_BASE_URL, AI_MODEL } = process.env;
  if (!AI_API_KEY || !AI_BASE_URL || !AI_MODEL || AI_MODEL.startsWith("replace-")) {
    return res.status(503).json({
      error: "The private chat interface is ready, but no AI provider is connected yet. Add AI_API_KEY, AI_BASE_URL, and AI_MODEL as cloud environment secrets."
    });
  }

  try {
    const endpoint = AI_BASE_URL.replace(/\/+$/, "") + "/chat/completions";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${AI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [
          {
            role: "system",
            content: "You are Deva AI, a helpful personal assistant. Be clear about which tools are actually connected. Never claim to have operated a computer, browser, or Blender unless a real tool integration has executed that action."
          },
          { role: "user", content: message }
        ],
        temperature: 0.6
      }),
      signal: AbortSignal.timeout(60000)
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return res.status(502).json({ error: data.error?.message || `AI provider returned HTTP ${response.status}.` });
    }

    const reply = data.choices?.[0]?.message?.content;
    if (!reply) return res.status(502).json({ error: "The AI provider returned an empty response." });
    res.json({ reply });
  } catch (err) {
    res.status(502).json({ error: "Could not reach the AI provider. Check the cloud secrets and provider status." });
  }
});

app.use(express.static(path.join(__dirname, "public")));
app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Deva AI is listening on port ${PORT}`);
});
