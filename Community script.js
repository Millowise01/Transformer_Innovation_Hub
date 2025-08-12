document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('join-button');
    const joinFormContainer = document.getElementById('join-form-container');
    const joinForm = document.getElementById('join-form');
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
        const interest = document.getElementById('interest').value.trim();

        if (name.length < 2) {
            displayError('name', 'Name is required');
            isValid = false;
        }

        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
            displayError('email', 'Invalid Email Address');
            isValid = false;
        }

        if (interest.length < 10) {
            displayError('interest', 'Please tell us a bit about your interests');
            isValid = false;
        }

        return isValid;
    }

    // Event listener for the "Join Now" button
    joinButton.addEventListener('click', () => {
        joinFormContainer.style.display = 'block'; // Show the form
        joinButton.style.display = 'none'; // Hide the button
    });

    // Form submission
    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission (replace with actual server-side logic)
            setTimeout(() => {
                formMessage.textContent = "Thank you for joining our community!";
                formMessage.style.color = 'green';
                joinForm.reset();
                joinFormContainer.style.display = 'none'; // Hide the form after submission
                joinButton.style.display = 'block'; // Show the button again
            }, 1000);
        } else {
            formMessage.textContent = "Please correct the errors below.";
            formMessage.style.color = 'red';
        }
    });
});