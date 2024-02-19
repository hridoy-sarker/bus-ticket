// function buyTicket(){
//     const bannerSection = document.getElementById('banner');
//     bannerSection.classList.add('hidden');

//     const paribahanSection = document.getElementById('paribahan');
//     paribahanSection.classList.remove('hidden');
//     const purchaseTicket = getTicket();
//     addBackgroundColorById(purchaseTicket);
// }

// function addBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-green-400');
// }

// function getTicket(){
//     const ticket= ['A1','A2','A3','A4','B1','B2','B3','B4'];
//     const randomTicket = Math.random()*4;
//     const index = Math.round(randomTicket);
//     const purchaseTicket = ticket[index];
//     return purchaseTicket;
// }

function continueBuyTicketA1(){
    // const purchaseTicket = getRandomTicket();
    // console.log(purchaseTicket);

    addBackgroundColorById('A1');
    updateSeat('A1');
    availableSeat('A1');
    showElementById('add-element1');
    setTotal('A1');
    // manageBuyButton('A1');
    
   
}
function continueBuyTicketA2(){
    addBackgroundColorById('A2');
    updateSeat('A2');
    availableSeat('A2');
    showElementById('add-element2');
    setTotal('A2');
    // manageBuyButton('A2');

}
function continueBuyTicketA3(){
    addBackgroundColorById('A3');
    updateSeat('A3');
    availableSeat('A3');
    showElementById('add-element3');
    setTotal('A3');
    // manageBuyButton('A3');

}
function continueBuyTicketA4(){
    addBackgroundColorById('A4');
    updateSeat('A4');
    availableSeat('A4');
    showElementById('add-element4');
    setTotal('A4');
    // manageBuyButton('A4');
}
function continueBuyTicketB1(){
    addBackgroundColorById('B1');
    updateSeat('B1');
    availableSeat('B1');
    showElementById('add-element5');
    setTotal('B1');
    // manageBuyButton('B1');
}
function continueBuyTicketB2(){
    addBackgroundColorById('B2');
    updateSeat('B2');
    availableSeat('B2');
    showElementById('add-element6');
    setTotal('B2');
    // manageBuyButton('B2');
}
function continueBuyTicketB3(){
    addBackgroundColorById('B3');
    updateSeat('B3');
    availableSeat('B3');
    showElementById('add-element7');
    setTotal('B3');
    // manageBuyButton('B3');
}
function continueBuyTicketB4(){
    addBackgroundColorById('B4');
    updateSeat('B4');
    availableSeat('B4');
    showElementById('add-element8');
    setTotal('B4');
    // manageBuyButton('B4');
}

function buyTicket(){
    hideElementById('banner');
    hideElementById('offer-section');
    showElementById('paribahan');

   
}
function successButton(){
    showElementById('success-btn');
}
//  // Variables
//  let totalPrice = 0;
//  const MAX_PRICE = 2200;

//  // Function to update total price
//  function updateTotalPrice(price) {
//    totalPrice += price;
//    if (totalPrice >= MAX_PRICE) {
//      document.getElementById('addToCartButton').disabled = true;
//    }
//  }

//  // Function to simulate adding an item to the cart
//  function addItemToCart(price) {
//    // Update total price
//    updateTotalPrice(price);
//    console.log('Item added. Total Price:', totalPrice);
//  }

//  // Event listener for button click
//  document.getElementById('addToCartButton').addEventListener('click', function() {
//    const itemPrice = /* Replace this with the price of the item */;
//    addItemToCart(itemPrice);
//  });