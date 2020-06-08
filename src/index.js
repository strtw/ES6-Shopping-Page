import {BuildShoppingPage} from './modules/product-page'
import { productList } from "./product-dummy-list.json";
let productData = productList[0].productFacetInfoList; //get product array


BuildShoppingPage.updateProducts(productData) //Page defaults to loading supplied data or you can update it with public method

//Just a hook to be able to view shopping cart data in the console to show that the public API works
window.BuildShoppingPage = BuildShoppingPage;


