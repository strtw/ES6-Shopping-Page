import {pageHtml} from '../templates/pageHtml'
import {productTableMaker} from '../templates/productTableMaker'

const BuildShoppingPage = (function ProductPageBuilder() {
  let app = document.getElementById('app');
  app.innerHTML = pageHtml;
  
  let productListings = document.getElementById("product-listing"); //get reference to main html element

  //Public API functions
  function updateProductListing(products) {
    if(products){
      productListings.innerHTML = productTableMaker(products); //insert product table into main element
    //  shoppingUtils.setProductState(products)
    }
  }
 
  var publicAPI = {
    updateProducts:updateProductListing
  }

  return publicAPI

})();


export { BuildShoppingPage};
