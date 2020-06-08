
import {insertCartDataIntoCheckout,updateCartTotalOnPage,updateStateWithCartTotal} from './shoppingHelpers'


export const handleCheckoutActions  = function handleCheckoutActions(e,state) {
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
        insertCartDataIntoCheckout(state.products,state.total);
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
  }