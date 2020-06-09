import {handleProductTableEvents} from '../utils/productTableHandlers'
import {handleCheckoutActions} from '../utils/checkoutHandlers'
import {handleCartAdd} from '../utils/shoppingHelpers'


//Shopping page utilities contains functions that make product table and checkout dynamic
 
function shoppingUtils(state) {
  
    state.products.forEach((product) => {
      //Add new defaults to state that was imported as JSON file
      product.quantity = 0;
      product.inCart = false;
    });

      document.addEventListener("DOMContentLoaded", function(event) { 
        if(document.getElementById("product-table")){
  
          document.getElementById("product-table").addEventListener("keyup", (e) => {
            handleProductTableEvents(e,state);
          });
      
          document.getElementById("product-table").addEventListener("click", (e) => {
            handleProductTableEvents(e,state);
          });
        }
       
        document.getElementById("cart-add__button").addEventListener("click", (e) => {
          handleCartAdd(e,state);
        });
      
        document.getElementById("checkout-cart").addEventListener("click", (e) => {
          handleCheckoutActions(e,state);
        });

        let mql = window.matchMedia('(max-width: 700px)');
        if(mql.matches){
          var checkoutCart = document.querySelector(".sidebar")
          checkoutCart.classList.add("active")
        }else{
          ("no match")
        }



      });

     
  
      //Public API functions
  
      function getState(){
        return state;
      }
  
    
      var publicAPI = {
        getState:getState
      }
  
      return publicAPI;
    
  }

  export default shoppingUtils