const memoryDefault = document.getElementById('memory-default');
const storageDefault = document.getElementById('storage-default');
const deliveryDefault = document.getElementById('delivery-default');


const updateMemory = document.getElementById('update-memory');
const updateStorage = document.getElementById('update-storage');
const superStorage = document.getElementById('super-storage');
const updateDelivery = document.getElementById('update-delivery');


const memoryPrice = document.getElementById('memory-price');
const storagePrice = document.getElementById('storage-price');
const deliveryPrice = document.getElementById('delivery-price');
const bestPrice = document.getElementById('best-price');
const endTotal = document.getElementById('end-total');





const balanceTotal = document.getElementById('balance-total');

memoryDefault.addEventListener('click',function(){
    memoryPrice.innerText = 0 ;
    decreaseBalance ()
    
})
storageDefault.addEventListener('click',function(){
    storagePrice.innerText = 0 ;
    decreaseBalance ()
    
})
deliveryDefault.addEventListener('click',function(){
    deliveryPrice.innerText = 0 ;
    decreaseBalance ()
    
})
 
updateMemory.addEventListener('click', function(){
    memoryPrice.innerText = 120 ;
    increaseBalance ()

})
updateStorage.addEventListener('click', function(){
    storagePrice.innerText = 200 ;
    increaseBalance ()

})
superStorage.addEventListener('click', function(){
    storagePrice.innerText = 300 ;
    increaseBalance ()

})
updateDelivery.addEventListener('click', function(){
    deliveryPrice.innerText = 10 ;
    increaseBalance ()

})







function decreaseBalance (){
    
    const bastPr = Number(bestPrice.innerText);
    const memoryPr = Number(memoryPrice.innerText);
    const storagePr = Number(storagePrice.innerText);
    const deliveryPr = Number(deliveryPrice.innerText);
    
    balanceTotal.innerText = bastPr - (memoryPr + storagePr + deliveryPr);
   endTotal.innerText = bastPr - (memoryPr + storagePr + deliveryPr);

}

function increaseBalance () {
   
    const bastPr = Number(bestPrice.innerText);
    const memoryPr = Number(memoryPrice.innerText);
    const storagePr = Number(storagePrice.innerText);
    const deliveryPr = Number(deliveryPrice.innerText);
    const totalBal = memoryPr + bastPr +storagePr +deliveryPr;
    
   balanceTotal.innerText = totalBal;
   endTotal.innerText = totalBal;
}

const inputCoupon = document.getElementById('coupon-input');
const couponBtn = document.getElementById('coupon');




inputCoupon.addEventListener('keyup',function (event){
    if (event.target.value ==  'hi'){
        couponBtn.removeAttribute('disabled');
        
       
    }
    else{
        couponBtn.setAttribute('disabled',true)
    }
});
couponBtn.addEventListener('click',function(){
    if (inputCoupon.value == 'hi'){
        discount ();
        inputCoupon.value = '';
        
    }
 })
 
 function discount (){
    const endNum = Number(endTotal.innerText);
    const endDisc = endNum - (endNum / 20);
    endTotal.innerText = endDisc;
 }