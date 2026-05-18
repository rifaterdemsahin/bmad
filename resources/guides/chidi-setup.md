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

### Step 0 — Install Python (If Not Present)

BMAD needs a local file server to load JSON data. Most systems have Python pre-installed. Check first:

```bash
python3 --version
```

If you see a version (e.g., `Python 3.11.x`), skip to Step 1.

**If `python3` is NOT found, install it:**

```bash
# macOS (Homebrew)
brew install python

# Ubuntu/Debian
sudo apt update && sudo apt install python3

# Windows (via Microsoft Store or python.org)
# Download from https://python.org/downloads/
```

> **Claude will handle this for you.** If the check fails, tell Claude: *"Python is missing. Please install it for me."*

---

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

### Step 1b — Create `.env` File for API Keys

Before setting up Hermes, create a safe place for your API keys so they never get committed to Git.

1. In the `bmad` folder, create a `.env` file:

```bash
touch .env
```

2. Open it in your editor and add your key(s):

```bash
# .env — NEVER COMMIT THIS FILE
ANTHROPIC_API_KEY=sk-ant-your-key-here
# OPENROUTER_API_KEY=your-key-here
# OPENAI_API_KEY=your-key-here
```

> 💰 **Budget Cap for Testing:** Do NOT load more than **$5** on your API key for this setup. Hermes `hello` and `doctor` tests use almost no tokens. If you want to cap spend, set billing limits in your provider dashboard (Anthropic: Settings → Limits → Monthly Budget).

> 🔐 **Future: Key Rotation & Vault** For production, rotate keys monthly and store them in a secrets manager (AWS Secrets Manager, 1Password, or HashiCorp Vault). Never hardcode production keys in `.env` files. This guide uses `.env` only for local development.

3. Verify `.gitignore` already ignores `.env`:

```bash
cat .gitignore | grep env
```

You should see `.env` listed. If not, add it:

```bash
echo ".env" >> .gitignore
```

> **Claude will do all of this for you.** Just say: *"Claude, create a `.env` file for my Anthropic key and make sure it's gitignored."*

---

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

### Step 1 — Check Prerequisites

Before installing Hermes, verify the following are installed:

```bash
# Check curl (required for the installer)
curl --version

# Check bash (usually pre-installed on macOS)
bash --version

# Check Node.js (required by Hermes)
node --version
```

**If any are missing, install them:**

```bash
# macOS — install missing tools via Homebrew
brew install curl bash node

# Ubuntu/Debian
sudo apt update && sudo apt install curl bash nodejs npm
```

> **Claude will verify these for you.** If any check fails, tell Claude: *"[tool] is missing. Please install it."*

### Step 2 — Run the Hermes Installer

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

The installer will:
1. Clone the Hermes repo to `~/.hermes`
2. Create a Python virtual environment
3. Install Python dependencies
4. Install global `hermes` command

> **If the installer fails,** tell Claude the exact error message. Common fixes:
> - Re-run with `bash -x` for verbose output
> - Ensure `python3` is available (see Part 1, Step 0)
> - Check internet connection

### Step 3 — Reload Your Shell

The installer adds `hermes` to your PATH. Refresh your shell:

```bash
source ~/.zshrc
```

*(Use `source ~/.bashrc` if you are on Bash instead of Zsh.)*

**Verify the command is available:**

```bash
hermes --version
```

If you see a version number, proceed. If you get `command not found`, tell Claude.

### Step 4 — Configure Hermes (Interactive Wizard)

Launch the setup wizard:

```bash
hermes setup
```

The wizard will ask you a series of questions. **Do not worry if you get something wrong.** You can re-run `hermes setup` anytime.

**Typical flow:**
1. **Pick your LLM provider** — Choose one:
   - `anthropic` (Claude) — best reasoning, recommended
   - `openrouter` — cheaper, many models
   - `openai` — GPT-4o
   - `ollama` — free, runs locally
2. **Enter your API key** — Paste it when prompted (it will be hidden)
3. **Pick a model** — e.g., `claude-3-5-sonnet-20241022` for Anthropic
4. **Confirm** — Wizard writes the config to `~/.hermes/config.yaml`

> **Claude will guide you through this wizard live.** Just tell Claude: *"I ran `hermes setup`. What should I pick?"*

---

### Step 4a — Quickstep Alternative (Faster Path)

If you already know your provider and have your API key ready, use **quickstep** to skip the interactive wizard:

