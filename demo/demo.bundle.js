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

/***/ "./demo/demo.js":
/*!**********************!*\
  !*** ./demo/demo.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_pulsator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/pulsator.js */ \"./lib/pulsator.js\");\n\n\nconst options = {\n  width: \"20px\",\n  height: \"20px\"\n};\nconst parent = document.querySelector(\".demo-space\");\nconst pulsator = new _lib_pulsator_js__WEBPACK_IMPORTED_MODULE_0__.default(parent, options);\nconst el = pulsator.getElement();\nel.style.position = \"absolute\";\n\nparent.addEventListener(\"click\", function(event) {\n  el.style.left = (event.pageX - 10 /* 10px is the half of pulsator width */) + \"px\";\n  el.style.top = (event.pageY - 10 /* 10px is the half of pulsator height */) + \"px\";\n  pulsator.start();\n});\n\nel.onmouseover = function(event) {\n  pulsator.pause();\n};\n\nel.onmouseleave = function(event) {\n  pulsator.start();\n};\n\nwindow.onkeydown = function(event) {\n  if (event.key === \"Escape\") {\n    pulsator.stop();\n  }\n  if (event.key === \"Enter\") {\n    pulsator.reverse();\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./demo/demo.js?");

/***/ }),

/***/ "./lib/pulsator.js":
/*!*************************!*\
  !*** ./lib/pulsator.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Pulsator = (function () {\n    function Pulsator(parent, options) {\n        this.element = document.createElement(\"div\");\n        parent.appendChild(this.element);\n        var style = {\n            display: \"none\",\n            width: \"15px\",\n            height: \"15px\",\n            borderRadius: \"50%\",\n            borderColor: \"red\",\n            background: \"red\",\n            boxShadow: \"0 0 0 rgba(255,0,0, 0.4)\"\n        };\n        Object.assign(this.element.style, style, options);\n        this.animation = this.element.animate({\n            boxShadow: [\"0 0 0 0 rgba(255,0,0, 1)\", \"0 0 0 20px rgba(255,0,0, 0)\"]\n        }, {\n            duration: 1500,\n            iterations: Infinity\n        });\n        this.animation.cancel();\n    }\n    Pulsator.prototype.start = function () {\n        this.element.style.display = \"block\";\n        this.animation.play();\n    };\n    Pulsator.prototype.stop = function () {\n        this.animation.cancel();\n        this.element.style.display = \"none\";\n    };\n    Pulsator.prototype.pause = function () {\n        this.animation.pause();\n    };\n    Pulsator.prototype.reverse = function () {\n        this.animation.reverse();\n    };\n    Pulsator.prototype.getElement = function () {\n        return this.element;\n    };\n    return Pulsator;\n}());\nexports.default = Pulsator;\n\n\n//# sourceURL=webpack://my-webpack-project/./lib/pulsator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./demo/demo.js");
/******/ 	
/******/ })()
;