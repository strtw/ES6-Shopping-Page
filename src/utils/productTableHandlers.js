//These utilities handle the checkout actions such as removing and updateing the cart total
//They are then imported into the ShoppingPageLogic.js module which is used in the main index.js file
//I set the code up to produce a main listener function that checks for various event types via DOM element
//If the DOM control matches the event, then I execute the corresponding function(s)

import {
  insertCartDataIntoCheckout,
  updateStateWithCartTotal,
  itemTotal,
  updateAddToCartButton,
} from "./shoppingHelpers";

export const handleProductTableEvents = function handleProductTableEvents(
  e,
  state
) {
  // Boolean event listener variables indicate what action applied to
  var userChangesItemQuantity = e.target.classList.contains(
    "product-quantity__control"
  );
  var userTypesQuantity = e.target.classList.contains("product-item__quantity");
  var quantityInputs = document.querySelectorAll(".product-item__quantity");

  quantityInputs.forEach((input) => {
    //#5: Automatically reset the quantity input to handle potential user error.
    input.addEventListener("blur", () => {
      //When a user clicks off the quantity adjuster
      resetInputToZero(input);
      replaceLeadingInputZero(input);
    });
  });
  //DOM variables
  var productTitle = e.target.closest("tr").dataset.title;
  var currentProduct = getCurrentProduct(productTitle);

  //Conditionals that check for an action and execute logic
  if (userChangesItemQuantity) {
    var quantityInput = e.target.closest(".product-quantity-input")
      .firstElementChild;
    changeItemQuantity(quantityInput, e.target);
  }

  state.products.forEach((product) => {
    //Loop through the products and check user actions.
    //TODO make this code more DRY by putting into helper function
    if (userChangesItemQuantity) {
      addQuantityToState(quantityInput, currentProduct, product);
      addNumItemsSelectedToState();
      updateCartButton(currentProduct, product);
      //remove the item from checkout
      removeFromCartIf(currentProduct, product);
    }
    if (userTypesQuantity) {
      addQuantityToState(e.target, currentProduct, product);
      addNumItemsSelectedToState();
      updateCartButton(currentProduct, product);
      //remove the item from checkout
      removeFromCartIf(currentProduct, product);
    }
  });

  //Update the state and DOM based on the user action.

  updateStateWithCartTotal(state);
  updateProductItemTotal();
  insertCartDataIntoCheckout(state.products, state.total);

  //Helper functions

  function changeItemQuantity(element, target) {
    if (target.classList.contains("decrement")) {
      if (element.value > 0) {
        element.value = parseInt(element.value) - 1;
      }
    } else {
      element.value = parseInt(element.value) + 1;
    }
  }

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

  function replaceLeadingInputZero(element) {
    //Users shouldn't be able to select 002 as a quantity, only 2
    element.value = isNaN(parseInt(element.value))
      ? 0
      : parseInt(element.value);
  }

  function resetInputToZero(element) {
    element.addEventListener("blur", () => {
      if (element.value == 0) {
        element.value = "0";
      }
    });
  }
  function addQuantityToState(element, currentProduct, product) {
    if (currentProduct.title === product.title) {
      if (element && currentProduct.quantity !== e.target.value) {
        product.quantity =
          element.value == isNaN(element.value) ? 0 : element.value;
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
};
