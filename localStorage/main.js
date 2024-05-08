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

/***/ "./src/ViewEvents.js":
/*!***************************!*\
  !*** ./src/ViewEvents.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ViewEvents)\n/* harmony export */ });\nclass ViewEvents {\r\n\r\n    static eventNameAttribute='eventName';\r\n\r\n    constructor(){\r\n        \r\n        this.onSaveClick;\r\n        this.setEventNameAttributeToElementId('btnSave', 'onSaveClick');      \r\n        \r\n        this.onLoadClick;\r\n        this.setEventNameAttributeToElementId('btnLoad', 'onLoadClick');\r\n\r\n        this.onClearClick;\r\n        this.setEventNameAttributeToElementId('btnClear', 'onClearClick');\r\n\r\n        \r\n        this.onTestChanged;\r\n        this.setEventNameAttributeToElementId('Test', 'onTestChanged');\r\n\r\n\r\n        const inputs = this.getElementsByTagName('input'); \r\n        this.setOnClickButtonEvent(inputs);\r\n        this.setOnChangeInputEvent(inputs);\r\n    }\r\n\r\n\r\n\r\n    getEventNameAttributeFromElement(element){\r\n        return element.getAttribute(ViewEvents.eventNameAttribute);\r\n    }\r\n\r\n    setEventNameAttributeToElementId(elementId, eventName){\r\n        this.getElementById(elementId).setAttribute(ViewEvents.eventNameAttribute, eventName);\r\n    }\r\n\r\n    getElementById(elementId){\r\n        return document.getElementById(elementId);\r\n    }\r\n\r\n    getElementsByTagName(tagName){\r\n        return Array.from(document.getElementsByTagName(tagName));\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    setOnClickButtonEvent(inputs){\r\n        inputs.filter(i=>i.type==\"button\")\r\n              .forEach(i=>i.onclick = e=>this.onClickButtonEvent(e.target));\r\n    }\r\n\r\n\r\n    onClickButtonEvent(button) {\r\n        //console.log('onClickButton:', 'Id =', button.id, 'attribute =', this.getEventNameAttributeFromElement(button));\r\n        //console.log(this.getEventNameAttributeFromElement(button)]);\r\n        //console.log(this[this.getEventNameAttributeFromElement(button)]);\r\n\r\n        if(button.hasAttribute(ViewEvents.eventNameAttribute)){\r\n            this[this.getEventNameAttributeFromElement(button)]();\r\n        }\r\n    }\r\n\r\n\r\n\r\n    setOnChangeInputEvent(inputs) {\r\n        inputs.filter(i=>i.type==\"text\")\r\n              .forEach(i=>i.onchange = d => this.onChangeInputEvent(d.target));\r\n    }\r\n\r\n\r\n    onChangeInputEvent(input) {\r\n        //console.log('OnChangeInput:', 'Id =', input.id, 'attribute', this.getEventNameAttributeFromElement(input));\r\n        //  console.log(this[input.title]);\r\n\r\n        if(input.hasAttribute(ViewEvents.eventNameAttribute)){\r\n            this[this.getEventNameAttributeFromElement(input)](input.value);\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/ViewEvents.js?");

/***/ }),

/***/ "./src/ViewValues.js":
/*!***************************!*\
  !*** ./src/ViewValues.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ViewValues)\n/* harmony export */ });\nclass ViewValues {\r\n    \r\n    constructor(){\r\n        this.status= this.getElementById('Status');\r\n        \r\n        this.key= this.getElementById('Key');\r\n        this.value= this.getElementById('Value');\r\n        this.test= this.getElementById('Test');\r\n\r\n        this.Status='created';\r\n    }\r\n\r\n\r\n\r\n    get Status() {\r\n        return this.getValueOfElement(this.status);\r\n    }\r\n\r\n    set Status(value) {\r\n        this.setValueOfElement(this.status, value);\r\n    }\r\n\r\n\r\n    get Key() {\r\n        return this.getValueOfElement(this.key);\r\n    }\r\n\r\n    set Key(value) {\r\n        this.setValueOfElement(this.key, value);\r\n    }\r\n\r\n\r\n    get Value() {\r\n        return this.getValueOfElement(this.value);\r\n    }\r\n\r\n    set Value(value) {\r\n        this.setValueOfElement(this.value, value);\r\n    }\r\n\r\n\r\n\r\n\r\n    get Test() {\r\n        return this.getValueOfElement(this.test);\r\n    }\r\n\r\n    set Test(value) {\r\n        this.setValueOfElement(this.test, value);\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    getElementById(elementId){\r\n        return document.getElementById(elementId);\r\n    }\r\n\r\n    getValueOfElement(element){\r\n        if (element instanceof HTMLInputElement) {\r\n            return element.value;\r\n        } else if (element instanceof HTMLParagraphElement) {\r\n            return element.textContent;\r\n        } else {\r\n            throw 'ViewValues getValueOfElement: type is not defined ' + element.nodeName;\r\n        }\r\n    }\r\n\r\n    setValueOfElement(element, value){\r\n        if (element instanceof HTMLInputElement) {\r\n            element.value = value;\r\n        } else if (element instanceof HTMLParagraphElement) {\r\n            element.textContent = value;\r\n        } else {\r\n            throw 'ViewValues setValueOfElement: type is not defined ' + element.nodeName;\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/ViewValues.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ViewValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewValues */ \"./src/ViewValues.js\");\n/* harmony import */ var _ViewEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewEvents */ \"./src/ViewEvents.js\");\n\r\n\r\n\r\n\r\nconst events = new _ViewEvents__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nevents.onLoadClick=load;\r\nevents.onSaveClick=save;\r\nevents.onClearClick=clearForm;\r\nevents.onTestChanged=onTestChanged;\r\n\r\nconst view = new _ViewValues__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nview.status2\r\nconsole.log('Status = ', view.Status);\r\nview.Status='good';\r\nconsole.log('Status = ', view.Status);\r\n\r\nview.Test=\"kyky yepta!\";\r\n\r\n\r\nfunction onTestChanged(value) {\r\n  view.Status=value;\r\n}\r\n\r\n\r\n\r\nfunction clearForm() {\r\n  view.Key='';\r\n  view.Value='';\r\n  view.Test='';\r\n  view.Status='Очищено';\r\n}\r\n\r\nfunction load() {\r\n    let value=loadFromLocalStorage(view.Key);\r\n    view.Status = 'Загружен ключ '+ view.Key +' с значением '+ value;\r\n}\r\n\r\n\r\nfunction save() {\r\n  saveToLocalStorage(view.Key, view.Value);\r\n  view.Status ='Ключ '+ view.Key +' с значением '+ view.Value + ' сохранен';\r\n}\r\n\r\nfunction saveToLocalStorage(key, value) {\r\n  localStorage.setItem(key, value);\r\n}\r\n\r\nfunction loadFromLocalStorage(key) {\r\n  return localStorage.getItem(key);\r\n}\n\n//# sourceURL=webpack:///./src/main.js?");

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