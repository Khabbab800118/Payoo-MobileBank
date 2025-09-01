// login button funcionality
document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault();
    const stockMobileNumber = 1817201709;
    const stockPinNumber = 1234;
    const givenMobileNumber = parseInt(document.getElementById('given-mobile-number').value);
    const givenPinNumber = parseInt(document.getElementById('given-pin-number').value);
    if (stockMobileNumber===givenMobileNumber && stockPinNumber===givenPinNumber) {
        window.location.href='home.html'
    } else {
        alert('Mobile or Pin is wrong')
    }

});