// Auto-typing effect
const texts = ["Welcome.", "I'm Ahmad Sannaan Khan.", "I'm a student, programmer, and creator.", "And this is my portfolio website."];
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
document.addEventListener("DOMContentLoaded", () => {
    autoType();

    async function fetchRandomQuote() {
        try {
            const response = await fetch('https://api.allorigins.win/get?url=https://zenquotes.io/api/random');
            const data = await response.json();
            const quoteData = JSON.parse(data.contents);
            document.getElementById("random-quote").textContent = `${quoteData[0].q} - ${quoteData[0].a}`;
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    async function fetchRandomJoke() {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            console.log('Joke data:', data); // Debug log
            document.getElementById("random-joke").textContent = `${data.setup} ${data.punchline}`;
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    }

    async function fetchRandomFunFact() {
        try {
            const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
            const data = await response.json();
            console.log('Fun fact data:', data); // Debug log
            document.getElementById("fun-fact").textContent = data.text;
        } catch (error) {
            console.error('Error fetching fun fact:', error);
        }
    }

    fetchRandomQuote();
    fetchRandomJoke();
    fetchRandomFunFact();
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Submit the form using Fetch API
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for reaching out, Sannaan will get back to you soon!');
            this.reset(); // Clear the form
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        alert('Oops! Something went wrong. Please try again.');
    });
});

const textarea = document.getElementById('message');
textarea.addEventListener('input', function () {
    this.style.height = 'auto'; // Reset height
    this.style.height = (this.scrollHeight) + 'px'; // Expand to fit content
});