document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const formMessage = document.querySelector('.form-message');

    function displayError(elementId, message) {
        const errorElement = document.getElementById(elementId + '-error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors() {
        document.querySelectorAll('.form-error').forEach(error => error.textContent = '');
        formMessage.textContent = '';
    }

    function validateForm() {
        clearErrors();
        let isValid = true;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        if (name.length < 2) {
            displayError('name', 'Name is required');
            isValid = false;
        }

        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
            displayError('email', 'Invalid Email Address');
            isValid = false;
        }

        if (password.length < 6) {
            displayError('password', 'Password must be at least 6 characters');
            isValid = false;
        }

        if (password !== confirmPassword) {
            displayError('confirm-password', 'Passwords do not match');
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Simulate signup (replace with actual registration)
            setTimeout(() => {
                formMessage.textContent = "Signup Successful!";
                formMessage.style.color = 'green';
                form.reset();
                window.location.href = 'login.html';  // Redirect to login
            }, 1000);
        } else {
            formMessage.textContent = "Please correct the errors below.";
            formMessage.style.color = 'red';
        }
    });
});