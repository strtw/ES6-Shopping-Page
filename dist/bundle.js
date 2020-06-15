!(function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var a = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          n.d(
            i,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "/"),
    n((n.s = 2));
})([
  function (t) {
    t.exports = JSON.parse(
      '{"a":[{"hideLable":"[true]","label":"","prodDisplayCount":"300","productFacetInfoList":[{"imagePath":"https://picsum.photos/200/200","shortDescription":"matrix back-end interfaces","title":"De-engineered bi-directional service-desk","price":"1320"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"cultivate impactful schemas","title":"Managed national migration","price":"1099"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"innovate wireless e-markets","title":"Operative 5th generation flexibility","price":"1418"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"aggregate open-source mindshare","title":"Ameliorated scalable budgetary management","price":"1930"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"facilitate turn-key vortals","title":"Quality-focused grid-enabled array","price":"1240"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"empower interactive relationships","title":"Cross-group intermediate software","price":"1981"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"harness dynamic content","title":"Universal zero administration frame","price":"1709"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"benchmark best-of-breed e-tailers","title":"Advanced tangible migration","price":"1100"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"empower magnetic users","title":"Re-engineered bifurcated complexity","price":"1214"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"mesh cross-platform partnerships","title":"Profit-focused national contingency","price":"1761"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"monetize customized portals","title":"Robust fault-tolerant initiative","price":"1020"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"envisioneer rich web services","title":"Centralized zero tolerance application","price":"1700"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"incentivize transparent relationships","title":"Grass-roots modular capacity","price":"1661"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"mesh global niches","title":"Enhanced 5th generation standardization","price":"1834"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"e-enable frictionless markets","title":"Advanced client-server local area network","price":"1354"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"engineer killer e-markets","title":"Up-sized eco-centric info-mediaries","price":"1202"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"unleash cutting-edge channels","title":"Adaptive homogeneous product","price":"1881"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"unleash customized supply-chains","title":"Adaptive uniform Graphical User Interface","price":"1656"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"expedite visionary bandwidth","title":"Open-source fault-tolerant alliance","price":"1013"},{"imagePath":"https://picsum.photos/200/200","shortDescription":"orchestrate intuitive models","title":"Devolved upward-trending hardware","price":"1069"}]}]}'
    );
  },
  function (t, e, n) {},
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = function (t, e) {
        var n = document.getElementById("checkout-cart"),
          i = "";
        t.forEach(function (t) {
          t.inCart &&
            t.quantity > 0 &&
            (i += '\n        <li class="list-group-item d-flex justify-content-between lh-condensed">\n          <div class="checkout-item__product">\n            <h6 data-title="'
              .concat(t.title, '">')
              .concat(
                t.title,
                '</h6>\n            <span class="text-muted" style={float:"right"}>'
              )
              .concat(t.quantity, " x ")
              .concat(c.format(t.price), " = ")
              .concat(
                c.format(t.itemTotal),
                '</span>\n            <span class="product-checkout__trash-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg></span>\n            </div>\n        </li>\n      '
              ));
        }),
          (n.innerHTML = i),
          a(e);
      },
      a = function (t) {
        document.getElementById("cart-total").innerHTML = "".concat(
          c.format(t)
        );
      },
      c = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }),
      r = function (t) {
        for (
          var e = document.querySelectorAll(".checkout-cart__control span"),
            n = 0;
          n < e.length;
          n++
        )
          e[n].innerHTML = "(".concat(t, ")");
      },
      o = function (t) {
        t.total = s(t.products);
      },
      s = function (t) {
        var e = 0;
        return (
          t.forEach(function (t) {
            t.inCart && (e += l(t));
          }),
          e
        );
      },
      l = function (t) {
        return t.price * t.quantity;
      },
      u = function (t) {
        var e,
          n = document.querySelector(".add-to-cart__container button");
        t.itemsSelected > 0
          ? ((e = "Add ".concat(t.itemsSelected, " item(s) to cart")),
            (n.disabled = !1))
          : ((e = "Select item(s) to add"), (n.disabled = !0)),
          (n.innerHTML = e);
      },
      d =
        ((document.getElementById("app").innerHTML =
          '<div class="container-fluid">\n        <div class="row title-row">\n             <h4 class="product-listing__main-title">Shop Products</h4>\n             </div>\n            \n        <div class="row">\n      \n            <main id="product-listing" role="main" class="col product-listing" >\n            <button id="checkout-cart--open" type="button" class="btn btn-primary btn-sm checkout-cart__control checkout-cart--open">\n            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>   \n            <span>(0)</span>\n            </button>\n               \x3c!-- Product table inserts here dynamically--\x3e\n            </main>\n            <nav class="bg-light sidebar">\n           \n            \x3c!-- This is the shopping cart scaffold --\x3e \n            \n                <div id="sidebar_sticky" class="sidebar-sticky col-lg-3 col-sm-12 d-md-block d-sm-block bg-light sidebar pull-right">\n                   <ul class="checkout-cart__container">\n                        <li class="list-group-item d-flex lh-condensed checkout-cart__header">\n                        <button id="checkout-cart--close" type="button" class="close checkout-cart--close" aria-label="Close">\n                            <span aria-hidden="true">&times;</span>\n                        </button>\n                        <button type="button"  class="btn btn-primary btn-sm checkout-cart__control">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>   \n                        <span>(0)</span>\n                        </button>\n                        \n                          </li>\n                          <li class="list-group-item d-flex justify-content-between">\n                            <span>Total (USD):</span>\n                            <span id=\'cart-total\'>$0.00</span>\n                          </li>\n                          <li class="list-group-item d-flex justify-content-between">\n                            <button class="btn btn-primary btn-lg btn-block" type="submit">Checkout</button>\n                        </li>\n                        <ul id="checkout-cart"  class="checkout-cart list-group mb-3">\n                            \x3c!--Checkout items inserted here dynamically--\x3e\n                        </ul>\n                         \n                    </ul>\n                </div>\n            </nav>\n        </div>  \n    </div>'),
        {
          updateProductListing: function (t) {
            if (t) {
              var e = document.getElementById("product-listing"),
                n = document.getElementById("add-to-cart__container"),
                i = document.createElement("div");
              (i.innerHTML =
                ((a = ""),
                t.map(function (t) {
                  var e = '<tr data-title="'
                    .concat(
                      t.title,
                      '">\n                                  <td class="product-item__main">\n                                      <div class="">\n                                          <img class="product-item__image" src="'
                    )
                    .concat(
                      t.imagePath,
                      '"/>\n                                      </div>\n                                  </td>\n                                  <td>\n                                      <div>\n                                          <a href="'
                    )
                    .concat(t.productPagepath, '"><h6>')
                    .concat(
                      t.title,
                      '</h6></a>\n                                          <p class="product-listing__description">'
                    )
                    .concat(
                      t.shortDescription,
                      '</p>\n                                      </div>\n                                  </td>\n                                <td data-title="'
                    )
                    .concat(
                      t.title,
                      '">\n                                    <div class="product-quantity-input">\n                                    <input class="product-item__quantity" type="text" name="quantity" min="0" value="0">\n                                    <span class="fa fa-caret-up increment product-quantity__control"></span>\n                                    <span class="fa fa-caret-down decrement product-quantity__control"></span>\n                                    </div>\n                                </td>\n                                  <td>\n                                      <div class="product-listing__price-column">\n                                          <h6>'
                    )
                    .concat(
                      c.format(t.price),
                      "</h6>\n                                      </div>\n                                  </td>\n                              </tr> "
                    );
                  a += e;
                }),
                '\n    <div class="table-fix" id="product-table">\n    <table class="table">\n                <thead class="table__header">\n                    <tr>\n                        <th style="width: 16.66%">Product</th>\n                        <th>Description</th>\n                        <th style="width:16.66%">Adjust Quantity</th>\n                        <th class="text-center" style="width:16.66%">Price (USD)</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    '.concat(
                  a,
                  ' \n                    <tr class="table__blank-row">\n                    <td></td>\n                    </tr>\n                </tbody>\n            </table>\n            </div>\n            <div id="add-to-cart__container" class="add-to-cart__container">\n            <button id="cart-add__button" class="cart-add__button btn btn-primary" disabled>Select item(s) to add</button>\n           </div>\n            '
                ))),
                e.insertBefore(i, n);
            }
            var a;
          },
        }),
      p = n(0),
      h = function (t, e) {
        var n = t.target.classList.contains("product-quantity__control"),
          a = t.target.classList.contains("product-item__quantity");
        document
          .querySelectorAll(".product-item__quantity")
          .forEach(function (t) {
            t.addEventListener("blur", function () {
              var e;
              (e = t).addEventListener("blur", function () {
                0 == e.value && (e.value = "0");
              }),
                (function (t) {
                  t.value = isNaN(parseInt(t.value)) ? 0 : parseInt(t.value);
                })(t);
            });
          });
        var c,
          r = (function (t) {
            return e.products.filter(function (e) {
              return e.title === t;
            })[0];
          })(t.target.closest("tr").dataset.title);
        if (n) {
          var s = t.target.closest(".product-quantity-input").firstElementChild;
          (c = s),
            t.target.classList.contains("decrement")
              ? c.value > 0 && (c.value = parseInt(c.value) - 1)
              : (c.value = parseInt(c.value) + 1);
        }
        function d(t, n) {
          t.title === n.title && (t.inCart || u(e));
        }
        function p(e, n, i) {
          n.title === i.title &&
            e &&
            n.quantity !== t.target.value &&
            (i.quantity = e.value == isNaN(e.value) ? 0 : e.value);
        }
        function h(t, e) {
          t.title === e.title && t.inCart && t.quantity < 1 && (e.inCart = !1);
        }
        function m() {
          var t = 0;
          e.products.forEach(function (e) {
            e.inCart || (t += parseInt(e.quantity));
          }),
            (e.itemsSelected = t);
        }
        e.products.forEach(function (e) {
          n && (p(s, r, e), m(), d(r, e), h(r, e)),
            a && (p(t.target, r, e), m(), d(r, e), h(r, e));
        }),
          o(e),
          e.products.forEach(function (t) {
            t.itemTotal = l(t);
          }),
          i(e.products, e.total);
      };
    var m = function (t) {
        var e = document.querySelector(".sidebar");
        return (
          t.products.forEach(function (t) {
            (t.quantity = 0), (t.inCart = !1);
          }),
          document.addEventListener("DOMContentLoaded", function (n) {
            document
              .getElementById("product-table")
              .addEventListener("keyup", function (e) {
                h(e, t);
              }),
              document
                .getElementById("product-table")
                .addEventListener("click", function (e) {
                  h(e, t);
                }),
              document
                .getElementById("product-table")
                .addEventListener("blur", function (e) {
                  h(e, t);
                }),
              document.addEventListener("click", function () {
                !(function (t) {
                  (t.totalItemsInCart = 0),
                    t.products.forEach(function (e) {
                      e.inCart && (t.totalItemsInCart += parseInt(e.quantity));
                    });
                })(t),
                  r(t.totalItemsInCart);
              }),
              document
                .getElementById("cart-add__button")
                .addEventListener("click", function (e) {
                  !(function (t, e) {
                    e.products.forEach(function (t) {
                      t.quantity > 0 &&
                        ((t.inCart = !0), o(e), a(), r(e.totalItemsInCart));
                    }),
                      i(e.products, e.total),
                      (e.itemsSelected = 0),
                      u(e);
                  })(0, t);
                }),
              document
                .getElementById("checkout-cart")
                .addEventListener("click", function (e) {
                  !(function (t, e) {
                    !(function () {
                      var n = t.target.closest(".product-checkout__trash-icon");
                      if (n) {
                        var c =
                          n.previousElementSibling.previousElementSibling
                            .dataset.title;
                        e.products.forEach(function (t) {
                          if (t.title === c) {
                            var e = document.querySelector(
                              'tr[data-title="'.concat(
                                t.title,
                                '"] .product-item__quantity'
                              )
                            );
                            !(function (t) {
                              (t.inCart = !1),
                                (t.quantity = 0),
                                (t.itemTotal = 0);
                            })(t),
                              (e.value = 0);
                          }
                        }),
                          i(e.products, e.total),
                          o(e),
                          a(e.total);
                      }
                    })();
                  })(e, t);
                }),
              document
                .getElementById("checkout-cart--close")
                .addEventListener("click", function (t) {
                  t.target.closest("nav").classList.remove("active"),
                    t.target.closest("nav").classList.add("hidden");
                }),
              document
                .getElementById("checkout-cart--open")
                .addEventListener("click", function (t) {
                  e.classList.remove("hidden"), e.classList.add("active");
                }),
              window.matchMedia("(max-width: 700px)").matches
                ? (e.classList.add("active"), e.classList.remove("hidden"))
                : (e.classList.remove("active"), e.classList.add("hidden"));
          }),
          {
            getState: function () {
              return t;
            },
          }
        );
      },
      f =
        (n(1),
        {
          products: p.a[0].productFacetInfoList,
          total: 0,
          itemsSelected: 0,
          totalItemsInCart: 0,
        });
    (window.shoppingUtils = m(f)), d.updateProductListing(f.products);
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wYWdlSHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2hvcHBpbmdIZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0J1aWxkU2hvcHBpbmdQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvZHVjdFRhYmxlTWFrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Byb2R1Y3RUYWJsZUhhbmRsZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3Nob3BwaW5nUGFnZUxvZ2ljLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jaGVja291dEhhbmRsZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImluc2VydENhcnREYXRhSW50b0NoZWNrb3V0IiwicHJvZHVjdHMiLCJ0b3RhbCIsImNoZWNrb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhcnQiLCJmb3JFYWNoIiwicHJvZHVjdCIsImluQ2FydCIsInF1YW50aXR5IiwidGl0bGUiLCJjdXJyZW5jeUZvcm1hdHRlciIsImZvcm1hdCIsInByaWNlIiwiaXRlbVRvdGFsIiwiaW5uZXJIVE1MIiwidXBkYXRlQ2FydFRvdGFsT25QYWdlIiwibnVtIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJ1cGRhdGVDaGVja291dENhcnRCdXR0b24iLCJpdGVtQ291bnQiLCJjYXJ0QnV0dG9uSXRlbUNvdW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJ1cGRhdGVTdGF0ZVdpdGhDYXJ0VG90YWwiLCJzdGF0ZSIsImNhbGN1bGF0ZUNhcnRUb3RhbCIsImNhcnRJdGVtcyIsIml0ZW0iLCJ1cGRhdGVBZGRUb0NhcnRCdXR0b24iLCJidXR0b25UZXh0IiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIml0ZW1zU2VsZWN0ZWQiLCJkaXNhYmxlZCIsIkJ1aWxkU2hvcHBpbmdQYWdlIiwidXBkYXRlUHJvZHVjdExpc3RpbmciLCJwcm9kdWN0TGlzdGluZ3MiLCJjYXJ0QWRkQnV0dG9uIiwidGFibGUiLCJjcmVhdGVFbGVtZW50IiwidGFibGVSb3dzIiwibWFwIiwicm93IiwiY3VycmVudFJvdyIsImltYWdlUGF0aCIsInByb2R1Y3RQYWdlcGF0aCIsInNob3J0RGVzY3JpcHRpb24iLCJpbnNlcnRCZWZvcmUiLCJoYW5kbGVQcm9kdWN0VGFibGVFdmVudHMiLCJlIiwidXNlckNoYW5nZXNJdGVtUXVhbnRpdHkiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInVzZXJUeXBlc1F1YW50aXR5IiwiaW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWxlbWVudCIsImlzTmFOIiwicGFyc2VJbnQiLCJyZXBsYWNlTGVhZGluZ0lucHV0WmVybyIsImN1cnJlbnRQcm9kdWN0IiwicHJvZHVjdFRpdGxlIiwiZmlsdGVyIiwiZ2V0Q3VycmVudFByb2R1Y3QiLCJjbG9zZXN0IiwiZGF0YXNldCIsInF1YW50aXR5SW5wdXQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInVwZGF0ZUNhcnRCdXR0b24iLCJhZGRRdWFudGl0eVRvU3RhdGUiLCJyZW1vdmVGcm9tQ2FydElmIiwiYWRkTnVtSXRlbXNTZWxlY3RlZFRvU3RhdGUiLCJ0b3RhbEl0ZW1zIiwic2hvcHBpbmdVdGlscyIsImNoZWNrb3V0Q2FydCIsImV2ZW50IiwidG90YWxJdGVtc0luQ2FydCIsImdldE51bUl0ZW1zSW5DYXJ0IiwiaGFuZGxlQ2FydEFkZCIsImNhcnRUcmFzaEljb25DbGlja2VkIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInByb2R1Y3RRdWFudGl0eSIsInJlc2V0UHJvZHVjdFN0YXRlIiwiaGFuZGxlQ2hlY2tvdXRBY3Rpb25zIiwicmVtb3ZlIiwiYWRkIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJnZXRTdGF0ZSIsInByb2R1Y3RMaXN0IiwicHJvZHVjdEZhY2V0SW5mb0xpc3QiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBMUIsRUFBb0JrQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFBZVUsRUFBSSxVQUFXLENBQUVULFlBQVksRUFBTUssTUFBT0EsSUFDdEQsRUFBUEUsR0FBNEIsaUJBQVRGLEVBQW1CLElBQUksSUFBSU0sS0FBT04sRUFBT3JCLEVBQW9CVSxFQUFFZSxFQUFJRSxFQUFLLFNBQVNBLEdBQU8sT0FBT04sRUFBTU0sSUFBUUMsS0FBSyxLQUFNRCxJQUM5SSxPQUFPRixHQUlSekIsRUFBb0I2QixFQUFJLFNBQVMxQixHQUNoQyxJQUFJUyxFQUFTVCxHQUFVQSxFQUFPcUIsV0FDN0IsV0FBd0IsT0FBT3JCLEVBQWdCLFNBQy9DLFdBQThCLE9BQU9BLEdBRXRDLE9BREFILEVBQW9CVSxFQUFFRSxFQUFRLElBQUtBLEdBQzVCQSxHQUlSWixFQUFvQmEsRUFBSSxTQUFTaUIsRUFBUUMsR0FBWSxPQUFPakIsT0FBT2tCLFVBQVVDLGVBQWUxQixLQUFLdUIsRUFBUUMsSUFHekcvQixFQUFvQmtDLEVBQUksSUFJakJsQyxFQUFvQkEsRUFBb0JtQyxFQUFJLEcseXZHQ2xGOUMsSUNHTUMsRUFBNkIsU0FDeENDLEVBQ0FDLEdBRUEsSUFBSUMsRUFBV0MsU0FBU0MsZUFBZSxpQkFDbkNDLEVBQU8sR0FDWEwsRUFBU00sU0FBUSxTQUFDQyxHQUNaQSxFQUFRQyxRQUFVRCxFQUFRRSxTQUFXLElBRXZDSixHQUFJLDBLQUtvQkUsRUFBUUcsTUFMNUIsYUFLc0NILEVBQVFHLE1BTDlDLDZFQU9JSCxFQUFRRSxTQVBaLGNBUVFFLEVBQWtCQyxPQUMxQkwsRUFBUU0sT0FUUixjQVVLRixFQUFrQkMsT0FBT0wsRUFBUU8sV0FWdEMsOGhCQWlCUlosRUFBU2EsVUFBWVYsRUFDckJXLEVBQXNCZixJQUdYZSxFQUF3QixTQUErQkMsR0FDbEVkLFNBQVNDLGVBQWUsY0FBY1csVUFBdEMsVUFBcURKLEVBQWtCQyxPQUNyRUssS0FJU04sRUFBb0IsSUFBSU8sS0FBS0MsYUFBYSxRQUFTLENBQzlEQyxNQUFPLFdBQ1BDLFNBQVUsTUFDVkMsc0JBQXVCLElBR1pDLEVBQTJCLFNBQ3RDQyxHQU1BLElBSEEsSUFBSUMsRUFBdUJ0QixTQUFTdUIsaUJBQ2xDLGdDQUVPM0QsRUFBSSxFQUFHQSxFQUFJMEQsRUFBcUJFLE9BQVE1RCxJQUMvQzBELEVBQXFCMUQsR0FBR2dELFVBQXhCLFdBQXdDUyxFQUF4QyxNQTRCU0ksRUFBMkIsU0FDdENDLEdBRUFBLEVBQU01QixNQUFRNkIsRUFBbUJELEVBQU03QixXQUc1QjhCLEVBQXFCLFNBQTRCQyxHQUM1RCxJQUFJOUIsRUFBUSxFQU1aLE9BTEE4QixFQUFVekIsU0FBUSxTQUFDMEIsR0FDYkEsRUFBS3hCLFNBQ1BQLEdBQVNhLEVBQVVrQixPQUdoQi9CLEdBR0lhLEVBQVksU0FBbUJrQixHQUMxQyxPQUFPQSxFQUFLbkIsTUFBUW1CLEVBQUt2QixVQUdkd0IsRUFBd0IsU0FBK0JKLEdBQ2xFLElBQ0lLLEVBREFDLEVBQVNoQyxTQUFTaUMsY0FBYyxrQ0FFaENQLEVBQU1RLGNBQWdCLEdBQ3hCSCxFQUFhLE9BQUgsT0FBVUwsRUFBTVEsY0FBaEIsb0JBQ1ZGLEVBQU9HLFVBQVcsSUFFbEJKLEVBQWEsd0JBQ2JDLEVBQU9HLFVBQVcsR0FFcEJILEVBQU9wQixVQUFZbUIsR0N4R2ZLLEdBQ01wQyxTQUFTQyxlQUFlLE9BQzlCVyxVRlRrQixzZ0dFdUJOLENBQ2R5QixxQkFaRixTQUE4QnhDLEdBQzVCLEdBQUlBLEVBQVUsQ0FFWixJQUFJeUMsRUFBa0J0QyxTQUFTQyxlQUFlLG1CQUMxQ3NDLEVBQWdCdkMsU0FBU0MsZUFBZSwwQkFDeEN1QyxFQUFReEMsU0FBU3lDLGNBQWMsT0FDbkNELEVBQU01QixXQ2ZOOEIsRUFBWSxHRGV3QjdDLEVDZG5DOEMsS0FBSSxTQUFDQyxHQUVSLElBQUlDLEVBQWEsbUJBQUgsT0FBc0JELEVBQUlyQyxNQUExQix3TkFJMEJxQyxFQUFJRSxVQUo5QiwrT0FXMEJGLEVBQUlHLGdCQVg5QixpQkFZaUNILEVBQUlyQyxNQVpyQyx3R0FjMEJxQyxFQUFJSSxpQkFkOUIsd0pBa0JnQ0osRUFBSXJDLE1BbEJwQyw2cUJBMkI4QkMsRUFBa0JDLE9BQ3RCbUMsRUFBSWxDLE9BNUI5QixzSUFpQ2RnQyxHQUF3QkcsS0FHMUIsOGdCQVlvQkgsRUFacEIsa2FEdkJJSixFQUFnQlcsYUFBYVQsRUFBT0QsR0NqQlQsSUFDM0JHLEssT0NTT1EsRUFBMkIsU0FDdENDLEVBQ0F6QixHQUdBLElBQUkwQixFQUEwQkQsRUFBRUUsT0FBT0MsVUFBVUMsU0FDL0MsNkJBRUVDLEVBQW9CTCxFQUFFRSxPQUFPQyxVQUFVQyxTQUFTLDBCQUMvQnZELFNBQVN1QixpQkFBaUIsMkJBRWhDcEIsU0FBUSxTQUFDc0QsR0FFdEJBLEVBQU1DLGlCQUFpQixRQUFRLFdBaUZqQyxJQUEwQkMsS0EvRUxGLEdBZ0ZYQyxpQkFBaUIsUUFBUSxXQUNWLEdBQWpCQyxFQUFROUUsUUFDVjhFLEVBQVE5RSxNQUFRLFFBVnRCLFNBQWlDOEUsR0FFL0JBLEVBQVE5RSxNQUFRK0UsTUFBTUMsU0FBU0YsRUFBUTlFLFFBQ25DLEVBQ0FnRixTQUFTRixFQUFROUUsT0EzRW5CaUYsQ0FBd0JMLFNBSTVCLElBcUM0QkUsRUFwQ3hCSSxFQThDSixTQUEyQkMsR0FDekIsT0FBT3RDLEVBQU03QixTQUFTb0UsUUFDcEIsU0FBQzdELEdBQUQsT0FBYUEsRUFBUUcsUUFBVXlELEtBQy9CLEdBakRpQkUsQ0FERmYsRUFBRUUsT0FBT2MsUUFBUSxNQUFNQyxRQUFRN0QsT0FJbEQsR0FBSTZDLEVBQXlCLENBQzNCLElBQUlpQixFQUFnQmxCLEVBQUVFLE9BQU9jLFFBQVEsMkJBQ2xDRyxrQkErQnVCWCxFQTlCUFUsRUFBZWxCLEVBQUVFLE9BK0J6QkMsVUFBVUMsU0FBUyxhQUN4QkksRUFBUTlFLE1BQVEsSUFDbEI4RSxFQUFROUUsTUFBUWdGLFNBQVNGLEVBQVE5RSxPQUFTLEdBRzVDOEUsRUFBUTlFLE1BQVFnRixTQUFTRixFQUFROUUsT0FBUyxFQWdCOUMsU0FBUzBGLEVBQWlCUixFQUFnQjNELEdBQ3BDMkQsRUFBZXhELFFBQVVILEVBQVFHLFFBQzlCd0QsRUFBZTFELFFBQ2xCeUIsRUFBc0JKLElBbUI1QixTQUFTOEMsRUFBbUJiLEVBQVNJLEVBQWdCM0QsR0FDL0MyRCxFQUFleEQsUUFBVUgsRUFBUUcsT0FDL0JvRCxHQUFXSSxFQUFlekQsV0FBYTZDLEVBQUVFLE9BQU94RSxRQUNsRHVCLEVBQVFFLFNBQ05xRCxFQUFROUUsT0FBUytFLE1BQU1ELEVBQVE5RSxPQUFTLEVBQUk4RSxFQUFROUUsT0FLNUQsU0FBUzRGLEVBQWlCVixFQUFnQjNELEdBQ3BDMkQsRUFBZXhELFFBQVVILEVBQVFHLE9BQy9Cd0QsRUFBZTFELFFBQVUwRCxFQUFlekQsU0FBVyxJQUNyREYsRUFBUUMsUUFBUyxHQUt2QixTQUFTcUUsSUFDUCxJQUFJQyxFQUFhLEVBQ2pCakQsRUFBTTdCLFNBQVNNLFNBQVEsU0FBQ0MsR0FDakJBLEVBQVFDLFNBQ1hzRSxHQUFjZCxTQUFTekQsRUFBUUUsY0FHbkNvQixFQUFNUSxjQUFnQnlDLEVBL0Z4QmpELEVBQU03QixTQUFTTSxTQUFRLFNBQUNDLEdBR2xCZ0QsSUFDRm9CLEVBQW1CSCxFQUFlTixFQUFnQjNELEdBQ2xEc0UsSUFDQUgsRUFBaUJSLEVBQWdCM0QsR0FFakNxRSxFQUFpQlYsRUFBZ0IzRCxJQUUvQm9ELElBQ0ZnQixFQUFtQnJCLEVBQUVFLE9BQVFVLEVBQWdCM0QsR0FDN0NzRSxJQUNBSCxFQUFpQlIsRUFBZ0IzRCxHQUVqQ3FFLEVBQWlCVixFQUFnQjNELE9BTXJDcUIsRUFBeUJDLEdBdUJ2QkEsRUFBTTdCLFNBQVNNLFNBQVEsU0FBQ0MsR0FDdEJBLEVBQVFPLFVBQVlBLEVBQVVQLE1BdEJsQ1IsRUFBMkI4QixFQUFNN0IsU0FBVTZCLEVBQU01QixRQ2lDcEM4RSxNQXJGZixTQUF1QmxELEdBQ3JCLElBQUltRCxFQUFlN0UsU0FBU2lDLGNBQWMsWUFnRjFDLE9BOUVBUCxFQUFNN0IsU0FBU00sU0FBUSxTQUFDQyxHQUV0QkEsRUFBUUUsU0FBVyxFQUNuQkYsRUFBUUMsUUFBUyxLQUluQkwsU0FBUzBELGlCQUFpQixvQkFBb0IsU0FBVW9CLEdBQ3REOUUsU0FBU0MsZUFBZSxpQkFBaUJ5RCxpQkFBaUIsU0FBUyxTQUFDUCxHQUVsRUQsRUFBeUJDLEVBQUd6QixNQUc5QjFCLFNBQVNDLGVBQWUsaUJBQWlCeUQsaUJBQWlCLFNBQVMsU0FBQ1AsR0FFbEVELEVBQXlCQyxFQUFHekIsTUFHOUIxQixTQUFTQyxlQUFlLGlCQUFpQnlELGlCQUFpQixRQUFRLFNBQUNQLEdBRWpFRCxFQUF5QkMsRUFBR3pCLE1BRzlCMUIsU0FBUzBELGlCQUFpQixTQUFTLFlKa0JOLFNBQTJCaEMsR0FDMURBLEVBQU1xRCxpQkFBbUIsRUFDekJyRCxFQUFNN0IsU0FBU00sU0FBUSxTQUFDQyxHQUNsQkEsRUFBUUMsU0FDVnFCLEVBQU1xRCxrQkFBb0JsQixTQUFTekQsRUFBUUUsY0lwQjNDMEUsQ0FBa0J0RCxHQUNsQk4sRUFBeUJNLEVBQU1xRCxxQkFHakMvRSxTQUNHQyxlQUFlLG9CQUNmeUQsaUJBQWlCLFNBQVMsU0FBQ1AsSUptQkwsU0FBdUJBLEVBQUd6QixHQUNyREEsRUFBTTdCLFNBQVNNLFNBQVEsU0FBQ0MsR0FDbEJBLEVBQVFFLFNBQVcsSUFFckJGLEVBQVFDLFFBQVMsRUFDakJvQixFQUF5QkMsR0FDekJiLElBQ0FPLEVBQXlCTSxFQUFNcUQsc0JBR25DbkYsRUFBMkI4QixFQUFNN0IsU0FBVTZCLEVBQU01QixPQUNqRDRCLEVBQU1RLGNBQWdCLEVBQ3RCSixFQUFzQkosR0k3QmhCdUQsQ0FBYzlCLEVBQUd6QixNQUdyQjFCLFNBQVNDLGVBQWUsaUJBQWlCeUQsaUJBQWlCLFNBQVMsU0FBQ1AsSUMzQ25DLFNBQStCQSxFQUFHekIsSUFDckUsV0FFRSxJQUFJd0QsRUFBdUIvQixFQUFFRSxPQUFPYyxRQUNsQyxpQ0FJRixHQUFJZSxFQUFzQixDQUN4QixJQUFJbEIsRUFDRmtCLEVBQXFCQyx1QkFBdUJBLHVCQUN6Q2YsUUFBUTdELE1BQ2JtQixFQUFNN0IsU0FBU00sU0FBUSxTQUFDQyxHQUN0QixHQUFJQSxFQUFRRyxRQUFVeUQsRUFBYyxDQUVsQyxJQUFJb0IsRUFBa0JwRixTQUFTaUMsY0FBVCx5QkFFRjdCLEVBQVFHLE1BRk4sZ0NBcUI5QixTQUEyQkgsR0FDekJBLEVBQVFDLFFBQVMsRUFDakJELEVBQVFFLFNBQVcsRUFDbkJGLEVBQVFPLFVBQVksRUFwQmQwRSxDQUFrQmpGLEdBQ0tnRixFQWFyQnZHLE1BQVEsTUFUZGUsRUFBMkI4QixFQUFNN0IsU0FBVTZCLEVBQU01QixPQUNqRDJCLEVBQXlCQyxHQUN6QmIsRUFBc0JhLEVBQU01QixRQXpCaEMsR0Q0Q0l3RixDQUFzQm5DLEVBQUd6QixNQUczQjFCLFNBQ0dDLGVBQWUsd0JBQ2Z5RCxpQkFBaUIsU0FBUyxTQUFDUCxHQUUxQkEsRUFBRUUsT0FBT2MsUUFBUSxPQUFPYixVQUFVaUMsT0FBTyxVQUN6Q3BDLEVBQUVFLE9BQU9jLFFBQVEsT0FBT2IsVUFBVWtDLElBQUksYUFHMUN4RixTQUNHQyxlQUFlLHVCQUNmeUQsaUJBQWlCLFNBQVMsU0FBQ1AsR0FFMUIwQixFQUFhdkIsVUFBVWlDLE9BQU8sVUFDOUJWLEVBQWF2QixVQUFVa0MsSUFBSSxhQUlyQkMsT0FBT0MsV0FBVyxzQkFDcEJDLFNBQ05kLEVBQWF2QixVQUFVa0MsSUFBSSxVQUMzQlgsRUFBYXZCLFVBQVVpQyxPQUFPLFlBRTlCVixFQUFhdkIsVUFBVWlDLE9BQU8sVUFDOUJWLEVBQWF2QixVQUFVa0MsSUFBSSxjQVVmLENBQ2RJLFNBTEYsV0FDRSxPQUFPbEUsS0VoRlBBLEcsS0FBUSxDQUNWN0IsU0FKZ0JnRyxJQUFZLEdBQUdDLHFCQUsvQmhHLE1BQU8sRUFDUG9DLGNBQWUsRUFDZjZDLGlCQUFrQixJQU1wQlUsT0FBT2IsY0FBZ0JBLEVBQWNsRCxHQUVyQ1UsRUFBa0JDLHFCQUFxQlgsRUFBTTdCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJleHBvcnQgY29uc3QgcGFnZUh0bWwgPSBgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHRpdGxlLXJvd1wiPlxuICAgICAgICAgICAgIDxoNCBjbGFzcz1cInByb2R1Y3QtbGlzdGluZ19fbWFpbi10aXRsZVwiPlNob3AgUHJvZHVjdHM8L2g0PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIFxuICAgICAgICAgICAgPG1haW4gaWQ9XCJwcm9kdWN0LWxpc3RpbmdcIiByb2xlPVwibWFpblwiIGNsYXNzPVwiY29sIHByb2R1Y3QtbGlzdGluZ1wiID5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjaGVja291dC1jYXJ0LS1vcGVuXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBjaGVja291dC1jYXJ0X19jb250cm9sIGNoZWNrb3V0LWNhcnQtLW9wZW5cIj5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1zaG9wcGluZy1jYXJ0XCI+PGNpcmNsZSBjeD1cIjlcIiBjeT1cIjIxXCIgcj1cIjFcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVwiMjBcIiBjeT1cIjIxXCIgcj1cIjFcIj48L2NpcmNsZT48cGF0aCBkPVwiTTEgMWg0bDIuNjggMTMuMzlhMiAyIDAgMCAwIDIgMS42MWg5LjcyYTIgMiAwIDAgMCAyLTEuNjFMMjMgNkg2XCI+PC9wYXRoPjwvc3ZnPiAgIFxuICAgICAgICAgICAgPHNwYW4+KDApPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICA8IS0tIFByb2R1Y3QgdGFibGUgaW5zZXJ0cyBoZXJlIGR5bmFtaWNhbGx5LS0+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiYmctbGlnaHQgc2lkZWJhclwiPlxuICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gVGhpcyBpcyB0aGUgc2hvcHBpbmcgY2FydCBzY2FmZm9sZCAtLT4gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhcl9zdGlja3lcIiBjbGFzcz1cInNpZGViYXItc3RpY2t5IGNvbC1sZy0zIGNvbC1zbS0xMiBkLW1kLWJsb2NrIGQtc20tYmxvY2sgYmctbGlnaHQgc2lkZWJhciBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2hlY2tvdXQtY2FydF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGxoLWNvbmRlbnNlZCBjaGVja291dC1jYXJ0X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjaGVja291dC1jYXJ0LS1jbG9zZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIGNoZWNrb3V0LWNhcnQtLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBjaGVja291dC1jYXJ0X19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItc2hvcHBpbmctY2FydFwiPjxjaXJjbGUgY3g9XCI5XCIgY3k9XCIyMVwiIHI9XCIxXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cIjIwXCIgY3k9XCIyMVwiIHI9XCIxXCI+PC9jaXJjbGU+PHBhdGggZD1cIk0xIDFoNGwyLjY4IDEzLjM5YTIgMiAwIDAgMCAyIDEuNjFoOS43MmEyIDIgMCAwIDAgMi0xLjYxTDIzIDZINlwiPjwvcGF0aD48L3N2Zz4gICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPigwKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbCAoVVNEKTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2NhcnQtdG90YWwnPiQwLjAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrXCIgdHlwZT1cInN1Ym1pdFwiPkNoZWNrb3V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwiY2hlY2tvdXQtY2FydFwiICBjbGFzcz1cImNoZWNrb3V0LWNhcnQgbGlzdC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLUNoZWNrb3V0IGl0ZW1zIGluc2VydGVkIGhlcmUgZHluYW1pY2FsbHktLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+ICBcbiAgICA8L2Rpdj5gO1xuIiwiLy9TaG9wcGluZyBoZWxwZXJzIGFyZSBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBieSBwcm9kdWN0IGFuZCBjaGVja291dCBoYW5kbGVycywgc28gaXQgbWFkZSBzZW5zZSB0b1xuLy9wdXQgdGhlbSBpbiBhIHNlcGFyYXRlIGZpbGUgc28gdGhlIGhhbmRsZXJzIGNvdWxkIGltcG9ydCB0aGVtIGFzIG5lZWRlZC5cblxuZXhwb3J0IGNvbnN0IGluc2VydENhcnREYXRhSW50b0NoZWNrb3V0ID0gZnVuY3Rpb24gaW5zZXJ0Q2FydERhdGFJbnRvQ2hlY2tvdXQoXG4gIHByb2R1Y3RzLFxuICB0b3RhbFxuKSB7XG4gIHZhciBjaGVja291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tvdXQtY2FydFwiKTtcbiAgdmFyIGNhcnQgPSBcIlwiOyAvL0NhcnQgRE9NIGlzIGVtcHR5XG4gIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICBpZiAocHJvZHVjdC5pbkNhcnQgJiYgcHJvZHVjdC5xdWFudGl0eSA+IDApIHtcbiAgICAgIC8vSWYgdGhlIHByb2R1Y3QgaXMgaW4gdGhlIGNhcnRcbiAgICAgIGNhcnQgKz1cbiAgICAgICAgLy9DcmVhdGUgYSBuZXcgY2FydCBpdGVtXG4gICAgICAgIGBcbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBsaC1jb25kZW5zZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tvdXQtaXRlbV9fcHJvZHVjdFwiPlxuICAgICAgICAgICAgPGg2IGRhdGEtdGl0bGU9XCIke3Byb2R1Y3QudGl0bGV9XCI+JHtwcm9kdWN0LnRpdGxlfTwvaDY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWRcIiBzdHlsZT17ZmxvYXQ6XCJyaWdodFwifT4ke1xuICAgICAgICAgICAgICBwcm9kdWN0LnF1YW50aXR5XG4gICAgICAgICAgICB9IHggJHtjdXJyZW5jeUZvcm1hdHRlci5mb3JtYXQoXG4gICAgICAgICAgcHJvZHVjdC5wcmljZVxuICAgICAgICApfSA9ICR7Y3VycmVuY3lGb3JtYXR0ZXIuZm9ybWF0KHByb2R1Y3QuaXRlbVRvdGFsKX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3QtY2hlY2tvdXRfX3RyYXNoLWljb25cIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItdHJhc2gtMlwiPjxwb2x5bGluZSBwb2ludHM9XCIzIDYgNSA2IDIxIDZcIi8+PHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiLz48bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCIvPjxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIi8+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgIH1cbiAgfSk7XG4gIGNoZWNrb3V0LmlubmVySFRNTCA9IGNhcnQ7IC8vVXBkYXRlIHRoZSBjaGVja291dCBwcm9kdWN0IGxpc3RpbmdzLCB0aGVuOlxuICB1cGRhdGVDYXJ0VG90YWxPblBhZ2UodG90YWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhcnRUb3RhbE9uUGFnZSA9IGZ1bmN0aW9uIHVwZGF0ZUNhcnRUb3RhbE9uUGFnZShudW0pIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LXRvdGFsXCIpLmlubmVySFRNTCA9IGAke2N1cnJlbmN5Rm9ybWF0dGVyLmZvcm1hdChcbiAgICBudW1cbiAgKX1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbmN5Rm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICBjdXJyZW5jeTogXCJVU0RcIixcbiAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDaGVja291dENhcnRCdXR0b24gPSBmdW5jdGlvbiB1cGRhdGVDaGVja291dENhcnRCdXR0b24oXG4gIGl0ZW1Db3VudFxuKSB7XG4gIC8vVGhlcmUgYXJlIHR3byBvZiB0aGVzZSBidXR0b25zIGJ1dCBvbmx5IG9uZSBpcyB2aXNpYmxlIGF0IGEgdGltZSB0byB0aGUgdmlld2VyXG4gIHZhciBjYXJ0QnV0dG9uSXRlbUNvdW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuY2hlY2tvdXQtY2FydF9fY29udHJvbCBzcGFuXCJcbiAgKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXJ0QnV0dG9uSXRlbUNvdW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNhcnRCdXR0b25JdGVtQ291bnRzW2ldLmlubmVySFRNTCA9IGAoJHtpdGVtQ291bnR9KWA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXROdW1JdGVtc0luQ2FydCA9IGZ1bmN0aW9uIGdldE51bUl0ZW1zSW5DYXJ0KHN0YXRlKSB7XG4gIHN0YXRlLnRvdGFsSXRlbXNJbkNhcnQgPSAwO1xuICBzdGF0ZS5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgaWYgKHByb2R1Y3QuaW5DYXJ0KSB7XG4gICAgICBzdGF0ZS50b3RhbEl0ZW1zSW5DYXJ0ICs9IHBhcnNlSW50KHByb2R1Y3QucXVhbnRpdHkpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2FydEFkZCA9IGZ1bmN0aW9uIGhhbmRsZUNhcnRBZGQoZSwgc3RhdGUpIHtcbiAgc3RhdGUucHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgIGlmIChwcm9kdWN0LnF1YW50aXR5ID4gMCkge1xuICAgICAgLy9Pbmx5IGFkZCBpdGVtcyB0byBjYXJ0IGlmIHRoZXkgYXJlID4gMFxuICAgICAgcHJvZHVjdC5pbkNhcnQgPSB0cnVlOyAvL0FkZCB0aGUgaXRlbVxuICAgICAgdXBkYXRlU3RhdGVXaXRoQ2FydFRvdGFsKHN0YXRlKTtcbiAgICAgIHVwZGF0ZUNhcnRUb3RhbE9uUGFnZSgpO1xuICAgICAgdXBkYXRlQ2hlY2tvdXRDYXJ0QnV0dG9uKHN0YXRlLnRvdGFsSXRlbXNJbkNhcnQpO1xuICAgIH1cbiAgfSk7XG4gIGluc2VydENhcnREYXRhSW50b0NoZWNrb3V0KHN0YXRlLnByb2R1Y3RzLCBzdGF0ZS50b3RhbCk7XG4gIHN0YXRlLml0ZW1zU2VsZWN0ZWQgPSAwOyAvL1Jlc2V0IHRoZSBpdGVtcyBzZWxlY3RlZCBiZWNhdXNlIGFsbCB0aGUgc2VsZWN0ZWQgaXRlbXMgYXJlIG5vdyBpbiB0aGUgY2FydFxuICB1cGRhdGVBZGRUb0NhcnRCdXR0b24oc3RhdGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0YXRlV2l0aENhcnRUb3RhbCA9IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlV2l0aENhcnRUb3RhbChcbiAgc3RhdGVcbikge1xuICBzdGF0ZS50b3RhbCA9IGNhbGN1bGF0ZUNhcnRUb3RhbChzdGF0ZS5wcm9kdWN0cyk7XG59O1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlQ2FydFRvdGFsID0gZnVuY3Rpb24gY2FsY3VsYXRlQ2FydFRvdGFsKGNhcnRJdGVtcykge1xuICB2YXIgdG90YWwgPSAwO1xuICBjYXJ0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmluQ2FydCkge1xuICAgICAgdG90YWwgKz0gaXRlbVRvdGFsKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0b3RhbDtcbn07XG5cbmV4cG9ydCBjb25zdCBpdGVtVG90YWwgPSBmdW5jdGlvbiBpdGVtVG90YWwoaXRlbSkge1xuICByZXR1cm4gaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQWRkVG9DYXJ0QnV0dG9uID0gZnVuY3Rpb24gdXBkYXRlQWRkVG9DYXJ0QnV0dG9uKHN0YXRlKSB7XG4gIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10by1jYXJ0X19jb250YWluZXIgYnV0dG9uXCIpO1xuICB2YXIgYnV0dG9uVGV4dDtcbiAgaWYgKHN0YXRlLml0ZW1zU2VsZWN0ZWQgPiAwKSB7XG4gICAgYnV0dG9uVGV4dCA9IGBBZGQgJHtzdGF0ZS5pdGVtc1NlbGVjdGVkfSBpdGVtKHMpIHRvIGNhcnRgO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGJ1dHRvblRleHQgPSBgU2VsZWN0IGl0ZW0ocykgdG8gYWRkYDtcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSBidXR0b25UZXh0O1xufTtcbiIsIi8vV2UgaW1wb3J0IHRoZSBwYWdlIHNjYWZmb2xkIEhUTUwgYW5kIHRoZSBwcm9kdWN0IHRhYmxlIGxpc3RpbmcgbWFrZXJcbi8vIFRvIGJ1aWxkIHdob2xlIHBhZ2Ugd2l0aCB0aGUgcHJvZHVjdCBkYXRhLlxuXG5pbXBvcnQgeyBwYWdlSHRtbCB9IGZyb20gXCIuLi90ZW1wbGF0ZXMvcGFnZUh0bWxcIjtcbmltcG9ydCB7IHByb2R1Y3RUYWJsZU1ha2VyIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9wcm9kdWN0VGFibGVNYWtlclwiO1xuXG4vL1RoaXMgaXMgdGhlIG1haW4gbW9kdWxlXG5jb25zdCBCdWlsZFNob3BwaW5nUGFnZSA9IChmdW5jdGlvbiBQcm9kdWN0UGFnZUJ1aWxkZXIoKSB7XG4gIGxldCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTsgLy9HZXQgcmVmZXJuY2UgdG8gbWFpbiBpbmRleCBIVE1MIGZpbGUuXG4gIGFwcC5pbm5lckhUTUwgPSBwYWdlSHRtbDsgLy9TZXQgdGhlIG1haW4gcGFnZSBzY2FmZm9sZCBmcm9tIHRoZSBodG1sIHRlbXBsYXRlXG5cbiAgLy9QdWJsaWMgQVBJIGZ1bmN0aW9uLCB0aGF0IGRvZXMgdGhlIGJ1aWxkaW5nIHdpdGggdGhlIHByb2R1Y3QgZGF0YVxuICBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0TGlzdGluZyhwcm9kdWN0cykge1xuICAgIGlmIChwcm9kdWN0cykge1xuICAgICAgLy9pZiBwcm9kdWN0cyBhcmUgcGFzc2VkIHRvIGZ1bmN0aW9uLCBnZXQgcmVmZXJlbmNlcyB0byB0aGUgcHJvZHVjdGxpc3RpbmcgYXJlYVxuICAgICAgbGV0IHByb2R1Y3RMaXN0aW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1saXN0aW5nXCIpOyAvL1JlZmVyZW5jZSB0byBwcm9kdWN0IGxpc3RpbmdzIGFyZWFcbiAgICAgIGxldCBjYXJ0QWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG8tY2FydF9fY29udGFpbmVyXCIpO1xuICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhYmxlLmlubmVySFRNTCA9IHByb2R1Y3RUYWJsZU1ha2VyKHByb2R1Y3RzKTtcbiAgICAgIHByb2R1Y3RMaXN0aW5ncy5pbnNlcnRCZWZvcmUodGFibGUsIGNhcnRBZGRCdXR0b24pOyAvL2luc2VydCBwcm9kdWN0IHRhYmxlIGludG8gbWFpbiBlbGVtZW50XG4gICAgfVxuICB9XG5cbiAgdmFyIHB1YmxpY0FQSSA9IHtcbiAgICB1cGRhdGVQcm9kdWN0TGlzdGluZzogdXBkYXRlUHJvZHVjdExpc3RpbmcsXG4gIH07XG4gIHJldHVybiBwdWJsaWNBUEk7XG59KSgpO1xuXG4vL0V4cG9ydCB0aGlzIGZpbGUgdG8gYmUgdXNlZCBpbiB0aGUgbWFpbiBpbmRleC5qcyBmaWxlLlxuZXhwb3J0IHsgQnVpbGRTaG9wcGluZ1BhZ2UgfTtcbiIsImltcG9ydCB7IGN1cnJlbmN5Rm9ybWF0dGVyIH0gZnJvbSBcIi4uL3V0aWxzL3Nob3BwaW5nSGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdFRhYmxlTWFrZXIgPSBmdW5jdGlvbiBwcm9kdWN0VGFibGVNYWtlcihkYXRhKSB7XG4gIGxldCB0YWJsZVJvd3MgPSBcIlwiO1xuICBkYXRhLm1hcCgocm93KSA9PiB7XG4gICAgLy9sb29wIHRocm91Z2ggZWFjaCByb3csIGRhdGEtdGl0bGUgYXR0cmlidXRlIGluIHRoZSBwcmljZSBzZWxlY3RvciBpbnB1dCB0byBnZXQgcmVmZXJlbmNlIHRvIHRoZSBkYXRhIHRvIGJlIHVzZWQgaW4gRE9NIGV2ZW50IGxpc3RlbmVyc1xuICAgIHZhciBjdXJyZW50Um93ID0gYDx0ciBkYXRhLXRpdGxlPVwiJHtyb3cudGl0bGV9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHJvZHVjdC1pdGVtX19tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwcm9kdWN0LWl0ZW1fX2ltYWdlXCIgc3JjPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmltYWdlUGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnByb2R1Y3RQYWdlcGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiPjxoNj4ke3Jvdy50aXRsZX08L2g2PjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvZHVjdC1saXN0aW5nX19kZXNjcmlwdGlvblwiPiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zaG9ydERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS10aXRsZT1cIiR7cm93LnRpdGxlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcXVhbnRpdHktaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInByb2R1Y3QtaXRlbV9fcXVhbnRpdHlcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJxdWFudGl0eVwiIG1pbj1cIjBcIiB2YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2FyZXQtdXAgaW5jcmVtZW50IHByb2R1Y3QtcXVhbnRpdHlfX2NvbnRyb2xcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWNhcmV0LWRvd24gZGVjcmVtZW50IHByb2R1Y3QtcXVhbnRpdHlfX2NvbnRyb2xcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWxpc3RpbmdfX3ByaWNlLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PiR7Y3VycmVuY3lGb3JtYXR0ZXIuZm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+IGA7XG4gICAgdGFibGVSb3dzID0gdGFibGVSb3dzICsgY3VycmVudFJvdzsgLy8gOyAvL2FkZCBlYWNoIHJvdyB0byB0aGUgcHJldmlvdXMgcm93XG4gIH0pO1xuICAvLyBSZXR1cm4gdGhlIHRhYmxlIHdpdGggdGhlIGluc2VydGVkIHRhYmxlUm93c1xuICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1maXhcIiBpZD1cInByb2R1Y3QtdGFibGVcIj5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInRhYmxlX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPVwid2lkdGg6IDE2LjY2JVwiPlByb2R1Y3Q8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cIndpZHRoOjE2LjY2JVwiPkFkanVzdCBRdWFudGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPVwid2lkdGg6MTYuNjYlXCI+UHJpY2UgKFVTRCk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAke3RhYmxlUm93c30gXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInRhYmxlX19ibGFuay1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhZGQtdG8tY2FydF9fY29udGFpbmVyXCIgY2xhc3M9XCJhZGQtdG8tY2FydF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FydC1hZGRfX2J1dHRvblwiIGNsYXNzPVwiY2FydC1hZGRfX2J1dHRvbiBidG4gYnRuLXByaW1hcnlcIiBkaXNhYmxlZD5TZWxlY3QgaXRlbShzKSB0byBhZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xufTtcbiIsIi8vVGhlc2UgdXRpbGl0aWVzIGhhbmRsZSB0aGUgY2hlY2tvdXQgYWN0aW9ucyBzdWNoIGFzIHJlbW92aW5nIGFuZCB1cGRhdGVpbmcgdGhlIGNhcnQgdG90YWxcbi8vVGhleSBhcmUgdGhlbiBpbXBvcnRlZCBpbnRvIHRoZSBTaG9wcGluZ1BhZ2VMb2dpYy5qcyBtb2R1bGUgd2hpY2ggaXMgdXNlZCBpbiB0aGUgbWFpbiBpbmRleC5qcyBmaWxlXG4vL0kgc2V0IHRoZSBjb2RlIHVwIHRvIHByb2R1Y2UgYSBtYWluIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciB2YXJpb3VzIGV2ZW50IHR5cGVzIHZpYSBET00gZWxlbWVudFxuLy9JZiB0aGUgRE9NIGNvbnRyb2wgbWF0Y2hlcyB0aGUgZXZlbnQsIHRoZW4gSSBleGVjdXRlIHRoZSBjb3JyZXNwb25kaW5nIGZ1bmN0aW9uKHMpXG5cbmltcG9ydCB7XG4gIGluc2VydENhcnREYXRhSW50b0NoZWNrb3V0LFxuICB1cGRhdGVTdGF0ZVdpdGhDYXJ0VG90YWwsXG4gIGl0ZW1Ub3RhbCxcbiAgdXBkYXRlQWRkVG9DYXJ0QnV0dG9uLFxufSBmcm9tIFwiLi9zaG9wcGluZ0hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVByb2R1Y3RUYWJsZUV2ZW50cyA9IGZ1bmN0aW9uIGhhbmRsZVByb2R1Y3RUYWJsZUV2ZW50cyhcbiAgZSxcbiAgc3RhdGVcbikge1xuICAvLyBCb29sZWFuIGV2ZW50IGxpc3RlbmVyIHZhcmlhYmxlcyBpbmRpY2F0ZSB3aGF0IGFjdGlvbiBhcHBsaWVkIHRvXG4gIHZhciB1c2VyQ2hhbmdlc0l0ZW1RdWFudGl0eSA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcbiAgICBcInByb2R1Y3QtcXVhbnRpdHlfX2NvbnRyb2xcIlxuICApO1xuICB2YXIgdXNlclR5cGVzUXVhbnRpdHkgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9kdWN0LWl0ZW1fX3F1YW50aXR5XCIpO1xuICB2YXIgcXVhbnRpdHlJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2R1Y3QtaXRlbV9fcXVhbnRpdHlcIik7XG5cbiAgcXVhbnRpdHlJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAvLyM1OiBBdXRvbWF0aWNhbGx5IHJlc2V0IHRoZSBxdWFudGl0eSBpbnB1dCB0byBoYW5kbGUgcG90ZW50aWFsIHVzZXIgZXJyb3IuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgLy9XaGVuIGEgdXNlciBjbGlja3Mgb2ZmIHRoZSBxdWFudGl0eSBhZGp1c3RlclxuICAgICAgcmVzZXRJbnB1dFRvWmVybyhpbnB1dCk7XG4gICAgICByZXBsYWNlTGVhZGluZ0lucHV0WmVybyhpbnB1dCk7XG4gICAgfSk7XG4gIH0pO1xuICAvL0RPTSB2YXJpYWJsZXNcbiAgdmFyIHByb2R1Y3RUaXRsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJ0clwiKS5kYXRhc2V0LnRpdGxlO1xuICB2YXIgY3VycmVudFByb2R1Y3QgPSBnZXRDdXJyZW50UHJvZHVjdChwcm9kdWN0VGl0bGUpO1xuXG4gIC8vQ29uZGl0aW9uYWxzIHRoYXQgY2hlY2sgZm9yIGFuIGFjdGlvbiBhbmQgZXhlY3V0ZSBsb2dpY1xuICBpZiAodXNlckNoYW5nZXNJdGVtUXVhbnRpdHkpIHtcbiAgICB2YXIgcXVhbnRpdHlJbnB1dCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvZHVjdC1xdWFudGl0eS1pbnB1dFwiKVxuICAgICAgLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNoYW5nZUl0ZW1RdWFudGl0eShxdWFudGl0eUlucHV0LCBlLnRhcmdldCk7XG4gIH1cblxuICBzdGF0ZS5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgLy9Mb29wIHRocm91Z2ggdGhlIHByb2R1Y3RzIGFuZCBjaGVjayB1c2VyIGFjdGlvbnMuXG4gICAgLy9UT0RPIG1ha2UgdGhpcyBjb2RlIG1vcmUgRFJZIGJ5IHB1dHRpbmcgaW50byBoZWxwZXIgZnVuY3Rpb25cbiAgICBpZiAodXNlckNoYW5nZXNJdGVtUXVhbnRpdHkpIHtcbiAgICAgIGFkZFF1YW50aXR5VG9TdGF0ZShxdWFudGl0eUlucHV0LCBjdXJyZW50UHJvZHVjdCwgcHJvZHVjdCk7XG4gICAgICBhZGROdW1JdGVtc1NlbGVjdGVkVG9TdGF0ZSgpO1xuICAgICAgdXBkYXRlQ2FydEJ1dHRvbihjdXJyZW50UHJvZHVjdCwgcHJvZHVjdCk7XG4gICAgICAvL3JlbW92ZSB0aGUgaXRlbSBmcm9tIGNoZWNrb3V0XG4gICAgICByZW1vdmVGcm9tQ2FydElmKGN1cnJlbnRQcm9kdWN0LCBwcm9kdWN0KTtcbiAgICB9XG4gICAgaWYgKHVzZXJUeXBlc1F1YW50aXR5KSB7XG4gICAgICBhZGRRdWFudGl0eVRvU3RhdGUoZS50YXJnZXQsIGN1cnJlbnRQcm9kdWN0LCBwcm9kdWN0KTtcbiAgICAgIGFkZE51bUl0ZW1zU2VsZWN0ZWRUb1N0YXRlKCk7XG4gICAgICB1cGRhdGVDYXJ0QnV0dG9uKGN1cnJlbnRQcm9kdWN0LCBwcm9kdWN0KTtcbiAgICAgIC8vcmVtb3ZlIHRoZSBpdGVtIGZyb20gY2hlY2tvdXRcbiAgICAgIHJlbW92ZUZyb21DYXJ0SWYoY3VycmVudFByb2R1Y3QsIHByb2R1Y3QpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9VcGRhdGUgdGhlIHN0YXRlIGFuZCBET00gYmFzZWQgb24gdGhlIHVzZXIgYWN0aW9uLlxuXG4gIHVwZGF0ZVN0YXRlV2l0aENhcnRUb3RhbChzdGF0ZSk7XG4gIHVwZGF0ZVByb2R1Y3RJdGVtVG90YWwoKTtcbiAgaW5zZXJ0Q2FydERhdGFJbnRvQ2hlY2tvdXQoc3RhdGUucHJvZHVjdHMsIHN0YXRlLnRvdGFsKTtcblxuICAvL0hlbHBlciBmdW5jdGlvbnNcblxuICBmdW5jdGlvbiBjaGFuZ2VJdGVtUXVhbnRpdHkoZWxlbWVudCwgdGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWNyZW1lbnRcIikpIHtcbiAgICAgIGlmIChlbGVtZW50LnZhbHVlID4gMCkge1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gcGFyc2VJbnQoZWxlbWVudC52YWx1ZSkgLSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gcGFyc2VJbnQoZWxlbWVudC52YWx1ZSkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9kdWN0KHByb2R1Y3RUaXRsZSkge1xuICAgIHJldHVybiBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoXG4gICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC50aXRsZSA9PT0gcHJvZHVjdFRpdGxlXG4gICAgKVswXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RJdGVtVG90YWwoKSB7XG4gICAgc3RhdGUucHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgcHJvZHVjdC5pdGVtVG90YWwgPSBpdGVtVG90YWwocHJvZHVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDYXJ0QnV0dG9uKGN1cnJlbnRQcm9kdWN0LCBwcm9kdWN0KSB7XG4gICAgaWYgKGN1cnJlbnRQcm9kdWN0LnRpdGxlID09PSBwcm9kdWN0LnRpdGxlKSB7XG4gICAgICBpZiAoIWN1cnJlbnRQcm9kdWN0LmluQ2FydCkge1xuICAgICAgICB1cGRhdGVBZGRUb0NhcnRCdXR0b24oc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VMZWFkaW5nSW5wdXRaZXJvKGVsZW1lbnQpIHtcbiAgICAvL1VzZXJzIHNob3VsZG4ndCBiZSBhYmxlIHRvIHNlbGVjdCAwMDIgYXMgYSBxdWFudGl0eSwgb25seSAyXG4gICAgZWxlbWVudC52YWx1ZSA9IGlzTmFOKHBhcnNlSW50KGVsZW1lbnQudmFsdWUpKVxuICAgICAgPyAwXG4gICAgICA6IHBhcnNlSW50KGVsZW1lbnQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRJbnB1dFRvWmVybyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSAwKSB7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIjBcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhZGRRdWFudGl0eVRvU3RhdGUoZWxlbWVudCwgY3VycmVudFByb2R1Y3QsIHByb2R1Y3QpIHtcbiAgICBpZiAoY3VycmVudFByb2R1Y3QudGl0bGUgPT09IHByb2R1Y3QudGl0bGUpIHtcbiAgICAgIGlmIChlbGVtZW50ICYmIGN1cnJlbnRQcm9kdWN0LnF1YW50aXR5ICE9PSBlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICBwcm9kdWN0LnF1YW50aXR5ID1cbiAgICAgICAgICBlbGVtZW50LnZhbHVlID09IGlzTmFOKGVsZW1lbnQudmFsdWUpID8gMCA6IGVsZW1lbnQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnRJZihjdXJyZW50UHJvZHVjdCwgcHJvZHVjdCkge1xuICAgIGlmIChjdXJyZW50UHJvZHVjdC50aXRsZSA9PT0gcHJvZHVjdC50aXRsZSkge1xuICAgICAgaWYgKGN1cnJlbnRQcm9kdWN0LmluQ2FydCAmJiBjdXJyZW50UHJvZHVjdC5xdWFudGl0eSA8IDEpIHtcbiAgICAgICAgcHJvZHVjdC5pbkNhcnQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGROdW1JdGVtc1NlbGVjdGVkVG9TdGF0ZSgpIHtcbiAgICB2YXIgdG90YWxJdGVtcyA9IDA7XG4gICAgc3RhdGUucHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgaWYgKCFwcm9kdWN0LmluQ2FydCkge1xuICAgICAgICB0b3RhbEl0ZW1zICs9IHBhcnNlSW50KHByb2R1Y3QucXVhbnRpdHkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN0YXRlLml0ZW1zU2VsZWN0ZWQgPSB0b3RhbEl0ZW1zO1xuICB9XG59O1xuIiwiLy9TaG9wcGluZyBwYWdlIHV0aWxpdGllcyBjb250YWlucyBmdW5jdGlvbnMgdGhhdCBtYWtlIHByb2R1Y3QgdGFibGUgYW5kIGNoZWNrb3V0IGR5bmFtaWNcbi8vdG8gYWNoaWV2ZSB0aGlzIHdlIGltcG9ydCBoZWxwZXIgZnVudGlvbnMgYW5kIGV2ZW50aGFuZGxlcnMgZm9yIHRoZSBjYXJ0IGFuZCBwcm9kdWN0IGxpc3RpbmcgYXJlYVxuXG5pbXBvcnQgeyBoYW5kbGVQcm9kdWN0VGFibGVFdmVudHMgfSBmcm9tIFwiLi4vdXRpbHMvcHJvZHVjdFRhYmxlSGFuZGxlcnNcIjtcbmltcG9ydCB7IGhhbmRsZUNoZWNrb3V0QWN0aW9ucyB9IGZyb20gXCIuLi91dGlscy9jaGVja291dEhhbmRsZXJzXCI7XG5pbXBvcnQge1xuICBoYW5kbGVDYXJ0QWRkLFxuICBnZXROdW1JdGVtc0luQ2FydCxcbiAgdXBkYXRlQ2hlY2tvdXRDYXJ0QnV0dG9uLFxufSBmcm9tIFwiLi4vdXRpbHMvc2hvcHBpbmdIZWxwZXJzXCI7XG5cbi8vTWFpbiBtb2R1bGUgb2YgZmlsZSwgYWRkcyBzb21lIG5ldyBkZWZhdWx0cyB0byBzdGF0ZSBhbmQgYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGFwcGxpY2F0aW9uXG4vL3RvIGxpc3RlbiBmb3IgY2hhbmdlcyB0byBzdGF0ZS5cbmZ1bmN0aW9uIHNob3BwaW5nVXRpbHMoc3RhdGUpIHtcbiAgdmFyIGNoZWNrb3V0Q2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcblxuICBzdGF0ZS5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgLy9BZGQgbmV3IGRlZmF1bHRzIHRvIHN0YXRlIHRoYXQgd2FzIGltcG9ydGVkIGFzIEpTT04gZmlsZVxuICAgIHByb2R1Y3QucXVhbnRpdHkgPSAwO1xuICAgIHByb2R1Y3QuaW5DYXJ0ID0gZmFsc2U7XG4gIH0pO1xuXG4gIC8vT25jZSBjb250ZW50IGlzIGxvYWRlZFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtdGFibGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAvL1Byb2R1Y3QgdGFibGUgbGlzdGVuZXJzXG4gICAgICBoYW5kbGVQcm9kdWN0VGFibGVFdmVudHMoZSwgc3RhdGUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0LXRhYmxlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgLy9Qcm9kdWN0IHRhYmxlIGxpc3RlbmVyc1xuICAgICAgaGFuZGxlUHJvZHVjdFRhYmxlRXZlbnRzKGUsIHN0YXRlKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC10YWJsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xuICAgICAgLy9Qcm9kdWN0IHRhYmxlIGxpc3RlbmVyc1xuICAgICAgaGFuZGxlUHJvZHVjdFRhYmxlRXZlbnRzKGUsIHN0YXRlKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvL0dsb2JhbCBsaXN0ZW5lciB0aGF0IHVwZGF0ZXMgY2FydCBxdWFudGl0eSBhbmQgRE9NXG4gICAgICBnZXROdW1JdGVtc0luQ2FydChzdGF0ZSk7XG4gICAgICB1cGRhdGVDaGVja291dENhcnRCdXR0b24oc3RhdGUudG90YWxJdGVtc0luQ2FydCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiY2FydC1hZGRfX2J1dHRvblwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAvL1doZW4gYWRkIHRvIGNhcnQgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgICAgaGFuZGxlQ2FydEFkZChlLCBzdGF0ZSk7XG4gICAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tvdXQtY2FydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIC8vQ2hlY2tvdXQgY2FydCBsaXN0ZW5lcnNcbiAgICAgIGhhbmRsZUNoZWNrb3V0QWN0aW9ucyhlLCBzdGF0ZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiY2hlY2tvdXQtY2FydC0tY2xvc2VcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgLy9DbG9zZXMgdGhlIGNoZWNrb3V0IGNhcnRcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIm5hdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwibmF2XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICB9KTtcblxuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja291dC1jYXJ0LS1vcGVuXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIC8vT3BlbnMgdGhlIGNoZWNrb3V0IGNhcnRcbiAgICAgICAgY2hlY2tvdXRDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNoZWNrb3V0Q2FydC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG5cbiAgICAvL1RvZ2dsZXMgdGhlIGNoZWNrb3V0IGNhcnQgYmFzZWQgb24gdmlld3BvcnQgd2lkdGhcbiAgICBsZXQgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3MDBweClcIik7XG4gICAgaWYgKG1xbC5tYXRjaGVzKSB7XG4gICAgICBjaGVja291dENhcnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGNoZWNrb3V0Q2FydC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja291dENhcnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGNoZWNrb3V0Q2FydC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9UaGlzIGlzIHRoZSBQdWJsaWMgQVBJIHdoaWNoIGFsbG93cyBhIGRldmVsb3BlciBvciB1c2VyIHRvIGdldCB0aGUgYXBwbGljYXRpb24gc3RhdGUgYXQgYW55IHBvaW50LlxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHZhciBwdWJsaWNBUEkgPSB7XG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICB9O1xuXG4gIHJldHVybiBwdWJsaWNBUEk7XG59XG5cbi8vRXhwb3J0IHRoaXMgZmlsZSB0byBiZSBpbXBvcnRlZCBieSB0aGUgSW5kZXggZmlsZXMsIHRoZSBtYWluIGFwcGxpY2F0aW9uIGZpbGUuXG5leHBvcnQgZGVmYXVsdCBzaG9wcGluZ1V0aWxzO1xuIiwiLy9UaGVzZSB1dGlsaXRpZXMgaGFuZGxlIHRoZSBjaGVja291dCBhY3Rpb25zIHN1Y2ggYXMgcmVtb3ZpbmcgYW5kIHVwZGF0ZWluZyB0aGUgY2FydCB0b3RhbFxuLy9UaGV5IGFyZSB0aGVuIGltcG9ydGVkIGludG8gdGhlIFNob3BwaW5nUGFnZUxvZ2ljLmpzIG1vZHVsZSB3aGljaCBpcyB1c2VkIGluIHRoZSBtYWluIGluZGV4LmpzIGZpbGVcblxuaW1wb3J0IHtcbiAgaW5zZXJ0Q2FydERhdGFJbnRvQ2hlY2tvdXQsXG4gIHVwZGF0ZUNhcnRUb3RhbE9uUGFnZSxcbiAgdXBkYXRlU3RhdGVXaXRoQ2FydFRvdGFsLFxufSBmcm9tIFwiLi9zaG9wcGluZ0hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUNoZWNrb3V0QWN0aW9ucyA9IGZ1bmN0aW9uIGhhbmRsZUNoZWNrb3V0QWN0aW9ucyhlLCBzdGF0ZSkge1xuICAoZnVuY3Rpb24gdXNlclJlbW92ZXNJdGVtRnJvbUNoZWNrb3V0KCkge1xuICAgIC8vRXhlY3V0ZSB0aGlzIGZ1bmN0aW9uIG9uIGV2ZXJ5IGNoZWNrb3V0IGFjdGlvbiwgaW4gb3JkZXIgdG8gaGF2ZSB0aGUgbW9zdCB1cGRhdGVkIHN0YXRlLlxuICAgIHZhciBjYXJ0VHJhc2hJY29uQ2xpY2tlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXG4gICAgICBcIi5wcm9kdWN0LWNoZWNrb3V0X190cmFzaC1pY29uXCJcbiAgICApO1xuXG4gICAgLy9SZW1vdmUgaXRlbXMgZnJvbSBjYXJ0LCBpZiB0cmFzaCBpY29uIGlzIGNsaWNrZWRcbiAgICBpZiAoY2FydFRyYXNoSWNvbkNsaWNrZWQpIHtcbiAgICAgIHZhciBwcm9kdWN0VGl0bGUgPVxuICAgICAgICBjYXJ0VHJhc2hJY29uQ2xpY2tlZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICAgICAgICAuZGF0YXNldC50aXRsZTsgLy9HZXQgdGhlIHByb2R1Y3QgdGl0bGVcbiAgICAgIHN0YXRlLnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKHByb2R1Y3QudGl0bGUgPT09IHByb2R1Y3RUaXRsZSkge1xuICAgICAgICAgIC8vSWYgdGhlIGN1cnJlbnQgcHJvZHVjdCBpbiB0aGUgbG9vcHMgaXMgdGhlIHRyYXNoZWQgcHJvZHVjdCBpbiB0aGUgY2FydFxuICAgICAgICAgIHZhciBwcm9kdWN0UXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgLy9HZXQgdGhlIHByb2R1Y3QgcXVhbnRpdHlcbiAgICAgICAgICAgIGB0cltkYXRhLXRpdGxlPVwiJHtwcm9kdWN0LnRpdGxlfVwiXSAucHJvZHVjdC1pdGVtX19xdWFudGl0eWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlc2V0UHJvZHVjdFN0YXRlKHByb2R1Y3QpOyAvL1Jlc2V0IHByb2R1Y3Qgc3RhdGUgdG8gaW5pdGlhbCBzdGF0ZSwgYmVjYXVzZSB0aGUgdXNlciBkb2Vzbid0IHdhbnQgaXQgYW55bW9yZVxuICAgICAgICAgIHJlc2V0SXRlbVF1YW50aXR5SW5wdXQocHJvZHVjdFF1YW50aXR5KTsgLy9SZXNldCB0aGUgaXRlbSBxdWFudGl0eSBzZWxlY3RvciBpbiB0aGUgcHJvZHVjdCBwYWdlIHRvIDBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvL0dldCB0aGUgc3RhdGUgd2UganVzdCB1cGRhdGVkIGFuZCB1cGRhdGUgdGhlIGNoZWNrb3V0IGluIHRoZSBET00uXG4gICAgICBpbnNlcnRDYXJ0RGF0YUludG9DaGVja291dChzdGF0ZS5wcm9kdWN0cywgc3RhdGUudG90YWwpO1xuICAgICAgdXBkYXRlU3RhdGVXaXRoQ2FydFRvdGFsKHN0YXRlKTtcbiAgICAgIHVwZGF0ZUNhcnRUb3RhbE9uUGFnZShzdGF0ZS50b3RhbCk7XG4gICAgfVxuICB9KSgpO1xuXG4gIC8vSGVscGVyIGZ1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIHJlc2V0SXRlbVF1YW50aXR5SW5wdXQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQudmFsdWUgPSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQcm9kdWN0U3RhdGUocHJvZHVjdCkge1xuICAgIHByb2R1Y3QuaW5DYXJ0ID0gZmFsc2U7XG4gICAgcHJvZHVjdC5xdWFudGl0eSA9IDA7XG4gICAgcHJvZHVjdC5pdGVtVG90YWwgPSAwO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgQnVpbGRTaG9wcGluZ1BhZ2UgfSBmcm9tIFwiLi9tb2R1bGVzL0J1aWxkU2hvcHBpbmdQYWdlXCI7XG5pbXBvcnQgeyBwcm9kdWN0TGlzdCB9IGZyb20gXCIuLi9wcm9kdWN0LWR1bW15LWxpc3QuanNvblwiO1xuaW1wb3J0IHNob3BwaW5nVXRpbHMgZnJvbSBcIi4vbW9kdWxlcy9zaG9wcGluZ1BhZ2VMb2dpYy5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xubGV0IHByb2R1Y3REYXRhID0gcHJvZHVjdExpc3RbMF0ucHJvZHVjdEZhY2V0SW5mb0xpc3Q7IC8vTG9hZCB0aGUgcHJvZHVjdCBkYXRhXG5cbi8vR2xvYmFsIGFwcGxpY2F0aW9uIHN0YXRlXG52YXIgc3RhdGUgPSB7XG4gIHByb2R1Y3RzOiBwcm9kdWN0RGF0YSxcbiAgdG90YWw6IDAsXG4gIGl0ZW1zU2VsZWN0ZWQ6IDAsXG4gIHRvdGFsSXRlbXNJbkNhcnQ6IDAsXG59O1xuXG4vL1RoZSBmdW5jdGlvbnMgYmVsb3cgY29tYmluZSB0byB1cGRhdGUgdGhlIGFwcGxpY2F0aW9uIHN0YXRlIGFuZCBwcmVzZW50IGNoYW5nZXMgdG8gdGhlIHVzZXIuXG5cbi8vSnVzdCBhIGhvb2sgdG8gYmUgYWJsZSB0byB2aWV3IHNob3BwaW5nIGNhcnQgZGF0YSBpbiB0aGUgY29uc29sZSB0byBzaG93IHRoYXQgdGhlIHB1YmxpYyBBUEkgd29ya3NcbndpbmRvdy5zaG9wcGluZ1V0aWxzID0gc2hvcHBpbmdVdGlscyhzdGF0ZSk7IC8vTWFrZXMgdGhlIGFwcGxpY2F0aW9uIHN0YXRlIGF2YWlsYWJsZSB0byB0aGUgYXBwbGljYXRpb25cblxuQnVpbGRTaG9wcGluZ1BhZ2UudXBkYXRlUHJvZHVjdExpc3Rpbmcoc3RhdGUucHJvZHVjdHMpOyAvL0xvYWRzIHRoZSBwcm9kdWN0IGRhdGEgaW50byB0aGUgRE9NXG4iXSwic291cmNlUm9vdCI6IiJ9
