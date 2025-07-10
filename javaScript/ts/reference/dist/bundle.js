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
/* harmony export */   A: () => (/* binding */ A)
/* harmony export */ });
class A {
    static a = 10;
}
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

/***/ "./src/ts/enum.ts":
/*!************************!*\
  !*** ./src/ts/enum.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EA: () => (/* binding */ EA)
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
    FileAccess[FileAccess["G"] = '123'.length] = "G";
})(FileAccess || (FileAccess = {}));
let value1 = 1 /* EC.a */;
/**
 * EA和FileAccess因为不是非计算的常量枚举成员所以它的成员不能作为类型
 * 还有一个变化是枚举本身变成了每个枚举成员的联合
 */
let value2 = BooleanLikeHeterogeneousEnum.No;
var ES;
(function (ES) {
    ES["a"] = "a";
    ES["b"] = "";
})(ES || (ES = {}));
let a__ = BooleanLikeHeterogeneousEnum.Yes;
let a__1 = 1;


/***/ }),

/***/ "./src/ts/metadata.ts":
/*!****************************!*\
  !*** ./src/ts/metadata.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'reflect-metadata'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

console.log('metadata的测试');


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Function */ "./src/Function.ts");
/* harmony import */ var _Function__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Function__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ES13__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ES13 */ "./src/ES13.ts");
/* harmony import */ var _ts_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/metadata */ "./src/ts/metadata.ts");
/* harmony import */ var _ts_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/enum */ "./src/ts/enum.ts");



console.log('hello word');
// let test = TEST;
let m;
let a;
let i_m;

