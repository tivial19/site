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

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet _autor='TiViAl';\r\nlet _moduleName='log default';\r\n\r\nfunction init(moduleName, autor){\r\n     _moduleName = moduleName;\r\n     if(autor){\r\n     \t_autor=autor;\r\n     }\r\n} \r\n\r\nfunction event(name) {\r\n        eventParam(name, '');\r\n}\r\n\r\nfunction eventParam(eventName, param) {\r\n        console.log(_autor, _moduleName, eventName, param);       \r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n\tinit,\r\n\tevent,\r\n\teventParam\r\n\t});\n\n//# sourceURL=webpack:///./src/log.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _testModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testModule.js */ \"./src/testModule.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ \"./src/log.js\");\n/* harmony import */ var _timeLine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeLine.js */ \"./src/timeLine.js\");\n\r\n\r\n\r\n\r\nconst autor='TiViAl';\r\nconst moduleName='Main Module';\r\n\r\n_log_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init(moduleName, autor);\r\n_log_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].event('Load');\r\n\r\n//Test.init();\r\n//await initTest();\r\n//const word = await getWord();\r\n//Log.eventParam('Word', word);\r\n\r\nconst timeLine= _timeLine_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].load();\r\n_log_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eventParam('timeLine', timeLine);\r\n\r\n\r\n_log_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].event('Loaded');\r\n\r\n\r\nasync function initTest() {\r\n  _log_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].event('initTest 1');\r\n  _testModule_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\r\n  _log_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].event('initTest 2');\r\n}\r\n\r\nasync function getWord() {\r\n  return new Promise(action);\r\n  \r\n  function action(resolve) {\r\n   setTimeout(delay, 3000);\r\n   \r\n   function delay(){\r\n   \tresolve(\"I love Youuuu !!\");\r\n   }\r\n  }\r\n }\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/testModule.js":
/*!***************************!*\
  !*** ./src/testModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.js */ \"./src/log.js\");\n\r\n\r\n\r\n\r\nfunction init(){\r\n\t_log_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].event( 'test module load');\r\n\t}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n\tinit\r\n\t});\n\n//# sourceURL=webpack:///./src/testModule.js?");

/***/ }),

/***/ "./src/timeLine.js":
/*!*************************!*\
  !*** ./src/timeLine.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TimeLine{\r\n\tconstructor(id, title, season, episode, timeCodes){\r\n\t\tthis.id=id;\r\n\t\tthis.title=title;\r\n\t\tthis.season=season;\r\n\t\tthis.episode=episode;\r\n\t\tthis.timeCodes=timeCodes;\r\n\t\t}\r\n}\r\n\r\n\r\nconst timeLine=[\r\n\r\n  new TimeLine(1, 'Маска', 0, 0, [10, 120, 10134]),\r\n  new TimeLine(2, 'Фалаут', 1, 2, [1919, 120, 10134])\r\n\r\n];\r\n\r\n\r\n\r\nfunction load(){\r\nreturn timeLine;\r\n\t}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n\tload\r\n\t\r\n\t});\n\n//# sourceURL=webpack:///./src/timeLine.js?");

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