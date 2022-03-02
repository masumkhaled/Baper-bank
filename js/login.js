document.getElementById('login-submit').addEventListener('click', function(){
    // User email value
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // User password value
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'masum@gmail.com' && userPassword == 12345){
        window.location.href = 'banking.html';
    }
});