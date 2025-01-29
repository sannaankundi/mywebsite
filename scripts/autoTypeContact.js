const contactTexts = ["Get in Touch.", "Contact Me.", "Let's Connect."];
let contactCount = 0;
let contactIndex = 0;
let contactCurrentText = "";
let contactIsDeleting = false;

function autoTypeContact() {
    const typingElement = document.getElementById("auto-typing-contact");

    if (contactCount === contactTexts.length) {
        contactCount = 0;
    }

    contactCurrentText = contactTexts[contactCount];

    if (!contactIsDeleting) {
        typingElement.textContent = contactCurrentText.slice(0, ++contactIndex);
    } else {
        typingElement.textContent = contactCurrentText.slice(0, --contactIndex);
    }

    if (contactIndex === contactCurrentText.length + 1) {
        contactIsDeleting = true;
        setTimeout(autoTypeContact, 1000); // Pause before deleting
    } else if (contactIndex === 0 && contactIsDeleting) {
        contactIsDeleting = false;
        contactCount++;
        setTimeout(autoTypeContact, 500); // Pause before typing next text
    } else {
        setTimeout(autoTypeContact, contactIsDeleting ? 50 : 150); // Typing speed
    }
}

// Start auto-typing effect
document.addEventListener("DOMContentLoaded", autoTypeContact);
