import {handleProductTableEvents} from '../utils/productTableHandlers'
import {handleCheckoutActions} from '../utils/checkoutHandlers'
import {handleCartAdd,getNumItemsInCart,updateCheckoutCartButton} from '../utils/shoppingHelpers'


//Shopping page utilities contains functions that make product table and checkout dynamic
 
function shoppingUtils(state) {
    var checkoutCart = document.querySelector(".sidebar")

    state.products.forEach((product) => {
      //Add new defaults to state that was imported as JSON file
      product.quantity = 0;
      product.inCart = false;
    });

      document.addEventListener("DOMContentLoaded", function(event) { 

       // if(document.getElementById("product-table")){
  
          document.getElementById("product-table").addEventListener("keyup", (e) => {
            handleProductTableEvents(e,state);
          });
      
          document.getElementById("product-table").addEventListener("click", (e) => {
            handleProductTableEvents(e,state);
          });
      //  }

        document.addEventListener('click',()=>{
          getNumItemsInCart(state)
          updateCheckoutCartButton(state.totalItemsInCart)
        })
      
        document.getElementById("cart-add__button").addEventListener("click", (e) => {
          handleCartAdd(e,state);
        });
      
        document.getElementById("checkout-cart").addEventListener("click", (e) => {
          handleCheckoutActions(e,state);
        });

        document.getElementById("sidebar__close").addEventListener('click',(e)=>{
          e.target.closest("nav").classList.remove('active');
          e.target.closest("nav").classList.add('hidden');
        });

        document.getElementById("checkout-cart__control-product").addEventListener('click',(e)=>{
          checkoutCart.classList.remove("hidden")
          checkoutCart.classList.add("active")
        })

        let mql = window.matchMedia('(max-width: 700px)');
        
        if(mql.matches){
          checkoutCart.classList.add("active")
          checkoutCart.classList.remove("hidden")
        }else{
          checkoutCart.classList.remove("active")
          checkoutCart.classList.add("hidden")
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