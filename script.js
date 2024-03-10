document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageBox = document.getElementById('messageBox');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                return response.json();
            })
            .then(data => {
                const user = data.find(user => user.username === username && user.email === password);

                if (user) {
                    showMessage('success', 'Login successful!');
                } else {
                    showMessage('error', 'Invalid username or password.');
                }
            })
            .catch(error => {
                showMessage('error', error.message);
            });
    });

    function showMessage(type, message) {
        const messageParagraph = document.getElementById('message');
        messageParagraph.textContent = message;

        if (type === 'error') {
            messageBox.style.display = 'block'; // Show the message box for errors
        } else {
            messageBox.style.display = 'none'; // Hide the message box for success
        }
    }
});

//ChatGpt was used to help with code
