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

// get now button functionality added
document.getElementById('bonus-button').addEventListener('click', function (e) {
    e.preventDefault;
    const stockCoupon = 'Eid2026';
    const givenCouponNumber = document.getElementById('coupon-number').value;
    if (givenCouponNumber === stockCoupon) {
        document.getElementById('available-blnc').innerText = parseInt(document.getElementById('available-blnc').innerText) + 202;
    }
    else {
        alert('Coupon is not valid')
    }
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
