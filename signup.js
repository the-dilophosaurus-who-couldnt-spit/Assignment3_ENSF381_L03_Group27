document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var email = document.getElementById('email').value;
    
    var isValid = true;
    var message = '';

    // Validate username
    if (!/^[a-zA-Z][a-zA-Z0-9-_]{2,19}$/.test(username)) {
        isValid = false;
        message += 'Invalid username.\n';
    }

    // Validate password
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~]).{8,}/.test(password)) {
        isValid = false;
        message += 'Invalid password.\n';
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        isValid = false;
        message += 'Passwords do not match.\n';
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        isValid = false;
        message += 'Invalid email.\n';
    }

    // Display message
    var messageBox = document.getElementById('message');
    if (isValid) {
        messageBox.style.color = 'green';
        messageBox.textContent = 'Signup successful!';
    } else {
        messageBox.style.color = 'red';
        messageBox.textContent = 'Signup failed. Please check the form fields.';
    }
});
