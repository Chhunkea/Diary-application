// LogIn: login page
document.getElementById('login-button').addEventListener('click', function(event) {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // Correct password to be matched
    let correctPassword = '123';
    
    // Check if the username and password are filled
    if (username === '' || password === '') {
        alert('Please fill your username and password correctly.');
        event.preventDefault(); // Prevent the form from being submitted
        return;
    }
    
    // Check if the entered password matches the correct password
    if (password === correctPassword) {
        // If the password correct redirect to another page
        window.location.href = './homepage.html'; 
    } else {
        // Alert the user if the password is incorrect
        alert('Incorrect password. Please try 123.');
        event.preventDefault();
    }
});