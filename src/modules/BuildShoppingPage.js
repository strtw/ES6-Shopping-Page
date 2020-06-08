import {pageHtml} from '../templates/pageHtml'
import {productTableMaker} from '../templates/productTableMaker'

const BuildShoppingPage = (function ProductPageBuilder() {
  let app = document.getElementById('app');
  app.innerHTML = pageHtml;
  
  let productListings = document.getElementById("product-listing"); //get reference to main html element
  let cartAddArea = document.getElementById("cart-add");
  //Public API functions
  function updateProductListing(products) {
    if(products){
      var table = document.createElement('div')
      table.innerHTML = (productTableMaker(products))
      productListings.insertBefore(table,cartAddArea); //insert product table into main element
    }
  }
 
  var publicAPI = {
    updateProducts:updateProductListing
  }

  return publicAPI

})();


export { BuildShoppingPage};
