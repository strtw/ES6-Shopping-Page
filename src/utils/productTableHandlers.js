import {insertCartDataIntoCheckout,updateStateWithCartTotal,itemTotal,updateAddToCartButton} from './shoppingHelpers'

export const handleProductTableEvents = function handleProductTableEvents(e,state) {
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
        updateCartTotalOnPage(state.total);
      }
    });
    updateStateWithCartTotal(state);
    updateProductItemTotal();
    insertCartDataIntoCheckout(state.products,state.total);

    //Helper functions

    function getCurrentProduct(productTitle) {
        return state.products.filter(
          (product) => product.title === productTitle
        )[0];
      }

    function updateProductItemTotal() {
      state.products.forEach((product) => {
        product.itemTotal = itemTotal(product);
      });
    }

    function updateCartButton(currentProduct, product) {
      if (currentProduct.title === product.title) {
        if (!currentProduct.inCart) {
          updateAddToCartButton(state);
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

      function addNumItemsSelectedToState() {
        var totalItems = 0;
        state.products.forEach((product) => {
          if (!product.inCart) {
            totalItems += parseInt(product.quantity);
          }
        });
        state.itemsSelected = totalItems;
      }
  }