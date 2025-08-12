document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.querySelector('.form-message');

    // Function to display error messages
    function displayError(elementId, message) {
        const errorElement = document.getElementById(elementId + '-error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Function to clear all error messages
    function clearErrors() {
        document.querySelectorAll('.form-error').forEach(error => error.textContent = '');
        formMessage.textContent = '';
    }

    // Validation function
    function validateForm() {
        clearErrors();
        let isValid = true;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name.length < 2) {
            displayError('name', 'Name is required');
            isValid = false;
        }

        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
            displayError('email', 'Invalid Email Address');
            isValid = false;
        }

        if (message.length < 10) {
            displayError('message', 'Message must be at least 10 characters');
            isValid = false;
        }

        return isValid;
    }

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission (replace with actual server-side logic)
            setTimeout(() => {
                formMessage.textContent = "Thank you! Your message has been sent.";
                formMessage.style.color = 'green';
                form.reset();
            }, 1000);
        } else {
            formMessage.textContent = "Please correct the errors below.";
            formMessage.style.color = 'red';
        }
    });
});