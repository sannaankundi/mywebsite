const projectTexts = ["My Projects.", "Check out my work.", "Explore my portfolio."];
let projectCount = 0;
let projectIndex = 0;
let projectCurrentText = "";
let projectIsDeleting = false;

function autoTypeProjects() {
    const typingElement = document.getElementById("auto-typing-projects");

    if (projectCount === projectTexts.length) {
        projectCount = 0;
    }

    projectCurrentText = projectTexts[projectCount];

    if (!projectIsDeleting) {
        typingElement.textContent = projectCurrentText.slice(0, ++projectIndex);
    } else {
        typingElement.textContent = projectCurrentText.slice(0, --projectIndex);
    }

    if (projectIndex === projectCurrentText.length + 1) {
        projectIsDeleting = true;
        setTimeout(autoTypeProjects, 1000); // Pause before deleting
    } else if (projectIndex === 0 && projectIsDeleting) {
        projectIsDeleting = false;
        projectCount++;
        setTimeout(autoTypeProjects, 500); // Pause before typing next text
    } else {
        setTimeout(autoTypeProjects, projectIsDeleting ? 50 : 150); // Typing speed
    }
}

// Start auto-typing effect
document.addEventListener("DOMContentLoaded", autoTypeProjects);
