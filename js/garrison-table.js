/**
 * Garrison Database Table Module
 * Handles loading and displaying garrison data in a searchable table
 */

class GarrisonTable {
    constructor() {
        this.metadata = null;
        this.currentData = null;
        this.filteredData = null;
        this.currentGarrison = null;
        
        // DOM elements
        this.garrisonSelect = null;
        this.searchInput = null;
        this.tableContainer = null;
        this.loadingIndicator = null;
        this.resultsCount = null;
        this.errorMessage = null;
        this.downloadButton = null;
        
        this.init();
    }
    
    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        // Get DOM elements
        this.garrisonSelect = document.getElementById('garrison-select');
        this.searchInput = document.getElementById('garrison-search');
        this.tableContainer = document.getElementById('garrison-table-container');
        this.loadingIndicator = document.getElementById('garrison-loading');
        this.resultsCount = document.getElementById('garrison-results-count');
        this.errorMessage = document.getElementById('garrison-error');
        this.downloadButton = document.getElementById('download-excel');
        
        if (!this.garrisonSelect || !this.tableContainer) {
            console.error('Required DOM elements not found');
            return;
        }
        
        // Load metadata and setup UI
        this.loadMetadata().then(() => {
            this.setupGarrisonSelector();
            this.setupSearch();
            this.setupDownloadButton();
            this.updateSearchPlaceholder();
            // Check for URL parameter and auto-select garrison
            // Use setTimeout to ensure selector is fully populated
            setTimeout(() => {
                this.handleUrlParameter();
            }, 100);
        }).catch(err => {
            this.showError('Failed to load garrison metadata: ' + err.message);
        });
        
