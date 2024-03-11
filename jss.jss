document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Reset error messages
    resetErrors();

    let isValid = true;

    // Validate Name
    if (name.trim() === "") {
        displayError("nameError", "Name is required");
        isValid = false;
    }

    // Validate Email
    if (!isValidEmail(email)) {
        displayError("emailError", "Enter a valid email address");
        isValid = false;
    }

    // Validate Password
    if (password.length < 6) {
        displayError("passwordError", "Password must be at least 6 characters");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // You can add code to submit the form to the server here
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function resetErrors() {
    const errorElements = document.getElementsByClassName("error");
    for (const errorElement of errorElements) {
        errorElement.textContent = "";
    }
}
