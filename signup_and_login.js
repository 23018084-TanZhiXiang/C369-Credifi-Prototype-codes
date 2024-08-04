// Function to validate password and confirm password
function validatePasswords(password, confirmPassword) {
    return password === confirmPassword;
}

document.addEventListener('DOMContentLoaded', () => {
    // Handle signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (validatePasswords(password, confirmPassword)) {
                alert("Signup successful!");
                // Here you would usually send the data to the server
                window.location.href = 'login.html'; // Redirect after successful signup
            } else {
                alert("Passwords do not match. Please try again.");
            }
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            alert("Login successful!");
            window.location.href = 'otp.html'; // Redirect after successful login
        });
    }
});
