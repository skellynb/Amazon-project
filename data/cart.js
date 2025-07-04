export let cart = JSON.parse(localStorage.getItem('cart')); 
if (!cart) {
  cart = [{
     
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1

 
  
}];
}

function saveToStorage () {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
 let sameItem;
    cart.forEach((cartItem)=> {
      if (productId === cartItem.productId) {
        sameItem =cartItem;
      }
    });
    
    const select = document.querySelector(`.js-quantity-selector-${productId}`);

    const selector = Number(select.value);

    if (sameItem){
      sameItem.quantity += selector;
    }else{
      cart.push({
      productId,
      quantity: selector
    });
    }

    saveToStorage();
}

export function removeFromCart (productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart

  saveToStorage();
}


export function calculateCartQuantity() {
  let cartQuantity = 0;
    
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity
    });
    
    return cartQuantity;
  
}

export function updateQuantity(productId, newQuantity) {
  let sameItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      sameItem = cartItem;
    }
  });

  sameItem.quantity = newQuantity;

  saveToStorage();
}