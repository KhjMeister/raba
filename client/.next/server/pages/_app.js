/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider),\n/* harmony export */   \"intialtState\": () => (/* binding */ intialtState)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst intialtState = {\n    user: null\n};\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst rootReducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\nconst Provider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(rootReducer, intialtState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: \"LOGIN\",\n            payload: JSON.parse(window.localStorage.getItem(\"user\"))\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"K:\\\\Project\\\\raba\\\\client\\\\context\\\\index.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUE0RDtBQUVyRCxNQUFNRyxlQUFlO0lBQ3hCQyxNQUFNLElBQUk7QUFDZCxFQUFFO0FBRUYsTUFBTUMsd0JBQVVKLG9EQUFhQTtBQUU3QixNQUFNSyxjQUFjLENBQUNDLE9BQVFDLFNBQVc7SUFDcEMsT0FBUUEsT0FBT0MsSUFBSTtRQUNmLEtBQUs7WUFDRCxPQUFPO2dCQUNILEdBQUdGLEtBQUs7Z0JBQUVILE1BQU1JLE9BQU9FLE9BQU87WUFDbEM7UUFDSixLQUFLO1lBQ0QsT0FBTztnQkFDSCxHQUFHSCxLQUFLO2dCQUFFSCxNQUFNLElBQUk7WUFDeEI7UUFDSjtZQUNJLE9BQU9HO0lBQ2Y7QUFDSjtBQUVBLE1BQU1JLFdBQVcsQ0FBQyxFQUFDQyxTQUFRLEVBQUMsR0FBSTtJQUM1QixNQUFNLENBQUNMLE9BQU1NLFNBQVMsR0FBR2IsaURBQVVBLENBQUNNLGFBQVlIO0lBQ2hERCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1ZXLFNBQVM7WUFDTEosTUFBSztZQUNMQyxTQUFTSSxLQUFLQyxLQUFLLENBQUNDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBRXBEO0lBQ0osR0FBRSxFQUFFO0lBQ0oscUJBQ0ksOERBQUNiLFFBQVFNLFFBQVE7UUFBQ1EsT0FBTztZQUFDWjtZQUFPTTtRQUFRO2tCQUNuQ0Q7Ozs7OztBQUdkO0FBRTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VSZWR1Y2VyLGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRpYWx0U3RhdGUgPSB7XHJcbiAgICB1c2VyOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlICwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkxPR0lOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJMT0dPVVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCB1c2VyOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT57XHJcbiAgICBjb25zdCBbc3RhdGUsZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyb290UmVkdWNlcixpbnRpYWx0U3RhdGUpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOlwiTE9HSU5cIixcclxuICAgICAgICAgICAgcGF5bG9hZDogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSksXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzdGF0ZSwgZGlzcGF0Y2h9fSA+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IHtDb250ZXh0LCBQcm92aWRlcn07Il0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiaW50aWFsdFN0YXRlIiwidXNlciIsIkNvbnRleHQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ \"./node_modules/react-toastify/dist/ReactToastify.min.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                position: \"bottom-right\",\n                autoClose: 5000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true,\n                theme: \"light\"\n            }, void 0, false, {\n                fileName: \"K:\\\\Project\\\\raba\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dir: router.query?.locale == \"fa\" ? \"rtl\" : \"ltr\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"K:\\\\Project\\\\raba\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"K:\\\\Project\\\\raba\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"K:\\\\Project\\\\raba\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.appWithTranslation)(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNrQjtBQUNFO0FBQ1o7QUFDRTtBQUVVO0FBRWxELFNBQVNJLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEIscUJBQ0UsOERBQUNELDhDQUFRQTs7MEJBQ1AsOERBQUNELDBEQUFjQTtnQkFDYlEsVUFBUztnQkFDVEMsV0FBVztnQkFDWEMsaUJBQWlCLEtBQUs7Z0JBQ3RCQyxhQUFhLEtBQUs7Z0JBQ2xCQyxZQUFZO2dCQUNaQyxLQUFLLEtBQUs7Z0JBQ1ZDLGdCQUFnQjtnQkFDaEJDLFNBQVM7Z0JBQ1RDLFlBQVk7Z0JBQ1pDLE9BQU07Ozs7OzswQkFHViw4REFBQ0M7Z0JBQUlDLEtBQUtaLE9BQU9hLEtBQUssRUFBRUMsVUFBVSxPQUFPLFFBQVEsS0FBSzswQkFDbEQsNEVBQUNoQjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9oQztBQUVBLGlFQUFlSCxnRUFBa0JBLENBQUNDLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgIHtUb2FzdENvbnRhaW5lcn0gIGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5taW4uY3NzXCJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXI+XG4gICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIlxuICAgICAgICBhdXRvQ2xvc2U9ezUwMDB9XG4gICAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gICAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICAgIHJ0bD17ZmFsc2V9XG4gICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgIHBhdXNlT25Ib3ZlclxuICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgICAvPlxuXG4gICAgPGRpdiBkaXI9e3JvdXRlci5xdWVyeT8ubG9jYWxlID09IFwiZmFcIiA/IFwicnRsXCIgOiBcImx0clwifT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXG4gICAgICA8L2Rpdj5cblxuXG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oTXlBcHApXG4iXSwibmFtZXMiOlsiVG9hc3RDb250YWluZXIiLCJQcm92aWRlciIsInVzZVJvdXRlciIsImFwcFdpdGhUcmFuc2xhdGlvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJuZXdlc3RPblRvcCIsImNsb3NlT25DbGljayIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiLCJkcmFnZ2FibGUiLCJwYXVzZU9uSG92ZXIiLCJ0aGVtZSIsImRpdiIsImRpciIsInF1ZXJ5IiwibG9jYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();