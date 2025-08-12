// script.js

document.addEventListener('DOMContentLoaded', function() {
    // --- Newsletter Form Handling ---
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterEmailInput = document.querySelector('.newsletter-form input[type="email"]');
    const newsletterButton = document.querySelector('.newsletter-form button');

    if (newsletterForm && newsletterEmailInput && newsletterButton) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    async function handleNewsletterSubmit(event) {
        event.preventDefault();

        const email = newsletterEmailInput.value.trim();
        if (!isValidEmail(email)) {
            showNewsletterMessage('Please enter a valid email address.', 'error');
            return;
        }

        disableNewsletterForm();
        showNewsletterMessage('Submitting...', 'info');

        try {
            const response = await sendEmailToNewsletterServer(email); // Replace with your actual server-side endpoint

            if (response.ok) {
                showNewsletterMessage('Thank you for subscribing!', 'success');
                newsletterEmailInput.value = ''; // Clear the input
            } else {
                const errorMessage = await response.text();
                console.error('Newsletter subscription failed:', errorMessage);
                showNewsletterMessage(`Subscription failed: ${errorMessage || 'An error occurred.'}`, 'error');
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            showNewsletterMessage('Subscription failed: Network error. Please try again.', 'error');
        } finally {
            enableNewsletterForm();
        }
    }

    function isValidEmail(email) {
        // A more robust email validation regex (still not perfect, but better)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }

    function showNewsletterMessage(message, type = 'info') {
        let messageElement = document.querySelector('.newsletter-message');
        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.classList.add('newsletter-message');
            newsletterForm.parentNode.insertBefore(messageElement, newsletterForm);
        }

        messageElement.textContent = message;
        messageElement.className = 'newsletter-message'; // Reset classes
        messageElement.classList.add(`newsletter-message-${type}`);

        // Optionally, hide the message after a few seconds
        if (type !== 'error') {
            setTimeout(() => {
                messageElement.style.opacity = 0;
                setTimeout(() => messageElement.remove(), 500); // Wait for fade out
            }, 3000);
        } else {
            messageElement.style.opacity = 1; // Make sure error messages are visible
        }
    }

    function disableNewsletterForm() {
        newsletterEmailInput.disabled = true;
        newsletterButton.disabled = true;
        newsletterButton.style.opacity = 0.5; // Visual cue
    }

    function enableNewsletterForm() {
        newsletterEmailInput.disabled = false;
        newsletterButton.disabled = false;
        newsletterButton.style.opacity = 1;
    }

    async function sendEmailToNewsletterServer(email) {
        // Replace with your actual server-side endpoint
        const url = '/api/newsletter/subscribe'; // Example API endpoint
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            return response;
        } catch (error) {
            throw error; // Let the calling function handle the error display
        }
    }

    // --- Search Button Handling (Placeholder) ---
    const searchButton = document.getElementById('search-btn');
    if (searchButton) {
        searchButton.addEventListener('click', handleSearchClick);
    }

    function handleSearchClick(event) {
        event.preventDefault();
        //   alert('Search functionality is not implemented yet.');
        //   Instead of alert, you could show a modal or update a section of the page
        showSearchModal();
    }

    function showSearchModal() {
        //  Create a simple modal (you'd likely use a library for better modals)
        const modal = document.createElement('div');
        modal.className = 'search-modal';
        modal.innerHTML = `
            <div class="search-modal-content">
                <span class="search-modal-close">&times;</span>
                <p>Search is under development.  Please check back later!</p>
                <input type="text" placeholder="Enter your search term">
                <button>Search</button>
            </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.search-modal-close');
        closeButton.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
});