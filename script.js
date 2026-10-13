// DOM Element Selection
const themeToggleBtn = document.getElementById('theme-toggle');
const contactBtn = document.getElementById('contact-btn');
const contactMessage = document.getElementById('contact-message');
const body = document.body;

// Interactivity 1: Dark Mode Toggle
themeToggleBtn.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');
    
    // Update button text based on the current theme
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});

// Interactivity 2: Reveal Contact Information
contactBtn.addEventListener('click', () => {
    // Removes the 'hidden' CSS class to reveal the message
    contactMessage.classList.remove('hidden');
    contactBtn.style.display = 'none'; // Hide the button after clicking
});
