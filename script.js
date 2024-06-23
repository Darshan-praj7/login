// Function to validate form fields
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Reset previous error messages
    resetErrors();

    // Get form input values
    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true; // Flag to track overall form validity

    // Validate Full Name (must not be less than 5 characters)
    if (fullName.length < 5) {
        showError('fullNameError', 'Full Name must be at least 5 characters');
        isValid = false;
    }

    // Validate Email (should contain @ character)
    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid Email ID');
        isValid = false;
    }

    // Validate Phone Number (must be a 10-digit number and not '1234567890')
    if (phone.length !== 10 || phone === '1234567890' || isNaN(phone)) {
        showError('phoneError', 'Enter a valid 10-digit Phone Number');
        isValid = false;
    }

    // Validate Password (cannot be 'password' or 'name of the user' or less than 8 characters)
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        showError('passwordError', 'Password must be at least 8 characters long and not be a weak password');
        isValid = false;
    }

    // Validate Confirm Password (must match Password)
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset(); // Reset form after submission
    }
}

// Function to display error messages
function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Function to reset all error messages
function resetErrors() {
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.textContent = '');
}
