import { productList } from "../product-dummy-list.json";
let productData = productList[0].productFacetInfoList; //get product array
let productListings = document.getElementById("product-listing"); //get reference to main html element

var state = {
  products: productData,
  total:0,
  itemsSelected:0
};

const BuildProductPage = (function ProductPageBuilder(products) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  function productTableMaker(data) {
    let tableRows = "";
    data.map((row) => {
      //loop through each row, data-title attribute in the price selector input to get reference to the data to be used in DOM event listeners
      var currentRow = `<tr data-title="${row.title}">
                                  <td class="product-item__main">
                                      <div class="">
                                          <img class="product-item__image" src="${row.imagePath}"/>
                                      </div>
                                  </td>
                                  <td>
                                      <div>
                                          <a href="${row.productPagepath}"><h6>${row.title}</h6></a>
                                          <p class="product-listing__description">${row.shortDescription}</p>
                                      </div>
                                  </td>
                                <td data-title="${row.title}">
                                    <input class="product-item__quantity" type="number" id="quantity" name="quantity" min="0" value="0">
                                </td>
                                  <td>
                                      <div class="product-listing__price-column">
                                          <h6>${formatter.format(row.price)}</h6>
                                      </div>
                                  </td>
                              </tr> `;
      tableRows = currentRow + tableRows; //add each row to the previous row
    });
    // Return the table with the inserted tableRows
    return `
    <div class="table-fix" id="product-table">
    <table class="table">
                <thead>
                    <tr>
                        <th style="width: 16.66%">Product</th>
                        <th>Description</th>
                        <th style="width: 16.66%">Quantity</th>
                        <th class="text-center" style="width: 16.66%">Price (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows} 
                </tbody>
            </table>
            </div>`;
  }

  function buildProductListing(products) {
    productListings.innerHTML = productTableMaker(products); //insert product table into main element
    return;
  }

  
  //Internal function executions
  buildProductListing(products);
})(productData);

