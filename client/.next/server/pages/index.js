"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/languageDetector.js":
/*!*********************************!*\
  !*** ./lib/languageDetector.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-language-detector */ \"next-language-detector\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_language_detector__WEBPACK_IMPORTED_MODULE_0__]);\nnext_language_detector__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_language_detector__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    supportedLngs: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales),\n    fallbackLng: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.defaultLocale)\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbGFuZ3VhZ2VEZXRlY3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNEO0FBQ0g7QUFFbkQsaUVBQWVBLGtFQUFnQkEsQ0FBQztJQUM5QkUsZUFBZUQsMEVBQTBCO0lBQ3pDSSxhQUFhSixnRkFBZ0M7QUFDL0MsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbGliL2xhbmd1YWdlRGV0ZWN0b3IuanM/ODJiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbGFuZ3VhZ2VEZXRlY3RvciBmcm9tIFwibmV4dC1sYW5ndWFnZS1kZXRlY3RvclwiO1xyXG5pbXBvcnQgaTE4bmV4dENvbmZpZyBmcm9tIFwiLi4vbmV4dC1pMThuZXh0LmNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGFuZ3VhZ2VEZXRlY3Rvcih7XHJcbiAgc3VwcG9ydGVkTG5nczogaTE4bmV4dENvbmZpZy5pMThuLmxvY2FsZXMsXHJcbiAgZmFsbGJhY2tMbmc6IGkxOG5leHRDb25maWcuaTE4bi5kZWZhdWx0TG9jYWxlLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImxhbmd1YWdlRGV0ZWN0b3IiLCJpMThuZXh0Q29uZmlnIiwic3VwcG9ydGVkTG5ncyIsImkxOG4iLCJsb2NhbGVzIiwiZmFsbGJhY2tMbmciLCJkZWZhdWx0TG9jYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/languageDetector.js\n");

/***/ }),

