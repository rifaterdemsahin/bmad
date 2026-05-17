# Formula Model — Tri-Model Architecture 🧠

## Overview

The Paperclip Co. BMAD stack deploys **three specialized models** that collaborate through the Hermes Orchestrator. Each model handles a distinct layer of enterprise AI transformation, from high-level strategy to low-level technical execution.

---

## The Three Models

```
┌─────────────────────────────────────────────────────────────────┐
│                      ENTERPRISE USER                            │
│                         (Human-in-the-Loop)                     │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│  🎯 TIER 1: CLAUDE MAIN MODEL (Enterprise Orchestrator)        │
│     Role: Strategic decision-making, compliance, governance    │
│     Location: Cloud (Anthropic API)                             │
│     Context Window: 200K tokens                               │
│     Strength: Long-form reasoning, legal review, PR approval   │
└──────────────────────┬──────────────────────────────────────────┘
                       │  API / gRPC
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│  🏢 TIER 2: COMPANY LLM (Business Domain Model)                │
│     Role: Industry-specific logic, stakeholder mapping, ROI    │
│     Location: Cloud (Azure OpenAI / AWS Bedrock)              │
│     Fine-tuned on: Paperclip Co. enterprise data               │
│     Strength: Domain expertise, predictive modeling            │
└──────────────────────┬──────────────────────────────────────────┘
                       │  Secure VPN / On-premise Bridge
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│  ⚙️ TIER 3: LOCAL MODEL (Technical Execution Engine)            │
│     Role: Code generation, testing, deployment, infra-as-code  │
│     Location: On-premise / Edge (Ollama / vLLM)                │
│     Model: Llama 3.1 / Mistral / CodeLlama                      │
│     Strength: Zero-latency, air-gapped security, cost control    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Orchestration Flow (Hermes)

### Step 1: Intent Classification
```
User Request → Claude Main Model
     ↓
[Classify] → Strategic?  → Route to Claude
         → Business?    → Route to Company LLM
         → Technical?   → Route to Local Model
```

### Step 2: Collaborative Execution

| Scenario | Claude | Company LLM | Local Model |
|----------|--------|-------------|-------------|
| **New Product Brief** | Drafts PR, reviews compliance | Generates market & ROI model | Prototypes API schema |
| **Architecture Change** | Approves change board | Assesses business impact | Generates Terraform/CDK |
| **Incident Response** | Decides rollback vs. fix | Calculates revenue at risk | Executes hotfix pipeline |
| **Stakeholder Report** | Finalizes messaging | Pulls live metrics | Renders dashboard PNGs |

### Step 3: Consensus & Merge

```
Tier 1 (Claude)     Tier 2 (Company)     Tier 3 (Local)
     │                   │                    │
     └───────────────────┴────────────────────┘
                         │
                    [Hermes Arbiter]
                         │
                    ┌────┴────┐
                    │  Merge  │
                    │  Output │
                    └────┬────┘
                         │
                    ┌────┴────┐
                    │  Human  │
                    │  Review │
                    └────┬────┘
                         │
                    [Commit / PR]
```

---

## Data Flow Architecture

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   Stakeholder │    │   Business   │    │  Compliance  │
│     Data      │    │    Metrics   │    │    Ledger    │
└──────┬───────┘    └──────┬───────┘    └──────┬───────┘
       │                   │                    │
       └───────────────────┼────────────────────┘
                           │
                    ┌──────┴──────┐
                    │   Hermes    │
                    │   Router    │
                    └──────┬──────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
         ▼                 ▼                 ▼
   ┌──────────┐      ┌──────────┐      ┌──────────┐
   │  Claude  │      │ Company  │      │  Local   │
   │  (Cloud) │      │   LLM    │      │  (Edge)  │
   └────┬─────┘      └────┬─────┘      └────┬─────┘
        │                 │                 │
        │  Results        │  Predictions    │  Code
        │  + Rationale    │  + Risks        │  + Tests
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                   ┌──────┴──────┐
                   │  Unified    │
                   │  Artifact   │
                   │  (PR / Doc) │
                   └──────┬──────┘
                          │
                   ┌──────┴──────┐
                   │   GitHub    │
                   │    PR #     │
                   └─────────────┘
```

---

## Security & Compliance

| Tier | Data Sensitivity | Network | Retention |
|------|------------------|---------|-----------|
| Claude Main | Public + Abstracted | TLS 1.3 | 30 days |
| Company LLM | Confidential (anonymized) | VPC Private | 90 days |
| Local Model | Strictly Internal | Air-gapped | Eternal |

---

## Scaling Strategy

1. **Claude Main:** Scale horizontally via API rate-limits; use caching for repeat queries
2. **Company LLM:** Deploy multi-region endpoints; use fine-tuning batches weekly
3. **Local Model:** Shard by team; use quantized models (4-bit) for cost efficiency

---

> *"No single model is enterprise-grade. The magic is in the handshake."* — Hermes Orchestrator 📎⚡
