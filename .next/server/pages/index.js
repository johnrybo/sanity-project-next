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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IndexPage),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_1__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction IndexPage({ pets  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Sanity + Next.js\"\n                }, void 0, false, {\n                    fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Pets\"\n                    }, void 0, false, {\n                        fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    pets.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: pets.map((pet)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: pet?.name\n                            }, pet._id, false, {\n                                fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                                lineNumber: 14,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this),\n                    !pets.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No pets to show\"\n                    }, void 0, false, {\n                        fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                        lineNumber: 18,\n                        columnNumber: 30\n                    }, this),\n                    pets.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            children: JSON.stringify(pets, null, 2)\n                        }, void 0, false, {\n                            fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    !pets.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\xaf\\\\_(ツ)_/\\xaf\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Your data will show up here when you've configured everything correctly\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnrybo/Desktop/sanity-project-next/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nconst client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    projectId: \"licmfyay\",\n    dataset: \"production\",\n    apiVersion: \"2023-01-08\",\n    useCdn: false\n});\nasync function getStaticProps() {\n    const pets = await client.fetch(`*[_type == \"pet\"]`);\n    return {\n        props: {\n            pets\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBRTVCLFNBQVNDLFVBQVUsRUFBRUMsS0FBSSxFQUFFLEVBQUU7SUFDMUMscUJBQ0U7OzBCQUNFLDhEQUFDQzswQkFDQyw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDQzs7a0NBQ0MsOERBQUNDO2tDQUFHOzs7Ozs7b0JBQ0hKLEtBQUtLLE1BQU0sR0FBRyxtQkFDYiw4REFBQ0M7a0NBQ0VOLEtBQUtPLEdBQUcsQ0FBQyxDQUFDQyxvQkFDVCw4REFBQ0M7MENBQWtCRCxLQUFLRTsrQkFBZkYsSUFBSUcsR0FBRzs7Ozs7Ozs7OztvQkFJckIsQ0FBQ1gsS0FBS0ssTUFBTSxHQUFHLG1CQUFLLDhEQUFDTztrQ0FBRTs7Ozs7O29CQUN2QlosS0FBS0ssTUFBTSxHQUFHLG1CQUNiLDhEQUFDUTtrQ0FDQyw0RUFBQ0M7c0NBQUtDLEtBQUtDLFNBQVMsQ0FBQ2hCLE1BQU0sSUFBSSxFQUFFOzs7Ozs7Ozs7OztvQkFHcEMsQ0FBQ0EsS0FBS0ssTUFBTSxHQUFHLG1CQUNkLDhEQUFDUTs7MENBQ0MsOERBQUNBOzBDQUFJOzs7Ozs7MENBQ0wsOERBQUNEOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmLENBQUM7QUFFRCxNQUFNSyxTQUFTbkIseURBQVlBLENBQUM7SUFDMUJvQixXQUFXO0lBQ1hDLFNBQVM7SUFDVEMsWUFBWTtJQUNaQyxRQUFRLEtBQUs7QUFDZjtBQUVPLGVBQWVDLGlCQUFpQjtJQUNyQyxNQUFNdEIsT0FBTyxNQUFNaUIsT0FBT00sS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUM7SUFFbkQsT0FBTztRQUNMQyxPQUFPO1lBQ0x4QjtRQUNGO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tc2FuaXR5LW5leHRqcy1zdGFydGVyLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKHsgcGV0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxoMT5TYW5pdHkgKyBOZXh0LmpzPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMj5QZXRzPC9oMj5cbiAgICAgICAge3BldHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3BldHMubWFwKChwZXQpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17cGV0Ll9pZH0+e3BldD8ubmFtZX08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKX1cbiAgICAgICAgeyFwZXRzLmxlbmd0aCA+IDAgJiYgPHA+Tm8gcGV0cyB0byBzaG93PC9wPn1cbiAgICAgICAge3BldHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHBldHMsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7IXBldHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+wq9cXF8o44OEKV8vwq88L2Rpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBZb3VyIGRhdGEgd2lsbCBzaG93IHVwIGhlcmUgd2hlbiB5b3UndmUgY29uZmlndXJlZCBldmVyeXRoaW5nXG4gICAgICAgICAgICAgIGNvcnJlY3RseVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBwcm9qZWN0SWQ6IFwibGljbWZ5YXlcIixcbiAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsXG4gIGFwaVZlcnNpb246IFwiMjAyMy0wMS0wOFwiLFxuICB1c2VDZG46IGZhbHNlLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcGV0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChgKltfdHlwZSA9PSBcInBldFwiXWApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBldHMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJJbmRleFBhZ2UiLCJwZXRzIiwiaGVhZGVyIiwiaDEiLCJtYWluIiwiaDIiLCJsZW5ndGgiLCJ1bCIsIm1hcCIsInBldCIsImxpIiwibmFtZSIsIl9pZCIsInAiLCJkaXYiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJnZXRTdGF0aWNQcm9wcyIsImZldGNoIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

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