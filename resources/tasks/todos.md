# BMAD Todos & Action Items ✅

## Active Initiatives

---

### 0. Obsidian Knowledge Base Setup 🧠
**Priority:** High  
**Status:** ⏳ Partially Complete

**Objective:** All BMAD team members must have a local Obsidian vault configured as their personal knowledge base and long-term memory system.

**Stakeholders:**
- **Rifat Erdem Sahin** ✅ — Setup completed. Vault initialized with BMAD templates, daily notes structure, and agent prompts library.
- **Chidi Oparah** 🔲 — Setup pending. Needs to:
  - [ ] Install Obsidian Desktop (Mac/Windows)
  - [ ] Create vault in `~/Documents/BMAD-Vault`
  - [ ] Install core plugins: Dataview, Templater, Git
  - [ ] Clone shared templates from `bmad-in-a-box/templates/obsidian/`
  - [ ] Configure daily notes hotkey (`Cmd/Ctrl + D`)
  - [ ] Test first daily note entry

**Shared Templates:**
| Template | Purpose |
|----------|---------|
| `daily.md` | Morning brief + task log + reflection |
| `agent-prompt.md` | Reusable Claude/GPT prompt blocks |
| `architecture-decision.md` | ADR format for BMAD changes |
| `stakeholder-sync.md` | Pre/post meeting notes |

**Success Metric:** Both Chidi and Rifat have synced daily notes for 7 consecutive days.

---

