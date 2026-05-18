// Shared navigation menu component for all BMAD pages
// Usage: <div id="shared-menu"></div><script src="src/menu.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('shared-menu');
    if (!menuContainer) return;

    menuContainer.innerHTML = `
    <nav class="top-menu">
        <div class="menu-header">
            <div class="menu-logo">📎 BMAD</div>
            <div class="menu-search-container">
                <input type="text" id="menu-search-input" placeholder="Search enterprise data...">
                <div id="menu-search-results" class="menu-results-dropdown"></div>
            </div>
            <button class="menu-toggle" aria-label="Toggle Navigation">
                <span class="hamburger"></span>
            </button>
        </div>
        <ul class="menu-items">
            <li><a href="index.html">📊 Dashboard</a></li>
            <li><a href="markdown-renderer.html?file=architecture.md">🏗️ Architecture</a></li>
            <li><a href="kanban.html">📋 Kanban</a></li>
            <li><a href="agents.html">🤖 Agents</a></li>
            <li><a href="markdown-renderer.html?file=dsl.md">📖 DSL</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-trigger">🤖 BMAD Agents ▾</a>
                <ul class="dropdown-content">
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/analyst.md">🧠 Mary (Analyst)</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/architect.md">🏗️ Rifat (Architect)</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/cto.md">👨‍💼 Chidi (CTO)</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/security.md">🔐 Sarah (Security)</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/bmad-orchestrator.md">⚡ Hermes (Orchestrator)</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/transformation.md">🔄 Leo (Transformation)</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/pipeline.md">🛠️ Alex (Pipeline)</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/dashboards.md">📊 Elena (Dashboards)</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/content.md">✍️ Maya (Content)</a></li>
                    <li><a href="markdown-renderer.html?file=.bmad-core/agents/coach.md">🎯 Sam (Coach)</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-trigger">📁 Data Sources ▾</a>
                <ul class="dropdown-content">
                    <li><a href="data/business.json">💼 Business</a></li>
                    <li><a href="data/model.json">📈 Models</a></li>
                    <li><a href="data/architecture.json">🏗️ Architecture</a></li>
                    <li><a href="data/design.json">🎨 Design</a></li>
                    <li><a href="data/stakeholders.json">👥 Stakeholders</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-trigger">📝 Docs ▾</a>
                <ul class="dropdown-content">
                    <li><a href="markdown-renderer.html?file=README.md">📘 README</a></li>
                    <li><a href="markdown-renderer.html?file=opencode.md">🚀 OpenCode</a></li>
                    <li><a href="markdown-renderer.html?file=claude.md">🎯 Claude</a></li>
                    <li><a href="markdown-renderer.html?file=GEMINI.md">✨ Gemini</a></li>
                    <li><a href="markdown-renderer.html?file=release.md">🚀 Release</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-trigger">📚 Resources ▾</a>
                <ul class="dropdown-content">
                    <li><a href="markdown-renderer.html?file=formula_bmad.md">🔥 Formula BMAD</a></li>
                    <li><a href="markdown-renderer.html?file=formula_model.md">🧠 Formula Model</a></li>
                    <li><a href="markdown-renderer.html?file=todos.md">✅ Todos</a></li>
                    <li><a href="markdown-renderer.html?file=formula_substack.md">📬 Formula Substack</a></li>
                    <li><a href="markdown-renderer.html?file=agentic-cto-substack-plan.md">🎯 Agentic CTO Plan</a></li>
                    <li><a href="markdown-renderer.html?file=chidi-setup.md">🚀 Chidi Setup Guide</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    `;

    // Mobile Menu Toggle
    const toggleBtn = menuContainer.querySelector('.menu-toggle');
    const menuItems = menuContainer.querySelector('.menu-items');
    
    toggleBtn.addEventListener('click', function() {
        menuItems.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    });

    // Handle Dropdowns on Mobile
    const dropdowns = menuContainer.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Global Search Logic
    const searchInput = document.getElementById('menu-search-input');
    const resultsContainer = document.getElementById('menu-search-results');
    let enterpriseData = [];

    const dataSources = [
        'data/business.json',
        'data/model.json',
        'data/architecture.json',
        'data/design.json',
        'data/agents.json',
        'data/stakeholders.json'
    ];

    // Load data for search
    Promise.all(dataSources.map(url => 
        fetch(url)
            .then(res => res.ok ? res.json() : [])
            .catch(() => [])
    )).then(dataArrays => {
        enterpriseData = dataArrays.flat();
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (!query) {
            resultsContainer.style.display = 'none';
            return;
        }

        const filtered = enterpriseData.filter(item => 
            (item.name && item.name.toLowerCase().includes(query)) || 
            (item.category && item.category.toLowerCase().includes(query)) ||
            (item.details && item.details.toLowerCase().includes(query))
        );

        displayResults(filtered);
    });

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        if (results.length === 0) {
            resultsContainer.style.display = 'none';
            return;
        }

        results.slice(0, 8).forEach(item => {
            const div = document.createElement('div');
            div.className = 'menu-result-item';
            div.innerHTML = `
                <div class="result-category">${item.category || 'Data'}</div>
                <div class="result-name">${item.name || 'Unnamed'}</div>
            `;
            div.onclick = () => {
                searchInput.value = item.name;
                resultsContainer.style.display = 'none';
                if (item.url) {
                    window.location.href = item.url;
                } else {
                    console.log(`Selected: ${item.name}`);
                }
            };
            resultsContainer.appendChild(div);
        });

        resultsContainer.style.display = 'block';
    }

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-search-container')) {
            resultsContainer.style.display = 'none';
        }
    });
});
