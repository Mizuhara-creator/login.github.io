document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        // Get the values from the inputs
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Perform your validation here
        if (email === '' || password === '') {
            alert('Please enter both email and password.');
            return;
        }

        console.log('Email:', email);
        console.log('Password:', password);

        // Reset the form after submission (optional)
        emailInput.value = '';
        passwordInput.value = '';
    });
});