class AAA {
    a;
    b = (function () {
        console.log('b属性初始化');
        return 10;
    })();
    constructor() {
        this.a = 'a';
        this.b = 1;
    }
    f() {
        return this.a;
    }
}
class AAAA extends AAA {
}
console.log(AAA.prototype);
// new AAA();
let arr = [];
arr.at__();
arr.toString();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLElBQUssU0FBUSxHQUFHO0NBQUc7QUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFM0IsYUFBYTtBQUViLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNYLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQvLi9zcmMvRVMxMy50cyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Ly4vc3JjL0Z1bmN0aW9uLnRzIiwid2VicGFjazovL2phdmFzY3JpcHQvLi9zcmMvdHMvZW51bS50cyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Ly4vc3JjL3RzL21ldGFkYXRhLnRzIiwid2VicGFjazovL2phdmFzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQvLi9zcmMvTWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQSB7XHJcbiAgc3RhdGljIGEgPSAxMDtcclxuICAvLyBzdGF0aWMge1xyXG4gIC8vICAgICB0aGlzLmEgPSAxMDA7XHJcbiAgLy8gfTtcclxufVxyXG5cclxuY29uc29sZS5sb2coQS5hKTtcclxuIiwiY29uc3Qgc3VtID0gbmV3IEZ1bmN0aW9uKCdhJywgJ2InLCAncmV0dXJuIGEgKyBiJyk7XHJcblxyXG5jb25zb2xlLmxvZyhzdW0oMiwgNikpO1xyXG4vLyBleHBlY3RlZCBvdXRwdXQ6IDhcclxuIiwiZnVuY3Rpb24gYSgpIHtcclxuICByZXR1cm4gMTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRUEge1xyXG4gIEEgPSAnMTIzJy5sZW5ndGggKyAxLFxyXG4gIEIgPSBhKCksXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrZfpnaLph4/mnprkuL5cclxuICovXHJcbmVudW0gQm9vbGVhbkxpa2VIZXRlcm9nZW5lb3VzRW51bSB7XHJcbiAgTm8gPSAxLFxyXG4gIE5vMiA9IDEsXHJcbiAgLyoqIOWtl+espuS4suexu+Wei+eahOaemuS4vuaIkOWRmOaYr+S4jeS8muacieWPjeWQkeaYoOWwhOeahO+8jOeci+aJk+WMheWQjueahOaWh+S7tuWwseiDveefpemBkyAqL1xyXG4gIFllcyA9ICdZRVMnLFxyXG4gIFllczIgPSAnWUVTJyxcclxufVxyXG5cclxuZW51bSBGaWxlQWNjZXNzIHtcclxuICAvLyBjb25zdGFudCBtZW1iZXJzXHJcbiAgTm9uZSxcclxuICBSZWFkID0gMSA8PCAxLFxyXG4gIFdyaXRlID0gMSA8PCAyLFxyXG4gIFJlYWRXcml0ZSA9IFJlYWQgfCBXcml0ZSxcclxuICAvLyBjb21wdXRlZCBtZW1iZXJcclxuICBHID0gJzEyMycubGVuZ3RoLFxyXG59XHJcblxyXG4vKipcclxuICog5bi46YeP5p6a5Li+XHJcbiAqIGNvbnN05L+u6aWw5ZCO55qE5p6a5Li+5Lya5Zyo57yW6K+R5ZCO6KKr6Z2Z5oCB5pu/5o2i5oiQ5a+55bqU55qE5YC877yM6Ziy5q2i6aKd5aSW5Luj56CB55qE5byA6ZSAXHJcbiAqIOW4uOmHj+aemuS4vuWPquiDveS9v+eUqOW4uOmHj+aemuS4vuihqOi+vuW8j+iAjOS4lOS4jeWFgeiuuOWMheWQq+iuoeeul+WAvFxyXG4gKi9cclxuY29uc3QgZW51bSBFQyB7XHJcbiAgYSA9IDEsXHJcbiAgYiA9IDIsXHJcbiAgYyA9IDMsXHJcbn1cclxuXHJcbmxldCB2YWx1ZTE6IEVDLmEgfCBFQy5jID0gRUMuYTtcclxuXHJcbi8qKlxyXG4gKiBFQeWSjEZpbGVBY2Nlc3Plm6DkuLrkuI3mmK/pnZ7orqHnrpfnmoTluLjph4/mnprkuL7miJDlkZjmiYDku6XlroPnmoTmiJDlkZjkuI3og73kvZzkuLrnsbvlnotcclxuICog6L+Y5pyJ5LiA5Liq5Y+Y5YyW5piv5p6a5Li+5pys6Lqr5Y+Y5oiQ5LqG5q+P5Liq5p6a5Li+5oiQ5ZGY55qE6IGU5ZCIXHJcbiAqL1xyXG5sZXQgdmFsdWUyOiBCb29sZWFuTGlrZUhldGVyb2dlbmVvdXNFbnVtLk5vID0gQm9vbGVhbkxpa2VIZXRlcm9nZW5lb3VzRW51bS5ObztcclxuXHJcbmVudW0gRVMge1xyXG4gIGEgPSAnYScsXHJcbiAgYiA9ICcnLFxyXG59XHJcblxyXG5sZXQgYV9fOiBzdHJpbmcgPSBCb29sZWFuTGlrZUhldGVyb2dlbmVvdXNFbnVtLlllcztcclxubGV0IGFfXzE6IEJvb2xlYW5MaWtlSGV0ZXJvZ2VuZW91c0VudW0gPSAxO1xyXG4iLCJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xyXG5cclxuY29uc29sZS5sb2coJ21ldGFkYXRh55qE5rWL6K+VJyk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vRnVuY3Rpb24nO1xyXG5cclxuaW1wb3J0ICcuL0VTMTMnO1xyXG5pbXBvcnQgJy4vdHMvbWV0YWRhdGEnO1xyXG5jb25zb2xlLmxvZygnaGVsbG8gd29yZCcpO1xyXG5pbXBvcnQgRyBmcm9tICdnbG9iJztcclxuXHJcbi8vIGxldCB0ZXN0ID0gVEVTVDtcclxuXHJcbmxldCBtOiBHLklHbG9iO1xyXG5sZXQgYTogRy5BO1xyXG5cclxubGV0IGlfbTogSVRlc3Q7XHJcblxyXG5pbXBvcnQgJy4vdHMvZW51bSc7XHJcblxyXG5jbGFzcyBBQUEge1xyXG4gIGE6IHN0cmluZztcclxuICBiOiBudW1iZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2LlsZ7mgKfliJ3lp4vljJYnKTtcclxuICAgIHJldHVybiAxMDtcclxuICB9KSgpO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hID0gJ2EnO1xyXG4gICAgdGhpcy5iID0gMTtcclxuICB9XHJcbiAgZigpIHtcclxuICAgIHJldHVybiB0aGlzLmE7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBBQUFBIGV4dGVuZHMgQUFBIHt9XHJcblxyXG5jb25zb2xlLmxvZyhBQUEucHJvdG90eXBlKTtcclxuXHJcbi8vIG5ldyBBQUEoKTtcclxuXHJcbmxldCBhcnIgPSBbXTtcclxuYXJyLmF0X18oKTtcclxuYXJyLnRvU3RyaW5nKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==