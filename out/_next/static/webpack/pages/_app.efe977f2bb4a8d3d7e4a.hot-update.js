webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ \"./pages/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/chris/Bootcamp/Week28/restaurants-app/pages/_app.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nfunction MyApp(props) {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_components_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      cart = _useContext.cart,\n      addItem = _useContext.addItem,\n      removeItem = _useContext.removeItem;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    cart: cart\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      dishes = _useState2[0],\n      setDishes = _useState2[1];\n\n  var Component = props.Component,\n      pageProps = props.pageProps;\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      user = _useState3[0],\n      setUser = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      totalItems = _useState4[0],\n      setTotalItems = _useState4[1];\n\n  setUser = function setUser(user) {\n    setState({\n      user: user\n    });\n  };\n\n  addItem = function addItem(item) {\n    var items = state.cart.items; //check for item already in cart\n    //if not in cart, add item if item is found increase quanity ++\n\n    var foundItem = true;\n\n    if (items.length > 0) {\n      foundItem = items.find(function (i) {\n        return i.id === item.id;\n      });\n      if (!foundItem) foundItem = false;\n    } else {\n      foundItem = false;\n    }\n\n    console.log(\"Found Item value: \".concat(JSON.stringify(foundItem))); // if item is not new, add to cart, set quantity to 1\n\n    if (!foundItem) {\n      //set quantity property to 1\n      var temp = JSON.parse(JSON.stringify(item));\n      temp.quantity = 1;\n      var newCart = {\n        items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.cart.items), [temp]),\n        total: state.cart.total + item.price\n      };\n      setState({\n        cart: newCart\n      });\n      console.log(\"Total items: \".concat(JSON.stringify(newCart)));\n    } else {\n      // we already have it so just increase quantity ++\n      console.log(\"Total so far:  \".concat(state.cart.total));\n      newCart = {\n        items: items.map(function (item) {\n          if (item.id === foundItem.id) {\n            return Object.assign({}, item, {\n              quantity: item.quantity + 1\n            });\n          } else {\n            return item;\n          }\n        }),\n        total: state.cart.total + item.price\n      };\n    }\n\n    setState({\n      cart: newCart\n    }); // problem is this is not updated yet\n\n    setTotalItems(totalItems += 1);\n    console.log(\"state reset to cart:\".concat(JSON.stringify(state)));\n  };\n\n  removeItem = function removeItem(item) {\n    var items = state.cart.items; //check for item already in cart\n\n    var foundItem = items.find(function (i) {\n      return i.id === item.id;\n    });\n\n    if (foundItem.quantity > 1) {\n      var newCart = {\n        items: items.map(function (item) {\n          if (item.id === foundItem.id) {\n            return Object.assign({}, item, {\n              quantity: item.quantity - 1\n            });\n          } else {\n            return item;\n          }\n        }),\n        total: state.cart.total - item.price\n      }; //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)\n    } else {\n      // only 1 in the cart so remove the whole item\n      console.log(\"Try remove item \".concat(JSON.stringify(foundItem)));\n      var index = items.findIndex(function (i) {\n        return i.id === foundItem.id;\n      });\n      items.splice(index, 1);\n      var newCart = {\n        items: items,\n        total: state.cart.total - item.price\n      };\n    }\n\n    setTotalItems(totalItems -= 1);\n    setState({\n      cart: newCart\n    });\n  };\n\n  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Provider, {\n    value: {\n      cart: state.cart,\n      dishes: dishes,\n      addItem: addItem,\n      removeItem: removeItem,\n      isAuthenticated: false,\n      user: user,\n      setUser: setUser,\n      totalItems: totalItems\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }))));\n}\n\n_s(MyApp, \"pFTIHegYtu0q5MbNFF4BPagUllU=\");\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRpc2hlcyIsInNldERpc2hlcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJpdGVtIiwiaXRlbXMiLCJmb3VuZEl0ZW0iLCJsZW5ndGgiLCJmaW5kIiwiaSIsImlkIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZW1wIiwicGFyc2UiLCJxdWFudGl0eSIsIm5ld0NhcnQiLCJ0b3RhbCIsInByaWNlIiwibWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJpc0F1dGhlbnRpY2F0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLG9CQUNnQkMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FEMUI7QUFBQSxNQUNkQyxJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNSQyxPQURRLGVBQ1JBLE9BRFE7QUFBQSxNQUNDQyxVQURELGVBQ0NBLFVBREQ7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUM7QUFBRUgsUUFBSSxFQUFFQTtBQUFSLEdBQUQsQ0FGZDtBQUFBLE1BRWJJLEtBRmE7QUFBQSxNQUVOQyxRQUZNOztBQUFBLG1CQUdRRixzREFBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUdiRyxNQUhhO0FBQUEsTUFHTEMsU0FISzs7QUFBQSxNQUlaQyxTQUpZLEdBSWFYLEtBSmIsQ0FJWlcsU0FKWTtBQUFBLE1BSURD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QVQ7QUFBZ0JjLGFBQUssRUFBRXpCLEtBQUssQ0FBQ0osSUFBTixDQUFXNkIsS0FBWCxHQUFtQmYsSUFBSSxDQUFDZ0I7QUFBL0MsT0FBZDtBQUNEOztBQUNEakIsaUJBQWEsQ0FBRUQsVUFBVSxJQUFJLENBQWhCLENBQWI7QUFDQVAsWUFBUSxDQUFDO0FBQUVMLFVBQUksRUFBRTRCO0FBQVIsS0FBRCxDQUFSO0FBQ0QsR0F6QkQ7O0FBMkJBLFNBQ0UsTUFBQywyREFBRCxDQUFZLFFBQVo7QUFDRSxTQUFLLEVBQUU7QUFDTDVCLFVBQUksRUFBRUksS0FBSyxDQUFDSixJQURQO0FBRUxNLFlBQU0sRUFBRUEsTUFGSDtBQUdMTCxhQUFPLEVBQUVBLE9BSEo7QUFJTEMsZ0JBQVUsRUFBRUEsVUFKUDtBQUtMbUMscUJBQWUsRUFBRSxLQUxaO0FBTUwzQixVQUFJLEVBQUVBLElBTkQ7QUFPTEMsYUFBTyxFQUFFQSxPQVBKO0FBUUxDLGdCQUFVLEVBQUVBO0FBUlAsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsWUFETjtBQUVFLFFBQUksRUFBQyx5RUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FaRixFQW1CRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQseUZBQWVILFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBbkJGLENBREY7QUF5QkQ7O0dBM0dRYixLOztLQUFBQSxLO0FBNkdNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcblxuZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgdmFyIHsgY2FydCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IGNhcnQ6IGNhcnQgfSk7XG4gIGNvbnN0IFtkaXNoZXMsIHNldERpc2hlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuICBsZXQgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGxldCBbdG90YWxJdGVtcywgc2V0VG90YWxJdGVtc10gPSB1c2VTdGF0ZSgwKTtcbiAgXG4gIFxuICBzZXRVc2VyID0gKHVzZXIpID0+IHtcbiAgICBzZXRTdGF0ZSh7IHVzZXIgfSk7XG4gIH07XG4gIGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxldCB7IGl0ZW1zIH0gPSBzdGF0ZS5jYXJ0O1xuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XG4gICAgLy9pZiBub3QgaW4gY2FydCwgYWRkIGl0ZW0gaWYgaXRlbSBpcyBmb3VuZCBpbmNyZWFzZSBxdWFuaXR5ICsrXG4gICAgbGV0IGZvdW5kSXRlbSA9IHRydWU7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuXG4gICAgICBpZiAoIWZvdW5kSXRlbSkgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvdW5kSXRlbSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgRm91bmQgSXRlbSB2YWx1ZTogJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApO1xuICAgIC8vIGlmIGl0ZW0gaXMgbm90IG5ldywgYWRkIHRvIGNhcnQsIHNldCBxdWFudGl0eSB0byAxXG4gICAgaWYgKCFmb3VuZEl0ZW0pIHtcbiAgICAgIC8vc2V0IHF1YW50aXR5IHByb3BlcnR5IHRvIDFcblxuICAgICAgbGV0IHRlbXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbiAgICAgIHRlbXAucXVhbnRpdHkgPSAxO1xuICAgICAgdmFyIG5ld0NhcnQgPSB7XG4gICAgICAgIGl0ZW1zOiBbLi4uc3RhdGUuY2FydC5pdGVtcywgdGVtcF0sXG4gICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcbiAgICAgIH07XG4gICAgICBzZXRTdGF0ZSh7IGNhcnQ6IG5ld0NhcnQgfSk7XG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIGFscmVhZHkgaGF2ZSBpdCBzbyBqdXN0IGluY3JlYXNlIHF1YW50aXR5ICsrXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgc28gZmFyOiAgJHtzdGF0ZS5jYXJ0LnRvdGFsfWApO1xuICAgICAgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgc2V0U3RhdGUoeyBjYXJ0OiBuZXdDYXJ0IH0pOyAvLyBwcm9ibGVtIGlzIHRoaXMgaXMgbm90IHVwZGF0ZWQgeWV0XG4gICAgc2V0VG90YWxJdGVtcygodG90YWxJdGVtcyArPSAxKSk7XG4gICAgY29uc29sZS5sb2coYHN0YXRlIHJlc2V0IHRvIGNhcnQ6JHtKU09OLnN0cmluZ2lmeShzdGF0ZSl9YCk7XG4gIH07XG4gIHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxldCB7IGl0ZW1zIH0gPSBzdGF0ZS5jYXJ0O1xuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XG4gICAgY29uc3QgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgaWYgKGZvdW5kSXRlbS5xdWFudGl0eSA+IDEpIHtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgLSAxIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UsXG4gICAgICB9O1xuICAgICAgLy9jb25zb2xlLmxvZyhgTmV3Q2FydCBhZnRlciByZW1vdmU6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb25seSAxIGluIHRoZSBjYXJ0IHNvIHJlbW92ZSB0aGUgd2hvbGUgaXRlbVxuICAgICAgY29uc29sZS5sb2coYFRyeSByZW1vdmUgaXRlbSAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YCk7XG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PT0gZm91bmRJdGVtLmlkKTtcbiAgICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB2YXIgbmV3Q2FydCA9IHsgaXRlbXM6IGl0ZW1zLCB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UgfTtcbiAgICB9XG4gICAgc2V0VG90YWxJdGVtcygodG90YWxJdGVtcyAtPSAxKSk7XG4gICAgc2V0U3RhdGUoeyBjYXJ0OiBuZXdDYXJ0IH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNhcnQ6IHN0YXRlLmNhcnQsXG4gICAgICAgIGRpc2hlczogZGlzaGVzLFxuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtLFxuICAgICAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICBzZXRVc2VyOiBzZXRVc2VyLFxuICAgICAgICB0b3RhbEl0ZW1zOiB0b3RhbEl0ZW1zLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})