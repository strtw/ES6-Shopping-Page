
export const insertCartDataIntoCheckout = function insertCartDataIntoCheckout(products,total) {
    var checkout = document.getElementById("checkout-cart");
    var cart = "";
    products.forEach((product) => {
      if (product.inCart && product.quantity > 0) {
        //If the product is in the cart
        cart +=
          //Create a new cart item
          `
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div class="product-item__product">
            <h6 data-title="${product.title}">${product.title}</h6>
            <span class="text-muted" style={float:"right"}>${
              product.quantity
            } x ${currencyFormatter.format(
            product.price
          )} = ${currencyFormatter.format(product.itemTotal)}</span>
            <span class="product-checkout__trash-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg></span>
            </div>
        </li>
      `;
      }
    });
    checkout.innerHTML = cart;
    updateCartTotalOnPage(total);
  }

  export const updateCartTotalOnPage = function updateCartTotalOnPage(num) {
    document.getElementById(
      "cart-total"
    ).innerHTML = `${currencyFormatter.format(num)}`;
  }

  //Currency Formatter
  export const currencyFormatter = new Intl.NumberFormat("en-US", {
     style: "currency",
     currency: "USD",
     minimumFractionDigits: 2,
   });

   
 
     export const updateCheckoutCartButton = function updateCheckoutCartButton(itemCount){
      console.log("count")
      var cartButtonItemCounts = document.querySelectorAll('.checkout-cart__control span');
      for(var i = 0;i<cartButtonItemCounts.length; i++){
        
        cartButtonItemCounts[i].innerHTML = `(${itemCount})`
      }
      
    
     }

    export const getNumItemsInCart = function getNumItemsInCart(state){
       state.totalItemsInCart = 0
       state.products.forEach((product)=>{
          if(product.inCart){
            state.totalItemsInCart += parseInt(product.quantity)
           }
       })
     }


export const handleCartAdd = function handleCartAdd(e,state) {
    state.products.forEach((product) => {
      if (product.quantity > 0) {
        product.inCart = true;
        updateStateWithCartTotal(state);
        updateCartTotalOnPage();
        updateCheckoutCartButton(state.totalItemsInCart)
      }
    });
    insertCartDataIntoCheckout(state.products,state.total);
    state.itemsSelected = 0;
    updateAddToCartButton(state);
  }

 export const updateStateWithCartTotal = function updateStateWithCartTotal(state) {
    state.total = calculateCartTotal(state.products);
  }

 export const calculateCartTotal =  function calculateCartTotal(cartItems) {
    var total = 0;
    cartItems.forEach((item) => {
      if (item.inCart) {
        total += itemTotal(item);
      }
    });
    return total;
  }

export const itemTotal = function itemTotal(item) {
    return item.price * item.quantity;
  }

 export const updateAddToCartButton = function updateAddToCartButton(state) {
    var button = document.querySelector(".cart-add button");
    var buttonText;
    if (state.itemsSelected > 0) {
      buttonText = `Add ${state.itemsSelected} item(s) to cart`;
      button.disabled = false;
    } else {
      buttonText = `Select item(s) to add`;
      button.disabled = true;
    }
    button.innerHTML = buttonText;
  }