var shopping = (function shoppingUtils(products) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  

  state.products.forEach((product) => {
    product.quantity = 0;
    product.inCart = false
  });

  

  function handleListingActions(e) {
   
   // Boolean event listener variables indicate what action applied to
    var quantityChanged = e.target.classList.contains("product-item__quantity");
    var addToCartButtonClicked = e.target.classList.contains(
      "cart-add__button"
    );
    console.log(e.target)
    console.log(addToCartButtonClicked,'button')
    var addAllSelectedToCart = e.target.classList.contains("product-listing__add-selected");
    var productCheckBoxClicked =
      e.target.classList.contains("product-item__checkbox");
    
    //DOM variables
    var productTitle = e.target.closest("tr").dataset.title;
    var currentProduct = getCurrentProduct(productTitle);
    var selectAllCheckedButton = document.querySelector(".product-listing__add-selected")

    if (quantityChanged) {
      e.target.addEventListener("blur", () => {
        if (e.target.value == 0) {
          e.target.value = "0";
        }
      });
      e.target.value = e.target.value.replace(/^0+/, "");
    }

    state.products.forEach((product) => {
      if (quantityChanged) {
        
        addQuantityToState(e, currentProduct, product);
        addNumItemsSelectedToState()

        updateCartButton(currentProduct, product)

        function updateCartButton(currentProduct, product) {
          if (currentProduct.title === product.title) {
            if (!currentProduct.inCart) {
              updateAddToCartButton()
            }
          }
        }

        if (currentProduct.quantity < 1 && currentProduct.inCart) {//remove the item from checkout
          addCartStatusToState(currentProduct, product);
        }
      }
      console.log(state.itemsSelected,"seleced")

      if(addToCartButtonClicked){
        product.inCart = true;
        console.log("button click")
      }
    });
    state.total = calculateCartTotal(state.products)
    state.products.forEach((product)=>{
      product.itemTotal = itemTotal(product)
    })
    insertCartDataIntoCheckout(state.products)
    console.table(state);
    console.table(state.products)
  }

 

  function insertCartDataIntoCheckout(products){
    var checkout = document.getElementById("checkout-cart")
    var cart = '';
    products.forEach((product)=>{
      if(product.inCart && product.quantity > 0){
        cart +=
        `
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 data-title="${product.title}">${product.title}</h6>
            <span class="text-muted" style={float:"right"}>${product.quantity} x ${formatter.format(product.price)} = ${formatter.format(product.itemTotal)}</span>
            <span class="product-checkout__trash-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg></span>
            </div>
        </li>
      `
        
      }
      checkout.innerHTML = cart
      writeCartTotal();
    })
  }

  //Helper functions//

  function addItemsToCart(){
    state.product.forEach((product)=>{
      if(product.quantity > 0 ){
        product.inCart = true
      }
    })
  }

  function addNumItemsSelectedToState(){
    var totalItems = 0
    state.products.forEach((product)=>{
      if(!product.inCart){
        totalItems += parseInt(product.quantity)
      }
       
    })
    state.itemsSelected = totalItems
  }

  function updateAddToCartButton(){
    var button = document.querySelector('.cart-add button');
    var buttonText;
    if(state.itemsSelected > 0){
      buttonText = `Add ${state.itemsSelected} item(s) to cart`
      button.disabled = false
    }else{
      buttonText = 'Add to cart'
      button.disabled = true
    }
    button.innerHTML = buttonText
  }
  

  function itemTotal(item){
    return item.price * item.quantity
   }

 function calculateCartTotal(cartItems){
  var total = 0
  cartItems.forEach((item)=>{
    if(item.inCart){
      total += itemTotal(item)
    }
  })
  return total
}

  function writeCartTotal(){
    document.getElementById('cart-total').innerHTML = `${formatter.format(state.total)}`
  }

  function resetItemQuantityInput(element){
    element.value = 0
  }

  function handleCheckoutActions(e){
    

    (function removeItemFromCheckout(){
    var cartTrashIcon = e.target.closest('.product-checkout__trash-icon')
   
    if(cartTrashIcon){
      var productTitle = cartTrashIcon.previousElementSibling.previousElementSibling.dataset.title
      state.products.forEach((product) => {
        if(product.title === productTitle){
          var productQuantity = document.querySelector(`tr[data-title="${product.title}"] .product-item__quantity`)
          product.inCart = false;
          product.quantity = 0;
          product.itemTotal = 0;
          resetItemQuantityInput(productQuantity)
        }
      })
      insertCartDataIntoCheckout(state.products);
      state.total = calculateCartTotal(state.products)
      writeCartTotal();
     
    }
  })()
   
   console.table(state.products)
  }

  function handleCartAdd(e){

    state.products.forEach((product) => {
      if(product.quantity > 0){
        product.inCart = true;
        console.table(state.products)
      }
  })
  insertCartDataIntoCheckout(state.products);
  state.itemsSelected = 0
  updateAddToCartButton()
  
}


  function getCurrentProduct(productTitle) {
    return state.products.filter(
      (product) => product.title === productTitle
    )[0];
  }

  function addQuantityToState(e, currentProduct, product) {
    if (currentProduct.title === product.title) {
      if (currentProduct.quantity !== e.target.value) {
        product.quantity = e.target.value == isNaN(e.target.value) ? 0 : e.target.value
      }
    }
  }

  function addCartStatusToState(currentProduct, product) {
    if (currentProduct.title === product.title) {
      if (currentProduct.inCart && currentProduct.quantity < 1) {
        product.inCart = false
      } 
    }
  }

  document.getElementById("product-table").addEventListener("click", (e) => {
    handleListingActions(e);
  });

  document.getElementById("product-table").addEventListener("keyup", (e) => {
    handleListingActions(e);
  });

  document.getElementById('cart-add__button').addEventListener("click",(e) =>{
    handleCartAdd(e)
       
  })

  document.getElementById("checkout-cart").addEventListener("click", (e) => {

    handleCheckoutActions(e);
  });
})();

export { BuildProductPage, shopping };
