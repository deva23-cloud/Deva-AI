# Deva AI — private browser-based starter

This is a first milestone: a password-gated browser chat UI with a server-side AI-provider adapter. It is designed to run in a cloud development environment (for example, GitHub Codespaces), so no development software needs to be installed on your Windows PC.

## What works in this starter
- Responsive browser interface.
- Password gate and server-side session.
- Chat endpoint that calls an OpenAI-compatible chat-completions API.
- Provider credentials stay on the server; they are never sent to browser JavaScript.

## What is not connected yet
Browser automation, desktop control, Blender execution, file editing, document ingestion, persistent conversation memory, and multi-step agent tools are future phases. The sidebar labels are roadmap placeholders, not working integrations.

## Run in GitHub Codespaces
1. Create a **private** GitHub repository named `deva-ai`.
2. Upload the contents of this folder to the repository (not the ZIP file itself).
3. Open the repository's **Code → Codespaces → Create codespace on main**.
4. In the Codespaces terminal, run `npm install`.
5. Copy `.env.example` to `.env` and fill in the values. In Codespaces, prefer **Repository → Settings → Secrets and variables → Codespaces** for secrets, then restart the codespace. Do not commit `.env`.
6. Run `npm start`.
7. When Codespaces detects port `3000`, keep its visibility set to **Private** and open the forwarded URL.

## Required configuration
- `APP_PASSWORD`: a long, unique workspace password.
- `SESSION_SECRET`: a long random secret.
- `AI_BASE_URL`: provider API base URL, usually ending in `/v1`.
- `AI_MODEL`: exact model identifier supported by the provider.
- `AI_API_KEY`: provider API key.

The AI adapter expects an OpenAI-compatible `POST /chat/completions` endpoint. Provider compatibility varies. API usage may incur charges and rate limits.

## Important security notes
- Keep the GitHub repository private.
- Never commit `.env`, API keys, or passwords.
- Keep the forwarded Codespaces port private. Do not change it to public.
- This starter uses Express's default in-memory session store, which is suitable only for a short-lived prototype. Before long-term or multi-user deployment, use a production session store, HTTPS, rate limiting, CSRF protections, and stronger authentication.
- Do not connect unrestricted shell commands, arbitrary file access, or unsupervised desktop control. Add a sandbox, per-tool permissions, audit logs, and explicit approval for consequential actions before enabling agent execution.
