// "Function" For Increase and Decrease Price Value/////////////////
function getInputValue(inputId, amount) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.innerText;
    const amountValue = parseInt(inputAmountText);
    inputField.innerText = amount;
    return amountValue;
}
////////////// "Function For Update Balance"//////////////
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseInt(balanceTotalText);
    return previousBalanceTotal;
}
function getCurrentsub() {
    const endTotal = document.getElementById('end-total');
    const endTotalText = endTotal.innerText;
    const previousendTotal = parseInt(endTotalText);
    return previousendTotal;
}
function updateBalance(amountValue, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const TotalEnd = document.getElementById('end-total');
    const previousendTotal = getCurrentsub();
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amountValue;
        TotalEnd.innerText = previousendTotal + amountValue;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amountValue;
        TotalEnd.innerText = previousendTotal - amountValue;
    }
}
/////////////// Adding Price Value ///////////////////////
document.getElementById('update-memory').addEventListener('click', function () {
    const depositAmount = getInputValue('memory-price', 180);
    updateBalance(180, true);
});
document.getElementById('update-storage').addEventListener('click', function () {
    const depositAmount = getInputValue('storage-price', 100);
    updateBalance(100, true);
});
document.getElementById('super-storage').addEventListener('click', function () {
    const depositAmount = getInputValue('storage-price', 180);
    updateBalance(180, true);
});

document.getElementById('update-delivery').addEventListener('click', function () {
    const depositAmount = getInputValue('delivery-price', 20);
    updateBalance(20, true);
});


///////////////// "Function" For Decrease Price Value ///////////////

function decreseAmmount(service, ammount) {
    const decresePrice = getInputValue(service + '-price', ammount);
    const currentBalance = getCurrentBalance();
    if (decresePrice < currentBalance) {

        updateBalance(decresePrice, false);
    }
}
/////////////// Decrease Price Value ///////////////////////
document.getElementById('memory-default').addEventListener('click', function () {
    decreseAmmount('memory', 0);
})
document.getElementById('storage-default').addEventListener('click', function () {
    decreseAmmount('storage', 0);
})
document.getElementById('delivery-default').addEventListener('click', function () {
    decreseAmmount('delivery', 0);
})

//////////////////////////////////------------------BONUS----------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//////////////////////////////// Coupon Enable /////////////////////////////////
document.getElementById('coupon-input').addEventListener('keyup', function (e) {
    const couponBtn = document.getElementById('coupon');
    if (e.target.value == 'stevekaku') {
        couponBtn.removeAttribute('disabled');
    }
    else {
        couponBtn.setAttribute('disabled', true);
    }

});
//////////////////////////////// Coupon Remainder /////////////////////////////////
document.getElementById('coupon').addEventListener('click', function () {
    const endTotal = document.getElementById('end-total');
    const previousendTotal = getCurrentsub();
    endTotal.innerText = previousendTotal - previousendTotal * 20 / 100;

});