### 1. Claude 101 Certification
**Priority:** High  
**Status:** ⏳ In Progress  
**Link:** [Claude 101 — Anthropic Skilljar](https://anthropic.skilljar.com/claude-101)

**Objective:** Complete the official Claude 101 course to deepen our understanding of Anthropic's model capabilities, prompting best practices, and enterprise integration patterns.

**Checklist:**
- [ ] Enroll in Claude 101
- [ ] Complete Module 1: Introduction to Claude
- [ ] Complete Module 2: Prompt Engineering
- [ ] Complete Module 3: API Integration
- [ ] Complete Module 4: Safety & Alignment
- [ ] Pass final assessment
- [ ] Share key learnings with the BMAD team

---

### 2. Anthropic Partnership Setup
**Priority:** High  
**Status:** 🔲 Not Started  
**Goal:** Establish a formal partnership with Anthropic for Paperclip Co.

**Plan:**
1. **Phase 1 — Internal Validation (3 people)**
   - Recruit 3 pilot users from the BMAD team
   - Run a 2-week Claude-heavy workflow sprint
   - Document productivity gains & blockers

2. **Phase 2 — Partnership Application**
   - If Phase 1 shows >30% efficiency gain, apply for:
     - Anthropic for Startups
     - Enterprise Partner Program
     - Reseller / Integration Partner status

3. **Phase 3 — Co-Marketing**
   - Publish joint case study: "BMAD Method + Claude"
   - Present at Anthropic's developer conference

---

### 3. Hermes Orchestrator Upgrade ⚡
**Priority:** High  
**Status:** 🔲 Not Started  
**Goal:** Elevate the Hermes Orchestrator from a demo console to a production-ready multi-model routing engine.

**Scope:**
- [ ] Implement intent classification layer (routes to Claude / Company LLM / Local Model)
- [ ] Add consensus protocol when agents disagree on implementation paths
- [ ] Build merge-ready output formatter for versioned architecture decisions
- [ ] Integrate live data sync across `business.json`, `model.json`, `stakeholders.json`
- [ ] Create health-check dashboard for tri-model uptime and latency
- [ ] Add `/bmad-help` and `/party-mode` command handlers (BMAD V6 parity)

**Technical Deliverables:**
| Component | File | Status |
|-----------|------|--------|
| Intent Router | `hermes/intent-router.js` | 🔲 |
| Consensus Engine | `hermes/consensus.js` | 🔲 |
| Data Sync Worker | `hermes/sync-worker.js` | 🔲 |
| Health Dashboard | `hermes/health.html` | 🔲 |
| CLI Commands | `hermes/cli.js` | 🔲 |

**Success Metric:** Hermes routes 100 test queries across all 3 models with <2s end-to-end latency and 95% routing accuracy.

---

## Use Cases

### Use Case 1: AI in Personal Life — "CTO in a Box" 🏠

**Vision:** Every BMAD team member runs a personal AI stack for life optimization.

**Components:**
| Layer | Tool | Purpose |
|-------|------|---------|
| Orchestrator | n8n / Home Assistant | Workflow automation |
| LLM | Local Ollama (Llama 3.1) | Privacy-first queries |
| Memory | Obsidian + Vector DB | Long-term knowledge |
| Voice | Whisper + Piper | Hands-free interaction |

**Example Workflows:**
- **Morning Brief:** AI reads calendar, weather, news; generates priority list
- **Receipt Tracker:** Photo → OCR → Categorize → Spreadsheet
- **Learning Coach:** Daily 15-min micro-lesson based on career goals

**Success Metric:** 5 hours/week saved per person.

---

### Use Case 2: Build BMAD in a Box 📦

**Vision:** A single deployable package that transforms any enterprise into a BMAD-powered organization in < 1 hour.

**What's Inside the Box:**
```
bmad-in-a-box/
├── 📁 agents/
│   ├── analyst.md          → Mary (Analyst Agent)
│   ├── architect.md        → Architecture Agent
│   └── orchestrator.md     → Hermes Orchestrator
├── 📁 models/
│   ├── formula_bmad.md     → BMAD Method Reference
│   ├── formula_model.md    → Tri-Model Architecture
│   └── roi_predictor.py    → Production Margin Model
├── 📁 infra/
│   ├── docker-compose.yml  → One-command deploy
│   ├── terraform/          → AWS/GCP/Azure modules
│   └── kubernetes/         → K8s manifests
├── 📁 data/
│   ├── business.json       → Template business model
│   ├── stakeholders.json   → Stakeholder registry
│   └── design.json         → UX design tokens
└── 📄 README.md            → 10-minute setup guide
```

**Deployment Targets:**
- [ ] Docker Desktop (local demo)
- [ ] AWS EC2 (small business)
- [ ] Kubernetes (enterprise)
- [ ] GitHub Codespaces (zero-install trial)

**Pricing Tiers:**
| Tier | Audience | Includes |
|------|----------|----------|
| **Free** | Solo developers | Agents + Templates |
| **Pro** | SMBs | + Cloud deploy + Support |
| **Enterprise** | Fortune 500 | + Custom fine-tuning + SLA |

---

## Community & Substack 📬

**Goal:** Build the BMAD practitioner community via Substack and drive engagement around the method.

**Link:** [BMAD Substack](https://bmad.substack.com) *(placeholder — create publication)*

### Content Calendar

| Week | Topic | Format |
|------|-------|--------|
| 1 | "Why Every Enterprise Needs BMAD" | Essay |
| 2 | Claude 101 Takeaways | Thread + Checklist |
| 3 | "CTO in a Box" Deep Dive | Tutorial |
| 4 | BMAD in a Box — Live Deploy | Video + Code |
| 5 | Community Spotlight: Reader Wins | Interview |
| 6 | BMAD V6 Feature Breakdown | Essay |

### Growth Tactics
- [ ] Cross-post to LinkedIn with #BMADMethod hashtag
- [ ] Embed kanban board in newsletter for transparency
- [ ] Offer free "BMAD Starter Kit" as email-gated lead magnet
- [ ] Host monthly virtual BMAD Office Hours
- [ ] Invite 3 early readers to co-author a guest post

### Metrics to Track
| Metric | Target (90 days) |
|--------|------------------|
| Subscribers | 500 |
| Open Rate | >45% |
| Click Rate | >8% |
| Referrals | 50 |
| Paid Conversions | 10 |

---

## Backlog

- [ ] Record BMAD V6 walkthrough video
- [ ] Write "CTO in a Box" blog post
- [ ] Apply for Y Combinator with BMAD in a Box pitch
- [ ] Design BMAD certification exam

---

## Action Items — Added 2026-06-01

### 19. Every-Other-Day AI News Email
**Priority:** High
**Status:** 🔲 Not Started

**Objective:** Send curated news and topics about rapid AI increases in skill expectations to Chidi and Rifat every other day. Keeps both informed and aligned on the core problem.

**Recipients:** chidi@paperclipco.com, rifat@paperclipco.com
**Checklist:**
- [ ] Define source list (newsletters, LinkedIn, X, Substack, arXiv)
- [ ] Draft email template tied to core problem narrative
- [ ] Set up every-other-day reminder / automation
- [ ] Send first edition

---

### 20. Long-Form Writing Workshop
**Priority:** Medium
**Status:** 🔲 Not Started

**Objective:** Run a hands-on workshop where Chidi and Rifat co-write long-form content together — build shared voice and workflow.

**Checklist:**
- [ ] Pick first topic (core problem / AI skills gap)
- [ ] Schedule 2-hour writing session
- [ ] Use collaborative doc (Notion or Google Docs)
- [ ] Publish output to Substack

---

### 21. Hermes Agent Workshop
**Priority:** High
**Status:** 🔲 Not Started

**Objective:** Workshop actual agent use with Hermes to deliver the full BMAD workflow end-to-end — from brief to deliverable.

**Checklist:**
- [ ] Prepare BMAD workflow demo script
- [ ] Set up Hermes with a real use case
- [ ] Run live walkthrough with Chidi and Rifat
- [ ] Document learnings and gaps

---

### 22. Define New Roles
**Priority:** High
**Status:** 🔲 Not Started

**Objective:** Define and document four new BMAD operational roles: Implementer, Planner, Designer, Operator.

**Roles:**
| Role | Responsibility |
|------|---------------|
| Implementer | Executes agent tasks and technical builds |
| Planner | Owns roadmap, sprints, and prioritization |
| Designer | UX, content design, and narrative |
| Operator | Infrastructure, monitoring, and automation |

**Checklist:**
- [ ] Draft role definitions in DSL
- [ ] Map roles to existing team members
- [ ] Update agent prompts to reflect role context
- [ ] Add to BMAD in a Box onboarding

---

### 23. Automated Content Release Pipeline
**Priority:** Medium
**Status:** 🔲 Not Started

**Objective:** Set up an automated release pipeline for the Content Engineer role — from draft to published.

**Checklist:**
- [ ] Define content release stages (draft → review → publish)
- [ ] Automate Substack post scheduling
- [ ] Set up GitHub Actions or n8n workflow
- [ ] Test with a real piece of content

---

### 24. Enterprise Transformation Research
**Priority:** High
**Status:** 🔲 Not Started

**Objective:** Research the problem of enterprises transforming under rapid AI adoption — surface key blockers, risks, and opportunities. Send findings to Chidi and Rifat.

**Recipients:** chidi@paperclipco.com, rifat@paperclipco.com
**Checklist:**
- [ ] Identify 5–10 case studies of enterprise AI transformation
- [ ] Synthesize the core pattern / failure modes
- [ ] Write 1-page research brief
- [ ] Email to Chidi and Rifat with discussion questions

---

### 25. Weekly Monday 9am Team Meetings
**Priority:** Medium
**Status:** 🔲 Not Started

**Objective:** Establish a recurring Monday 9am BMAD team sync.

**Checklist:**
- [ ] Create recurring Google Calendar invite
- [ ] Draft standing agenda template
- [ ] Define owner for weekly agenda prep
- [ ] Hold first meeting

---

### 26. Passionate Long-Form Content Focus
**Priority:** Medium
**Status:** 🔲 Not Started

**Objective:** Align content strategy around the core problem — AI skills gap in enterprises — with passionate, deep long-form writing rather than shallow posts.

**Checklist:**
- [ ] Agree on 3 flagship topics to write deeply about
- [ ] Set a minimum word count / depth standard
- [ ] Create editorial calendar
- [ ] Publish first deep-dive piece

---

### 27. Claude Certification
**Priority:** High
**Status:** 🔲 Not Started

**Link:** [Claude 101 — Anthropic Skilljar](https://anthropic.skilljar.com/claude-101)

**Objective:** Both Chidi and Rifat complete Claude certification to deepen expertise and credibility.

**Checklist:**
- [ ] Rifat: enroll and complete certification
- [ ] Chidi: enroll and complete certification
- [ ] Share certificates and key learnings
- [ ] Incorporate learnings into BMAD onboarding

---

### 28. AI Skills Gap Onboarding Program
**Priority:** High
**Status:** 🔲 Not Started

**Objective:** Help others get onboarded to fix the AI skills gap — design and run an accessible onboarding program.

**Checklist:**
- [ ] Define target audience (SMBs, enterprise teams, individuals)
- [ ] Create 4-module curriculum outline
- [ ] Build starter kit (templates, prompts, reading list)
- [ ] Run first cohort of 5–10 participants
- [ ] Collect feedback and iterate

---

> *"A todo without a deadline is a wish. These have deadlines."* 📎⏰
