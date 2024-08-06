document.addEventListener("DOMContentLoaded", () => {
    const hideMenuIcon = () => {
        document.querySelectorAll("header #main-nav ul li").forEach(item => {
            if (!item.querySelector("ul")) {
                item.classList.add("no-children");
            }
        });
    };

    hideMenuIcon();

    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');
    let animationId;

    const smoothToggle = (isOpening) => {
        let currentRight = isOpening ? -100 : 0;
        const targetRight = isOpening ? 0 : -100;
        const step = isOpening ? 2 : -2;
        cancelAnimationFrame(animationId);

        const animate = () => {
            if ((isOpening && currentRight < targetRight) || (!isOpening && currentRight > targetRight)) {
                currentRight += step;
                nav.style.right = `${currentRight}%`;
                animationId = requestAnimationFrame(animate);
            } else {
                nav.style.right = `${targetRight}%`;
            }
        };

        animate();
    };

    menuToggle.addEventListener('change', () => {
        smoothToggle(menuToggle.checked);
    });

    window.addEventListener('scroll', () => {
        header.classList.toggle('fixed', window.scrollY > 1);
    });

    document.querySelectorAll('.has-submenu > a').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const parent = item.parentElement;
            parent.classList.toggle('open');
            const submenu = parent.querySelector('.submenu');
            submenu.style.display = parent.classList.contains('open') ? 'block' : 'none';
        });
    });
});