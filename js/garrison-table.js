/**
 * Garrison Database Table Module
 * Handles cascading dropdowns (Eyalet > Sancak > Garrison),
 * view switching (Raw / Categorized), and data display.
 */

class GarrisonTable {
    constructor() {
        this.currentView = 'raw'; // 'raw' or 'categorized'
        this.currentData = null;
        this.filteredData = null;
        this.currentGarrisonKey = null;
        this.currentGarrisonName = null;

        // DOM elements
        this.eyaletSelect = null;
        this.sancakSelect = null;
        this.garrisonSelect = null;
        this.sancakGroup = null;
        this.searchInput = null;
        this.tableContainer = null;
        this.loadingIndicator = null;
        this.resultsCount = null;
        this.errorMessage = null;
        this.downloadButton = null;
        this.viewToggleRaw = null;
        this.viewToggleCat = null;
        this.infoBadge = null;

        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Get DOM elements
        this.eyaletSelect = document.getElementById('eyalet-select');
        this.sancakSelect = document.getElementById('sancak-select');
        this.garrisonSelect = document.getElementById('garrison-select');
        this.sancakGroup = document.getElementById('sancak-group');
        this.searchInput = document.getElementById('garrison-search');
        this.tableContainer = document.getElementById('garrison-table-container');
        this.loadingIndicator = document.getElementById('garrison-loading');
        this.resultsCount = document.getElementById('garrison-results-count');
        this.errorMessage = document.getElementById('garrison-error');
        this.downloadButton = document.getElementById('download-excel');
        this.viewToggleRaw = document.getElementById('btn-view-raw');
        this.viewToggleCat = document.getElementById('btn-view-categorized');
        this.infoBadge = document.getElementById('db-info-text');

        if (!this.eyaletSelect || !this.garrisonSelect || !this.tableContainer) {
            console.error('Required DOM elements not found for database page');
            return;
        }

        // View toggle
        if (this.viewToggleRaw) {
            this.viewToggleRaw.addEventListener('click', () => this.switchView('raw'));
        }
        if (this.viewToggleCat) {
            this.viewToggleCat.addEventListener('click', () => this.switchView('categorized'));
        }

        // Cascading dropdown events
        this.eyaletSelect.addEventListener('change', () => this.onEyaletChange());
        if (this.sancakSelect) {
            this.sancakSelect.addEventListener('change', () => this.onSancakChange());
        }
        this.garrisonSelect.addEventListener('change', () => this.onGarrisonChange());

        // Search
        this.setupSearch();

        // Download
        this.setupDownloadButton();

        // Language change listener
        document.addEventListener('languageChanged', () => {
            this.updateSearchPlaceholder();
            this.updateDownloadButtonText();
            this.updateInfoBadge();
        });

        // Initialize the view FIRST (populate dropdowns before URL handling)
        this.populateEyalets();
        this.updateInfoBadge();
        this.updateSearchPlaceholder();

        // THEN check URL parameters (so dropdowns are populated for auto-select)
        this.handleUrlParameters();
    }

    // =========================================================================
    // View Switching
    // =========================================================================

    switchView(view) {
        if (this.currentView === view) return;
        this.currentView = view;

        // Update toggle buttons
        if (this.viewToggleRaw) {
            this.viewToggleRaw.classList.toggle('active', view === 'raw');
        }
        if (this.viewToggleCat) {
            this.viewToggleCat.classList.toggle('active', view === 'categorized');
        }

        // Show/hide sancak dropdown
        if (this.sancakGroup) {
            this.sancakGroup.style.display = (view === 'raw') ? '' : 'none';
        }

        // Reset selections
        this.clearTable();
        this.populateEyalets();
        this.updateInfoBadge();
    }

    getMetadata() {
        if (this.currentView === 'raw') {
            return (typeof GARRISON_METADATA_RAW !== 'undefined') ? GARRISON_METADATA_RAW : null;
        }
        return (typeof GARRISON_METADATA_CATEGORIZED !== 'undefined') ? GARRISON_METADATA_CATEGORIZED : null;
    }

    getDataStore() {
        if (this.currentView === 'raw') {
            return (typeof GARRISON_DATA_RAW !== 'undefined') ? GARRISON_DATA_RAW : {};
        }
        return (typeof GARRISON_DATA_CATEGORIZED !== 'undefined') ? GARRISON_DATA_CATEGORIZED : {};
    }

