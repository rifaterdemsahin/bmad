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

## 🖥️ Part 1: Clone & Run BMAD (Vanilla — No Build Step)

### Step 1 — Clone the Repo

Open your terminal and run:

```bash
git clone git@github.com:rifaterdemsahin/bmad.git
cd bmad
```

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

## 🧪 Part 3: Quick Smoke Test (Do Together on the Call)

After both parts are complete, run this together on the Teams call to verify everything works end-to-end:

| # | Action | Expected Result |
|---|--------|---------------|
| 1 | In browser, type `Chidi` in the search box | Autocomplete shows "Chidi Oparah — Stakeholder" |
| 2 | Click **Run Model Execution** | Console shows ROI margin calculation |
| 3 | Click **Demonstrate Data Sync** | Hermes console shows strategy sync steps |
| 4 | In terminal, run `hermes chat` | Interactive chat with the orchestrator starts |

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

---

> *"Transforming legacy enterprises into agentic AI architectures, one paperclip at a time."* 📎✨
