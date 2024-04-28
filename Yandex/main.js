/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hmi.js":
/*!********************!*\
  !*** ./src/hmi.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet loadClick;\r\ninputBtnLoad.addEventListener(\"click\", e=>onBtnClick(e, loadClick));\r\n\r\n\r\n\r\nfunction setLoadClick(func) {\r\n    loadClick=func;\r\n}\r\n\r\nfunction getUrlInput(params) {\r\n    return  inputTextUrl.value;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nfunction onBtnClick(e, onClickFunction) {\r\n    if(onClickFunction==null){\r\n        console.log('Hmi', 'onBtnClick', 'onClickFunction==null');\r\n    }else{\r\n        //console.log('Hmi', 'onBtnClick', 'onClickFunction!=null', e);\r\n        onClickFunction();\r\n    }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    setLoadClick,\r\n    getUrlInput\r\n});\n\n//# sourceURL=webpack:///./src/hmi.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hmi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hmi.js */ \"./src/hmi.js\");\n/* harmony import */ var _yandex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yandex.js */ \"./src/yandex.js\");\n\r\n\r\n\r\n\r\nconsole.log(\"testing\");\r\n\r\n\r\n_hmi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setLoadClick(onLoadClick);\r\n\r\n\r\nasync function onLoadClick() {\r\n    console.log('onLoadClick', 'input text = ', _hmi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUrlInput());\r\n    _yandex_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFile(_hmi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUrlInput());\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/yandex.js":
/*!***********************!*\
  !*** ./src/yandex.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst urlApi = 'https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=';\r\n\r\nasync function getFile(url) {\r\n    const urlLoad = urlApi + url;\r\n    const data = await loadUrlToObject(urlLoad);\r\n    console.log('get data.href type', typeof data.href, data.href);\r\n\r\n    let href = await loadUrlToText(data.href);\r\n    console.log('get href type', typeof href, href);\r\n    \r\n    // const text = await loadUrlToText(urlLoad);\r\n    // console.log('get text type', typeof text, text);\r\n\r\n    // const blob = await loadUrlToBlob(urlLoad);\r\n    // const blobUrl = URL.createObjectURL(blob);\r\n    // console.log('blobUrl type', typeof blobUrl, blobUrl);\r\n    \r\n\r\n\r\n}\r\n\r\n\r\n\r\nasync function loadUrlToBlob(url) {\r\n    const response = await loadUrlToResponse(url);\r\n    return await response.blob();\r\n}\r\n\r\nasync function loadUrlToText(url) {\r\n    const response = await loadUrlToResponse(url);\r\n    return await response.text();\r\n}\r\n\r\nasync function loadUrlToObject(url) {\r\n    const response = await loadUrlToResponse(url);\r\n    return await response.json();\r\n}\r\n\r\nasync function loadUrlToResponse(url) {\r\n    return await fetch(url);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    getFile\r\n});\n\n//# sourceURL=webpack:///./src/yandex.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;