        // Listen for language changes to update placeholder and button text
        document.addEventListener('languageChanged', () => {
            this.updateSearchPlaceholder();
            this.updateDownloadButtonText();
        });
    }
    
    updateSearchPlaceholder() {
        if (!this.searchInput) return;
        // Get current language
        const currentLang = localStorage.getItem('siteLanguage') || 'tr';
        const placeholder = currentLang === 'tr' ? 'Tabloda ara...' : 'Search in table...';
        this.searchInput.placeholder = placeholder;
        
        // Update select placeholder
        if (this.garrisonSelect && this.garrisonSelect.options.length > 0) {
            const firstOption = this.garrisonSelect.options[0];
            if (firstOption && firstOption.value === '') {
                firstOption.textContent = currentLang === 'tr' ? '-- Garnizon Seçin --' : '-- Select a Garrison --';
            }
        }
    }
    
    async loadMetadata() {
        try {
            // Use embedded data if available (works without server)
            if (typeof GARRISON_METADATA !== 'undefined') {
                this.metadata = GARRISON_METADATA;
                return;
            }
            
            // Fallback to fetch (for server-based setups)
            const response = await fetch('data/garrisons-metadata.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.metadata = await response.json();
        } catch (error) {
            console.error('Error loading metadata:', error);
            throw error;
        }
    }
    
    setupGarrisonSelector() {
        if (!this.metadata || !this.garrisonSelect) return;
        
        // Clear existing options
        const currentLang = localStorage.getItem('siteLanguage') || 'tr';
        const placeholderText = currentLang === 'tr' ? '-- Garnizon Seçin --' : '-- Select a Garrison --';
        this.garrisonSelect.innerHTML = `<option value="">${placeholderText}</option>`;
        
        // Group by eyalet
        const eyalets = {};
        this.metadata.garrisons.forEach(garrison => {
            if (!eyalets[garrison.eyalet]) {
                eyalets[garrison.eyalet] = [];
            }
            eyalets[garrison.eyalet].push(garrison);
        });
        
        // Create optgroups for each eyalet
        Object.keys(eyalets).sort().forEach(eyalet => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = eyalet;
            
            eyalets[eyalet].forEach(garrison => {
                const option = document.createElement('option');
                option.value = garrison.file_path;
                option.textContent = garrison.garrison_name;
                option.dataset.garrisonName = garrison.garrison_name;
                optgroup.appendChild(option);
            });
            
            this.garrisonSelect.appendChild(optgroup);
        });
        
        // Handle selection change
        this.garrisonSelect.addEventListener('change', (e) => {
            const filePath = e.target.value;
            if (filePath) {
                const selectedOption = e.target.options[e.target.selectedIndex];
                this.currentGarrison = selectedOption.dataset.garrisonName;
                this.loadGarrisonData(filePath);
            } else {
                this.clearTable();
            }
        });
    }
    
    setupSearch() {
        if (!this.searchInput) return;
        
        // Debounce search input
        let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.filterTable(e.target.value);
            }, 300);
        });
    }
    
    setupDownloadButton() {
        if (!this.downloadButton) return;
        
        this.downloadButton.addEventListener('click', () => {
            this.downloadExcel();
        });
    }
    
    updateDownloadButtonText() {
        if (!this.downloadButton) return;
        
        const currentLang = localStorage.getItem('siteLanguage') || 'tr';
        const buttonText = currentLang === 'tr' ? 'Excel\'e Aktar' : 'Export to Excel';
        
        // Update button text while preserving the icon
        this.downloadButton.innerHTML = '<i class="fas fa-file-excel"></i> ' + buttonText;
    }
    
    downloadExcel() {
        if (!this.currentData || !this.filteredData || !this.currentGarrison) {
            alert('Please select a garrison first');
            return;
        }
        
        // Check if SheetJS library is loaded
        if (typeof XLSX === 'undefined') {
            alert('Excel export library not loaded. Please refresh the page.');
            return;
        }
        
        const currentLang = localStorage.getItem('siteLanguage') || 'tr';
        
        // Prepare data for Excel
        // Get headers
        let headers = [];
        if (this.currentData.headers && this.currentData.headers.length > 0) {
            headers = this.currentData.headers.map(header => {
                if (header === 'Column_0') {
                    return currentLang === 'tr' ? 'Kategori' : 'Category';
                }
                return header;
            });
        } else {
            // Fallback: get headers from first row
            if (this.filteredData.length > 0) {
                headers = Object.keys(this.filteredData[0]);
            }
        }
        
        // Convert data to array of arrays
        const excelData = [headers];
        
        this.filteredData.forEach(row => {
            const rowData = [];
            if (this.currentData.headers && this.currentData.headers.length > 0) {
                // Use defined headers order
                this.currentData.headers.forEach(header => {
                    const value = row[header];
                    // Convert to string and clean up
                    let displayValue = value !== null && value !== undefined ? String(value) : '';
                    displayValue = displayValue.replace(/\.0$/, '');
                    rowData.push(displayValue);
                });
            } else {
                // Use row keys
                Object.values(row).forEach(value => {
                    let displayValue = value !== null && value !== undefined ? String(value) : '';
                    displayValue = displayValue.replace(/\.0$/, '');
                    rowData.push(displayValue);
                });
            }
            excelData.push(rowData);
        });
        
        // Create workbook and worksheet
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
        
        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, this.currentGarrison);
        
        // Generate filename
        const filename = `${this.currentGarrison}_${new Date().toISOString().slice(0, 10)}.xlsx`;
        
        // Download file
        XLSX.writeFile(wb, filename);
    }
    
    handleUrlParameter() {
        // Get URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const garrisonParam = urlParams.get('garrison');
        
        if (!garrisonParam || !this.metadata || !this.garrisonSelect) {
            return;
        }
        
        // Decode the parameter
        const decodedParam = decodeURIComponent(garrisonParam).trim();
        console.log('Looking for garrison:', decodedParam);
        
        // Helper function to normalize names for comparison
        const normalize = (str) => {
            return str.toLowerCase()
                .replace(/\s+/g, ' ')
                .replace(/[-_]/g, ' ')
                .trim();
        };
        
        const normalizedParam = normalize(decodedParam);
        
        // Find matching garrison in metadata (case-insensitive, try exact match first)
        let matchingGarrison = this.metadata.garrisons.find(garrison => {
            const garrisonName = (garrison.garrison_name || '').trim();
            return normalize(garrisonName) === normalizedParam;
        });
        
        // If no exact match, try partial matches (but only if similar length to avoid false positives)
        if (!matchingGarrison) {
            matchingGarrison = this.metadata.garrisons.find(garrison => {
                const garrisonName = (garrison.garrison_name || '').trim();
                const normalizedGarrison = normalize(garrisonName);
                
                // Calculate length similarity ratio (prevents "Belgrad" matching "Istolni Belgrad")
                const lengthRatio = Math.min(normalizedGarrison.length, normalizedParam.length) / 
                                   Math.max(normalizedGarrison.length, normalizedParam.length);
                
                // Only allow partial match if strings are similar in length (at least 70%)
                if (lengthRatio > 0.7) {
                    return normalizedGarrison.includes(normalizedParam) ||
                           normalizedParam.includes(normalizedGarrison);
                }
                return false;
            });
        }
        
        // If still no match, try very fuzzy matching (remove common suffixes like -categorized)
        if (!matchingGarrison) {
            const cleanParam = normalizedParam.replace(/categorized|palanka|parkan/g, '').trim();
            matchingGarrison = this.metadata.garrisons.find(garrison => {
                const garrisonName = (garrison.garrison_name || '').trim();
                const cleanGarrison = normalize(garrisonName).replace(/categorized|palanka|parkan/g, '').trim();
                
                // Exact match after cleaning
                if (cleanGarrison === cleanParam) {
                    return true;
                }
                
                // Partial match only if similar length
                const lengthRatio = Math.min(cleanGarrison.length, cleanParam.length) / 
                                   Math.max(cleanGarrison.length, cleanParam.length);
                
                if (lengthRatio > 0.7) {
                    return cleanGarrison.includes(cleanParam) || cleanParam.includes(cleanGarrison);
                }
                return false;
            });
        }
        
        if (matchingGarrison) {
            console.log('Found matching garrison:', matchingGarrison.garrison_name, matchingGarrison.file_path);
            // Find the option in the select dropdown
            const options = this.garrisonSelect.querySelectorAll('option');
            let found = false;
            for (let option of options) {
                if (option.value === matchingGarrison.file_path) {
                    // Select the option
                    this.garrisonSelect.value = matchingGarrison.file_path;
                    // Store the current garrison name
                    this.currentGarrison = matchingGarrison.garrison_name;
                    // Trigger change event to load the data
                    const changeEvent = new Event('change', { bubbles: true });
                    this.garrisonSelect.dispatchEvent(changeEvent);
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.warn('Garrison found in metadata but option not found in select:', matchingGarrison.garrison_name);
            }
        } else {
            console.warn('No matching garrison found for:', decodedParam);
            console.log('Available garrisons:', this.metadata.garrisons.map(g => g.garrison_name));
        }
    }
    
    async loadGarrisonData(filePath) {
        if (!filePath) return;
        
        this.showLoading(true);
        this.hideError();
        
        // Enable search input and download button
        if (this.searchInput) {
            this.searchInput.disabled = false;
        }
        if (this.downloadButton) {
            this.downloadButton.disabled = false;
        }
        
        try {
            // Use embedded data if available (works without server)
            if (typeof GARRISON_DATA !== 'undefined') {
                // Extract garrison name from file path or use currentGarrison
                const garrisonName = this.currentGarrison || this.getGarrisonNameFromPath(filePath);
                
                if (GARRISON_DATA[garrisonName]) {
                    const data = GARRISON_DATA[garrisonName];
                    this.currentData = data;
                    this.filteredData = data.data;
                    
                    this.renderTable();
                    this.updateResultsCount();
                    this.showLoading(false);
                    return;
                } else {
                    throw new Error(`Garrison data not found: ${garrisonName}`);
                }
            }
            
            // Fallback to fetch (for server-based setups)
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            this.currentData = data;
            this.filteredData = data.data;
            
            this.renderTable();
            this.updateResultsCount();
            this.showLoading(false);
            
        } catch (error) {
            console.error('Error loading garrison data:', error);
            this.showError('Failed to load garrison data: ' + error.message);
            this.showLoading(false);
            // Disable search and download button on error
            if (this.searchInput) {
                this.searchInput.disabled = true;
            }
            if (this.downloadButton) {
                this.downloadButton.disabled = true;
            }
        }
    }
    
    getGarrisonNameFromPath(filePath) {
        // Extract garrison name from path like "data/garrisons/Budin-Eyaleti-Baya.json"
        const filename = filePath.split('/').pop().replace('.json', '');
        // Remove eyalet prefix (e.g., "Budin-Eyaleti-Baya" -> "Baya")
        const parts = filename.split('-');
        // Find where the garrison name starts (usually after "Eyaleti")
        const eyaletIndex = parts.findIndex(p => p === 'Eyaleti');
        if (eyaletIndex >= 0 && eyaletIndex < parts.length - 1) {
            return parts.slice(eyaletIndex + 1).join(' ');
        }
        // Fallback: try to match with metadata
        if (this.metadata) {
            const garrison = this.metadata.garrisons.find(g => g.file_path === filePath);
            if (garrison) {
                return garrison.garrison_name;
            }
        }
        // Last fallback: return last part
        return parts[parts.length - 1];
    }
    
    renderTable() {
        if (!this.currentData || !this.filteredData || !this.tableContainer) return;
        
        const data = this.filteredData;
        if (data.length === 0) {
            this.tableContainer.innerHTML = '<p class="no-data">No data available for this garrison.</p>';
            return;
        }
        
        // Find the header row by checking multiple rows (some garrisons have empty rows before headers)
        let headerRowIndex = -1;
        let headerInfo = null;
        let categoryColumn = 'Column_0';
        
        // Check up to first 5 rows to find the header row
        for (let i = 0; i < Math.min(5, data.length); i++) {
            const row = data[i];
            const info = this.detectHeaderRow(row);
            if (info.isHeader) {
                headerRowIndex = i;
                headerInfo = info;
                categoryColumn = info.categoryColumn || 'Column_0';
                break;
            }
        }
        
        const isFirstRowHeader = headerRowIndex >= 0;
        
        let columnHeaders = [];
        let dataRows = [];
        
        let dataColumnKeys = []; // Track which columns to display in data rows
        
        if (isFirstRowHeader) {
            // Header row contains column headers (years)
            // Extract headers from the detected header row, skip the category column (it's null/empty)
            const headerRow = data[headerRowIndex];
            dataColumnKeys = Object.keys(headerRow)
                .filter(key => key !== categoryColumn && headerRow[key] !== null && headerRow[key] !== '')
                .sort((a, b) => {
                    // Sort Column_X numerically, keep other columns in original order
                    if (a.startsWith('Column_') && b.startsWith('Column_')) {
                        const numA = parseInt(a.replace('Column_', ''));
                        const numB = parseInt(b.replace('Column_', ''));
                        return numA - numB;
                    }
                    return 0;
                });
            
            columnHeaders = dataColumnKeys.map(key => {
                const value = headerRow[key];
                // Convert to string and format numbers (remove .0 from floats)
                return String(value).replace(/\.0$/, '');
            });
            
            // Category column will be the first column
            columnHeaders.unshift('Category');
            
            // Use rows after the header row as data
            dataRows = data.slice(headerRowIndex + 1);
        } else {
            // Use all rows as data
            // Check if we have headers defined in the metadata
            if (this.currentData && this.currentData.headers && this.currentData.headers.length > 0) {
                // Use headers from metadata, convert Column_0 to Category
                columnHeaders = this.currentData.headers.map(header => {
                    if (header === 'Column_0') {
                        return 'Category';
                    }
                    // Keep actual header names (years, dates, etc.) as-is
                    return header;
                });
            } else {
                // Fallback: extract column names from data structure
                const columns = new Set();
                data.forEach(row => {
                    Object.keys(row).forEach(key => {
                        if (row[key] !== null && row[key] !== '') {
                            columns.add(key);
                        }
                    });
                });
                
                const columnArray = Array.from(columns).sort((a, b) => {
                    // Put Column_0 first, then sort others numerically
                    if (a === 'Column_0') return -1;
                    if (b === 'Column_0') return 1;
                    const numA = parseInt(a.replace('Column_', ''));
                    const numB = parseInt(b.replace('Column_', ''));
                    return numA - numB;
                });
                
                columnHeaders = columnArray.map(col => this.cleanColumnName(col));
            }
            dataRows = data;
        }
        
        // Create table
        let html = '<div class="table-wrapper"><table class="garrison-table"><thead><tr>';
        
        // Header row
        columnHeaders.forEach(header => {
            html += `<th>${this.escapeHtml(header)}</th>`;
        });
        
        html += '</tr></thead><tbody>';
        
        // Data rows
        dataRows.forEach((row, rowIndex) => {
            html += '<tr>';
            
            if (isFirstRowHeader) {
                // First column is category (Column_0, Garrison, etc.), then year columns
                const category = row[categoryColumn] || '';
                html += `<td>${this.escapeHtml(String(category))}</td>`;
                
                // Only render columns that have headers (dataColumnKeys)
                dataColumnKeys.forEach(col => {
                    const value = row[col];
                    let displayValue = value !== null && value !== undefined ? String(value) : '';
                    // Remove .0 from float values for cleaner display
                    displayValue = displayValue.replace(/\.0$/, '');
                    html += `<td>${this.escapeHtml(displayValue)}</td>`;
                });
            } else {
                // Render columns in the order they appear in headers
                if (this.currentData && this.currentData.headers && this.currentData.headers.length > 0) {
                    // Use the defined headers to render columns in correct order
                    this.currentData.headers.forEach(col => {
                        const value = row[col];
                        let displayValue = value !== null && value !== undefined ? String(value) : '';
                        // Remove .0 from float values for cleaner display
                        displayValue = displayValue.replace(/\.0$/, '');
                        html += `<td>${this.escapeHtml(displayValue)}</td>`;
                    });
                } else {
                    // Fallback: dynamically determine columns
                    const columnArray = Array.from(new Set(
                        Object.keys(row).filter(key => row[key] !== null && row[key] !== '')
                    )).sort((a, b) => {
                        if (a === 'Column_0') return -1;
                        if (b === 'Column_0') return 1;
                        const numA = parseInt(a.replace('Column_', ''));
                        const numB = parseInt(b.replace('Column_', ''));
                        return numA - numB;
                    });
                    
                    columnArray.forEach(col => {
                        const value = row[col];
                        const displayValue = value !== null && value !== undefined ? String(value) : '';
                        html += `<td>${this.escapeHtml(displayValue)}</td>`;
                    });
                }
            }
            
            html += '</tr>';
        });
        
        html += '</tbody></table></div>';
        
        this.tableContainer.innerHTML = html;
    }
    
    detectHeaderRow(row) {
        // Find the category column (Column_0, Garrison, etc.)
        const categoryColumns = ['Column_0', 'Garrison'];
        let categoryColumn = null;
        
        for (const col of categoryColumns) {
            if (row.hasOwnProperty(col) && (row[col] === null || row[col] === '')) {
                categoryColumn = col;
                break;
            }
        }
        
        // If no standard category column found, check if first column is null/empty
        if (!categoryColumn) {
            const firstKey = Object.keys(row)[0];
            if (row[firstKey] === null || row[firstKey] === '') {
                categoryColumn = firstKey;
            }
        }
        
        // Check if other columns contain year-like values (numbers or year ranges)
        const yearPattern = /^\d{4}(-\d{4})?$/;
        let yearCount = 0;
        let totalCols = 0;
        let nonNullCols = 0;
        
        Object.keys(row).forEach(key => {
            if (key !== categoryColumn) {
                const value = row[key];
                // Only count non-null columns
                if (value !== null && value !== '') {
                    totalCols++;
                    nonNullCols++;
                    const cleanValue = String(value).replace(/\.0$/, '').trim();
                    if (yearPattern.test(cleanValue)) {
                        yearCount++;
                    }
                }
            }
        });
        
        // If most non-null columns look like years, it's probably a header row
        // Use lower threshold: at least 1 year column, and 50% of non-null columns are years
        const isHeader = categoryColumn !== null && nonNullCols > 0 && 
                        (yearCount >= nonNullCols * 0.5 || (yearCount >= 1 && nonNullCols <= 3));
        
        return {
            isHeader: isHeader,
            categoryColumn: categoryColumn || 'Column_0' // Default fallback
        };
    }
    
    filterTable(searchTerm) {
        if (!this.currentData || !this.searchInput) return;
        
        const term = searchTerm.toLowerCase().trim();
        
        if (!term) {
            this.filteredData = this.currentData.data;
        } else {
            this.filteredData = this.currentData.data.filter(row => {
                // Search across all column values
                return Object.values(row).some(value => {
                    if (value === null || value === undefined) return false;
                    return String(value).toLowerCase().includes(term);
                });
            });
        }
        
        this.renderTable();
        this.updateResultsCount();
    }
    
    updateResultsCount() {
        if (!this.resultsCount) return;
        
        const total = this.currentData ? this.currentData.data.length : 0;
        const filtered = this.filteredData ? this.filteredData.length : 0;
        
        if (filtered === total) {
            this.resultsCount.textContent = `Showing ${total} ${total === 1 ? 'row' : 'rows'}`;
        } else {
            this.resultsCount.textContent = `Showing ${filtered} of ${total} ${total === 1 ? 'row' : 'rows'}`;
        }
    }
    
    cleanColumnName(colName) {
        // Convert Column_0, Column_1 to more readable names
        if (colName.startsWith('Column_')) {
            const num = colName.replace('Column_', '');
            return `Column ${parseInt(num) + 1}`;
        }
        return colName;
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
        if (this.tableContainer) {
            this.tableContainer.innerHTML = '';
        }
        if (this.resultsCount) {
            this.resultsCount.textContent = '';
        }
        if (this.searchInput) {
            this.searchInput.value = '';
            this.searchInput.disabled = true;
        }
        if (this.downloadButton) {
            this.downloadButton.disabled = true;
        }
        this.currentData = null;
        this.filteredData = null;
        this.currentGarrison = null;
    }
}

// Initialize when script loads
const garrisonTable = new GarrisonTable();

