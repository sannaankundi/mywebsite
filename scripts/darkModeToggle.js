document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('.section').forEach(section => section.classList.toggle('dark-mode'));
    document.querySelectorAll('.project-card').forEach(card => card.classList.toggle('dark-mode'));
});
