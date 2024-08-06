document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const inputs = form.querySelectorAll('input, textarea');

    const validateForm = () => {
        const isValid = Array.from(inputs).every(input => input.value.trim());
        submitButton.classList.toggle('disabled', !isValid);
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = "";
        });
    };

    validateForm();
    inputs.forEach(input => input.addEventListener('input', validateForm));

    form.addEventListener('submit', event => {
        event.preventDefault();
        if (submitButton.disabled) return;

        const loader = document.getElementById("loader");
        const successMessage = document.getElementById("success-message");

        loader.style.display = "inline-block";
        clearInputs();

        setTimeout(() => {
            loader.style.display = "none";
            successMessage.style.display = "block";
        }, 2000);
    });
});