    // =========================================================================
    // Cascading Dropdowns
    // =========================================================================

    populateEyalets() {
        const meta = this.getMetadata();
        if (!meta || !meta.eyalets) return;

        const lang = localStorage.getItem('siteLanguage') || 'en';
        const placeholder = lang === 'tr' ? '-- Eyalet Seçin --' : '-- Select Province --';

        this.eyaletSelect.innerHTML = `<option value="">${placeholder}</option>`;
        meta.eyalets.forEach(eyalet => {
            const opt = document.createElement('option');
            opt.value = eyalet.name;
            opt.textContent = eyalet.name;
            this.eyaletSelect.appendChild(opt);
        });

        // Reset downstream
        this.resetSancakSelect();
        this.resetGarrisonSelect();
    }

    onEyaletChange() {
        const eyaletName = this.eyaletSelect.value;
        this.clearTable();

        if (!eyaletName) {
            this.resetSancakSelect();
            this.resetGarrisonSelect();
            return;
        }

        if (this.currentView === 'raw') {
            this.populateSancaks(eyaletName);
        } else {
            // Categorized: skip sancak, go straight to garrisons
            this.resetSancakSelect();
            this.populateGarrisons_Categorized(eyaletName);
        }
    }

    populateSancaks(eyaletName) {
        const meta = this.getMetadata();
        if (!meta) return;

        const eyalet = meta.eyalets.find(e => e.name === eyaletName);
        if (!eyalet) return;

        const lang = localStorage.getItem('siteLanguage') || 'en';
        const placeholder = lang === 'tr' ? '-- Sancak Seçin --' : '-- Select Sancak --';

        this.sancakSelect.innerHTML = `<option value="">${placeholder}</option>`;

        // If there are sancaks, list them
        if (eyalet.sancaks && eyalet.sancaks.length > 0) {
            eyalet.sancaks.forEach(sancak => {
                const opt = document.createElement('option');
                opt.value = sancak.name;
                opt.textContent = sancak.name;
                this.sancakSelect.appendChild(opt);
            });
        }

        // If there are top-level garrisons (without sancak), add a special option
        if (eyalet.garrisons && eyalet.garrisons.length > 0) {
            if (eyalet.sancaks && eyalet.sancaks.length > 0) {
                // Separator
                const sep = document.createElement('option');
                sep.disabled = true;
                sep.textContent = '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500';
                this.sancakSelect.appendChild(sep);
            }
            const opt = document.createElement('option');
            opt.value = '__top_level__';
            const topLabel = lang === 'tr' ? '(Dogrudan Garnizonlar)' : '(Direct Garrisons)';
            opt.textContent = topLabel;
            this.sancakSelect.appendChild(opt);
        }

        this.sancakSelect.disabled = false;
        this.resetGarrisonSelect();
    }

    onSancakChange() {
        const sancakName = this.sancakSelect.value;
        const eyaletName = this.eyaletSelect.value;
        this.clearTable();

        if (!sancakName || !eyaletName) {
            this.resetGarrisonSelect();
            return;
        }

        this.populateGarrisons_Raw(eyaletName, sancakName);
    }

    populateGarrisons_Raw(eyaletName, sancakName) {
        const meta = this.getMetadata();
        if (!meta) return;

        const eyalet = meta.eyalets.find(e => e.name === eyaletName);
        if (!eyalet) return;

        const lang = localStorage.getItem('siteLanguage') || 'en';
        const placeholder = lang === 'tr' ? '-- Garnizon Seçin --' : '-- Select Garrison --';

        this.garrisonSelect.innerHTML = `<option value="">${placeholder}</option>`;

        let garrisons = [];
        if (sancakName === '__top_level__') {
            garrisons = eyalet.garrisons || [];
        } else {
            const sancak = (eyalet.sancaks || []).find(s => s.name === sancakName);
            if (sancak) garrisons = sancak.garrisons || [];
        }

        garrisons.forEach(g => {
            const opt = document.createElement('option');
            opt.value = g.data_key;
            opt.textContent = g.garrison_name;
            opt.dataset.garrisonName = g.garrison_name;
            this.garrisonSelect.appendChild(opt);
        });

        this.garrisonSelect.disabled = garrisons.length === 0;
    }

