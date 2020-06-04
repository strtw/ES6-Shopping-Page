import {productList} from './product-dummy-list.json'
import productTableMaker from './modules/table-maker'
let products = productList[0].productFacetInfoList //get product array

const main = document.getElementById('main') //get reference to main html element

var ProductPage = (function productPageCreator(productList){
    return
})(products)

main.innerHTML = productTableMaker(products) //insert product table into main element