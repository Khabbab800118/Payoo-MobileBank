// logout button functionailty
document.getElementById('logout-button').addEventListener('click', function (e) {
    e.preventDefault;
    window.location.href = 'index.html';
})

// add money banner card functionality
document.getElementById('add-money-card').addEventListener('click', function (e) {
    e.preventDefault;
    window.location.href = 'addmoney.html';
})

// cashout banner card functionality
document.getElementById('cashout-card').addEventListener('click', function (e) {
    e.preventDefault;
    window.location.href = 'cashout.html';
})

// transfer card functionality
document.getElementById('tranfer-card').addEventListener('click', function (e) {
    e.preventDefault;
    window.location.href = 'transfermoney.html';
})

// bonus card functionality
document.getElementById('bonus-card').addEventListener('click', function (e) {
    e.preventDefault;
    window.location.href = 'bonus.html';
})


// pay now button functionality
document.getElementById('pay-now-button').addEventListener('click', function (e) {
    e.preventDefault;
    const stockBillerNumber = 1817201709;
    const stockPinNumber = 1234;
    const addedAmount = parseInt(document.getElementById('amount-to-pay').value);
    const givenbillerNumber = parseInt(document.getElementById('given-biller-number').value);
    const givenPinNumber = parseInt(document.getElementById('given-pin-number').value);
    if (stockBillerNumber === givenbillerNumber && stockPinNumber === givenPinNumber && addedAmount > 0) {
        document.getElementById('available-blnc').innerText = - parseInt(document.getElementById('amount-to-pay').value) + parseInt(document.getElementById('available-blnc').innerText);
        alert('Bill has been paid')
    }
    else if (addedAmount < 0) {
        alert('Please enter valid amount')
    }
    else {
        alert('Mobile or Pin is wrong')
    }
})

// transactions card functionality
document.getElementById('transactions-card').addEventListener('click', function (e) {
    e.preventDefault;
    window.location.href = 'transactions.html';
})
