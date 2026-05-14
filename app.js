document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('autocomplete-input');
    const resultsContainer = document.getElementById('autocomplete-results');
    const agentConsole = document.getElementById('agent-console');
    const demonstrateBtn = document.getElementById('demonstrate-btn');

    let enterpriseData = [];

    // Load all data sources
    const dataSources = [
        'data/business.json',
        'data/model.json',
        'data/architecture.json',
        'data/design.json',
        'data/agents.json'
    ];

    Promise.all(dataSources.map(url => fetch(url).then(res => res.json())))
        .then(dataArrays => {
            enterpriseData = dataArrays.flat();
            logToConsole('Enterprise data sources indexed successfully.');
        })
        .catch(err => {
            console.error('Error loading data:', err);
            logToConsole('Error: Failed to index data sources.', 'error');
        });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (!query) {
            resultsContainer.style.display = 'none';
            return;
        }

        const filtered = enterpriseData.filter(item => 
            item.name.toLowerCase().includes(query) || 
            item.category.toLowerCase().includes(query) ||
            item.details.toLowerCase().includes(query)
        );

        displayResults(filtered);
    });

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        if (results.length === 0) {
            resultsContainer.style.display = 'none';
            return;
        }

        results.slice(0, 5).forEach(item => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `
                <div class="result-category">${item.category}</div>
                <div class="result-name">${item.name}</div>
            `;
            div.onclick = () => {
                searchInput.value = item.name;
                resultsContainer.style.display = 'none';
                logToConsole(`Selected: ${item.name} (${item.category})`);
            };
            resultsContainer.appendChild(div);
        });

        resultsContainer.style.display = 'block';
    }

    function logToConsole(message, type = 'info') {
        const p = document.createElement('p');
        p.className = 'system-msg';
        p.textContent = `> [${new Date().toLocaleTimeString()}] ${message}`;
        if (type === 'error') p.style.color = '#ff0000';
        agentConsole.appendChild(p);
        agentConsole.scrollTop = agentConsole.scrollHeight;
    }

    demonstrateBtn.addEventListener('click', () => {
        logToConsole('Hermes Agent: Starting background sync...');
        demonstrateBtn.disabled = true;
        
        const steps = [
            'Analyzing wire supply chain patterns...',
            'Evaluating market sentiment for high-tensile clips...',
            'Optimizing bending logic for ROI...',
            'Fetching strategic insights from Hermes Agent...'
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < steps.length) {
                logToConsole(`Hermes Agent: ${steps[i]}`);
                i++;
            } else {
                clearInterval(interval);
                fetch('data/hermes_insight.json')
                    .then(res => res.json())
                    .then(insight => {
                        logToConsole(`STRATEGY RECEIVED: ${insight.strategy}`);
                        logToConsole('System: All enterprise autocompletes refreshed.');
                        demonstrateBtn.disabled = false;
                    })
                    .catch(() => {
                        logToConsole('Error: Failed to fetch Hermes insights.', 'error');
                        demonstrateBtn.disabled = false;
                    });
            }
        }, 1000);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            resultsContainer.style.display = 'none';
        }
    });
});
