document.addEventListener('DOMContentLoaded', function() {
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    const modal = document.getElementById('quickViewModal');
    const modalContent = document.querySelector('.modal-product-details');
    const closeButton = document.querySelector('.close');

    // Sample product data (replace with your actual data source - e.g., fetching from a server)
    const products = {
        1: {
            name: 'Recycled Metal Sculpture',
            price: '$45.00',
            description: 'A beautiful sculpture made from recycled metal, perfect for adding an artistic touch to your home.',
            imageSrc: 'item1.jpg'
        },
        2: {
            name: 'Upcycled Wood Table',
            price: '$120.00',
            description: 'A stylish and sustainable table crafted from upcycled wood, ideal for any living space.',
            imageSrc: 'item2.jpg'
        },
        3: {
            name: 'Abstract Painting on Canvas',
            price: '$85.00',
            description: 'An original abstract painting on canvas that will bring color and energy to your walls.',
            imageSrc: 'item3.jpg'
        }
        // ... more products
    };

    quickViewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.dataset.productId);
            openQuickView(productId);
        });
    });

    function openQuickView(productId) {
        const product = products[productId];
        if (product) {
            modalContent.innerHTML = `
                <img src="${product.imageSrc}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="modal-price">${product.price}</p>
                <p class="modal-description">${product.description}</p>
                <a href="#" class="add-to-cart">Add to Cart</a>
            `;
            modal.style.display = 'block';
        }
    }

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});