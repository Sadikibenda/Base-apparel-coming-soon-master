// Declare variables
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const form = document.getElementById("emailForm");

// Function to validate input with custom error
function validateEmail(email) {
    if (email.trim() === "") {
        return "Email field cannot be empty.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return "Please enter a valid email address.";
    }
    return "";
}

// Form submission event
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const emailValue = emailInput.value;
    const validationMessage = validateEmail(emailValue);

    if (validationMessage) {
        errorMessage.textContent = validationMessage;
    } else {
        errorMessage.textContent = "";
        alert("Email submitted successfully!");
    }
});

