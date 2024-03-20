"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dealer/page",{

/***/ "(app-pages-browser)/./src/components/dealer-dashboard/dashboard/dashboard-pages/products/Productsingle.jsx":
/*!**********************************************************************************************!*\
  !*** ./src/components/dealer-dashboard/dashboard/dashboard-pages/products/Productsingle.jsx ***!
  \**********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _config_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/Loader */ \"(app-pages-browser)/./src/config/Loader.jsx\");\n/* harmony import */ var _public_admin_ethnic_cloth_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/admin/ethnic-cloth.jpg */ \"(app-pages-browser)/./public/admin/ethnic-cloth.jpg\");\n/* harmony import */ var _public_admin_cross_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/admin/cross.svg */ \"(app-pages-browser)/./public/admin/cross.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Productsingle = (param)=>{\n    let { selectedItemId, setDialogMatch } = param;\n    _s();\n    const [productData, setProductData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProductData = async ()=>{\n            setLoading(true);\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"https://shree-trends-backend.vercel.app/api/product/getaProduct/\".concat(selectedItemId));\n                setProductData(response.data);\n                setError(null);\n            } catch (error) {\n                setError(error.message);\n            }\n            setLoading(false);\n        };\n        if (selectedItemId) {\n            fetchProductData();\n        }\n    }, [\n        selectedItemId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_config_Loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                lineNumber: 37,\n                columnNumber: 27\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Error: \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                lineNumber: 38,\n                columnNumber: 23\n            }, undefined),\n            productData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"pointer\",\n                            onClick: ()=>{\n                                setDialogMatch(false);\n                            },\n                            src: _public_admin_cross_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            alt: \"img\",\n                            width: 30\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex font-sans\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-none w-48 relative\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    src: _public_admin_ethnic_cloth_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"img\",\n                                    className: \"absolute inset-0 w-full h-full object-cover\",\n                                    loading: \"lazy\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"flex-auto p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-wrap\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"flex-auto text-lg font-semibold text-slate-900\",\n                                                children: productData.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-lg font-semibold text-slate-500\",\n                                                children: [\n                                                    \"$\",\n                                                    productData.price\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-full flex-none text-sm font-medium text-slate-700 mt-2\",\n                                                children: productData.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 text-slate-500 \",\n                                        children: [\n                                            \"Size: \",\n                                            productData === null || productData === void 0 ? void 0 : productData.stocks.map((stock)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: stock.size + \",\"\n                                                }, stock._id, false, {\n                                                    fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 24\n                                                }, undefined))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex space-x-4 mb-6 text-sm font-medium\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex-auto flex space-x-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"h-10 px-6 font-semibold rounded-md bg-black text-white\",\n                                                        type: \"submit\",\n                                                        children: \"Buy now\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900\",\n                                                        type: \"button\",\n                                                        children: \"Add to bag\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200\",\n                                                type: \"button\",\n                                                \"aria-label\": \"Like\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    width: \"20\",\n                                                    height: \"20\",\n                                                    fill: \"currentColor\",\n                                                    \"aria-hidden\": \"true\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        \"fill-rule\": \"evenodd\",\n                                                        \"clip-rule\": \"evenodd\",\n                                                        d: \"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kanha\\\\OneDrive\\\\Desktop\\\\Shri-trends\\\\shri-trends-front\\\\src\\\\components\\\\dealer-dashboard\\\\dashboard\\\\dashboard-pages\\\\products\\\\Productsingle.jsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Productsingle, \"u68vOVEOU/qsCxaFJ9hj486CYHE=\");\n_c = Productsingle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Productsingle);\nvar _c;\n$RefreshReg$(_c, \"Productsingle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2RlYWxlci1kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC1wYWdlcy9wcm9kdWN0cy9Qcm9kdWN0c2luZ2xlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUN6QjtBQUNXO0FBQytCO0FBQ1A7QUFFOUI7QUFFL0IsTUFBTVEsZ0JBQWdCO1FBQUMsRUFBRUMsY0FBYyxFQUFDQyxjQUFjLEVBQUU7O0lBQ3BELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNZLFdBQVdDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDO0lBRW5DQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1lLG1CQUFtQjtZQUNyQkgsV0FBVztZQUdYLElBQUk7Z0JBQ0EsTUFBTUksV0FBVyxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLEdBQUcsQ0FBQyxtRUFBa0YsT0FBZlY7Z0JBQ3BHRyxlQUFlTSxTQUFTRSxJQUFJO2dCQUM1QkosU0FBUztZQUNiLEVBQUUsT0FBT0QsT0FBTztnQkFDWkMsU0FBU0QsTUFBTU0sT0FBTztZQUMxQjtZQUNBUCxXQUFXO1FBQ2Y7UUFFQSxJQUFJTCxnQkFBZ0I7WUFDaEJRO1FBQ0o7SUFDSixHQUFHO1FBQUNSO0tBQWU7SUFFbkIscUJBQ0ksOERBQUNhOztZQUVJVCwyQkFBYSw4REFBQ1Qsc0RBQU1BOzs7OztZQUNwQlcsdUJBQVMsOERBQUNROztvQkFBRTtvQkFBUVI7Ozs7Ozs7WUFDcEJKLDZCQUNHOztrQ0FDQSw4REFBQ1c7d0JBQUlFLFdBQVU7a0NBRWIsNEVBQUNqQixrREFBS0E7NEJBQUNpQixXQUFVOzRCQUFVQyxTQUFTO2dDQUM1QmYsZUFBZTs0QkFDakI7NEJBQUdnQixLQUFLcEIsK0RBQUtBOzRCQUFFcUIsS0FBSTs0QkFBTUMsT0FBTzs7Ozs7Ozs7Ozs7a0NBR3hDLDhEQUFDTjt3QkFBSUUsV0FBVTs7MENBRWYsOERBQUNGO2dDQUFJRSxXQUFVOzBDQUNiLDRFQUFDakIsa0RBQUtBO29DQUFDbUIsS0FBS3JCLHNFQUFLQTtvQ0FBRXNCLEtBQUk7b0NBQU1ILFdBQVU7b0NBQThDSyxTQUFROzs7Ozs7Ozs7OzswQ0FFL0YsOERBQUNDO2dDQUFLTixXQUFVOztrREFDZCw4REFBQ0Y7d0NBQUlFLFdBQVU7OzBEQUNiLDhEQUFDTztnREFBR1AsV0FBVTswREFDWmIsWUFBWXFCLEtBQUs7Ozs7OzswREFFbkIsOERBQUNWO2dEQUFJRSxXQUFVOztvREFBdUM7b0RBQ3BEYixZQUFZc0IsS0FBSzs7Ozs7OzswREFFbkIsOERBQUNYO2dEQUFJRSxXQUFVOzBEQUNkYixZQUFZdUIsV0FBVzs7Ozs7Ozs7Ozs7O2tEQUcxQiw4REFBQ1o7d0NBQUlFLFdBQVU7OzRDQUErRTs0Q0FDdkZiLHdCQUFBQSxrQ0FBQUEsWUFBYXdCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHNCQUMzQiw4REFBQ2Q7OERBQW1CYyxNQUFNQyxJQUFJLEdBQUc7bURBQXpCRCxNQUFNRSxHQUFHOzs7Ozs7Ozs7OztrREFJdEIsOERBQUNqQjt3Q0FBSUUsV0FBVTs7MERBQ2IsOERBQUNGO2dEQUFJRSxXQUFVOztrRUFDYiw4REFBQ2dCO3dEQUFPaEIsV0FBVTt3REFBeURpQixNQUFLO2tFQUFTOzs7Ozs7a0VBR3pGLDhEQUFDRDt3REFBT2hCLFdBQVU7d0RBQTRFaUIsTUFBSztrRUFBUzs7Ozs7Ozs7Ozs7OzBEQUk5Ryw4REFBQ0Q7Z0RBQU9oQixXQUFVO2dEQUF1R2lCLE1BQUs7Z0RBQVNDLGNBQVc7MERBQ2hKLDRFQUFDQztvREFBSWYsT0FBTTtvREFBS2dCLFFBQU87b0RBQUtDLE1BQUs7b0RBQWVDLGVBQVk7OERBQzFELDRFQUFDQzt3REFBS0MsYUFBVTt3REFBVUMsYUFBVTt3REFBVUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0J4RTtHQTNGTTFDO0tBQUFBO0FBNkZOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2RlYWxlci1kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC1wYWdlcy9wcm9kdWN0cy9Qcm9kdWN0c2luZ2xlLmpzeD80ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbmZpZy9Mb2FkZXJcIjtcclxuaW1wb3J0IGNsb3RoIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9wdWJsaWMvYWRtaW4vZXRobmljLWNsb3RoLmpwZ1wiO1xyXG5pbXBvcnQgY3Jvc3MgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9hZG1pbi9jcm9zcy5zdmdcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgUHJvZHVjdHNpbmdsZSA9ICh7IHNlbGVjdGVkSXRlbUlkLHNldERpYWxvZ01hdGNoIH0pID0+IHtcclxuICAgIGNvbnN0IFtwcm9kdWN0RGF0YSwgc2V0UHJvZHVjdERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaFByb2R1Y3REYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9zaHJlZS10cmVuZHMtYmFja2VuZC52ZXJjZWwuYXBwL2FwaS9wcm9kdWN0L2dldGFQcm9kdWN0LyR7c2VsZWN0ZWRJdGVtSWR9YCk7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIGZldGNoUHJvZHVjdERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2VsZWN0ZWRJdGVtSWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRlciAvPn1cclxuICAgICAgICAgICAge2Vycm9yICYmIDxwPkVycm9yOiB7ZXJyb3J9PC9wPn1cclxuICAgICAgICAgICAge3Byb2R1Y3REYXRhICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWVuZCBtYi0yJyA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdwb2ludGVyJyBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGlhbG9nTWF0Y2goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBzcmM9e2Nyb3NzfSBhbHQ9J2ltZycgd2lkdGg9ezMwfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZm9udC1zYW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIHctNDggcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y2xvdGh9IGFsdD1cImltZ1wiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiBsb2FkaW5nPVwibGF6eVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXgtYXV0byBwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4LWF1dG8gdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0RGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtwcm9kdWN0RGF0YS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4LW5vbmUgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3REYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIG10LTQgbWItNiBwYi02IGJvcmRlci1iIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC1zbGF0ZS01MDAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNpemU6IHtwcm9kdWN0RGF0YT8uc3RvY2tzLm1hcCgoc3RvY2spID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3N0b2NrLl9pZH0+e3N0b2NrLnNpemUgKyBcIixcIn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNCBtYi02IHRleHQtc20gZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byBmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoLTEwIHB4LTYgZm9udC1zZW1pYm9sZCByb3VuZGVkLW1kIGJnLWJsYWNrIHRleHQtd2hpdGVcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1eSBub3dcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJoLTEwIHB4LTYgZm9udC1zZW1pYm9sZCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHRleHQtc2xhdGUtOTAwXCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gYmFnXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXgtbm9uZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTkgaC05IHJvdW5kZWQtbWQgdGV4dC1zbGF0ZS0zMDAgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDBcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkxpa2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMy4xNzIgNS4xNzJhNCA0IDAgMDE1LjY1NiAwTDEwIDYuMzQzbDEuMTcyLTEuMTcxYTQgNCAwIDExNS42NTYgNS42NTZMMTAgMTcuNjU3bC02LjgyOC02LjgyOWE0IDQgMCAwMTAtNS42NTZ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICBGcmVlIHNoaXBwaW5nIG9uIGFsbCBjb250aW5lbnRhbCBVUyBvcmRlcnMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzaW5nbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJMb2FkZXIiLCJjbG90aCIsImNyb3NzIiwiSW1hZ2UiLCJQcm9kdWN0c2luZ2xlIiwic2VsZWN0ZWRJdGVtSWQiLCJzZXREaWFsb2dNYXRjaCIsInByb2R1Y3REYXRhIiwic2V0UHJvZHVjdERhdGEiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoUHJvZHVjdERhdGEiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJtZXNzYWdlIiwiZGl2IiwicCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImxvYWRpbmciLCJmb3JtIiwiaDEiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJzdG9ja3MiLCJtYXAiLCJzdG9jayIsInNpemUiLCJfaWQiLCJidXR0b24iLCJ0eXBlIiwiYXJpYS1sYWJlbCIsInN2ZyIsImhlaWdodCIsImZpbGwiLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJmaWxsLXJ1bGUiLCJjbGlwLXJ1bGUiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dealer-dashboard/dashboard/dashboard-pages/products/Productsingle.jsx\n"));

/***/ })

});