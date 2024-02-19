function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}

function updateSeat(){
   const currentSeatElement = document.getElementById('current-seat');
   const currentSeatText = currentSeatElement.innerText;
   const currentSeat = parseInt(currentSeatText);
   const newSeat = currentSeat + 1;
   currentSeatElement.innerText = newSeat;

}

function availableSeat(){
    const currentSeatElement = document.getElementById('available-seat');
   const currentSeatText = currentSeatElement.innerText;
   const currentSeat = parseInt(currentSeatText);
   const newSeat = currentSeat - 1;
   currentSeatElement.innerText = newSeat;
}

function addChildElement(elementId){
const element = document.getElementById(elementId);
element.appendChild('add-element');
}

function setTotal(){
    const currentTotalElement = document.getElementById('initial-total');
    const currentTotalText = currentTotalElement.innerText;
    const currentTotal = parseInt(currentTotalText);
    const newTotal = currentTotal + 550;
    currentTotalElement.innerText = newTotal;
    
    const buttonsToDisable = document.querySelectorAll('.purchase-button'); 

    if (newTotal === 2200) {
        buttonsToDisable.forEach(button => {
            button.disabled = true;
        });
    }
    const applyButton = document.getElementById('applyButton');

    if (newTotal === 2200) {
        applyButton.classList.remove('hidden'); 
    } 
    
}

function manageBuyButton(){
    const validCoupons = [
        { code: 'New 15', discount: 100 },
        { code: 'Couple 20', discount: 150 }
    ];
    
    
    function applyCoupon() {
        const couponInput = document.getElementById('coupon-input').value;
        const purchaseButton = document.getElementById('purchase-button');
    
        if (couponInput === validCoupons) {
           
            purchaseButton.classList.removeAttribute('disabled');
            total -= discountAmount;
           const grandTotal = document.getElementById('grand-total');
           const newTotal = grandTotal + total;
        } else {
            alert('Invalid coupon code. Please try again.');
        }
    }
    
    
    document.getElementById('purchase-button').addEventListener('click', applyCoupon);
}

