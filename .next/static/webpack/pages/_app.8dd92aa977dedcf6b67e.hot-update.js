webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ \"./components/context.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth */ \"./components/auth.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/chris/Bootcamp/Week28/restaurants-app/components/layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* /components/Layout.js */\n\n\n\n\n\n\n\nvar Layout = function Layout(props) {\n  _s();\n\n  var title = \"Restaurants\";\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      user = _useContext.user,\n      setUser = _useContext.setUser; // Navbar\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var toggle = function toggle() {\n    return setIsOpen(!isOpen);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function (res) {\n    console.log(\"User: \", user);\n  }, user);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"https://js.stripe.com/v3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"module\",\n    src: \"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    nomodule: true,\n    src: \"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  })), __jsx(\"header\", {\n    className: \"jsx-1382366006\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1382366006\",\n    __self: _this\n  }, \"a.jsx-1382366006{color:white;}a.jsx-1382366006:hover{color:grey;}h5.jsx-1382366006{color:white;padding-top:11px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpcy9Cb290Y2FtcC9XZWVrMjgvcmVzdGF1cmFudHMtYXBwL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVyxBQUcyQixBQUdELEFBR0MsV0FGZCxDQUhBLEFBTW1CLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvY2hyaXMvQm9vdGNhbXAvV2VlazI4L3Jlc3RhdXJhbnRzLWFwcC9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9jb21wb25lbnRzL0xheW91dC5qcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBCYWRnZVxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIi4vYXV0aFwiO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBcIlJlc3RhdXJhbnRzXCI7XG4gIGNvbnN0IHsgdXNlciwgc2V0VXNlciB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICAvLyBOYXZiYXJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xuXG4gIHVzZUVmZmVjdCgocmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJVc2VyOiBcIiwgdXNlcik7XG4gIH0sIHVzZXIpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIHsvKiA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+ICovfVxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzXCIgLz5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJtb2R1bGVcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2lvbmljb25zQDUuNS4yL2Rpc3QvaW9uaWNvbnMvaW9uaWNvbnMuZXNtLmpzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgbm9tb2R1bGVcbiAgICAgICAgICBzcmM9XCJodHRwczovL3VucGtnLmNvbS9pb25pY29uc0A1LjUuMi9kaXN0L2lvbmljb25zL2lvbmljb25zLmpzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFyayBiZy1kYXJrIHBzLTNcIj5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlJlc3RhdXJhbnRzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cblxuICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIm1zLWF1dG8gcHgtMyBweS0yXCI+XG4gICAgICAgICAgICA8aW9uLWljb25cbiAgICAgICAgICAgICAgbmFtZT1cImNhcnRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBmb250U2l6ZTogXCIyNHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiIH19XG4gICAgICAgICAgICA+PEJhZGdlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCJcbiAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgcGlsbFxuICAgICAgICAgID5cbiAgICAgICAgICAgIExpZ2h0XG4gICAgICAgICAgPC9CYWRnZT48L2lvbi1pY29uPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgPGg1Pnt1c2VyLnVzZXJuYW1lfTwvaDU+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TaWduIHVwPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNpZ24gaW48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8L05hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPENvbnRhaW5lcj57cHJvcHMuY2hpbGRyZW59PC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\\n/*@ sourceURL=/Users/chris/Bootcamp/Week28/restaurants-app/components/layout.js */\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Nav\"], {\n    className: \"navbar navbar-dark bg-dark ps-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-1382366006\" + \" \" + \"navbar-brand\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }\n  }, \"Restaurants\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    className: \"ms-auto px-3 py-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, __jsx(\"ion-icon\", {\n    name: \"cart\",\n    style: {\n      color: \"white\",\n      fontSize: \"24px\",\n      display: \"flex\"\n    },\n    className: \"jsx-1382366006\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Badge\"], {\n    className: \"text-light\",\n    color: \"light\",\n    pill: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 14\n    }\n  }, \"Light\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, user ? __jsx(\"h5\", {\n    className: \"jsx-1382366006\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 15\n    }\n  }, user.username) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-1382366006\" + \" \" + \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }, \"Sign up\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, user ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      Object(_auth__WEBPACK_IMPORTED_MODULE_6__[\"logout\"])();\n      setUser(null);\n    },\n    className: \"jsx-1382366006\" + \" \" + \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 17\n    }\n  }, \"Logout\")) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-1382366006\" + \" \" + \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  }, \"Sign in\"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, props.children));\n};\n\n_s(Layout, \"YdAV/2i29BRsjvfq86bZ1EXA/gQ=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MDlhNyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsInRpdGxlIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwidXNlRWZmZWN0IiwicmVzIiwiY29uc29sZSIsImxvZyIsImNvbG9yIiwiZm9udFNpemUiLCJkaXNwbGF5IiwidXNlcm5hbWUiLCJsb2dvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN4QixNQUFNQyxLQUFLLEdBQUcsYUFBZDs7QUFEd0Isb0JBRUVDLHdEQUFVLENBQUNDLGdEQUFELENBRlo7QUFBQSxNQUVoQkMsSUFGZ0IsZUFFaEJBLElBRmdCO0FBQUEsTUFFVkMsT0FGVSxlQUVWQSxPQUZVLEVBSXhCOzs7QUFKd0Isa0JBS0lDLHNEQUFRLENBQUMsS0FBRCxDQUxaO0FBQUEsTUFLakJDLE1BTGlCO0FBQUEsTUFLVEMsU0FMUzs7QUFNeEIsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBZjs7QUFFQUcseURBQVMsQ0FBQyxVQUFDQyxHQUFELEVBQVM7QUFDakJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JULElBQXRCO0FBQ0QsR0FGUSxFQUVOQSxJQUZNLENBQVQ7QUFHQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7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QUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBYSxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQWRKLENBOUJGLENBZkYsQ0F6QkYsRUEyRkUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVlMLEtBQUssQ0FBQ21CLFFBQWxCLENBM0ZGLENBREY7QUErRkQsQ0ExR0Q7O0dBQU1wQixNOztLQUFBQSxNO0FBNEdTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL2NvbXBvbmVudHMvTGF5b3V0LmpzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIEJhZGdlXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwiLi9hdXRoXCI7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aXRsZSA9IFwiUmVzdGF1cmFudHNcIjtcbiAgY29uc3QgeyB1c2VyLCBzZXRVc2VyIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXG4gIC8vIE5hdmJhclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XG5cbiAgdXNlRWZmZWN0KChyZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlVzZXI6IFwiLCB1c2VyKTtcbiAgfSwgdXNlcik7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgey8qIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4wL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjNcIiAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cIm1vZHVsZVwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vaW9uaWNvbnNANS41LjIvZGlzdC9pb25pY29ucy9pb25pY29ucy5lc20uanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBub21vZHVsZVxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2lvbmljb25zQDUuNS4yL2Rpc3QvaW9uaWNvbnMvaW9uaWNvbnMuanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kYXJrIGJnLWRhcmsgcHMtM1wiPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+UmVzdGF1cmFudHM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwibXMtYXV0byBweC0zIHB5LTJcIj5cbiAgICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgICBuYW1lPVwiY2FydFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGZvbnRTaXplOiBcIjI0cHhcIiwgZGlzcGxheTogXCJmbGV4XCIgfX1cbiAgICAgICAgICAgID48QmFkZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIlxuICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICBwaWxsXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGlnaHRcbiAgICAgICAgICA8L0JhZGdlPjwvaW9uLWljb24+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L05hdkl0ZW0+XG5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICA8aDU+e3VzZXIudXNlcm5hbWV9PC9oNT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNpZ24gdXA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2lnbiBpbjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8Q29udGFpbmVyPntwcm9wcy5jaGlsZHJlbn08L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ })

})