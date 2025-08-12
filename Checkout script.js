document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');
    const formMessage = document.querySelector('.form-message');
    const orderSummaryItems = document.getElementById('order-summary-items');
    const subtotalEl = document.getElementById('order-subtotal');
    const shippingEl = document.getElementById('order-shipping');
    const totalEl = document.getElementById('order-total');

    //  You would replace this with actual cart/order logic
    function loadOrderSummary() {
        orderSummaryItems.innerHTML = '';
        let subtotal = 0;

        const cart = JSON.parse(localStorage.getItem('cart')) || [];  // Example: Get cart from local storage

        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
            `;
            orderSummaryItems.appendChild(row);
            subtotal += item.price * item.quantity;
        });

        const shipping = 10.00;  // Fixed shipping cost
        const total = subtotal + shipping;

        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        shippingEl.textContent = `$${shipping.toFixed(2)}`;
        totalEl.textContent = `$${total.toFixed(2)}`;
    }

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

        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const country = document.getElementById('country').value;
        const postalCode = document.getElementById('postal-code').value.trim();
        const paymentMethod = document.getElementById('payment-method').value;

        if (fullname.length < 2) {
            displayError('fullname', 'Full Name is required');
            isValid = false;
        }

        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
            displayError('email', 'Invalid Email Address');
            isValid = false;
        }

        if (address.length < 5) {
            displayError('address', 'Address is required');
            isValid = false;
        }

        if (city.length < 3) {
            displayError('city', 'City is required');
            isValid = false;
        }

        if (country === '') {
            displayError('country', 'Please select a country');
            isValid = false;
        }

        if (postalCode.length < 2) {
            displayError('postal-code', 'Postal Code is required');
            isValid = false;
        }

        if (paymentMethod === '') {
            displayError('payment-method', 'Please select a payment method');
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            //  Simulate order processing (replace with actual server-side logic)
            setTimeout(() => {
                formMessage.textContent = "Thank you for your order! Your order has been placed successfully.";
                formMessage.style.color = 'green';
                localStorage.removeItem('cart'); // Clear cart
                form.reset();
                loadOrderSummary(); // Update order summary
                //  window.location.href = 'index.html';  // Redirect to home or order confirmation page
            }, 1000);
        } else {
            formMessage.textContent = "Please correct the errors below.";
            formMessage.style.color = 'red';
        }
    });

    loadOrderSummary(); // Load order summary on page load
});