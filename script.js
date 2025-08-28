// login button functonality setup
document.getElementById('loginButton').addEventListener('click', function () {
    const mobileNumber = 1817201709;
    const pinNumber = 1234;
    const givenMobileNumber = document.getElementById('number-input').value;
    const givenMobileNumberConverted = parseInt(0 + givenMobileNumber);
    const givenPinNumber = document.getElementById('pin-input').value;
    const givenPinNumberConverted = parseInt(givenPinNumber);
    if (mobileNumber === givenMobileNumberConverted && pinNumber === givenPinNumberConverted) {
        window.location.href = "./home.html"
    } else {
        alert('Mobile or Pin Number is incorrect')
    }
})
// logoutButton functionality setup
document.getElementById('logout-button').addEventListener('click', function () {
    window.location.href='./index.html'
})