//We import the page scaffold HTML and the product table listing maker
// To build whole page with the product data.

import { pageHtml } from "../templates/pageHtml";
import { productTableMaker } from "../templates/productTableMaker";

//This is the main module
const BuildShoppingPage = (function ProductPageBuilder() {
  let app = document.getElementById("app"); //Get refernce to main index HTML file.
  app.innerHTML = pageHtml; //Set the main page scaffold from the html template

  //Public API function, that does the building with the product data
  function updateProductListing(products) {
    if (products) {
      //if products are passed to function, get references to the productlisting area
      let productListings = document.getElementById("product-listing"); //Reference to product listings area
      let cartAddButton = document.getElementById("add-to-cart__container");
      let table = document.createElement("div");
      table.innerHTML = productTableMaker(products);
      productListings.insertBefore(table, cartAddButton); //insert product table into main element
    }
  }

  var publicAPI = {
    updateProductListing: updateProductListing,
  };
  return publicAPI;
})();

//Export this file to be used in the main index.js file.
export { BuildShoppingPage };
