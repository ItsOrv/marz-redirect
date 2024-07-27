document.addEventListener('DOMContentLoaded', function() {
    // Error handling for missing navigation items
    try {
        const navItems = document.querySelectorAll('.navbar-item a');

        if (navItems.length === 0) {
            throw new Error('Navigation items not found.');
        }

        navItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (!targetElement) {
                    console.warn(`Target element with ID ${targetId} not found.`);
                    return;
                }

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
});
