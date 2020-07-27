document.getElementById('case-increase').addEventListener('click', function() {
    handleProductChange('case', true);
})

document.getElementById('case-decrease').addEventListener('click', function() {
    handleProductChange('case', false);
})

document.getElementById('phone-increase').addEventListener('click', function() {
    handleProductChange('phone', true);
})

document.getElementById('phone-decrease').addEventListener('click', function() {
    handleProductChange('phone', false);
})

document.getElementById('case-remove').addEventListener('click', function() {
    productRemove('case');
})

document.getElementById('phone-remove').addEventListener('click', function() {
    productRemove('phone');
})

function productRemove(product) {
    document.getElementById(product + '-cart').style.display = 'none';
    document.getElementById(product + '-count').value = 0;
    calculateTotal();
}


function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = '$' + productTotal;
    calculateTotal();
}

function calculateTotal() {

    const phoneCount = getInputValue('phone');

    const caseCount = getInputValue('case');

    const totalPrice = (phoneCount * 1219) + (caseCount * 59);
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = totalPrice * 0.15;
    document.getElementById('tax-amount').innerText = '$' + Math.round(tax);

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + Math.round(grandTotal);
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}



// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;
// }

// function handleProductChange(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// }




// document.getElementById('case-increase').addEventListener('click', function() {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// })

// document.getElementById('case-decrease').addEventListener('click', function() {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// })