    populateGarrisons_Categorized(eyaletName) {
        const meta = this.getMetadata();
        if (!meta) return;

        const eyalet = meta.eyalets.find(e => e.name === eyaletName);
        if (!eyalet) return;

        const lang = localStorage.getItem('siteLanguage') || 'en';
        const placeholder = lang === 'tr' ? '-- Garnizon Seçin --' : '-- Select Garrison --';

        this.garrisonSelect.innerHTML = `<option value="">${placeholder}</option>`;

        const garrisons = eyalet.garrisons || [];
        garrisons.forEach(g => {
            const opt = document.createElement('option');
            opt.value = g.data_key;
            opt.textContent = g.garrison_name;
            opt.dataset.garrisonName = g.garrison_name;
            this.garrisonSelect.appendChild(opt);
        });

        this.garrisonSelect.disabled = garrisons.length === 0;
    }

    onGarrisonChange() {
        const dataKey = this.garrisonSelect.value;
        if (!dataKey) {
            this.clearTable();
            return;
        }

        const selectedOption = this.garrisonSelect.options[this.garrisonSelect.selectedIndex];
        this.currentGarrisonName = selectedOption.dataset.garrisonName || dataKey;
        this.currentGarrisonKey = dataKey;

        this.loadGarrisonData(dataKey);
    }

    resetSancakSelect() {
        if (!this.sancakSelect) return;
        const lang = localStorage.getItem('siteLanguage') || 'en';
        const placeholder = lang === 'tr' ? '-- Sancak Seçin --' : '-- Select Sancak --';
        this.sancakSelect.innerHTML = `<option value="">${placeholder}</option>`;
        this.sancakSelect.disabled = true;
    }

    resetGarrisonSelect() {
        if (!this.garrisonSelect) return;
        const lang = localStorage.getItem('siteLanguage') || 'en';
        const placeholder = lang === 'tr' ? '-- Garnizon Seçin --' : '-- Select Garrison --';
        this.garrisonSelect.innerHTML = `<option value="">${placeholder}</option>`;
        this.garrisonSelect.disabled = true;
    }

    // =========================================================================
    // Data Loading
    // =========================================================================

    loadGarrisonData(dataKey) {
        this.showLoading(true);
        this.hideError();

        // Enable search + download
        if (this.searchInput) this.searchInput.disabled = false;
        if (this.downloadButton) this.downloadButton.disabled = false;

        const store = this.getDataStore();
        if (store && store[dataKey]) {
            const data = store[dataKey];
            this.currentData = data;
            this.filteredData = data.data;
            this.renderTable();
            this.updateResultsCount();
            this.showLoading(false);
        } else {
            this.showError('Garrison data not found: ' + dataKey);
            this.showLoading(false);
            if (this.searchInput) this.searchInput.disabled = true;
            if (this.downloadButton) this.downloadButton.disabled = true;
        }
    }

    // =========================================================================
    // Table Rendering
    // =========================================================================

    renderTable() {
        if (!this.currentData || !this.filteredData || !this.tableContainer) return;

        const data = this.filteredData;
        if (data.length === 0) {
            this.tableContainer.innerHTML = '<p class="no-data">No data available for this garrison.</p>';
            return;
        }

        // Use headers from the data
        const headers = this.currentData.headers || Object.keys(data[0]);

        // Build table
        let html = '<div class="table-wrapper"><table class="garrison-table"><thead><tr>';

        // Render headers
        headers.forEach(header => {
            let displayHeader = header;
            if (header === 'Column_0' || header === 'Branch' || header === 'Category') {
                const lang = localStorage.getItem('siteLanguage') || 'en';
                displayHeader = lang === 'tr' ? 'Kategori' : 'Category';
            }
            // Clean .0 from header names
            displayHeader = String(displayHeader).replace(/\.0$/, '');
            html += `<th>${this.escapeHtml(displayHeader)}</th>`;
        });

        html += '</tr></thead><tbody>';

        // Render data rows
        data.forEach(row => {
            html += '<tr>';
            headers.forEach(header => {
                const value = row[header];
                let displayValue = value !== null && value !== undefined ? String(value) : '';
                displayValue = displayValue.replace(/\.0$/, '');
                html += `<td>${this.escapeHtml(displayValue)}</td>`;
            });
            html += '</tr>';
        });

        html += '</tbody></table></div>';
        this.tableContainer.innerHTML = html;
    }

    // =========================================================================
    // Search
    // =========================================================================

