import {BuildShoppingPage} from './modules/BuildShoppingPage'
import { productList } from "./product-dummy-list.json";
import  shoppingUtils  from './modules/shoppingPageLogic.js'
import './styles/styles.css'
let productData = productList[0].productFacetInfoList; //get product array


var state = {
    products: productData,
    total: 0,
    itemsSelected: 0,
    totalItemsInCart: 0
  };


//Just a hook to be able to view shopping cart data in the console to show that the public API works
window.shoppingUtils = shoppingUtils(state)

BuildShoppingPage.updateProducts(state.products) //Method that loads the product data




