webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ \"./components/context.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth */ \"./components/auth.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/chris/Bootcamp/Week28/restaurants-app/components/layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* /components/Layout.js */\n\n\n\n\n\n\n\nvar Layout = function Layout(props) {\n  _s();\n\n  var title = \"Restaurants\";\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      user = _useContext.user,\n      setUser = _useContext.setUser; // Navbar\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var toggle = function toggle() {\n    return setIsOpen(!isOpen);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function (res) {\n    console.log(\"User: \", user);\n  }, user);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    src: \"https://js.stripe.com/v3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    type: \"module\",\n    src: \"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(\"script\", {\n    nomodule: true,\n    src: \"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  })), __jsx(\"header\", {\n    className: \"jsx-2772901230\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2772901230\",\n    __self: _this\n  }, \"a.jsx-2772901230{color:white;}a.jsx-2772901230:hover{color:grey;}h5.jsx-2772901230{color:white;padding-top:11px;}.badge.jsx-2772901230{top:8px;padding-left:20px;font-size:14px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpcy9Cb290Y2FtcC9XZWVrMjgvcmVzdGF1cmFudHMtYXBwL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDVyxBQUcyQixBQUdELEFBR0MsQUFJSixRQUNVLEdBUHBCLENBSEEsQUFNbUIsY0FLRixHQUpqQixZQUtBIiwiZmlsZSI6Ii9Vc2Vycy9jaHJpcy9Cb290Y2FtcC9XZWVrMjgvcmVzdGF1cmFudHMtYXBwL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL2NvbXBvbmVudHMvTGF5b3V0LmpzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBOYXYsIE5hdkl0ZW0sIEJhZGdlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCIuL2F1dGhcIjtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gXCJSZXN0YXVyYW50c1wiO1xuICBjb25zdCB7IHVzZXIsIHNldFVzZXIgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbiAgLy8gTmF2YmFyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcblxuICB1c2VFZmZlY3QoKHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVXNlcjogXCIsIHVzZXIpO1xuICB9LCB1c2VyKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICB7LyogPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPiAqL31cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vanMuc3RyaXBlLmNvbS92M1wiIC8+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwibW9kdWxlXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3VucGtnLmNvbS9pb25pY29uc0A1LjUuMi9kaXN0L2lvbmljb25zL2lvbmljb25zLmVzbS5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIG5vbW9kdWxlXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vaW9uaWNvbnNANS41LjIvZGlzdC9pb25pY29ucy9pb25pY29ucy5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFkZ2Uge1xuICAgICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRhcmsgYmctZGFyayBwcy0zXCI+XG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5SZXN0YXVyYW50czwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG5cbiAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJtcy1hdXRvIHB4LTMgcHktMlwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidG9wLTAgc3RhcnQtMTAwXCI+XG4gICAgICAgICAgICAgICAgPEJhZGdlID5cbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuXG4gICAgICAgICAgICAgICAgPGlvbi1pY29uXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2FydFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBmb250U2l6ZTogXCIyNHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiIH19XG4gICAgICAgICAgICAgICAgPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICA8aDU+e3VzZXIudXNlcm5hbWV9PC9oNT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNpZ24gdXA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2lnbiBpbjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8Q29udGFpbmVyPntwcm9wcy5jaGlsZHJlbn08L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\\n/*@ sourceURL=/Users/chris/Bootcamp/Week28/restaurants-app/components/layout.js */\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Nav\"], {\n    className: \"navbar navbar-dark bg-dark ps-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-2772901230\" + \" \" + \"navbar-brand\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }\n  }, \"Restaurants\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    className: \"ms-auto px-3 py-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-2772901230\" + \" \" + \"top-0 start-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Badge\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  }, \"1\"), __jsx(\"ion-icon\", {\n    name: \"cart\",\n    style: {\n      color: \"white\",\n      fontSize: \"24px\",\n      display: \"flex\"\n    },\n    className: \"jsx-2772901230\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, user ? __jsx(\"h5\", {\n    className: \"jsx-2772901230\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 15\n    }\n  }, user.username) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-2772901230\" + \" \" + \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }, \"Sign up\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, user ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    onClick: function onClick() {\n      Object(_auth__WEBPACK_IMPORTED_MODULE_6__[\"logout\"])();\n      setUser(null);\n    },\n    className: \"jsx-2772901230\" + \" \" + \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 17\n    }\n  }, \"Logout\")) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-2772901230\" + \" \" + \"nav-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, \"Sign in\"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, props.children));\n};\n\n_s(Layout, \"YdAV/2i29BRsjvfq86bZ1EXA/gQ=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MDlhNyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsInRpdGxlIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwidXNlRWZmZWN0IiwicmVzIiwiY29uc29sZSIsImxvZyIsImNvbG9yIiwiZm9udFNpemUiLCJkaXNwbGF5IiwidXNlcm5hbWUiLCJsb2dvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN4QixNQUFNQyxLQUFLLEdBQUcsYUFBZDs7QUFEd0Isb0JBRUVDLHdEQUFVLENBQUNDLGdEQUFELENBRlo7QUFBQSxNQUVoQkMsSUFGZ0IsZUFFaEJBLElBRmdCO0FBQUEsTUFFVkMsT0FGVSxlQUVWQSxPQUZVLEVBSXhCOzs7QUFKd0Isa0JBS0lDLHNEQUFRLENBQUMsS0FBRCxDQUxaO0FBQUEsTUFLakJDLE1BTGlCO0FBQUEsTUFLVEMsU0FMUzs7QUFNeEIsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBZjs7QUFFQUcseURBQVMsQ0FBQyxVQUFDQyxHQUFELEVBQVM7QUFDakJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JULElBQXRCO0FBQ0QsR0FGUSxFQUVOQSxJQUZNLENBQVQ7QUFHQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFILEtBQVIsQ0FERixFQUVFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQVVFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMseUVBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBY0U7QUFBUSxPQUFHLEVBQUMsMEJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLEVBZUU7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLE9BQUcsRUFBQyxnRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFtQkU7QUFDRSxZQUFRLE1BRFY7QUFFRSxPQUFHLEVBQUMsNERBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixDQURGLEVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3NEtBb0JFLE1BQUMsOENBQUQ7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBYSxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FERixDQURGLEVBT0UsTUFBQyxrREFBRDtBQUFTLGFBQVMsRUFBQyxtQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBYSxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsRUFLRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsU0FBSyxFQUFFO0FBQUVhLFdBQUssRUFBRSxPQUFUO0FBQWtCQyxjQUFRLEVBQUUsTUFBNUI7QUFBb0NDLGFBQU8sRUFBRTtBQUE3QyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREYsQ0FERixDQVBGLEVBc0JFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWixJQUFJLEdBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLElBQUksQ0FBQ2EsUUFBVixDQURHLEdBR0gsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFhLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBSkosQ0F0QkYsRUErQkUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0diLElBQUksR0FDSCxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JjLDBEQUFNO0FBQ05iLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxLQUxIO0FBQUEsd0NBQ1ksVUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERyxHQWFILE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBYSxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQWRKLENBL0JGLENBcEJGLENBekJGLEVBaUdFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFZTCxLQUFLLENBQUNtQixRQUFsQixDQWpHRixDQURGO0FBcUdELENBaEhEOztHQUFNcEIsTTs7S0FBQUEsTTtBQWtIU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9jb21wb25lbnRzL0xheW91dC5qcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgTmF2LCBOYXZJdGVtLCBCYWRnZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwiLi9hdXRoXCI7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aXRsZSA9IFwiUmVzdGF1cmFudHNcIjtcbiAgY29uc3QgeyB1c2VyLCBzZXRVc2VyIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXG4gIC8vIE5hdmJhclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XG5cbiAgdXNlRWZmZWN0KChyZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlVzZXI6IFwiLCB1c2VyKTtcbiAgfSwgdXNlcik7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgey8qIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4wL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjNcIiAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cIm1vZHVsZVwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vaW9uaWNvbnNANS41LjIvZGlzdC9pb25pY29ucy9pb25pY29ucy5lc20uanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBub21vZHVsZVxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL2lvbmljb25zQDUuNS4yL2Rpc3QvaW9uaWNvbnMvaW9uaWNvbnMuanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kYXJrIGJnLWRhcmsgcHMtM1wiPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+UmVzdGF1cmFudHM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwibXMtYXV0byBweC0zIHB5LTJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRvcC0wIHN0YXJ0LTEwMFwiPlxuICAgICAgICAgICAgICAgIDxCYWRnZSA+XG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cblxuICAgICAgICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcnRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IFwiMjRweFwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fVxuICAgICAgICAgICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgPGg1Pnt1c2VyLnVzZXJuYW1lfTwvaDU+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TaWduIHVwPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNpZ24gaW48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8L05hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPENvbnRhaW5lcj57cHJvcHMuY2hpbGRyZW59PC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ })

})