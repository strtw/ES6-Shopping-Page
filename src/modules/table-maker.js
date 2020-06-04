export default function productTableMaker(data) {
  let tableRows = "";
  data.map((row) => {//loop through each row
    var currentRow = `<tr>
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
                            <td>
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
