document.addEventListener('DOMContentLoaded', () => {
    // Apply dark mode if previously enabled
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelectorAll('.section').forEach(section => section.classList.add('dark-mode'));
        document.querySelectorAll('.project-card').forEach(card => card.classList.add('dark-mode'));
    }

    document.getElementById('dark-mode-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelectorAll('.section').forEach(section => section.classList.toggle('dark-mode'));
        document.querySelectorAll('.project-card').forEach(card => card.classList.toggle('dark-mode'));

        // Save dark mode state in local storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
