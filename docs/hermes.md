Installing **Hermes Agent** (by Nous Research) on macOS is a streamlined process thanks to their automated setup script. It handles dependencies like Python 3.11+, Node.js, and ripgrep for you.

Here are the steps formatted in Markdown:

---

## 🚀 Hermes AI Agent: macOS Installation Guide

### 1. Run the Installer

Open your **Terminal** and paste the following command. This script clones the repository to `~/.hermes`, sets up a virtual environment, and installs the necessary global commands.

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

```

### 2. Reload Your Shell

Once the installer finishes, you need to refresh your shell environment to recognize the new `hermes` command.

```bash
source ~/.zshrc

```

*(If you are using Bash instead of Zsh, use `source ~/.bashrc`)*

### 3. Run the Setup Wizard

The setup wizard will help you configure your LLM provider (OpenRouter, Anthropic, OpenAI, or local via Ollama).

```bash
hermes setup

```

* **Recommendation:** If you want a quick start, choose **OpenRouter** or **Anthropic (Claude)** for the best reasoning performance.
* **Local Models:** If you have **Ollama** running, select "Custom Endpoint" and point it to `http://localhost:11434/v1`.

### 4. Verify the Installation

Check if everything is configured correctly by running the built-in diagnostic tool:

```bash
hermes doctor

```

---

## 🛠️ Common Commands

| Command | Description |
| --- | --- |
| `hermes chat` | Start a new interactive chat session in the terminal. |
| `hermes model` | Quick-switch your active LLM or provider. |
| `hermes gateway setup` | Set up integrations for **Telegram**, **Discord**, or **Slack**. |
| `hermes update` | Pull the latest features and improvements from GitHub. |

---

## 💡 Pro Tips for macOS Users

* **Persistent Gateway:** If you set up a Telegram or Discord bot, you can keep it running in the background as a macOS service using:
```bash
hermes gateway install

```


* **Memory & Skills:** Hermes saves what it learns about you in `~/.hermes/MEMORY.md`. You can edit this file manually if you want to "hardcode" specific facts the agent should always remember.
* **Context Window:** Hermes requires a model with at least **64k context tokens** to function properly for complex tasks. Standard Claude 3.5 Sonnet or GPT-4o work perfectly.
