import { productList } from "../product-dummy-list.json";
let productData = productList[0].productFacetInfoList; //get product array
let productListings = document.getElementById("product-listing"); //get reference to main html element

const BuildProductPage = (function ProductPageBuilder(products) {
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
                                      <div class="">
                                          <a href="${row.productPagepath}"><h4>${row.title}</h4></a>
                                          <p>${row.shortDescription}</p>
                                      </div>
                                  </td>
                                  <td data-title="${row.title}">
                                      <input class="product-item__quantity" type="number" id="quantity" name="quantity" min="0" value="0">
                                      <span class="product-item__cart-button"><button class="btn btn-primary btn-sm btn-block">Add to cart</button></span>
                                  </td>
                                  <td>
                                      <div class="">
                                          <h5>${row.price}</h5>
                                      </div>
                                  </td>
                              </tr> `;
      tableRows = currentRow + tableRows; //add each row to the previous row
    });
    // Return the table with the inserted tableRows
    return `<table class="table" id="product-table">
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
            </table>`;
  }

  function buildProductListing(products) {
    productListings.innerHTML = productTableMaker(products); //insert product table into main element
    return;
  }

  //Internal function executions
  buildProductListing(products);
})(productData);

var shopping = (function shoppingUtils(products) {
  var state = {
    products: productData,
  };

  function handleListingActions(e){
    var productTitle = e.target.closest("tr").dataset.title
    var currentProduct = getCurrentProduct(productTitle)
    var quantityChanged = e.target.classList.contains("product-item__quantity")
    var addedToCart = e.target.parentNode.classList.contains("product-item__cart-button")
    
    if (quantityChanged) {
        addQuantityToState(e,currentProduct)
    }
    if (addedToCart) {
        addCartStatusToState(currentProduct)
        toggleCartButton(e)
      }
  }

  function getCurrentProduct(productTitle){
      return state.products.filter(
        (product) => product.title === productTitle
      )[0];
  }

  function addQuantityToState(e,currentProduct) {      
      state.products.forEach((product)=>{
        if(currentProduct.title === product.title){
          if (currentProduct.quantity !== e.target.value) {
            product.quantity = e.target.value;
          }
        }
      })
    console.table(state.products);
  }

  function addCartStatusToState(currentProduct) {
    console.log(currentProduct,"status")
      state.products.forEach((product)=>{
        if(currentProduct.title === product.title){
          if (!currentProduct.inCart) {
            product.inCart = true;
          }else{
            product.inCart = false;
          }
        }
      })
      
    console.table(state.products);
  }

  function toggleCartButton(e){
     var cartButton = e.target
     console.log(cartButton)
     if(cartButton.classList.contains('btn-primary')){
       cartButton.classList.remove('btn-primary')
       cartButton.classList.add('btn-danger')
       cartButton.innerHTML = "Remove"
     }else{
      cartButton.classList.remove('btn-danger')
      cartButton.classList.add('btn-primary')
      cartButton.innerHTML = "Add to cart"
     }
  }

document.getElementById('product-table').addEventListener("click", (e) => {
    handleListingActions(e)
  });
})();

export { BuildProductPage, shopping };
