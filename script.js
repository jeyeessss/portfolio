// Get necessary elements
const toggleBtn = document.getElementById('theme-toggle');
const editBtn = document.getElementById('edit-btn');
const aboutText = document.getElementById('about-text');

// --- 1. Content Persistence (New Feature) ---

// Function to load content from localStorage on page load
function loadContent() {
    const savedText = localStorage.getItem('aboutMeText');
    if (savedText) {
        aboutText.textContent = savedText;
    }
}

// Function to save content to localStorage
function saveContent() {
    localStorage.setItem('aboutMeText', aboutText.textContent);
}

// Load content immediately when the script runs
loadContent();

// --- 2. Dark/Light Theme Toggle ---

// Function to initialize or set the theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme);
    toggleBtn.textContent = savedTheme === 'dark' ? "☀️" : "🌙";
}

// Call the theme initializer
initializeTheme();

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    
    // Save theme preference
    localStorage.setItem('theme', currentTheme); 
    
    // Update button text
    toggleBtn.textContent = currentTheme === 'dark' ? "☀️" : "🌙";
});


// --- 3. Editable About Me Section ---

editBtn.addEventListener('click', () => {
    if (aboutText.contentEditable === "true") {
        // Switch from EDIT to SAVE state
        aboutText.contentEditable = "false";
        editBtn.textContent = "Edit";
        
        // Call the new save function when saving
        saveContent(); 
    } else {
        // Switch from VIEW to EDIT state
        aboutText.contentEditable = "true";
        aboutText.focus();
        editBtn.textContent = "Save";
    }
});