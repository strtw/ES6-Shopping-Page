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

  var quantityInputs = document.querySelectorAll(".product-item__quantity");

  quantityInputs.forEach((input) => {
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
    if (userChangesItemQuantity) {
      addQuantityToState(quantityInput, currentProduct, product);
      addNumItemsSelectedToState();
      updateCartButton(currentProduct, product);
      //remove the item from checkout
      removeFromCartIf(currentProduct, product);
    }
  });

  updateStateWithCartTotal(state);
  updateProductItemTotal();
  insertCartDataIntoCheckout(state.products, state.total);

  //Helper functions

  function changeItemQuantity(element, target) {
    if (target.classList.contains("decrement")) {
      if (quantityInput.value > 0) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
      }
    } else {
      quantityInput.value = parseInt(quantityInput.value) + 1;
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
    element.value = parseInt(element.value);
  }

  function resetInputToZero(element) {
    console.log(element, element.value);
    element.addEventListener("blur", () => {
      console.log("blur");
      if (element.value == 0) {
        element.value = "0";
      }
    });
  }
  function addQuantityToState(element, currentProduct, product) {
    if (currentProduct.title === product.title) {
      if (currentProduct.quantity !== e.target.value) {
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
