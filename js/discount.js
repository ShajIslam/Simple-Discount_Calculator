document.getElementById('apply-btn').addEventListener('click', function(){
    const inputField = document.getElementById('coupon-field');
   const input = inputField.value;
   
   if(input === 'SHAJ30'){
    const bodyContainer = document.querySelector('#body-container');
    const price = document.createElement('h1');
    bodyContainer.appendChild(price);


    const setPrice = getPrice('product-price');
    
    price.innerText = discount30(setPrice);
    inputField.value = '';

   }else{
    alert('Your Coupon is wrong, please provide right coupon');
    inputField.value = '';
   }
})

//necessary functions 

function discount30(price){
    const afterDiscount = (price /100)*70;
    const discountPrice = parseFloat(afterDiscount);
    return 'DISCOUNT PRICE: ' + discountPrice + '/- Tk Only';
}

function getPrice(elementId){
    const price = document.getElementById(elementId);
    const productPriceString = price.innerText;
    const productPrice = parseFloat(productPriceString);

    return productPrice;
}