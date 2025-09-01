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

// cashout button functionality
document.getElementById('cashout-button').addEventListener('click', function (e) {
    e.preventDefault;
    const stockAgentNumber = 1568151747;
    const stockPinNumber = 1234;
    const withdrawnAmount = parseInt(document.getElementById('amount-to-withdraw').value);
    const givenAgentNumber = parseInt(document.getElementById('given-agent-number').value);
    const givenPinNumber = parseInt(document.getElementById('given-pin-number').value);
    const availableBalance = parseInt(document.getElementById('available-blnc').innerText)
    if (stockAgentNumber === givenAgentNumber && stockPinNumber === givenPinNumber && withdrawnAmount > 0 && availableBalance > 0) {
        document.getElementById('available-blnc').innerText = parseInt(document.getElementById('available-blnc').innerText) - parseInt(document.getElementById('amount-to-withdraw').value);
        alert('Money has been withdrawn')
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
