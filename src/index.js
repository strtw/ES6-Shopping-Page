import { BuildShoppingPage } from "./modules/BuildShoppingPage";
import { productList } from "./product-dummy-list.json";
import shoppingUtils from "./modules/shoppingPageLogic.js";
import "./styles/styles.css";
let productData = productList[0].productFacetInfoList; //Load the product data

//Global application state
var state = {
  products: productData,
  total: 0,
  itemsSelected: 0,
  totalItemsInCart: 0,
};

//The functions below combine to update the application state and present changes to the user.

//Just a hook to be able to view shopping cart data in the console to show that the public API works
window.shoppingUtils = shoppingUtils(state); //Makes the application state available to the application

BuildShoppingPage.updateProductListing(state.products); //Loads the product data into the DOM
