// WHATIN Ecosystem - Global Mobile Navigation
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navDrawer = document.getElementById('nav-drawer');
    const body = document.body;

    if (menuBtn && navDrawer) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navDrawer.classList.toggle('nav-active');
            menuBtn.classList.toggle('active');

            if (navDrawer.classList.contains('nav-active')) {
                body.style.overflow = 'hidden'; // Stop scrolling when menu is open
            } else {
                body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navDrawer.classList.contains('nav-active') && !navDrawer.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
                navDrawer.classList.remove('nav-active');
                menuBtn.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking a link
        navDrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navDrawer.classList.remove('nav-active');
                menuBtn.classList.remove('active');
                body.style.overflow = 'auto';
            });
        });
    }

    // Initialize Lucide Icons
    if (window.lucide) lucide.createIcons();
});
