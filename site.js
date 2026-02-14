document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mobile-menu-toggle').forEach((button) => {
        const menuId = button.getAttribute('aria-controls');
        const menu = document.getElementById(menuId);
        if (!menu) return;

        const closeMenu = () => {
            menu.classList.remove('is-open');
            button.setAttribute('aria-expanded', 'false');
            setTimeout(() => {
                menu.hidden = true;
            }, 350);
        };

        const openMenu = () => {
            menu.hidden = false;
            requestAnimationFrame(() => {
                menu.classList.add('is-open');
            });
            button.setAttribute('aria-expanded', 'true');
        };

        button.addEventListener('click', () => {
            if (menu.classList.contains('is-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        menu.addEventListener('click', (event) => {
            if (event.target === menu) {
                closeMenu();
            }
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', (event) => {
                const href = link.getAttribute('href');
                if (!href || href.startsWith('http')) {
                    closeMenu();
                    return;
                }

                event.preventDefault();
                closeMenu();
                setTimeout(() => {
                    window.location.href = href;
                }, 200);
            });
        });

        const closeButton = menu.querySelector('.mobile-menu-close');
        if (closeButton) {
            closeButton.addEventListener('click', closeMenu);
        }
    });

    // Hide header on scroll down, show on scroll up (mobile only)
    let lastScrollY = 0;
    const header = document.querySelector('header');
    const scrollThreshold = 10; // Amount to scroll up before header reappears

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) return;

        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down
            header.classList.add('header-hidden');
        } else if (currentScrollY < lastScrollY - scrollThreshold) {
            // Scrolling up by noticeable amount
            header.classList.remove('header-hidden');
        }

        lastScrollY = currentScrollY;
    });
});
