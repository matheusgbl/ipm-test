function hideMenuIcon() {
    const menuItems = document.querySelectorAll("header nav ul li");

    menuItems.forEach(item => {
        if (!item.querySelector("ul")) {
            item.classList.add("no-children");
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    hideMenuIcon();
    
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const inputs = form.querySelectorAll('input, textarea');

    function validateForm() {
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });

        if (isValid) {
            submitButton.classList.remove('disabled');
        } else {
            submitButton.classList.add('disabled');
        }
    };

    function clearInputs() {
        inputs.forEach(input => {
            input.value = "";
        });
    }

    validateForm();

    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    form.addEventListener('submit', function (event) {
        if (submitButton.disabled) {
            event.preventDefault();
        } else {
            event.preventDefault();
            const loader = document.getElementById("loader");
            const successMesage = document.getElementById("sucess-message");

            loader.style.display = "inline-block";
            clearInputs();

            setTimeout(() => {
                loader.style.display = "none";
                successMesage.style.display = "block";
            }, 2000);
        }
    });
});