document.addEventListener('DOMContentLoaded', () => {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const postDetails = link.nextElementSibling; // Get the next element which is post-details
            if (postDetails) {
                postDetails.style.display = postDetails.style.display === 'block' ? 'none' : 'block';
                link.textContent = link.textContent === 'Read more' ? 'Read less' : 'Read more';
            }
        });
    });
});