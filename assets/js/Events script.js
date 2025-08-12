document.addEventListener('DOMContentLoaded', function() {
    const eventItems = document.querySelectorAll('.event-item');

    eventItems.forEach(item => {
        item.addEventListener('click', () => {
            const details = item.querySelector('.event-details');
            if (details) {
                details.classList.toggle('show-details');
            }
        });
    });
});