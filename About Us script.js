document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const bio = member.querySelector('.team-bio');
            if (bio) {
                bio.classList.toggle('show-bio');
            }
        });
    });
});