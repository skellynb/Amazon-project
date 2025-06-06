export let cart = [];

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
}

