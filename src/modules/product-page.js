const BuildShoppingPage = (function ProductPageBuilder(products) {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  let productListings = document.getElementById("product-listing"); //get reference to main html element

  //Helper Functions

  function updateProductListing(products) {
    if(products){
      productListings.innerHTML = productTableMaker(products); //insert product table into main element
    //  shoppingUtils.setProductState(products)
    }
  
  }
  function productTableMaker(data) {
    let tableRows = "";
    data.map((row) => {
      //loop through each row, data-title attribute in the price selector input to get reference to the data to be used in DOM event listeners
      var currentRow = `<tr data-title="${row.title}">
                                  <td class="product-item__main">
                                      <div class="">
                                          <img class="product-item__image" src="${
                                            row.imagePath
                                          }"/>
                                      </div>
                                  </td>
                                  <td>
                                      <div>
                                          <a href="${
                                            row.productPagepath
                                          }"><h6>${row.title}</h6></a>
                                          <p class="product-listing__description">${
                                            row.shortDescription
                                          }</p>
                                      </div>
                                  </td>
                                <td data-title="${row.title}">
                                    <input class="product-item__quantity" type="number" id="quantity" name="quantity" min="0" value="0">
                                </td>
                                  <td>
                                      <div class="product-listing__price-column">
                                          <h6>${currencyFormatter.format(
                                            row.price
                                          )}</h6>
                                      </div>
                                  </td>
                              </tr> `;
      tableRows = tableRows + currentRow// ; //add each row to the previous row
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



  var publicAPI = {
    updateProducts:updateProductListing
  }

  return publicAPI

})();


export { BuildShoppingPage};
