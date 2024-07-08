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
                    /* harmony export */
                });
                class A {
                }
                A.a = 10;
                console.log(A.a);


                /***/
            }),

/***/ "./src/Function.ts":
/*!*************************!*\
  !*** ./src/Function.ts ***!
  \*************************/
/***/ (() => {

                const sum = new Function('a', 'b', 'return a + b');
                console.log(sum(2, 6));
                // expected output: 8


                /***/
            }),

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
                // let test = TEST;
                let m;
                let a;
                let i_m;

                class AAA {
                    constructor() {
                        this.b = (function () {
                            console.log('b属性初始化');
                            return 10;
                        })();
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


                /***/
            }),

/***/ "./src/ts/enum.ts":
/*!************************!*\
  !*** ./src/ts/enum.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EA": () => (/* binding */ EA)
                    /* harmony export */
                });
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


                /***/
            })

        /******/
    });
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if (__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
            /******/
        }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
            /******/
        };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
    }
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
            /******/
        };
        /******/
    })();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
    })();
/******/
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Main.ts");
    /******/ 	// This entry module used 'exports' so it can't be inlined
    /******/
})()
    ;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS8uL3NyYy9FUzEzLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL0Z1bmN0aW9uLnRzIiwid2VicGFjazovL2xheWFfbWluaV9nYW1lLy4vc3JjL01haW4udHMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvLi9zcmMvdHMvZW51bS50cyIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGF5YV9taW5pX2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYXlhX21pbmlfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xheWFfbWluaV9nYW1lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU0sQ0FBQzs7QUFDSCxHQUFDLEdBQUcsRUFBRSxDQUFDO0FBTWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ1BqQixNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRW5ELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIRDtBQUVKO0FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFHMUIsbUJBQW1CO0FBRW5CLElBQUksQ0FBVSxDQUFDO0FBQ2YsSUFBSSxDQUFNLENBQUM7QUFFWCxJQUFJLEdBQVUsQ0FBQztBQUVJO0FBRW5CLE1BQU0sR0FBRztJQU1MO1FBSkEsTUFBQyxHQUFXLENBQUM7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVELElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0QsQ0FBQztRQUNHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUFFRCxNQUFNLElBQUssU0FBUSxHQUFHO0NBQUk7QUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBRTFCLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2IsU0FBUyxDQUFDO0lBQ04sT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRUQsSUFBWSxFQUdYO0FBSEQsV0FBWSxFQUFFO0lBQ1YsYUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDcEIsYUFBSSxDQUFDLEVBQUU7QUFDWCxDQUFDLEVBSFcsRUFBRSxLQUFGLEVBQUUsUUFHYjtBQUVEOztHQUVHO0FBQ0gsSUFBSyw0QkFNSjtBQU5ELFdBQUssNEJBQTRCO0lBQzdCLDJFQUFNO0lBQ04sNkVBQU87SUFDUCxzQ0FBc0M7SUFDdEMsMkNBQVc7SUFDWCw0Q0FBWTtBQUNoQixDQUFDLEVBTkksNEJBQTRCLEtBQTVCLDRCQUE0QixRQU1oQztBQUVELElBQUssVUFRSjtBQVJELFdBQUssVUFBVTtJQUNYLG1CQUFtQjtJQUNuQiwyQ0FBSTtJQUNKLDJDQUFhO0lBQ2IsNkNBQWM7SUFDZCxxREFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLDZCQUFJLEtBQUssQ0FBQyxNQUFNO0FBQ3BCLENBQUMsRUFSSSxVQUFVLEtBQVYsVUFBVSxRQVFkO0FBYUQsSUFBSSxNQUFNLFlBQW9CLENBQUM7QUFFL0I7OztHQUdHO0FBQ0gsSUFBSSxNQUFNLEdBQW9DLDRCQUE0QixDQUFDLEVBQUUsQ0FBQztBQUU5RSxJQUFLLEVBR0o7QUFIRCxXQUFLLEVBQUU7SUFDSCxhQUFPO0lBQ1AsWUFBTTtBQUNWLENBQUMsRUFISSxFQUFFLEtBQUYsRUFBRSxRQUdOO0FBRUQsSUFBSSxHQUFHLEdBQVcsNEJBQTRCLENBQUMsR0FBRyxDQUFDO0FBQ25ELElBQUksSUFBSSxHQUFpQyxDQUFDLENBQUM7Ozs7Ozs7VUN2RDNDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBIHtcclxuICAgIHN0YXRpYyBhID0gMTA7XHJcbiAgICAvLyBzdGF0aWMge1xyXG4gICAgLy8gICAgIHRoaXMuYSA9IDEwMDtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKEEuYSk7IiwiY29uc3Qgc3VtID0gbmV3IEZ1bmN0aW9uKCdhJywgJ2InLCAncmV0dXJuIGEgKyBiJyk7XHJcblxyXG5jb25zb2xlLmxvZyhzdW0oMiwgNikpO1xyXG4vLyBleHBlY3RlZCBvdXRwdXQ6IDgiLCJpbXBvcnQgXCIuL0Z1bmN0aW9uXCI7XHJcblxyXG5pbXBvcnQgXCIuL0VTMTNcIjtcclxuY29uc29sZS5sb2coJ2hlbGxvIHdvcmQnKTtcclxuaW1wb3J0IEcgZnJvbSBcImdsb2JcIjtcclxuXHJcbi8vIGxldCB0ZXN0ID0gVEVTVDtcclxuXHJcbmxldCBtOiBHLklHbG9iO1xyXG5sZXQgYTogRy5BO1xyXG5cclxubGV0IGlfbTogSVRlc3Q7XHJcblxyXG5pbXBvcnQgXCIuL3RzL2VudW1cIjtcclxuXHJcbmNsYXNzIEFBQSB7XHJcbiAgICBhOiBzdHJpbmc7XHJcbiAgICBiOiBudW1iZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdi5bGe5oCn5Yid5aeL5YyWJyk7XHJcbiAgICAgICAgcmV0dXJuIDEwO1xyXG4gICAgfSkoKTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYSA9ICdhJztcclxuICAgICAgICB0aGlzLmIgPSAxO1xyXG4gICAgfVxyXG4gICAgZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBQUFBIGV4dGVuZHMgQUFBIHsgfVxyXG5cclxuY29uc29sZS5sb2coQUFBLnByb3RvdHlwZSlcclxuXHJcbi8vIG5ldyBBQUEoKTsiLCJmdW5jdGlvbiBhKCkge1xyXG4gICAgcmV0dXJuIDE7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVBIHtcclxuICAgIEEgPSAnMTIzJy5sZW5ndGggKyAxLFxyXG4gICAgQiA9IGEoKSxcclxufVxyXG5cclxuLyoqXHJcbiAqIOWtl+mdoumHj+aemuS4vlxyXG4gKi9cclxuZW51bSBCb29sZWFuTGlrZUhldGVyb2dlbmVvdXNFbnVtIHtcclxuICAgIE5vID0gMSxcclxuICAgIE5vMiA9IDEsXHJcbiAgICAvKiog5a2X56ym5Liy57G75Z6L55qE5p6a5Li+5oiQ5ZGY5piv5LiN5Lya5pyJ5Y+N5ZCR5pig5bCE55qE77yM55yL5omT5YyF5ZCO55qE5paH5Lu25bCx6IO955+l6YGTICovXHJcbiAgICBZZXMgPSBcIllFU1wiLFxyXG4gICAgWWVzMiA9IFwiWUVTXCIsXHJcbn1cclxuXHJcbmVudW0gRmlsZUFjY2VzcyB7XHJcbiAgICAvLyBjb25zdGFudCBtZW1iZXJzXHJcbiAgICBOb25lLFxyXG4gICAgUmVhZCA9IDEgPDwgMSxcclxuICAgIFdyaXRlID0gMSA8PCAyLFxyXG4gICAgUmVhZFdyaXRlID0gUmVhZCB8IFdyaXRlLFxyXG4gICAgLy8gY29tcHV0ZWQgbWVtYmVyXHJcbiAgICBHID0gXCIxMjNcIi5sZW5ndGhcclxufVxyXG5cclxuLyoqXHJcbiAqIOW4uOmHj+aemuS4vlxyXG4gKiBjb25zdOS/rumlsOWQjueahOaemuS4vuS8muWcqOe8luivkeWQjuiiq+mdmeaAgeabv+aNouaIkOWvueW6lOeahOWAvO+8jOmYsuatoumineWkluS7o+eggeeahOW8gOmUgFxyXG4gKiDluLjph4/mnprkuL7lj6rog73kvb/nlKjluLjph4/mnprkuL7ooajovr7lvI/ogIzkuJTkuI3lhYHorrjljIXlkKvorqHnrpflgLxcclxuICovXHJcbmNvbnN0IGVudW0gRUMge1xyXG4gICAgYSA9IDEsXHJcbiAgICBiID0gMixcclxuICAgIGMgPSAzLFxyXG59XHJcblxyXG5sZXQgdmFsdWUxOiBFQy5hIHwgRUMuYyA9IEVDLmE7XHJcblxyXG4vKipcclxuICogRUHlkoxGaWxlQWNjZXNz5Zug5Li65LiN5piv6Z2e6K6h566X55qE5bi46YeP5p6a5Li+5oiQ5ZGY5omA5Lul5a6D55qE5oiQ5ZGY5LiN6IO95L2c5Li657G75Z6LXHJcbiAqIOi/mOacieS4gOS4quWPmOWMluaYr+aemuS4vuacrOi6q+WPmOaIkOS6huavj+S4quaemuS4vuaIkOWRmOeahOiBlOWQiFxyXG4gKi9cclxubGV0IHZhbHVlMjogQm9vbGVhbkxpa2VIZXRlcm9nZW5lb3VzRW51bS5ObyA9IEJvb2xlYW5MaWtlSGV0ZXJvZ2VuZW91c0VudW0uTm87XHJcblxyXG5lbnVtIEVTIHtcclxuICAgIGEgPSAnYScsXHJcbiAgICBiID0gJydcclxufVxyXG5cclxubGV0IGFfXzogc3RyaW5nID0gQm9vbGVhbkxpa2VIZXRlcm9nZW5lb3VzRW51bS5ZZXM7XHJcbmxldCBhX18xOiBCb29sZWFuTGlrZUhldGVyb2dlbmVvdXNFbnVtID0gMTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvTWFpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=