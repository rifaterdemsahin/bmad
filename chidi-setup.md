# 🚀 Chidi Vanilla Setup Guide

> **Goal:** Get BMAD running locally on your machine and connect Hermes for the full agentic experience.
> **Time:** ~15 minutes on a Teams call
> **Repo:** `git@github.com:rifaterdemsahin/bmad.git`

---

## 📋 Pre-Call Checklist (Do This Before the Teams Call)

| # | Task | How to Verify |
|---|------|---------------|
| 1 | **Git installed** | `git --version` → should show a version number |
| 2 | **Node.js installed** | `node --version` → v18+ recommended |
| 3 | **SSH key added to GitHub** | `cat ~/.ssh/id_rsa.pub` → copy to GitHub → Settings → SSH Keys |
| 4 | **Modern browser ready** | Chrome, Edge, Safari, or Firefox (latest) |

---

> 🛑 **STOPPED HERE?**
>
> **👉 Ask Claude:** *"I completed the pre-call checklist. What's next in the chidi-setup.md?"*
>
> Claude will guide you through the next steps live.

---

## 🖥️ Part 1: Clone & Run BMAD (Vanilla — No Build Step)

### Step 1 — Clone the Repo

Open your terminal and run:

```bash
git clone git@github.com:rifaterdemsahin/bmad.git
cd bmad
```

### Step 1a — Open Project in Claude 🤖

> Chidi uses **Claude** as his co-pilot to complete the remaining steps.

Open the `bmad` folder in **Claude Desktop** (or **Claude Code** if installed):

```bash
claude
```

**⚡ CRITICAL — Pull First!**

Before Claude does anything, make sure to pull the latest changes:

```bash
git pull origin main
```

> **Golden Rule:** ALWAYS PULL BEFORE YOU START. ALWAYS PUSH WHEN YOU'RE DONE. Read `claude.init` for the full protocol.

Once inside, tell Claude:

```
I need to set up the BMAD project locally and install Hermes. Please guide me through the remaining steps in chidi-setup.md.
```

Claude will then walk you through serving the files, installing Hermes, and running the smoke tests — executing commands and explaining what each part does.

### Step 2 — Serve the Files Locally

Because the app fetches JSON data sources, you need a local server (browsers block `file://` fetches).

**Option A — Python (if installed):**
```bash
python3 -m http.server 8000
```

**Option B — Node.js (if installed):**
```bash
npx serve .
```

**Option C — VS Code Live Server extension** (right-click `index.html` → "Open with Live Server")

### Step 3 — Open in Browser

Navigate to:

```
http://localhost:8000
```

You should see the **📎 Paperclip Co. Enterprise AI Dashboard** with:
- Smart Autocomplete search
- ROI Model Demonstration
- Hermes Agent console

---

> 🛑 **STOPPED HERE?**
>
> **👉 Ask Claude:** *"The dashboard is running on localhost. What's the next step in chidi-setup.md?"*
>
> Claude will walk you through installing Hermes.

---

## ⚡ Part 2: Install Hermes Agent (macOS)

> **Hermes** is the BMAD Orchestrator that coordinates multi-agent workflows.

### Step 1 — Run the Installer

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

### Step 2 — Reload Your Shell

```bash
source ~/.zshrc
```

*(Use `source ~/.bashrc` if you are on Bash instead of Zsh.)*

### Step 3 — Configure Hermes

```bash
hermes setup
```

Choose your LLM provider during the wizard:
- **Recommended for speed:** OpenRouter or Anthropic (Claude)
- **Local / offline:** Ollama → Custom Endpoint → `http://localhost:11434/v1`

### Step 4 — Verify Installation

```bash
hermes doctor
```

Expected output: all checks pass ✅

---

> 🛑 **STOPPED HERE?**
>
> **👉 Ask Claude:** *"Hermes is installed and verified. What's the next step in chidi-setup.md?"*
>
> Claude will run the smoke tests with you.

---

## 🧪 Part 3: Quick Smoke Test (Do Together on the Call)

After both parts are complete, run this together on the Teams call to verify everything works end-to-end:

