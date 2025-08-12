document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
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

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
            displayError('email', 'Invalid Email Address');
            isValid = false;
        }

        if (password.length < 6) {
            displayError('password', 'Password must be at least 6 characters');
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Simulate login (replace with actual authentication)
            setTimeout(() => {
                formMessage.textContent = "Login Successful!";
                formMessage.style.color = 'green';
                form.reset();
                // window.location.href = 'dashboard.html'; // Redirect on success
            }, 1000);
        } else {
            formMessage.textContent = "Please correct the errors below.";
            formMessage.style.color = 'red';
        }
    });
});