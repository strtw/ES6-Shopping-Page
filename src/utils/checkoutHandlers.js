import {
  insertCartDataIntoCheckout,
  updateCartTotalOnPage,
  updateStateWithCartTotal,
} from "./shoppingHelpers";

export const handleCheckoutActions = function handleCheckoutActions(e, state) {
  (function userRemovesItemFromCheckout() {
    //Execute this function on every checkout action
    var cartTrashIconClicked = e.target.closest(
      //User clicked the trash icon
      ".product-checkout__trash-icon"
    );

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
      //Get the state we just updated and:
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
