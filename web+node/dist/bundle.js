/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ES13.ts":
/*!*********************!*\
  !*** ./src/ES13.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A)
/* harmony export */ });
class A {
}
A.a = 10;
console.log(A.a);


/***/ }),

/***/ "./src/Function.ts":
/*!*************************!*\
  !*** ./src/Function.ts ***!
  \*************************/
/***/ (() => {

const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));
// expected output: 8


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Function */ "./src/Function.ts");
/* harmony import */ var _Function__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Function__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ES13__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ES13 */ "./src/ES13.ts");
/* harmony import */ var _ts_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/enum */ "./src/ts/enum.ts");


console.log('hello word');
let test = TEST;
let m;
let a;
let i_m;



/***/ }),

/***/ "./src/ts/enum.ts":
/*!************************!*\
  !*** ./src/ts/enum.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EA": () => (/* binding */ EA)
/* harmony export */ });
function a() {
    return 1;
}
var EA;
(function (EA) {
    EA[EA["A"] = '123'.length + 1] = "A";
    EA[EA["B"] = a()] = "B";
})(EA || (EA = {}));
/**
 * 字面量枚举
 */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 1] = "No";
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No2"] = 1] = "No2";
    /** 字符串类型的枚举成员是不会有反向映射的，看打包后的文件就能知道 */
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
    BooleanLikeHeterogeneousEnum["Yes2"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
let value1 = 1 /* a */;
/**
 * EA和FileAccess因为不是非计算的常量枚举成员所以它的成员不能作为类型
 * 还有一个变化是枚举本身变成了每个枚举成员的联合
 */
let value2 = BooleanLikeHeterogeneousEnum.No;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9FUzEzLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0Z1bmN0aW9uLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvdHMvZW51bS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU0sQ0FBQzs7QUFDSCxHQUFDLEdBQUcsRUFBRSxDQUFDO0FBTWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ1BqQixNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRW5ELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIRDtBQUVKO0FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFHMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWhCLElBQUksQ0FBVSxDQUFDO0FBQ2YsSUFBSSxDQUFNLENBQUM7QUFFWCxJQUFJLEdBQVUsQ0FBQztBQUVJOzs7Ozs7Ozs7Ozs7Ozs7O0FDYm5CLFNBQVMsQ0FBQztJQUNOLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELElBQVksRUFHWDtBQUhELFdBQVksRUFBRTtJQUNWLGFBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBQ3BCLGFBQUksQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxFQUhXLEVBQUUsS0FBRixFQUFFLFFBR2I7QUFFRDs7R0FFRztBQUNILElBQUssNEJBTUo7QUFORCxXQUFLLDRCQUE0QjtJQUM3QiwyRUFBTTtJQUNOLDZFQUFPO0lBQ1Asc0NBQXNDO0lBQ3RDLDJDQUFXO0lBQ1gsNENBQVk7QUFDaEIsQ0FBQyxFQU5JLDRCQUE0QixLQUE1Qiw0QkFBNEIsUUFNaEM7QUFFRCxJQUFLLFVBUUo7QUFSRCxXQUFLLFVBQVU7SUFDWCxtQkFBbUI7SUFDbkIsMkNBQUk7SUFDSiwyQ0FBYTtJQUNiLDZDQUFjO0lBQ2QscURBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQiw2QkFBSSxLQUFLLENBQUMsTUFBTTtBQUNwQixDQUFDLEVBUkksVUFBVSxLQUFWLFVBQVUsUUFRZDtBQWFELElBQUksTUFBTSxZQUFvQixDQUFDO0FBRS9COzs7R0FHRztBQUNILElBQUksTUFBTSxHQUFvQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7VUMvQzlFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBIHtcclxuICAgIHN0YXRpYyBhID0gMTA7XHJcbiAgICAvLyBzdGF0aWMge1xyXG4gICAgLy8gICAgIHRoaXMuYSA9IDEwMDtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKEEuYSk7IiwiY29uc3Qgc3VtID0gbmV3IEZ1bmN0aW9uKCdhJywgJ2InLCAncmV0dXJuIGEgKyBiJyk7XHJcblxyXG5jb25zb2xlLmxvZyhzdW0oMiwgNikpO1xyXG4vLyBleHBlY3RlZCBvdXRwdXQ6IDgiLCJpbXBvcnQgXCIuL0Z1bmN0aW9uXCI7XHJcblxyXG5pbXBvcnQgXCIuL0VTMTNcIjtcclxuY29uc29sZS5sb2coJ2hlbGxvIHdvcmQnKTtcclxuaW1wb3J0IEcgZnJvbSBcImdsb2JcIjtcclxuXHJcbmxldCB0ZXN0ID0gVEVTVDtcclxuXHJcbmxldCBtOiBHLklHbG9iO1xyXG5sZXQgYTogRy5BO1xyXG5cclxubGV0IGlfbTogSVRlc3Q7XHJcblxyXG5pbXBvcnQgXCIuL3RzL2VudW1cIjsiLCJmdW5jdGlvbiBhKCkge1xyXG4gICAgcmV0dXJuIDE7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVBIHtcclxuICAgIEEgPSAnMTIzJy5sZW5ndGggKyAxLFxyXG4gICAgQiA9IGEoKSxcclxufVxyXG5cclxuLyoqXHJcbiAqIOWtl+mdoumHj+aemuS4vlxyXG4gKi9cclxuZW51bSBCb29sZWFuTGlrZUhldGVyb2dlbmVvdXNFbnVtIHtcclxuICAgIE5vID0gMSxcclxuICAgIE5vMiA9IDEsXHJcbiAgICAvKiog5a2X56ym5Liy57G75Z6L55qE5p6a5Li+5oiQ5ZGY5piv5LiN5Lya5pyJ5Y+N5ZCR5pig5bCE55qE77yM55yL5omT5YyF5ZCO55qE5paH5Lu25bCx6IO955+l6YGTICovXHJcbiAgICBZZXMgPSBcIllFU1wiLFxyXG4gICAgWWVzMiA9IFwiWUVTXCIsXHJcbn1cclxuXHJcbmVudW0gRmlsZUFjY2VzcyB7XHJcbiAgICAvLyBjb25zdGFudCBtZW1iZXJzXHJcbiAgICBOb25lLFxyXG4gICAgUmVhZCA9IDEgPDwgMSxcclxuICAgIFdyaXRlID0gMSA8PCAyLFxyXG4gICAgUmVhZFdyaXRlID0gUmVhZCB8IFdyaXRlLFxyXG4gICAgLy8gY29tcHV0ZWQgbWVtYmVyXHJcbiAgICBHID0gXCIxMjNcIi5sZW5ndGhcclxufVxyXG5cclxuLyoqXHJcbiAqIOW4uOmHj+aemuS4vlxyXG4gKiBjb25zdOS/rumlsOWQjueahOaemuS4vuS8muWcqOe8luivkeWQjuiiq+mdmeaAgeabv+aNouaIkOWvueW6lOeahOWAvO+8jOmYsuatoumineWkluS7o+eggeeahOW8gOmUgFxyXG4gKiDluLjph4/mnprkuL7lj6rog73kvb/nlKjluLjph4/mnprkuL7ooajovr7lvI/ogIzkuJTkuI3lhYHorrjljIXlkKvorqHnrpflgLxcclxuICovXHJcbmNvbnN0IGVudW0gRUMge1xyXG4gICAgYSA9IDEsXHJcbiAgICBiID0gMixcclxuICAgIGMgPSAzLFxyXG59XHJcblxyXG5sZXQgdmFsdWUxOiBFQy5hIHwgRUMuYyA9IEVDLmE7XHJcblxyXG4vKipcclxuICogRUHlkoxGaWxlQWNjZXNz5Zug5Li65LiN5piv6Z2e6K6h566X55qE5bi46YeP5p6a5Li+5oiQ5ZGY5omA5Lul5a6D55qE5oiQ5ZGY5LiN6IO95L2c5Li657G75Z6LXHJcbiAqIOi/mOacieS4gOS4quWPmOWMluaYr+aemuS4vuacrOi6q+WPmOaIkOS6huavj+S4quaemuS4vuaIkOWRmOeahOiBlOWQiFxyXG4gKi9cclxubGV0IHZhbHVlMjogQm9vbGVhbkxpa2VIZXRlcm9nZW5lb3VzRW51bS5ObyA9IEJvb2xlYW5MaWtlSGV0ZXJvZ2VuZW91c0VudW0uTm87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL01haW4udHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9