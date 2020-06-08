  //Shopping page utilities is a module which makes a product table dynamic
 function shoppingUtils(state) {

    //Application state object
  

    state.products.forEach((product) => {
      //Add new defaults to state
      product.quantity = 0;
      product.inCart = false;
    });
  
    //Currency Formatter
    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  
    function handleProductTableEvents(e) {
      // Boolean event listener variables indicate what action applied to
      var userChangesItemQuantity = e.target.classList.contains(
        "product-item__quantity"
      );
      var addToCartButtonClicked = e.target.classList.contains(
        "cart-add__button"
      );
      //DOM variables
      var productTitle = e.target.closest("tr").dataset.title;
      var currentProduct = getCurrentProduct(productTitle);
  
      //Conditionals that check for an action and execute logic
      if (userChangesItemQuantity) {
        resetInputToZero(e);
        replaceLeadingInputZero(e);
      }
  
      state.products.forEach((product) => {
        if (userChangesItemQuantity) {
          addQuantityToState(e, currentProduct, product);
          addNumItemsSelectedToState();
          updateCartButton(currentProduct, product);
          //remove the item from checkout
          removeFromCartIf(currentProduct, product);
        }
  
        if (addToCartButtonClicked) {
          product.inCart = true;
          updateCartTotalOnPage();
        }
      });
      updateStateWithCartTotal();
      updateProductItemTotal();
      insertCartDataIntoCheckout(state.products);
  
      //Helper functions
  
      function updateProductItemTotal() {
        state.products.forEach((product) => {
          product.itemTotal = itemTotal(product);
        });
      }
  
      function updateCartButton(currentProduct, product) {
        if (currentProduct.title === product.title) {
          if (!currentProduct.inCart) {
            updateAddToCartButton();
          }
        }
      }
  
      function replaceLeadingInputZero(e) {
        //Users shouldn't be able to select 002 as a quantity, only 2
        e.target.value = e.target.value.replace(/^0+/, "");
      }
  
      function resetInputToZero(e) {
        e.target.addEventListener("blur", () => {
          if (e.target.value == 0) {
            e.target.value = "0";
          }
        });
      }
    }
  
    function insertCartDataIntoCheckout(products) {
      var checkout = document.getElementById("checkout-cart");
      var cart = "";
      products.forEach((product) => {
        if (product.inCart && product.quantity > 0) {
          //If the product is in the cart
          cart +=
            //Create a new cart item
            `
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
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
      updateCartTotalOnPage();
    }
  
    //Helper functions//
  
    function addNumItemsSelectedToState() {
      var totalItems = 0;
      state.products.forEach((product) => {
        if (!product.inCart) {
          totalItems += parseInt(product.quantity);
        }
      });
      state.itemsSelected = totalItems;
    }
  
    function updateAddToCartButton() {
      var button = document.querySelector(".cart-add button");
      var buttonText;
      if (state.itemsSelected > 0) {
        buttonText = `Add ${state.itemsSelected} item(s) to cart`;
        button.disabled = false;
      } else {
        buttonText = "Add to cart";
        button.disabled = true;
      }
      button.innerHTML = buttonText;
    }
  
    function itemTotal(item) {
      return item.price * item.quantity;
    }
  
    function calculateCartTotal(cartItems) {
      var total = 0;
      cartItems.forEach((item) => {
        if (item.inCart) {
          total += itemTotal(item);
        }
      });
      return total;
    }
  
    function updateStateWithCartTotal() {
      state.total = calculateCartTotal(state.products);
    }
  
    function updateCartTotalOnPage() {
      document.getElementById(
        "cart-total"
      ).innerHTML = `${currencyFormatter.format(state.total)}`;
    }
  
    function resetItemQuantityInput(element) {
      element.value = 0;
    }
  
    function handleCheckoutActions(e) {
      (function userRemovesItemFromCheckout() {
        var cartTrashIconClicked = e.target.closest(
          ".product-checkout__trash-icon"
        );
  
        if (cartTrashIconClicked) {
          var productTitle =
            cartTrashIconClicked.previousElementSibling.previousElementSibling
              .dataset.title;
          state.products.forEach((product) => {
            if (product.title === productTitle) {
              var productQuantity = document.querySelector(
                `tr[data-title="${product.title}"] .product-item__quantity`
              );
              resetProductState(product);
              resetItemQuantityInput(productQuantity);
            }
          });
          insertCartDataIntoCheckout(state.products);
          updateStateWithCartTotal();
          updateCartTotalOnPage();
        }
      })();
  
      //Helper functions
  
      function resetProductState(product) {
        product.inCart = false;
        product.quantity = 0;
        product.itemTotal = 0;
      }
    }
  
    function handleCartAdd(e) {
      state.products.forEach((product) => {
        if (product.quantity > 0) {
          product.inCart = true;
          updateStateWithCartTotal();
          updateCartTotalOnPage();
        }
      });
      insertCartDataIntoCheckout(state.products);
      state.itemsSelected = 0;
      updateAddToCartButton();
    }
  
    function getCurrentProduct(productTitle) {
      return state.products.filter(
        (product) => product.title === productTitle
      )[0];
    }
  
    function addQuantityToState(e, currentProduct, product) {
      if (currentProduct.title === product.title) {
        if (currentProduct.quantity !== e.target.value) {
          product.quantity =
            e.target.value == isNaN(e.target.value) ? 0 : e.target.value;
        }
      }
    }
  
    function removeFromCartIf(currentProduct, product) {
      if (currentProduct.title === product.title) {
        if (currentProduct.inCart && currentProduct.quantity < 1) {
          product.inCart = false;
        }
      }
    }
  
   
      
      document.addEventListener("DOMContentLoaded", function(event) { 
        if(document.getElementById("product-table")){
  
          document.getElementById("product-table").addEventListener("keyup", (e) => {
            handleProductTableEvents(e);
          });
      
          document.getElementById("product-table").addEventListener("click", (e) => {
            handleProductTableEvents(e);
          });
        }
       
        document.getElementById("cart-add__button").addEventListener("click", (e) => {
          handleCartAdd(e);
        });
      
        document.getElementById("checkout-cart").addEventListener("click", (e) => {
          handleCheckoutActions(e);
        });
      });
  
      //Public API functions
  
      function getState(){
        return state;
      }
  
      function setProductState(products){
        state.products = products
      }
  
      var publicAPI = {
        getState:getState
      }
  
      return publicAPI;
    
  }

  export default shoppingUtils