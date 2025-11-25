// --- THEME TOGGLE LOGIC (Keeps theme persistent) ---
const toggleBtn = document.getElementById('theme-toggle');
const THEME_KEY = 'theme';

// Load saved theme preference on page load
function loadTheme() {
    // Check local storage for 'theme' key. Defaults to 'light' if not found.
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(savedTheme);

    // Set the state of the toggle checkbox to match the loaded theme
    if (savedTheme === 'dark') {
        toggleBtn.checked = true;
    } else {
        toggleBtn.checked = false;
    }
}

// Event listener for theme change
toggleBtn.addEventListener('change', () => {
    let newTheme;
    
    // Check if the checkbox is checked (Dark Mode)
    if (toggleBtn.checked) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        newTheme = 'dark';
    } else {
        // If unchecked (Light Mode)
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        newTheme = 'light';
    }

    // Save the new theme preference to Local Storage
    localStorage.setItem(THEME_KEY, newTheme);
});

// Execute the loadTheme function immediately when the script runs
loadTheme();


// ------------------------------------------------------------------
// --- EDITABLE ABOUT ME SECTION (Now keeps content persistent) ---
// ------------------------------------------------------------------
const editBtn = document.getElementById('edit-btn');
const aboutText = document.getElementById('about-text');
const ABOUT_ME_KEY = 'aboutMeText'; // Key for localStorage

// Function to load saved text on page load
function loadAboutText() {
    const savedText = localStorage.getItem(ABOUT_ME_KEY);
    // If a saved version exists, use it instead of the HTML default
    if (savedText) {
        aboutText.textContent = savedText;
    }
}

editBtn.addEventListener('click', () => {
    if (aboutText.contentEditable === "true") {
        // State: Changing from "Save" to "Edit" (saving content)
        aboutText.contentEditable = "false";
        editBtn.textContent = "Edit";
        
        // ⭐ NEW: Save the current content to local storage
        localStorage.setItem(ABOUT_ME_KEY, aboutText.textContent.trim());

    } else {
        // State: Changing from "Edit" to "Save" (enabling editing)
        aboutText.contentEditable = "true";
        aboutText.focus(); // Corrected the typo (was aboutBtn.focus())
        editBtn.textContent = "Save";
    }
});

// Execute the function to load the saved content
loadAboutText();