| # | Action | Expected Result |
|---|--------|---------------|
| 1 | In browser, type `Chidi` in the search box | Autocomplete shows "Chidi Oparah — Stakeholder" |
| 2 | Click **Run Model Execution** | Console shows ROI margin calculation |
| 3 | Click **Demonstrate Data Sync** | Hermes console shows strategy sync steps |
| 4 | In terminal, run `hermes chat` | Interactive chat with the orchestrator starts |

---

> 🛑 **STOPPED HERE?**
>
> **👉 Ask Claude:** *"I finished the smoke tests. What's the final step in chidi-setup.md?"*
>
> Claude will remind you to push your changes and wrap up.

---

## 🗂️ What You Now Have Locally

```
bmad/
├── index.html          ← Dashboard (open this)
├── app.js              ← Autocomplete & ROI engine
├── menu.js             ← Shared navigation
├── style.css           ← Enterprise styling
├── data/               ← JSON data sources
│   ├── business.json
│   ├── model.json
│   ├── architecture.json
│   ├── design.json
│   ├── stakeholders.json
│   └── agents.json
├── .bmad-core/agents/  ← Agent definitions
└── docs/
    └── hermes.md       ← Full Hermes reference
```

---

## 🔧 Troubleshooting

| Problem | Fix |
|---------|-----|
| `Permission denied (publickey)` on clone | Add your SSH key to GitHub or use HTTPS: `git clone https://github.com/rifaterdemsahin/bmad.git` |
| JSON data not loading / autocomplete empty | Make sure you are using `http://localhost:...`, not `file://...` |
| `hermes` command not found | Re-run `source ~/.zshrc` or open a new terminal tab |
| Hermes setup fails | Check Node.js version: `node --version` → needs v18+ |

---

## 📞 Teams Call Execution Plan

> **Duration:** 20–30 minutes  
> **Roles:** Rifat shares screen + guides; Chidi drives keyboard

### Phase 1 — Environment Check (5 min)
- [ ] Verify Git, Node, browser ready
- [ ] Confirm SSH access to GitHub

### Phase 2 — Clone & Launch (5 min)
- [ ] `git clone git@github.com:rifaterdemsahin/bmad.git`
- [ ] Start local server (`python3 -m http.server 8000` or `npx serve`)
- [ ] Open `http://localhost:8000` in browser

### Phase 3 — Hermes Setup (10 min)
- [ ] Run Hermes install script
- [ ] `source ~/.zshrc`
- [ ] `hermes setup` → pick provider
- [ ] `hermes doctor` → verify

### Phase 4 — Smoke Test & Q&A (5–10 min)
- [ ] Search "Chidi" in dashboard autocomplete
- [ ] Click **Run Model Execution**
- [ ] Click **Demonstrate Data Sync**
- [ ] Run `hermes chat` in terminal
- [ ] Celebrate 🎉

### Phase 5 — Wrap Up & Push (2 min)
- [ ] `git add -A`
- [ ] `git commit -m "chidi: local setup complete"`
- [ ] `git push origin main`
- [ ] `git log --oneline -3` → verify push

---

> *"Transforming legacy enterprises into agentic AI architectures, one paperclip at a time."* 📎✨

---

# 🎯 FINAL REMINDER

**If you are reading this file and have NOT finished the setup — stop and ask Claude.**

```
👉 "Claude, I need to continue the chidi-setup.md. What should I do next?"
```

**Claude is your co-pilot.** Every step in this guide is designed to be executed with Claude's help. Don't try to do it all manually — let Claude run the commands, explain the output, and catch errors in real time.

---

## 🔄 Claude Prompt Cheat Sheet

Stuck anywhere? Copy-paste one of these into Claude:

| Situation | What to say to Claude |
|-----------|----------------------|
| Just cloned the repo | *"I just cloned the BMAD repo. What's next in chidi-setup.md?"* |
| Dashboard is running | *"BMAD is running on localhost. Guide me through the Hermes install."* |
| Hermes installed | *"Hermes is set up. Let's run the smoke tests from chidi-setup.md."* |
| Smoke tests passed | *"Everything works. What's the wrap-up step in chidi-setup.md?"* |
| Something broke | *"I got an error at [X step]. Here's the output: [paste error]"* |

---

> 🚀 **Remember: This guide is a conversation, not a checklist.** Keep Claude open and keep asking. *Pull first. Push last. Always.*
