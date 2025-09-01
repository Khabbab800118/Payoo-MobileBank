// logout button functionailty
document.getElementById('logout-button').addEventListener('click', function (e) {
    e.preventDefault;
    window.location.href = 'index.html';
})
// send now button functionality added
document.getElementById('send-button').addEventListener('click', function (e) {
    e.preventDefault;
    const stockNumber = 1521224012;
    const stockPinNumber = 1234;
    const transferdAmount = parseInt(document.getElementById('amount-to-transfer').value);
    const givenNumber = parseInt(document.getElementById('given-user-number').value);
    const givenPinNumber = parseInt(document.getElementById('given-pin-number').value);
    const availableBalance = parseInt(document.getElementById('available-blnc').innerText)
    if (stockNumber === givenNumber && stockPinNumber === givenPinNumber && transferdAmount > 0 && availableBalance > 0) {
        document.getElementById('available-blnc').innerText = parseInt(document.getElementById('available-blnc').innerText) - parseInt(document.getElementById('amount-to-transfer').value);
        alert('Money has been tranfered')
    }
    else if (availableBalance <= 0) {
        alert('Balance is zero');
    }
    else if (addedAmount < 0) {
        alert('Please enter valid amount')
    }
    else {
        alert('Mobile or Pin is wrong')
    }
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
