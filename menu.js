// Shared navigation menu component for all BMAD pages
// Usage: <div id="shared-menu"></div><script src="menu.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('shared-menu');
    if (!menuContainer) return;

    menuContainer.innerHTML = `
    <nav class="top-menu">
        <ul>
            <li><a href="index.html">📊 Dashboard</a></li>
            <li><a href="markdown-renderer.html?file=architecture.md">🏗️ Architecture</a></li>
            <li><a href="kanban.html">📋 Kanban</a></li>
            <li class="dropdown">
                <a href="#">🤖 BMAD Agents ▾</a>
                <ul class="dropdown-content">
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/analyst.md">🧠 Mary (Analyst)</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/architect.md">🏗️ Architect</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/bmad-orchestrator.md">⚡ Orchestrator</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#">📁 Data Sources ▾</a>
                <ul class="dropdown-content">
                    <li><a href="data/business.json">💼 Business</a></li>
                    <li><a href="data/model.json">📈 Models</a></li>
                    <li><a href="data/architecture.json">🏗️ Architecture</a></li>
                    <li><a href="data/design.json">🎨 Design</a></li>
                    <li><a href="data/stakeholders.json">👥 Stakeholders</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#">📝 Docs ▾</a>
                <ul class="dropdown-content">
                    <li><a href="markdown-renderer.html?file=README.md">📘 README</a></li>
                    <li><a href="markdown-renderer.html?file=opencode.md">🚀 OpenCode</a></li>
                    <li><a href="markdown-renderer.html?file=claude.md">🎯 Claude</a></li>
                    <li><a href="markdown-renderer.html?file=gemini.md">✨ Gemini</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#">📚 Resources ▾</a>
                <ul class="dropdown-content">
                    <li><a href="markdown-renderer.html?file=formula_bmad.md">🔥 Formula BMAD</a></li>
                    <li><a href="markdown-renderer.html?file=formula_model.md">🧠 Formula Model</a></li>
                    <li><a href="markdown-renderer.html?file=todos.md">✅ Todos</a></li>
                    <li><a href="markdown-renderer.html?file=formula_substack.md">📬 Formula Substack</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    `;
});
