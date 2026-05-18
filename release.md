# 🚀 Release Management

This document tracks the evolution of the BMAD Showcase project.

## [v0.7.0] - 2026-05-18
### Added
- **LLM Providers Documentation**: Created a dedicated `docs/providers/` directory focusing on real-time AI providers (Claude, Gemini, OpenAI, OpenCode).
- **Categorized Resources**: Reorganized all resource files into logical sub-folders: `resources/formulas/`, `resources/guides/`, and `resources/tasks/`.
- **Integrated Navigation**: Merged and refined the "Docs" and "Resources" menus into a more structured "LLM Providers" and "Resources" (with category headers) system.

### Changed
- **Folder Structure**: Significant migration of root-level Markdown files into a nested directory structure for better scalability.
- **UI/UX**: Added `dropdown-header` styling to improve the readability of categorized menus.

## [v0.6.0] - 2026-05-18
### Added
- **Humanized Agents**: Assigned unique human names to the entire BMAD Core Agent team (Analyst/Mary, CTO/Chidi, Architect/Rifat, etc.).
- **Enhanced Navigation**: Updated the shared menu dropdown to display human names next to agent roles for better user connection.

### Changed
- **Architecture Documentation**: Updated the agent team table in `architecture.md` with the new human name mappings.

## [v0.5.0] - 2026-05-18
### Added
- **Infrastructure**: Documented support for **Fly.io** and Local environments in `architecture.md`.
- **BMAD Core Agent Team**: Detailed agent swarm personas with emojis and color-coding.
- **Enterprise Skill Menu**: Dynamic menu in `index.html` for executing specialized agent skills.
- **Sanity Check Skill**: New `bmad-sanity-check` skill for automated project auditing.
- `data/skills.json` to power the skill menu.

### Changed
- **Architecture Diagram**: Enhanced Mermaid diagram with infrastructure subgraphs and color styles.
- **System Documentation**: Comprehensive updates to `architecture.md` to reflect real-world agentic workflows.

## [v0.4.0] - 2026-05-18
### Added
- `release.md` for version tracking.
- `src/` directory for logic (`app.js`, `menu.js`).
- `styles/` directory for CSS (`style.css`).
- Integrated publish number and date in site footer.
- GitHub link in footer.

### Changed
- Reorganized project structure into logical groups.
- Updated all internal links to reflect the new structure.
- Refactored `Dictionary` to `DSL` (Domain Specific Language).
- Enhanced Kanban with `Backlog` column.

## [v0.3.0] - 2026-05-18
### Added
- Responsive top menu with integrated global search.
- SEO improvements: `robots.txt`, `sitemap.xml`, and `favicon.svg`.
- Navigation URLs in `agents.json`.

## [v0.2.0] - 2026-05-17
### Added
- Chidi setup guides and Hermes installation steps.
- Security Agent definition.
- Stage B Substack publication guide.
- Agentic CTO Substack plan.

## [v0.1.0] - 2026-05-17
### Added
- Initial BMAD Showcase implementation.
- Hermes Agent autocomplete.
- ROI Model demonstration.
- Architecture diagram and Markdown renderer.
- Kanban board and shared menu component.
- Stakeholder documentation.

---
*Last Updated: 2026-05-18*
