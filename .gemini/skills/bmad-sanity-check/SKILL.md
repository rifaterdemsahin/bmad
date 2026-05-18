---
name: bmad-sanity-check
description: Performs a comprehensive sanity check on a BMAD-based project to ensure alignment between the Business, Model, Architecture, and Design pillars. Use when you need to verify that new changes or files adhere to the established BMAD architecture and enterprise standards.
---

# BMAD Sanity Check

This skill ensures that the project remains consistent with the **BMAD (Business Model Architecture Design)** methodology.

## Sanity Check Workflow

1. **Scan Core Definitions**: Review `architecture.md`, `README.md`, and `GEMINI.md` to establish the current project state.
2. **Verify Pillars**:
   - **Business**: Check `data/business.json` and business-related agents (e.g., `analyst.md`). Ensure ROI models are correctly referenced.
   - **Model**: Check `data/model.json` and model-related agents. Verify "Auto Complete by Trained Models" alignment.
   - **Architecture**: Check `architecture.md`, `data/architecture.json`, and architectural agents (e.g., `architect.md`, `cto.md`).
   - **Design**: Check `data/design.json`, CSS files, and design agents.
3. **Cross-Reference Data**: Ensure that IDs and names in JSON data sources match their usage in `app.js` and other logic files.
4. **Agent Consistency**: Verify that agents in `.bmad-core/agents/` follow the persona-based definition and have clear responsibilities.
5. **Report & Fix**: Generate a summary of inconsistencies and provide surgical fixes to align the codebase.

## Key Files to Monitor

- `architecture.md`: The system blueprint.
- `index.html` & `app.js`: The primary implementation of the BMAD dashboard.
- `data/*.json`: Decentralized data sources.
- `.bmad-core/agents/*.md`: Persona-based agent definitions.
