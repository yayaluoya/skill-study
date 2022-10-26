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
var ES;
(function (ES) {
    ES["a"] = "a";
    ES["b"] = "";
})(ES || (ES = {}));
let a__ = BooleanLikeHeterogeneousEnum.Yes;
let a__1 = 1;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9FUzEzLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0Z1bmN0aW9uLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvdHMvZW51bS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU0sQ0FBQzs7QUFDSCxHQUFDLEdBQUcsRUFBRSxDQUFDO0FBTWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ1BqQixNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRW5ELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIRDtBQUVKO0FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFHMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWhCLElBQUksQ0FBVSxDQUFDO0FBQ2YsSUFBSSxDQUFNLENBQUM7QUFFWCxJQUFJLEdBQVUsQ0FBQztBQUVJOzs7Ozs7Ozs7Ozs7Ozs7O0FDYm5CLFNBQVMsQ0FBQztJQUNOLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELElBQVksRUFHWDtBQUhELFdBQVksRUFBRTtJQUNWLGFBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBQ3BCLGFBQUksQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxFQUhXLEVBQUUsS0FBRixFQUFFLFFBR2I7QUFFRDs7R0FFRztBQUNILElBQUssNEJBTUo7QUFORCxXQUFLLDRCQUE0QjtJQUM3QiwyRUFBTTtJQUNOLDZFQUFPO0lBQ1Asc0NBQXNDO0lBQ3RDLDJDQUFXO0lBQ1gsNENBQVk7QUFDaEIsQ0FBQyxFQU5JLDRCQUE0QixLQUE1Qiw0QkFBNEIsUUFNaEM7QUFFRCxJQUFLLFVBUUo7QUFSRCxXQUFLLFVBQVU7SUFDWCxtQkFBbUI7SUFDbkIsMkNBQUk7SUFDSiwyQ0FBYTtJQUNiLDZDQUFjO0lBQ2QscURBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQiw2QkFBSSxLQUFLLENBQUMsTUFBTTtBQUNwQixDQUFDLEVBUkksVUFBVSxLQUFWLFVBQVUsUUFRZDtBQWFELElBQUksTUFBTSxZQUFvQixDQUFDO0FBRS9COzs7R0FHRztBQUNILElBQUksTUFBTSxHQUFvQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUM7QUFFOUUsSUFBSyxFQUdKO0FBSEQsV0FBSyxFQUFFO0lBQ0gsYUFBTztJQUNQLFlBQU07QUFDVixDQUFDLEVBSEksRUFBRSxLQUFGLEVBQUUsUUFHTjtBQUVELElBQUksR0FBRyxHQUFXLDRCQUE0QixDQUFDLEdBQUcsQ0FBQztBQUNuRCxJQUFJLElBQUksR0FBaUMsQ0FBQyxDQUFDOzs7Ozs7O1VDdkQzQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQSB7XHJcbiAgICBzdGF0aWMgYSA9IDEwO1xyXG4gICAgLy8gc3RhdGljIHtcclxuICAgIC8vICAgICB0aGlzLmEgPSAxMDA7XHJcbiAgICAvLyB9O1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhBLmEpOyIsImNvbnN0IHN1bSA9IG5ldyBGdW5jdGlvbignYScsICdiJywgJ3JldHVybiBhICsgYicpO1xyXG5cclxuY29uc29sZS5sb2coc3VtKDIsIDYpKTtcclxuLy8gZXhwZWN0ZWQgb3V0cHV0OiA4IiwiaW1wb3J0IFwiLi9GdW5jdGlvblwiO1xyXG5cclxuaW1wb3J0IFwiLi9FUzEzXCI7XHJcbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JkJyk7XHJcbmltcG9ydCBHIGZyb20gXCJnbG9iXCI7XHJcblxyXG5sZXQgdGVzdCA9IFRFU1Q7XHJcblxyXG5sZXQgbTogRy5JR2xvYjtcclxubGV0IGE6IEcuQTtcclxuXHJcbmxldCBpX206IElUZXN0O1xyXG5cclxuaW1wb3J0IFwiLi90cy9lbnVtXCI7IiwiZnVuY3Rpb24gYSgpIHtcclxuICAgIHJldHVybiAxO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFQSB7XHJcbiAgICBBID0gJzEyMycubGVuZ3RoICsgMSxcclxuICAgIEIgPSBhKCksXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrZfpnaLph4/mnprkuL5cclxuICovXHJcbmVudW0gQm9vbGVhbkxpa2VIZXRlcm9nZW5lb3VzRW51bSB7XHJcbiAgICBObyA9IDEsXHJcbiAgICBObzIgPSAxLFxyXG4gICAgLyoqIOWtl+espuS4suexu+Wei+eahOaemuS4vuaIkOWRmOaYr+S4jeS8muacieWPjeWQkeaYoOWwhOeahO+8jOeci+aJk+WMheWQjueahOaWh+S7tuWwseiDveefpemBkyAqL1xyXG4gICAgWWVzID0gXCJZRVNcIixcclxuICAgIFllczIgPSBcIllFU1wiLFxyXG59XHJcblxyXG5lbnVtIEZpbGVBY2Nlc3Mge1xyXG4gICAgLy8gY29uc3RhbnQgbWVtYmVyc1xyXG4gICAgTm9uZSxcclxuICAgIFJlYWQgPSAxIDw8IDEsXHJcbiAgICBXcml0ZSA9IDEgPDwgMixcclxuICAgIFJlYWRXcml0ZSA9IFJlYWQgfCBXcml0ZSxcclxuICAgIC8vIGNvbXB1dGVkIG1lbWJlclxyXG4gICAgRyA9IFwiMTIzXCIubGVuZ3RoXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDluLjph4/mnprkuL5cclxuICogY29uc3Tkv67ppbDlkI7nmoTmnprkuL7kvJrlnKjnvJbor5HlkI7ooqvpnZnmgIHmm7/mjaLmiJDlr7nlupTnmoTlgLzvvIzpmLLmraLpop3lpJbku6PnoIHnmoTlvIDplIBcclxuICog5bi46YeP5p6a5Li+5Y+q6IO95L2/55So5bi46YeP5p6a5Li+6KGo6L6+5byP6ICM5LiU5LiN5YWB6K645YyF5ZCr6K6h566X5YC8XHJcbiAqL1xyXG5jb25zdCBlbnVtIEVDIHtcclxuICAgIGEgPSAxLFxyXG4gICAgYiA9IDIsXHJcbiAgICBjID0gMyxcclxufVxyXG5cclxubGV0IHZhbHVlMTogRUMuYSB8IEVDLmMgPSBFQy5hO1xyXG5cclxuLyoqXHJcbiAqIEVB5ZKMRmlsZUFjY2Vzc+WboOS4uuS4jeaYr+mdnuiuoeeul+eahOW4uOmHj+aemuS4vuaIkOWRmOaJgOS7peWug+eahOaIkOWRmOS4jeiDveS9nOS4uuexu+Wei1xyXG4gKiDov5jmnInkuIDkuKrlj5jljJbmmK/mnprkuL7mnKzouqvlj5jmiJDkuobmr4/kuKrmnprkuL7miJDlkZjnmoTogZTlkIhcclxuICovXHJcbmxldCB2YWx1ZTI6IEJvb2xlYW5MaWtlSGV0ZXJvZ2VuZW91c0VudW0uTm8gPSBCb29sZWFuTGlrZUhldGVyb2dlbmVvdXNFbnVtLk5vO1xyXG5cclxuZW51bSBFUyB7XHJcbiAgICBhID0gJ2EnLFxyXG4gICAgYiA9ICcnXHJcbn1cclxuXHJcbmxldCBhX186IHN0cmluZyA9IEJvb2xlYW5MaWtlSGV0ZXJvZ2VuZW91c0VudW0uWWVzO1xyXG5sZXQgYV9fMTogQm9vbGVhbkxpa2VIZXRlcm9nZW5lb3VzRW51bSA9IDE7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL01haW4udHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9