```bash
# Load key from .env and run quickstep
source .env && hermes quickstep --provider anthropic --api-key $ANTHROPIC_API_KEY --model claude-3-5-sonnet-20241022
```

**Other quickstep examples:**

```bash
# OpenRouter
source .env && hermes quickstep --provider openrouter --api-key $OPENROUTER_API_KEY --model anthropic/claude-3.5-sonnet

# OpenAI
source .env && hermes quickstep --provider openai --api-key $OPENAI_API_KEY --model gpt-4o

# Ollama (local — no key needed)
hermes quickstep --provider ollama --api-key dummy --model llama3.1 --base-url http://localhost:11434/v1
```

> **Claude can run quickstep for you.** Just say: *"Claude, run `hermes quickstep` with the key from my `.env` file."* Claude will load it safely and execute the command without exposing the key in terminal history.

**If quickstep fails,** fall back to the interactive `hermes setup` wizard (Step 4) — it's more forgiving.

---

### Step 4b — Fix & Restart If Setup Errors

It is **completely normal** for `hermes setup` or `hermes quickstep` to fail on the first try. The most common causes are:

| Error | Likely Cause | Quick Fix |
|-------|-------------|-----------|
| `Authentication failed` | Wrong API key or key not loaded from `.env` | Re-run `source .env`, double-check the key in your provider dashboard |
| `Model not found` | Typo in model name | Use exact model string from provider docs |
| `Connection refused` | Ollama not running | Start Ollama first: `ollama serve` |
| `Permission denied` | Installer couldn't write to `~/.hermes` | `mkdir -p ~/.hermes` then retry |
| `ModuleNotFoundError` | Python deps missing | `cd ~/.hermes && pip install -r requirements.txt` |

**If you see ANY error during setup:**

1. **Copy the FULL error message** (select all text in terminal)
2. **Paste it into Claude exactly like this:**

```
👉 "Claude, Hermes setup failed with this error: [PASTE FULL ERROR]. Please fix it and tell me the exact command to restart."
```

3. **Claude will give you a fix command.** Run it.
4. **Then restart the setup:**

```bash
# If you used quickstep:
source .env && hermes quickstep --provider anthropic --api-key $ANTHROPIC_API_KEY --model claude-3-5-sonnet-20241022

# If you used the wizard:
hermes setup
```

5. **Repeat until it succeeds.** Most people need 1–3 tries. This is expected.

> 🔄 **The loop is:** Error → Paste to Claude → Get fix → Restart setup → Test → Repeat if needed.

---

### Step 5 — First Test: Say Hello

Before anything else, make sure Hermes can actually talk to the LLM:

```bash
hermes chat
```

You should see a prompt like:

```
> Welcome to Hermes! Type 'exit' to quit.
> You:
```

**Type:**

```
hello
```

**Expected:** Hermes responds with a greeting. If you see a reply, Hermes is connected and working. ✅

---

#### ⚠️ Common Warning: "No auxiliary LLM provider configured"

You may see yellow warnings like:

```
⚠ No auxiliary LLM provider configured — context compression will drop middle turns...
⚠ Auxiliary title generation failed: No LLM provider configured for task=title_generation
```

**These are NOT fatal errors** — Hermes is working. But background tasks (context compression, auto-titles) need a separate provider.

**Quick Fix:**

```bash
# Option A: Re-run setup and configure the auxiliary provider
hermes setup

# Option B: Add auxiliary provider to Hermes config
nano ~/.hermes/config.yaml
```

Add these lines (use the same key as your main provider):

```yaml
auxiliary_provider: anthropic
auxiliary_api_key: sk-ant-your-same-key-here
```

Then restart `hermes chat`.

> **Claude will handle this for you.** Just paste the warnings and say: *"Claude, I see 'No auxiliary LLM provider' warnings in Hermes. Please fix it."*

---

**If you see a RED ERROR instead of warnings,** copy the entire error message and paste it into Claude:

```
👉 "Claude, I ran `hermes chat`, typed 'hello', and got this error: [PASTE ERROR HERE]. Please fix it."
```

**Claude will:**
- Read the error
- Tell you exactly what's wrong (wrong API key, wrong model name, missing config, etc.)
- Give you the exact command or fix to run
- Stay with you until `hello` works

---

### Step 6 — Iterate Until It Works

