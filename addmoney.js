// logout button functionailty
document.getElementById('logout-button').addEventListener('click', function (e) {
    e.preventDefault;
    window.location.href = 'index.html';
})

// add money button functionality
document.getElementById('add-money-button').addEventListener('click', function (e) {
    e.preventDefault;
    const stockMobileNumber = 1817201709;
    const stockPinNumber = 1234;
    const addedAmount = parseInt(document.getElementById('amount-to-add').value);
    const givenMobileNumber = parseInt(document.getElementById('given-mobile-number').value);
    const givenPinNumber = parseInt(document.getElementById('given-pin-number').value);
    if (stockMobileNumber === givenMobileNumber && stockPinNumber === givenPinNumber && addedAmount > 0) {
        document.getElementById('available-blnc').innerText = parseInt(document.getElementById('amount-to-add').value) + parseInt(document.getElementById('available-blnc').innerText);
        alert('Money has been added')
    }
    else if (addedAmount < 0) {
        alert('Please enter valid amount')
    }
    else {
        alert('Mobile or Pin is wrong')
    }
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


// paybill card functionality
document.getElementById('pay-bill-card').addEventListener('click', function (e) {
    e.preventDefault;
    window.location.href = 'paybill.html';
})

// transactions card functionality
document.getElementById('transactions-card').addEventListener('click', function (e) {
    e.preventDefault;
    window.location.href = 'transactions.html';
})
