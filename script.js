// Auto-typing effect
const texts = ["Welcome.", "I'm Ahmad Sannaan Khan.", "A Bio Student.", "An Aspiring Programmer."];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

function autoType() {
    const typingElement = document.getElementById("auto-typing");

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    if (!isDeleting) {
        typingElement.textContent = currentText.slice(0, ++index);
    } else {
        typingElement.textContent = currentText.slice(0, --index);
    }

    if (index === currentText.length + 1) {
        isDeleting = true;
        setTimeout(autoType, 1000); // Pause before deleting
    } else if (index === 0 && isDeleting) {
        isDeleting = false;
        count++;
        setTimeout(autoType, 500); // Pause before typing next text
    } else {
        setTimeout(autoType, isDeleting ? 50 : 150); // Typing speed
    }
}

// Start auto-typing effect
document.addEventListener("DOMContentLoaded", autoType);

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out, Sannaan will get back to you soon!');
});
