document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscribeForm");
    const submitBtn = document.getElementById("submitBtn");

    function showError(id, message) {
        const input = document.getElementById(id);
        const errorDiv = document.getElementById(id + "Error");
        input.classList.add("error-border");
        if (errorDiv) errorDiv.textContent = message;
    }

    function clearError(id) {
        const input = document.getElementById(id);
        const errorDiv = document.getElementById(id + "Error");
        input.classList.remove("error-border");
        if (errorDiv) errorDiv.textContent = "";
    }

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let hasError = false;

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const birthDate = document.getElementById("birthDate").value.trim();
        const age = document.getElementById("age").value.trim();
        const shipType = document.getElementById("shipType").value;

        ["firstName", "lastName", "email", "phone", "password", "birthDate", "age", "shipType"].forEach(clearError);

        if (firstName === "") {
            showError("firstName", "First name is required.");
            hasError = true;
        }

        if (lastName === "") {
            showError("lastName", "Last name is required.");
            hasError = true;
        }

        if (!email.includes("@") || !email.includes(".")) {
            showError("email", "Email must be valid.");
            hasError = true;
        }

        if (isNaN(phone) || phone.length < 10) {
            showError("phone", "Phone number must be numeric and at least 10 digits.");
            hasError = true;
        }

        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            showError("password", "Password must contain uppercase and lowercase letters.");
            hasError = true;
        }

        if (birthDate === "") {
            showError("birthDate", "Birth date is required.");
            hasError = true;
        }

        if (isNaN(age) || Number(age) < 18) {
            showError("age", "Age must be a number and at least 18.");
            hasError = true;
        }

        if (shipType === "") {
            showError("shipType", "Please select your preferred ship.");
            hasError = true;
        }

        if (!hasError) {
            alert("Form submitted successfully!");
            form.reset();
            ["firstName", "lastName", "email", "phone", "password", "birthDate", "age", "shipType"].forEach(clearError);
        }
    });
});
