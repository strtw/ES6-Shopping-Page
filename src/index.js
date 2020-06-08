import {BuildShoppingPage} from './modules/product-page'
import { productList } from "./product-dummy-list.json";
import  shoppingUtils  from './modules/shoppingUtils.js'
let productData = productList[0].productFacetInfoList; //get product array


var state = {
    products: productData,
    total: 0,
    itemsSelected: 0,
  };

window.shoppingUtils = shoppingUtils(state)

BuildShoppingPage.updateProducts(state.products) //Page defaults to loading supplied data or you can update it with public method

//Just a hook to be able to view shopping cart data in the console to show that the public API works



