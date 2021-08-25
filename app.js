function updateProductNumber(product,price,isIncrease){
    // update the product number
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if(isIncrease){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 1){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update the product cost based 
    let priceValue = document.getElementById(product+'-price');
    priceValue.innerText = parseInt(productNumber) * price;
        
}

function calculateTotal(){
    // calculate the total cost and update cart
    const subTotal = document.getElementById('subtotal'); 
    const phonePrice = document.getElementById('phone-price').innerText;
    const casePrice = document.getElementById('case-price').innerText;
    
    subTotal.innerText = parseInt(phonePrice) + parseInt(casePrice);
}

function calculateTaxnTotal(taxRate){
    const subTotal = document.getElementById('subtotal').innerText;
    const tax = document.getElementById('tax');
    tax.innerText = taxRate;

    const total = document.getElementById('total');
    total.innerText = parseInt(subTotal) + (parseInt(subTotal)*taxRate)/100 ;   
}

updateProductNumber('phone',1299);
updateProductNumber('case',59);
calculateTotal();
calculateTaxnTotal(10)

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1299,false);
    calculateTotal();
    calculateTaxnTotal(10)
});
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1299,true);
    calculateTotal();
    calculateTaxnTotal(10)
});


document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
    calculateTotal();
    calculateTaxnTotal(10)
});
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true);
    calculateTotal();
    calculateTaxnTotal(10)
});
