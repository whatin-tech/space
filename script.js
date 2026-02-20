document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation (Future implementation)
    const setupMobileNav = () => {
        // Logic for mobile menu would go here
    };

    // Global Search Functionality
    const searchInput = document.querySelector('.search-container input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            // This would typically filter cards or redirect to a search page
            console.log('Searching for:', query);
        });
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hover effect for cards
    const cards = document.querySelectorAll('.card, .book-card, .notes-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Addition effects can be added here
        });
    });
});
