//Shopping page utilities contains functions that make product table and checkout dynamic
//to achieve this we import helper funtions and eventhandlers for the cart and product listing area

import { handleProductTableEvents } from "../utils/productTableHandlers";
import { handleCheckoutActions } from "../utils/checkoutHandlers";
import {
  handleCartAdd,
  getNumItemsInCart,
  updateCheckoutCartButton,
} from "../utils/shoppingHelpers";

//Main module of file, adds some new defaults to state and adds event listeners to the application
//to listen for changes to state.
function shoppingUtils(state) {
  var checkoutCart = document.querySelector(".sidebar");

  state.products.forEach((product) => {
    //Add new defaults to state that was imported as JSON file
    product.quantity = 0;
    product.inCart = false;
  });

  //Once content is loaded
  document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("product-table").addEventListener("keyup", (e) => {
      //Product table listeners
      handleProductTableEvents(e, state);
    });

    document.getElementById("product-table").addEventListener("click", (e) => {
      //Product table listeners
      handleProductTableEvents(e, state);
    });

    document.getElementById("product-table").addEventListener("blur", (e) => {
      //Product table listeners
      handleProductTableEvents(e, state);
    });

    document.addEventListener("click", () => {
      //Global listener that updates cart quantity and DOM
      getNumItemsInCart(state);
      updateCheckoutCartButton(state.totalItemsInCart);
    });

    document
      .getElementById("cart-add__button")
      .addEventListener("click", (e) => {
        //When add to cart button is clicked
        handleCartAdd(e, state);
      });

    document.getElementById("checkout-cart").addEventListener("click", (e) => {
      //Checkout cart listeners
      handleCheckoutActions(e, state);
    });

    document
      .getElementById("checkout-cart--close")
      .addEventListener("click", (e) => {
        //Closes the checkout cart
        e.target.closest("nav").classList.remove("active");
        e.target.closest("nav").classList.add("hidden");
      });

    document
      .getElementById("checkout-cart--open")
      .addEventListener("click", (e) => {
        //Opens the checkout cart
        checkoutCart.classList.remove("hidden");
        checkoutCart.classList.add("active");
      });

    //Toggles the checkout cart based on viewport width
    let mql = window.matchMedia("(max-width: 700px)");
    if (mql.matches) {
      checkoutCart.classList.add("active");
      checkoutCart.classList.remove("hidden");
    } else {
      checkoutCart.classList.remove("active");
      checkoutCart.classList.add("hidden");
    }
  });

  //This is the Public API which allows a developer or user to get the application state at any point.

  function getState() {
    return state;
  }

  var publicAPI = {
    getState: getState,
  };

  return publicAPI;
}

//Export this file to be imported by the Index files, the main application file.
export default shoppingUtils;
