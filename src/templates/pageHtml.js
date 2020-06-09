//d-none d-md-block
export const pageHtml = 
`<div class="container-fluid">
        <div class="row title-row"><h4>Shop ***REMOVED***</h4></div>
        <div class="row">
            <main id="product-listing" role="main" class="col product-listing" >
               <!-- Product table inserts here dynamically-->
            </main>
            <nav class="bg-light sidebar">
                <div class="sidebar-sticky">
                    <ul class="nav flex-column shopping-cart">
                        <li class="list-group-item d-flex lh-condensed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>   
                            <h5>Shopping Cart</h5>
                          </li>
                          <li class="list-group-item d-flex justify-content-between">
                            <span>Total (USD):</span>
                            <span id='cart-total'>$0.00</span>
                          </li>
                          <li class="list-group-item d-flex justify-content-between">
                            <button class="btn btn-primary btn-lg btn-block" type="submit">Checkout</button>
                        </li>
                        <ul id="checkout-cart"  class="checkout-cart list-group mb-3">
                            <!--Checkout items inserted here dynamically-->
                        </ul>
                         
                    </ul>
                </div>
            </nav>
        </div>  
    </div>`