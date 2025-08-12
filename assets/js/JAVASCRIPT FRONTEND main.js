// Product display and cart functionality
const cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartElement = document.getElementById('cart-items');
  cartElement.innerHTML = '';
  
  let total = 0;
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} - $${item.price}`;
    cartElement.appendChild(itemElement);
    total += item.price;
  });
  
  document.getElementById('cart-total').textContent = `Total: $${total}`;
}

// Workshop registration
async function registerForWorkshop(workshopId) {
  try {
    const response = await fetch('/api/workshops/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        workshopId,
        userId: getCurrentUserId()
      })
    });
    
    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    alert('Message sent successfully!');
    e.target.reset();
  } catch (error) {
    console.error('Error:', error);
  }
});