const aboutTexts = ["About Me.", "Who I Am.", "My Journey."];
let aboutCount = 0;
let aboutIndex = 0;
let aboutCurrentText = "";
let aboutIsDeleting = false;

function autoTypeAbout() {
    const typingElement = document.getElementById("auto-typing-about");

    if (aboutCount === aboutTexts.length) {
        aboutCount = 0;
    }

    aboutCurrentText = aboutTexts[aboutCount];

    if (!aboutIsDeleting) {
        typingElement.textContent = aboutCurrentText.slice(0, ++aboutIndex);
    } else {
        typingElement.textContent = aboutCurrentText.slice(0, --aboutIndex);
    }

    if (aboutIndex === aboutCurrentText.length + 1) {
        aboutIsDeleting = true;
        setTimeout(autoTypeAbout, 1000); // Pause before deleting
    } else if (aboutIndex === 0 && aboutIsDeleting) {
        aboutIsDeleting = false;
        aboutCount++;
        setTimeout(autoTypeAbout, 500); // Pause before typing next text
    } else {
        setTimeout(autoTypeAbout, aboutIsDeleting ? 50 : 150); // Typing speed
    }
}

// Start auto-typing effect
document.addEventListener("DOMContentLoaded", autoTypeAbout);