| Try | Result | What To Do |
|-----|--------|-----------|
| 1st `hermes chat` | Works! 🎉 | Skip to Step 7 |
| 1st `hermes chat` | Error ❌ | Paste error into Claude, get fix, retry |
| 2nd `hermes chat` | Works! 🎉 | Skip to Step 7 |
| 2nd `hermes chat` | Still error ❌ | Paste the NEW error into Claude again |

> **This is normal.** Most Hermes setups need 1–3 tries to get the provider + model + API key combination exactly right. Claude handles every retry.

---

### Step 7 — Verify with `hermes doctor`

Once `hello` works, run the full diagnostic:

```bash
hermes doctor
```

Expected: all checks pass ✅

If any check fails, paste the output into Claude just like before:

```
👉 "Claude, `hermes doctor` failed with this output: [PASTE OUTPUT]. Please fix it."
```

---

> 🛑 **STOPPED HERE?**
>
> **👉 Ask Claude:** *"Hermes is installed, configured, and verified with `hermes doctor`. What's the next step in chidi-setup.md?"*
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
| 4 | In terminal, `cd bmad` then run `hermes chat` | Interactive chat with the orchestrator starts (make sure you're in the `bmad` folder) |

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
| `python3: command not found` | Install Python (see Part 1, Step 0) |
| `curl: command not found` | `brew install curl` (macOS) or `sudo apt install curl` (Linux) |
| `node: command not found` | Install Node.js from [nodejs.org](https://nodejs.org) or via Homebrew |
| JSON data not loading / autocomplete empty | Make sure you are using `http://localhost:...`, not `file://...` |
| `hermes` command not found | Re-run `source ~/.zshrc` or open a new terminal tab |
| Hermes setup fails | Check Node.js version: `node --version` → needs v18+. Also verify `python3` is installed. |
| Accidentally committed `.env` with API key | Immediately revoke the key in your provider dashboard, then run: `git rm --cached .env && echo ".env" >> .gitignore && git commit -m "remove leaked env file"` |

---

## 📞 Teams Call Execution Plan

> **Duration:** 20–30 minutes  
> **Roles:** Rifat shares screen + guides; Chidi drives keyboard

### Phase 1 — Environment Check (5 min)
- [ ] Verify Git, Python, Node, browser ready
- [ ] Confirm SSH access to GitHub

### Phase 2 — Clone & Launch (5 min)
- [ ] `git clone git@github.com:rifaterdemsahin/bmad.git`
- [ ] `cd bmad`
- [ ] Start local server (`python3 -m http.server 8000` or `npx serve`)
- [ ] Open `http://localhost:8000` in browser

### Phase 3 — Hermes Setup (10 min)
- [ ] Verify prerequisites (`curl`, `bash`, `node`)
- [ ] Run Hermes install script
- [ ] `source ~/.zshrc`
- [ ] `hermes --version` → confirm command works
- [ ] Create `.env` file with API key + verify `.gitignore` has `.env`
- [ ] Configure Hermes (pick one):
  - **Fast path:** `source .env && hermes quickstep --provider anthropic --api-key $ANTHROPIC_API_KEY --model claude-3-5-sonnet-20241022`
  - **Guided path:** `hermes setup` → pick provider and enter API key
- [ ] **If setup throws an error:** copy error → paste into Claude → get fix → **restart setup** → repeat until it succeeds
- [ ] `hermes chat` → type `hello` → verify response
- [ ] If `hello` fails: paste error into Claude → fix → retry `hermes chat`
- [ ] `hermes doctor` → verify all checks pass

### Phase 4 — Smoke Test & Q&A (5–10 min)
- [ ] Search "Chidi" in dashboard autocomplete
- [ ] Click **Run Model Execution**
- [ ] Click **Demonstrate Data Sync**
- [ ] In terminal, `cd bmad` then run `hermes chat`
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
| Want fast Hermes setup | *"Create a `.env` file for my API key, then run `hermes quickstep` with it."* |
| Hermes setup error | *"Hermes setup / quickstep failed with this error: [paste full error]. Please fix it and give me the exact command to restart setup."* |
| Hermes installed | *"Hermes is set up. Let's run the smoke tests from chidi-setup.md."* |
| Smoke tests passed | *"Everything works. What's the wrap-up step in chidi-setup.md?"* |
| Something broke | *"I got an error at [X step]. Here's the output: [paste error]"* |

---

> 🚀 **Remember: This guide is a conversation, not a checklist.** Keep Claude open and keep asking. *Pull first. Push last. Always.*
