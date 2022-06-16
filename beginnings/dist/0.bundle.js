(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./init.js":
/*!*****************!*\
  !*** ./init.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pkg */ \"./pkg/wasm_test.js\");\n\r\n\r\nlet result = _pkg__WEBPACK_IMPORTED_MODULE_0__[\"add\"](2, 8);\r\nconsole.log(result);\n\n//# sourceURL=webpack:///./init.js?");

/***/ }),

/***/ "./pkg/wasm_test.js":
/*!**************************!*\
  !*** ./pkg/wasm_test.js ***!
  \**************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_test_bg.wasm */ \"./pkg/wasm_test_bg.wasm\");\n/* harmony import */ var _wasm_test_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_test_bg.js */ \"./pkg/wasm_test_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return _wasm_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"add\"]; });\n\n\n\n\n//# sourceURL=webpack:///./pkg/wasm_test.js?");

/***/ }),

/***/ "./pkg/wasm_test_bg.js":
/*!*****************************!*\
  !*** ./pkg/wasm_test_bg.js ***!
  \*****************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony import */ var _wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_test_bg.wasm */ \"./pkg/wasm_test_bg.wasm\");\n\n\n/**\n* @param {number} a\n* @param {number} b\n* @returns {number}\n*/\nfunction add(a, b) {\n    const ret = _wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"add\"](a, b);\n    return ret;\n}\n\n\n\n//# sourceURL=webpack:///./pkg/wasm_test_bg.js?");

/***/ }),

/***/ "./pkg/wasm_test_bg.wasm":
/*!*******************************!*\
  !*** ./pkg/wasm_test_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, add */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/wasm_test_bg.wasm?");

/***/ })

}]);