/***/ "./lib/redirect.js":
/*!*************************!*\
  !*** ./lib/redirect.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Redirect\": () => (/* binding */ Redirect),\n/* harmony export */   \"getRedirect\": () => (/* binding */ getRedirect),\n/* harmony export */   \"useRedirect\": () => (/* binding */ useRedirect)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _languageDetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languageDetector */ \"./lib/languageDetector.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_languageDetector__WEBPACK_IMPORTED_MODULE_3__]);\n_languageDetector__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst useRedirect = (to)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    to = to || router.asPath;\n    // language detection\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (router.asPath?.includes(\"/fa\") || router.asPath?.includes(\"/en\")) {\n            router.push(router.asPath);\n        } else {\n            const detectedLng = localStorage.getItem(\"currentLocale\") ? localStorage.getItem(\"currentLocale\") : \"fa\";\n            if (to.startsWith(\"/\" + detectedLng) && router.route === \"/404\") {\n                // prevent endless loop\n                router.replace(\"/\" + detectedLng + router.route);\n                return;\n            }\n            _languageDetector__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cache(detectedLng);\n            router.replace(\"/\" + detectedLng + to);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\nconst Redirect = ()=>{\n    useRedirect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n// eslint-disable-next-line react/display-name\nconst getRedirect = (to)=>()=>{\n        useRedirect(to);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    };\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXJlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtDO0FBQ007QUFDVTtBQUUzQyxNQUFNRyxjQUFjLENBQUNDLEtBQU87SUFDakMsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCRyxLQUFLQSxNQUFNQyxPQUFPQyxNQUFNO0lBRXhCLHFCQUFxQjtJQUNyQk4sZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUdLLE9BQU9DLE1BQU0sRUFBRUMsU0FBUyxVQUFVRixPQUFPQyxNQUFNLEVBQUVDLFNBQVMsUUFBTztZQUNsRUYsT0FBT0csSUFBSSxDQUFDSCxPQUFPQyxNQUFNO1FBQzNCLE9BQ0k7WUFDSixNQUFNRyxjQUFjQyxhQUFhQyxPQUFPLENBQUMsbUJBQW1CRCxhQUFhQyxPQUFPLENBQUMsbUJBQW1CLElBQUk7WUFDeEcsSUFBSVAsR0FBR1EsVUFBVSxDQUFDLE1BQU1ILGdCQUFnQkosT0FBT1EsS0FBSyxLQUFLLFFBQVE7Z0JBQy9ELHVCQUF1QjtnQkFDdkJSLE9BQU9TLE9BQU8sQ0FBQyxNQUFNTCxjQUFjSixPQUFPUSxLQUFLO2dCQUMvQztZQUNGLENBQUM7WUFFRFgsK0RBQXNCLENBQUNPO1lBQ3ZCSixPQUFPUyxPQUFPLENBQUMsTUFBTUwsY0FBY0w7UUFFckMsQ0FBQztJQUFBO0lBRUQscUJBQU87QUFDVCxFQUFFO0FBRUssTUFBTVksV0FBVyxJQUFNO0lBQzVCYjtJQUNBLHFCQUFPO0FBQ1QsRUFBRTtBQUVGLDhDQUE4QztBQUN2QyxNQUFNYyxjQUFjLENBQUNiLEtBQU8sSUFBTTtRQUN2Q0QsWUFBWUM7UUFDWixxQkFBTztJQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9saWIvcmVkaXJlY3QuanM/ODNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBsYW5ndWFnZURldGVjdG9yIGZyb20gXCIuL2xhbmd1YWdlRGV0ZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VSZWRpcmVjdCA9ICh0bykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHRvID0gdG8gfHwgcm91dGVyLmFzUGF0aDtcclxuXHJcbiAgLy8gbGFuZ3VhZ2UgZGV0ZWN0aW9uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHJvdXRlci5hc1BhdGg/LmluY2x1ZGVzKFwiL2ZhXCIpIHx8IHJvdXRlci5hc1BhdGg/LmluY2x1ZGVzKFwiL2VuXCIpKXtcclxuICAgICAgcm91dGVyLnB1c2gocm91dGVyLmFzUGF0aCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgY29uc3QgZGV0ZWN0ZWRMbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudExvY2FsZScpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRMb2NhbGUnKSA6IFwiZmFcIjtcclxuICAgIGlmICh0by5zdGFydHNXaXRoKFwiL1wiICsgZGV0ZWN0ZWRMbmcpICYmIHJvdXRlci5yb3V0ZSA9PT0gXCIvNDA0XCIpIHtcclxuICAgICAgLy8gcHJldmVudCBlbmRsZXNzIGxvb3BcclxuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIgKyBkZXRlY3RlZExuZyArIHJvdXRlci5yb3V0ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsYW5ndWFnZURldGVjdG9yLmNhY2hlKGRldGVjdGVkTG5nKTtcclxuICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiICsgZGV0ZWN0ZWRMbmcgKyB0byk7XHJcbiAgICBcclxuICB9fSk7XHJcblxyXG4gIHJldHVybiA8PjwvPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZWRpcmVjdCA9ICgpID0+IHtcclxuICB1c2VSZWRpcmVjdCgpO1xyXG4gIHJldHVybiA8PjwvPjtcclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcclxuZXhwb3J0IGNvbnN0IGdldFJlZGlyZWN0ID0gKHRvKSA9PiAoKSA9PiB7XHJcbiAgdXNlUmVkaXJlY3QodG8pO1xyXG4gIHJldHVybiA8PjwvPjtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImxhbmd1YWdlRGV0ZWN0b3IiLCJ1c2VSZWRpcmVjdCIsInRvIiwicm91dGVyIiwiYXNQYXRoIiwiaW5jbHVkZXMiLCJwdXNoIiwiZGV0ZWN0ZWRMbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RhcnRzV2l0aCIsInJvdXRlIiwicmVwbGFjZSIsImNhY2hlIiwiUmVkaXJlY3QiLCJnZXRSZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/redirect.js\n");

/***/ }),

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst path = __webpack_require__(/*! path */ \"path\");\nmodule.exports = {\n    i18n: {\n        defaultLocale: \"fa\",\n        locales: [\n            \"en\",\n            \"fa\"\n        ],\n        localePath: path.resolve(\"./public/static/locales\")\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsT0FBT0MsbUJBQU9BLENBQUMsa0JBQU07QUFDM0JDLE9BQU9DLE9BQU8sR0FBRztJQUNmQyxNQUFNO1FBQ0pDLGVBQWU7UUFDZkMsU0FBUztZQUFDO1lBQU07U0FBSztRQUNyQkMsWUFBWVAsS0FBS1EsT0FBTyxDQUFDO0lBQzNCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzPzFjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBpMThuOiB7XHJcbiAgICBkZWZhdWx0TG9jYWxlOiBcImZhXCIsXHJcbiAgICBsb2NhbGVzOiBbXCJlblwiLCBcImZhXCJdLFxyXG4gICAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKFwiLi9wdWJsaWMvc3RhdGljL2xvY2FsZXNcIiksXHJcbiAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsImxvY2FsZVBhdGgiLCJyZXNvbHZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/redirect */ \"./lib/redirect.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_redirect__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_redirect__WEBPACK_IMPORTED_MODULE_0__.Redirect);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUM3QyxpRUFBZUEsbURBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcIi4vLi4vbGliL3JlZGlyZWN0XCI7XG5leHBvcnQgZGVmYXVsdCBSZWRpcmVjdDtcbiJdLCJuYW1lcyI6WyJSZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "next-language-detector":
/*!*****************************************!*\
  !*** external "next-language-detector" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("next-language-detector");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();