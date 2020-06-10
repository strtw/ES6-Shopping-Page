//These utilities handle the checkout actions such as removing and updateing the cart total
//They are then imported into the ShoppingPageLogic.js module which is used in the main index.js file

import {
  insertCartDataIntoCheckout,
  updateCartTotalOnPage,
  updateStateWithCartTotal,
} from "./shoppingHelpers";

export const handleCheckoutActions = function handleCheckoutActions(e, state) {
  (function userRemovesItemFromCheckout() {
    //Execute this function on every checkout action, in order to have the most updated state.
    var cartTrashIconClicked = e.target.closest(
      ".product-checkout__trash-icon"
    );

    //Remove items from cart, if trash icon is clicked
    if (cartTrashIconClicked) {
      var productTitle =
        cartTrashIconClicked.previousElementSibling.previousElementSibling
          .dataset.title; //Get the product title
      state.products.forEach((product) => {
        if (product.title === productTitle) {
          //If the current product in the loops is the trashed product in the cart
          var productQuantity = document.querySelector(
            //Get the product quantity
            `tr[data-title="${product.title}"] .product-item__quantity`
          );
          resetProductState(product); //Reset product state to initial state, because the user doesn't want it anymore
          resetItemQuantityInput(productQuantity); //Reset the item quantity selector in the product page to 0
        }
      });
      //Get the state we just updated and update the checkout in the DOM.
      insertCartDataIntoCheckout(state.products, state.total);
      updateStateWithCartTotal(state);
      updateCartTotalOnPage(state.total);
    }
  })();

  //Helper functions

  function resetItemQuantityInput(element) {
    element.value = 0;
  }

  function resetProductState(product) {
    product.inCart = false;
    product.quantity = 0;
    product.itemTotal = 0;
  }
};
