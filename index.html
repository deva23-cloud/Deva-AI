<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Deva AI — Personal Assistant</title>
<style>
:root{--bg:#0b1020;--panel:#121a2d;--panel2:#192541;--line:#293754;--text:#edf2ff;--muted:#9eacc8;--accent:#8998ff;--green:#5bd6b5}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at 20% 0,#1d2a50 0,transparent 38%),var(--bg);color:var(--text);font:15px/1.5 system-ui,Segoe UI,Arial,sans-serif;min-height:100vh}
.app{display:grid;grid-template-columns:245px 1fr;min-height:100vh}.sidebar{padding:24px 16px;border-right:1px solid var(--line);background:#0b1325dd;display:flex;flex-direction:column;gap:25px}
.logo{font-size:24px;font-weight:800;letter-spacing:1px}.logo span{color:var(--green)}.sub{font-size:12px;color:var(--muted);margin-top:-22px}
nav{display:grid;gap:8px}nav button{padding:11px 12px;text-align:left;border:1px solid transparent;background:transparent;color:var(--muted);border-radius:10px;cursor:pointer}nav button.active,nav button:hover{background:var(--panel2);border-color:var(--line);color:var(--text)}
.side-note{margin-top:auto;color:var(--muted);font-size:12px}.main{width:min(100%,1050px);margin:auto;padding:28px clamp(16px,4vw,48px);display:flex;flex-direction:column;min-width:0}
header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line);padding-bottom:18px}header h1{font-size:20px;margin:0}.status{border:1px solid #286253;color:var(--green);padding:5px 10px;border-radius:30px;font-size:12px}
.hero{padding:35px 0 20px}.hero h2{font-size:clamp(28px,4vw,40px);line-height:1.12;margin:0 0 12px}.hero p{color:var(--muted);max-width:680px;margin:0}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:12px 0 20px}.card{background:linear-gradient(145deg,var(--panel),#10182a);border:1px solid var(--line);border-radius:14px;padding:15px}.card b{display:block;margin-bottom:5px}.card small{color:var(--muted)}
.chat{border:1px solid var(--line);border-radius:16px;background:#0e1729;overflow:hidden}.messages{height:min(48vh,440px);min-height:250px;overflow:auto;padding:18px;display:flex;flex-direction:column;gap:13px}.msg{max-width:86%;padding:12px 14px;border-radius:13px;white-space:pre-wrap;overflow-wrap:anywhere}.bot{background:var(--panel2);align-self:flex-start}.user{background:#354778;align-self:flex-end}.composer{display:flex;gap:10px;padding:12px;border-top:1px solid var(--line)}textarea{flex:1;resize:vertical;min-height:48px;max-height:130px;border:1px solid var(--line);border-radius:11px;background:#111d33;color:var(--text);padding:12px;font:inherit;outline:none}.send{border:0;border-radius:11px;background:linear-gradient(135deg,#8998ff,#586ce0);color:white;padding:0 20px;font-weight:700;cursor:pointer}.send:disabled{opacity:.55}
.hint{font-size:12px;color:var(--muted);margin:10px 2px}.setup{margin-top:16px;padding:14px 16px;background:#151e32;border:1px solid var(--line);border-radius:12px;color:var(--muted);font-size:13px}.setup b{color:var(--text)}
@media(max-width:720px){.app{grid-template-columns:1fr}.sidebar{padding:14px 16px;border-right:0;border-bottom:1px solid var(--line);gap:12px}.sub{margin-top:-12px}nav{display:flex;overflow:auto}nav button{white-space:nowrap}.side-note{display:none}.main{padding:18px 14px}.cards{grid-template-columns:1fr}.messages{height:50vh}}
</style>
</head>
<body>
<div class="app">
<aside class="sidebar">
  <div class="logo">DEVA <span>AI</span></div>
  <div class="sub">Your personal AI workspace</div>
  <nav>
    <button class="active" data-title="Chat Assistant">✦ Chat Assistant</button>
    <button data-title="AI Developer">⌘ AI Developer</button>
    <button data-title="Browser Agent">◎ Browser Agent</button>
    <button data-title="3D Studio">◇ 3D Studio</button>
    <button data-title="Document AI">▤ Document AI</button>
  </nav>
  <div class="side-note">Personal workspace<br>More tools can be connected later.</div>
</aside>
<main class="main">
  <header><h1 id="pageTitle">Chat Assistant</h1><span class="status">Interface ready</span></header>
  <section class="hero">
    <h2>What can I help you build?</h2>
    <p>Ask Deva AI to help with coding, websites, research, documents and creative projects. Connect an AI backend to enable real AI replies.</p>
  </section>
  <section class="cards">
    <div class="card"><b>⌘ Build</b><small>Plan websites, apps and code projects.</small></div>
    <div class="card"><b>◎ Explore</b><small>Plan research and browser workflows.</small></div>
    <div class="card"><b>◇ Create</b><small>Plan Blender scenes and 3D projects.</small></div>
  </section>
  <section class="chat">
    <div class="messages" id="messages">
      <div class="msg bot">Hello! I'm Deva AI. The website interface is ready. To make me answer with a real AI model, this page must be connected to a secure backend service.</div>
    </div>
    <form class="composer" id="form">
      <textarea id="prompt" placeholder="Message Deva AI..." maxlength="6000" required></textarea>
      <button class="send" id="send" type="submit">Send</button>
    </form>
  </section>
  <p class="hint">This is the front-end interface. It does not yet contain an AI model or computer-control tools.</p>
  <div class="setup"><b>Next step:</b> Host a secure backend (for example, with GitHub Codespaces or another server) and set its chat endpoint in the script. Do not put private API keys in this HTML file or a public GitHub repository.</div>
</main>
</div>
<script>
// Set this to your own secure backend endpoint after deploying the server.
// Example: const API_ENDPOINT = "https://your-private-server.example/api/chat";
const API_ENDPOINT = "";
const messages = document.getElementById("messages");
function addMessage(text, type){
  const node=document.createElement("div");
  node.className="msg "+type;
  node.textContent=text;
  messages.appendChild(node);
  messages.scrollTop=messages.scrollHeight;
}
document.getElementById("form").addEventListener("submit",async e=>{
  e.preventDefault();
  const input=document.getElementById("prompt");
  const button=document.getElementById("send");
  const message=input.value.trim();
  if(!message)return;
  addMessage(message,"user");input.value="";button.disabled=true;button.textContent="...";
  if(!API_ENDPOINT){
    addMessage("Your message is shown in the interface, but the AI brain is not connected yet. A secure backend and AI model/API are required for real answers. I can guide you through connecting them next.","bot");
    button.disabled=false;button.textContent="Send";return;
  }
  try{
    const response=await fetch(API_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({message})});
    const data=await response.json();
    if(!response.ok)throw new Error(data.error||"The AI service returned an error.");
    addMessage(data.reply||"The AI returned an empty response.","bot");
  }catch(err){addMessage("Could not contact the AI service: "+err.message,"bot");}
  finally{button.disabled=false;button.textContent="Send";}
});
document.querySelectorAll("nav button").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll("nav button").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active");document.getElementById("pageTitle").textContent=btn.dataset.title;
  if(btn.dataset.title!=="Chat Assistant")addMessage(btn.dataset.title+" is a planned module. It needs its own secure tool integration before it can perform actions.","bot");
}));
</script>
</body>
</html>
