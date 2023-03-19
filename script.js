const form = document.querySelector('.form');
const password = form.password;
const confirmPassword = form.confirmpassword;
const feedback = document.querySelector('.password-feedback');
let passwordMatch = false;


//  Check for matching passwords
confirmPassword.addEventListener('input', () => {
    if (password.value != confirmPassword.value) {
        feedback.innerText = 'Passwords do not match.';
        confirmPassword.classList.add('error');
        passwordMatch = false;
    } else {
        feedback.innerText = '';
        passwordMatch = true;
    }
});