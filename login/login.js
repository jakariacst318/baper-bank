// step 1: add click event handler with the submit button
    document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('click')

// step 2: get the email address inside the email inpute field
// 2.1: always remember to use .value to get text from an inpute field
    const emailField = document.getElementById('user-email');
    email = emailField.value;
    // console.log(email)

// step 3: get password
// step 3.1: set id on the html element
// step 3.2: set the element
// step 3.3: set the value from the element
    const passwordField = document.getElementById('user-password');
    password = passwordField.value;
    // console.log(email, password);

// ****** DANGER : DO NOT VERIFY  email password on the client side ******

// step 4: verify email and password
    if (email === 'jsjakariacst@gmail.com' && password === 'jsjakaria42') {
        console.log('valid user boss')
        window.location.href = 'random-code.html'
    }
    else {
        alert('invalid password')
    }
})