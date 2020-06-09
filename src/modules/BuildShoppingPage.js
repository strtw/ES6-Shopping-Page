import { pageHtml } from "../templates/pageHtml";
import { productTableMaker } from "../templates/productTableMaker";

const BuildShoppingPage = (function ProductPageBuilder() {
  let app = document.getElementById("app");
  app.innerHTML = pageHtml; //Set the main page scaffold

  //Public API functions
  function updateProductListing(products) {
    //updates DOM product listing area with products
    if (products) {
      //if products are passed to function
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

export { BuildShoppingPage };
