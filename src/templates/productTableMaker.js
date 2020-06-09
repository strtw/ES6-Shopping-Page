import { currencyFormatter } from "../utils/shoppingHelpers";

export const productTableMaker = function productTableMaker(data) {
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
                                    <div class="product-quantity-input">
                                    <input class="product-item__quantity" type="text" name="quantity" min="0" value="0">
                                    <span class="fa fa-caret-up increment product-quantity__control"></span>
                                    <span class="fa fa-caret-down decrement product-quantity__control"></span>
                                    </div>
                                </td>
                                  <td>
                                      <div class="product-listing__price-column">
                                          <h6>${currencyFormatter.format(
                                            row.price
                                          )}</h6>
                                      </div>
                                  </td>
                              </tr> `;
    tableRows = tableRows + currentRow; // ; //add each row to the previous row
  });
  // Return the table with the inserted tableRows
  return `
    <div class="table-fix" id="product-table">
    <table class="table">
                <thead class="table__header">
                    <tr>
                        <th style="width: 16.66%">Product</th>
                        <th>Description</th>
                        <th style="width:16.66%">Adjust Quantity</th>
                        <th class="text-center" style="width:16.66%">Price (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows} 
                    <tr class="table__blank-row">
                    <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div id="add-to-cart__container" class="add-to-cart__container">
            <button id="cart-add__button" class="cart-add__button btn btn-primary" disabled>Select item(s) to add</button>
           </div>
            `;
};
