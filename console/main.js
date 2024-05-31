/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/PathMy.js":
/*!********************************!*\
  !*** ./node_modules/PathMy.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var __dirname = \"/\";\nvar __filename = \"/index.js\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass PathMy{\r\n    constructor(){\r\n        this.Dir = __dirname;\r\n        this.File = __filename;\r\n\r\n        this.Path = window.location.href;\r\n        this.Loacion=location;\r\n\r\n        this.DirName ='kk';\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PathMy());\n\n//# sourceURL=webpack:///./node_modules/PathMy.js?");

/***/ }),

/***/ "./src/dateTest.js":
/*!*************************!*\
  !*** ./src/dateTest.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    getCurrDate,\r\n    dateCalc\r\n});\r\n\r\n\r\n\r\nfunction getCurrDate() {\r\n    return new Date();\r\n}\r\n\r\nfunction dateCalc() {\r\n    const nowMillisecs=Date.now();\r\n    const nowPlus30=nowMillisecs + 1000*60*30;//add 30 minute\r\n    const nowPlus80=nowMillisecs + 1000*60*80;//add 80 minute\r\n\r\n    const now= new Date(nowMillisecs);//same as new Date();\r\n    const now30= new Date(nowPlus30);\r\n    const now80= new Date(nowPlus80);\r\n\r\n    console.log('nowMillisecs =', nowMillisecs);\r\n    console.log(now);\r\n    console.log(now30);\r\n    console.log(now80);\r\n\r\n    const timeMinDiff1=(nowPlus30-nowMillisecs)/60/1000;\r\n    const timeMinDiff2=(now80-now)/60/1000;\r\n\r\n    console.log('timeMinDiff1 =', timeMinDiff1, 'minute');\r\n    console.log('timeMinDiff2 =', timeMinDiff2, 'minute');\r\n}\n\n//# sourceURL=webpack:///./src/dateTest.js?");

/***/ }),

/***/ "./src/fileSave.js":
/*!*************************!*\
  !*** ./src/fileSave.js ***!
  \*************************/
/***/ (() => {

eval("\r\n\r\nconst jsonData={title:'hi', value:35};\r\n\r\n\r\n\r\n\r\nbtnSaveFile.onclick=()=>{\r\n    saveTextToFile(JSON.stringify(jsonData), 'json.txt', 'application/json');\r\n\r\n};\r\n\r\n\r\n\r\n\r\n\r\nfunction saveTextToFile(text, fileName, contentType='text/plain') {\r\n    var a = document.createElement(\"a\");\r\n    var file = new Blob([text], {type: contentType});\r\n    a.href = URL.createObjectURL(file);\r\n    a.download = fileName;\r\n    a.click();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/fileSave.js?");

/***/ }),

/***/ "./src/importTest.js":
/*!***************************!*\
  !*** ./src/importTest.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var PathMy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! PathMy */ \"./node_modules/PathMy.js\");\n//export { PathMy }\r\n// import {PathMy} from 'PathMy';\r\n//export default  PathMy \r\n// import PathMy from 'PathMy';\r\n// const pathMy= new PathMy();\r\n\r\n\r\n//export default { PathMy }\r\n// import PathMy from 'PathMy';\r\n// const pathMy= new PathMy.PathMy();\r\n\r\n\r\n//export default {pathMy:new PathMy() }\r\n// import PathMy from 'PathMy';\r\n//const pathMy=PathMy.pathMy;\r\n\r\n// const x=new PathMy();\r\n// export { pathMy }\r\n//import {pathMy} from 'PathMy';\r\n//export default  new PathMy()\r\n\r\n\r\n//const pathMy = require('PathMy');\r\n//console.log(pathMy.default);\r\n\r\n//const path = require('path');\r\n\r\n\r\nconst testES6test=`Текущий host: ${window.location.hostname}. Тест ES6!`;\r\n//console.log(testES6test);\r\n//test();\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    testES6test,\r\n    pathMy: PathMy__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    test\r\n});\r\n\r\nfunction test() {\r\n    console.log(PathMy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    \r\n    console.log(testES6test);\r\n    console.log('Current Dir:', PathMy__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Dir);\r\n    console.log('Current Path:', PathMy__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Path);\r\n    console.log('location:', PathMy__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Loacion);\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/importTest.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _importTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importTest */ \"./src/importTest.js\");\n/* harmony import */ var _dateTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateTest */ \"./src/dateTest.js\");\n/* harmony import */ var _fileSave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fileSave */ \"./src/fileSave.js\");\n/* harmony import */ var _fileSave__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fileSave__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n//import Plugin from './plugin'\r\n\r\n\r\nconsole.log('my first console log in', _dateTest__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCurrDate());\r\nconsole.log(_importTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"].testES6test);\r\nprintStatus(`href=${_importTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pathMy.Path} __dirname=${_importTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pathMy.Dir} __filename=${_importTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pathMy.File}`);\r\n\r\n\r\n// const newDir=path.dirname(__dirname, 'public');\r\n// console.log('newDir', newDir);\r\n//ImportTest.test();\r\n//DateTest.dateCalc();\r\n\r\n\r\n\r\n\r\ninputBtnDate.onclick=(e)=>{\r\n    console.log('inputBtnDate.onclick', e);\r\n    printStatus(new Date());\r\n};\r\n\r\ninputBtnPrintPath.onclick=function (e) {\r\n    console.log('inputBtnDate.onclick', e);\r\n    printStatus(_importTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pathMy.Path)\r\n}\r\n\r\n\r\n\r\nfunction printStatus(value) {\r\n    paragStatus.textContent = value;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    exportFunc:printStatus\r\n});\r\n\r\n\r\n// inputBtnDate.addEventListener(\"click\", e=>printStatus(new Date()));\r\n// inputBtnPrintPath.addEventListener(\"click\", e=>printStatus(ImportTest.pathMy.Path));\n\n//# sourceURL=webpack:///./src/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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