    setupSearch() {
        if (!this.searchInput) return;

        let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.filterTable(e.target.value);
            }, 300);
        });
    }

    filterTable(searchTerm) {
        if (!this.currentData) return;

        const term = searchTerm.toLowerCase().trim();

        if (!term) {
            this.filteredData = this.currentData.data;
        } else {
            this.filteredData = this.currentData.data.filter(row => {
                return Object.values(row).some(value => {
                    if (value === null || value === undefined) return false;
                    return String(value).toLowerCase().includes(term);
                });
            });
        }

        this.renderTable();
        this.updateResultsCount();
    }

    updateSearchPlaceholder() {
        if (!this.searchInput) return;
        const lang = localStorage.getItem('siteLanguage') || 'en';
        this.searchInput.placeholder = lang === 'tr' ? 'Tabloda ara...' : 'Search in table...';
    }

    // =========================================================================
    // Excel Export
    // =========================================================================

    setupDownloadButton() {
        if (!this.downloadButton) return;
        this.downloadButton.addEventListener('click', () => this.downloadExcel());
    }

    updateDownloadButtonText() {
        if (!this.downloadButton) return;
        const lang = localStorage.getItem('siteLanguage') || 'en';
        const text = lang === 'tr' ? "Excel'e Aktar" : 'Export to Excel';
        this.downloadButton.innerHTML = '<i class="fas fa-file-excel"></i> ' + text;
    }

    downloadExcel() {
        if (!this.currentData || !this.filteredData || !this.currentGarrisonName) {
            alert('Please select a garrison first');
            return;
        }

        if (typeof XLSX === 'undefined') {
            alert('Excel export library not loaded. Please refresh the page.');
            return;
        }

        const headers = this.currentData.headers || Object.keys(this.filteredData[0]);
        const lang = localStorage.getItem('siteLanguage') || 'en';

        // Header row
        const displayHeaders = headers.map(h => {
            if (h === 'Column_0' || h === 'Branch' || h === 'Category') {
                return lang === 'tr' ? 'Kategori' : 'Category';
            }
            return String(h).replace(/\.0$/, '');
        });

        const excelData = [displayHeaders];

        this.filteredData.forEach(row => {
            const rowData = headers.map(header => {
                const value = row[header];
                let displayValue = value !== null && value !== undefined ? String(value) : '';
                displayValue = displayValue.replace(/\.0$/, '');
                return displayValue;
            });
            excelData.push(rowData);
        });

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(excelData);

        // Auto-size columns
        const colWidths = [];
        excelData.forEach(row => {
            row.forEach((cell, i) => {
                const cellLength = String(cell).length;
                if (!colWidths[i] || colWidths[i] < cellLength) {
                    colWidths[i] = cellLength;
                }
            });
        });
        ws['!cols'] = colWidths.map(w => ({ wch: Math.min(w + 2, 50) }));

        XLSX.utils.book_append_sheet(wb, ws, this.currentGarrisonName.substring(0, 31));

        const viewLabel = this.currentView === 'raw' ? 'detailed' : 'categorized';
        const filename = `${this.currentGarrisonName}_${viewLabel}_${new Date().toISOString().slice(0, 10)}.xlsx`;
        XLSX.writeFile(wb, filename);
    }

    // =========================================================================
    // Info Badge
    // =========================================================================

    updateInfoBadge() {
        if (!this.infoBadge) return;
        const meta = this.getMetadata();
        if (!meta) {
            this.infoBadge.textContent = '';
            return;
        }

        const lang = localStorage.getItem('siteLanguage') || 'en';
        const viewLabel = this.currentView === 'raw'
            ? (lang === 'tr' ? 'Detayli gorunum' : 'Detailed view')
            : (lang === 'tr' ? 'Kategorize gorunum' : 'Categorized view');

        const garrisonCount = meta.total_garrisons || 0;
        const rowCount = meta.total_rows || 0;

        if (lang === 'tr') {
            this.infoBadge.textContent = `${viewLabel}: ${garrisonCount} garnizon, ${rowCount} kayit`;
        } else {
            this.infoBadge.textContent = `${viewLabel}: ${garrisonCount} garrisons, ${rowCount} records`;
        }
    }

    // =========================================================================
    // URL Parameters
    // =========================================================================

    handleUrlParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const viewParam = urlParams.get('view');
        const garrisonParam = urlParams.get('garrison');

        if (viewParam === 'categorized') {
            this.switchView('categorized');
        } else if (viewParam === 'raw') {
            this.switchView('raw');
        }

        // Auto-select garrison if specified
        if (garrisonParam) {
            const decoded = decodeURIComponent(garrisonParam).trim().toLowerCase();
            // Try to find in categorized first, then raw
            this.autoSelectGarrison(decoded);
        }
    }

    // Normalize strings with NFC to handle composed vs decomposed Unicode
    normalizeNFC(str) {
        const s = str.toLowerCase().trim();
        return (typeof s.normalize === 'function') ? s.normalize('NFC') : s;
    }

    autoSelectGarrison(searchName) {
        // Apply NFC normalization to the search term
        const searchNFC = this.normalizeNFC(searchName);

        // Search both data stores for a matching garrison
        const catStore = (typeof GARRISON_DATA_CATEGORIZED !== 'undefined') ? GARRISON_DATA_CATEGORIZED : {};
        const rawStore = (typeof GARRISON_DATA_RAW !== 'undefined') ? GARRISON_DATA_RAW : {};

        // Try categorized first (simpler path), then raw
        const stores = [
            { store: catStore, view: 'categorized' },
            { store: rawStore, view: 'raw' }
        ];

        for (const { store, view } of stores) {
            for (const [key, data] of Object.entries(store)) {
                const name = this.normalizeNFC(data.garrison_name || '');
                if (name === searchNFC || name.includes(searchNFC) || searchNFC.includes(name)) {
                    // Found a match - switch to appropriate view
                    if (this.currentView !== view) {
                        // Force view switch (bypass early-return by setting different value first)
                        this.currentView = (view === 'raw') ? 'categorized' : 'raw';
                        this.switchView(view);
                    }

                    // Ensure eyalets are populated for current view
                    this.populateEyalets();

                    // Set the eyalet
                    const eyaletName = data.eyalet;
                    if (eyaletName) {
                        this.eyaletSelect.value = eyaletName;
                        this.onEyaletChange();

                        // For raw view, set sancak if available
                        if (view === 'raw' && data.sancak) {
                            // Use setTimeout to let DOM update after onEyaletChange populates sancaks
                            setTimeout(() => {
                                this.sancakSelect.value = data.sancak;
                                this.onSancakChange();

                                // Then select the garrison after sancak populates garrisons
                                setTimeout(() => {
                                    this.garrisonSelect.value = key;
                                    this.onGarrisonChange();
                                }, 50);
                            }, 50);
                        } else {
                            // Categorized view or raw without sancak: garrison dropdown is already populated
                            setTimeout(() => {
                                this.garrisonSelect.value = key;
                                this.onGarrisonChange();
                            }, 50);
                        }
                    }
                    return;
                }
            }
        }
    }

    // =========================================================================
    // Utility
    // =========================================================================

    updateResultsCount() {
        if (!this.resultsCount) return;

        const total = this.currentData ? this.currentData.data.length : 0;
        const filtered = this.filteredData ? this.filteredData.length : 0;
        const lang = localStorage.getItem('siteLanguage') || 'en';

        if (filtered === total) {
            const rowWord = lang === 'tr' ? 'satir' : (total === 1 ? 'row' : 'rows');
            this.resultsCount.textContent = `${total} ${rowWord}`;
        } else {
            if (lang === 'tr') {
                this.resultsCount.textContent = `${total} satirdan ${filtered} tanesi gosteriliyor`;
            } else {
                this.resultsCount.textContent = `Showing ${filtered} of ${total} rows`;
            }
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showLoading(show) {
        if (this.loadingIndicator) {
            this.loadingIndicator.style.display = show ? 'block' : 'none';
        }
        if (this.tableContainer && show) {
            this.tableContainer.innerHTML = '';
        }
    }

    showError(message) {
        if (this.errorMessage) {
            this.errorMessage.textContent = message;
            this.errorMessage.style.display = 'block';
        }
    }

    hideError() {
        if (this.errorMessage) {
            this.errorMessage.style.display = 'none';
        }
    }

    clearTable() {
        if (this.tableContainer) this.tableContainer.innerHTML = '';
        if (this.resultsCount) this.resultsCount.textContent = '';
        if (this.searchInput) {
            this.searchInput.value = '';
            this.searchInput.disabled = true;
        }
        if (this.downloadButton) this.downloadButton.disabled = true;
        this.currentData = null;
        this.filteredData = null;
        this.currentGarrisonKey = null;
        this.currentGarrisonName = null;
    }
}

// Initialize when script loads
const garrisonTable = new GarrisonTable();
