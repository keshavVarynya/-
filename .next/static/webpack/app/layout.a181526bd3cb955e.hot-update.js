"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b472c406ab5d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzQ5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImI0NzJjNDA2YWI1ZFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/nevbar/nevbar.tsx":
/*!***********************************!*\
  !*** ./src/app/nevbar/nevbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"(app-pages-browser)/./src/app/css/style.css\");\n/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flowbite */ \"(app-pages-browser)/./node_modules/flowbite/lib/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Nevbarpage = ()=>{\n    _s();\n    const [clientWindoHeight, setClientWindoHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [logoDisplay, setlogoDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\");\n    // set the target element that will be collapsed or expanded (eg. navbar menu)\n    const $targetEl1 = document.getElementById(\"targetEl\");\n    console.log($targetEl1);\n    // optionally set a trigger element (eg. a button, hamburger icon)\n    const $triggerEl2 = document.getElementById(\"triggerEl\");\n    // optional options with default values and callback functions\n    const options = {\n        onCollapse: ()=>{\n            console.log(\"element has been collapsed\");\n            collapse.collapse();\n        },\n        onExpand: ()=>{\n            console.log(\"element has been expanded\");\n            collapse.expand();\n        },\n        onToggle: ()=>{\n            console.log(\"element has been toggled\");\n            collapse.toggle();\n        }\n    };\n    const collapse = new flowbite__WEBPACK_IMPORTED_MODULE_3__.Collapse($targetEl1, $triggerEl2, options);\n    //     // set the target element that will be collapsed or expanded (eg. navbar menu)\n    // const $targetEl = document.getElementById('targetEl');\n    // // optionally set a trigger element (eg. a button, hamburger icon)\n    // const $triggerEl = document.getElementById('triggerEl');\n    // // optional options with default values and callback functions\n    // const options: CollapseOptions = {\n    //     onCollapse: () => {\n    //         console.log('element has been collapsed')\n    //     },\n    //     onExpand: () => {\n    //         console.log('element has been expanded')\n    //         // collapse.expand();\n    //     },\n    //     onToggle: () => {\n    //         console.log('element has been toggled')\n    //     }\n    // };\n    // const collapse: CollapseInterface = new Collapse($targetEl, $triggerEl, options);\n    /*\n* $targetEl: required\n* $triggerEl: optional\n* options: optional\n*/ // show the target element\n    // collapse.expand();\n    const handleScroll = ()=>{\n        console.log(window.scrollY);\n        if (window.scrollY == 0) {\n            var _document_getElementById;\n            setClientWindoHeight(\"transparent\");\n            setlogoDisplay(\"block\");\n            console.log(((_document_getElementById = document.getElementById(\"nevbar\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.style.backgroundColor) == \"green\");\n            console.log(clientWindoHeight);\n        } else {\n            var _document_getElementById1;\n            ((_document_getElementById1 = document.getElementById(\"nevbar\")) === null || _document_getElementById1 === void 0 ? void 0 : _document_getElementById1.style.backgroundColor) == \"#579581x`\";\n            setClientWindoHeight(\"#579581\");\n            console.log(clientWindoHeight);\n            setlogoDisplay(\"none\");\n        }\n    };\n    const button = document.getElementById(\"triggerEl\");\n    const buttonClick = ()=>{\n        console.log(undefined);\n        console.log(button);\n        const navbar = document.getElementsByClassName(\"navbar\");\n        const navbarHidden = document.getElementsByClassName(\"hidden\");\n        if (navbar) {\n            if (navbarHidden) {\n                document.getElementsByClassName(\"navbar\");\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0\",\n        id: \"Nevbar\",\n        style: {\n            backgroundColor: clientWindoHeight\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://flowbite.com/\",\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://flowbite.com/docs/images/logo.svg\",\n                            className: \"h-8 mr-3\",\n                            alt: \"Flowbite Logo\"\n                        }, void 0, false, {\n                            fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"self-center text-2xl font-semibold whitespace-nowrap dark:text-white\",\n                            children: \"Flowbite\"\n                        }, void 0, false, {\n                            fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    \"data-collapse-toggle\": \"navbar-default\",\n                    type: \"button\",\n                    onClick: buttonClick,\n                    id: \"triggerEl\",\n                    className: \"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600\",\n                    \"aria-controls\": \"navbar-default\",\n                    \"aria-expanded\": \"false\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Open main menu\"\n                        }, void 0, false, {\n                            fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-5 h-5\",\n                            \"aria-hidden\": \"true\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 17 14\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                stroke: \"currentColor\",\n                                \"stroke-linecap\": \"round\",\n                                \"stroke-linejoin\": \"round\",\n                                \"stroke-width\": \"2\",\n                                d: \"M1 1h15M1 7h15M1 13h15\"\n                            }, void 0, false, {\n                                fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hidden w-full md:block md:w-auto navbar\",\n                    id: \"navbar-default\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500\",\n                                    \"aria-current\": \"page\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                    children: \"Services\"\n                                }, void 0, false, {\n                                    fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                    children: \"Pricing\"\n                                }, void 0, false, {\n                                    fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n            lineNumber: 118,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/keshav/varnya-website/src/app/nevbar/nevbar.tsx\",\n        lineNumber: 117,\n        columnNumber: 1\n    }, undefined);\n};\n_s(Nevbarpage, \"KYe4npdK5gYbjWydMVZ/0ieyNUc=\");\n_c = Nevbarpage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nevbarpage);\nvar _c;\n$RefreshReg$(_c, \"Nevbarpage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV2YmFyL25ldmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDZ0Q7QUFFdkI7QUFJVztBQU1wQyxNQUFNSSxhQUFzQjs7SUFFeEIsTUFBTSxDQUFDQyxtQkFBa0JDLHFCQUFxQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUMxRCxNQUFNLENBQUNLLGFBQVlDLGVBQWUsR0FBR04sK0NBQVFBLENBQUM7SUFDOUMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpDLDhFQUE4RTtJQUNsRixNQUFNUyxhQUFhQyxTQUFTQyxjQUFjLENBQUM7SUFFM0NDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFFWixrRUFBa0U7SUFDbEUsTUFBTUssY0FBY0osU0FBU0MsY0FBYyxDQUFDO0lBRTVDLDhEQUE4RDtJQUM5RCxNQUFNSSxVQUEyQjtRQUMvQkMsWUFBWTtZQUNWSixRQUFRQyxHQUFHLENBQUM7WUFDWkksU0FBU0EsUUFBUTtRQUNuQjtRQUNBQyxVQUFVO1lBQ1JOLFFBQVFDLEdBQUcsQ0FBQztZQUNaSSxTQUFTRSxNQUFNO1FBQ2pCO1FBQ0FDLFVBQVU7WUFDUlIsUUFBUUMsR0FBRyxDQUFDO1lBQ1pJLFNBQVNJLE1BQU07UUFDakI7SUFDRjtJQUlBLE1BQU1KLFdBQThCLElBQUloQiw4Q0FBUUEsQ0FBQ1EsWUFBWUssYUFBYUM7SUFDMUUscUZBQXFGO0lBQ3JGLHlEQUF5RDtJQUV6RCxxRUFBcUU7SUFDckUsMkRBQTJEO0lBRTNELGlFQUFpRTtJQUNqRSxxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLG9EQUFvRDtJQUNwRCxTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLG1EQUFtRDtJQUNuRCxnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULHdCQUF3QjtJQUN4QixrREFBa0Q7SUFDbEQsUUFBUTtJQUNSLEtBQUs7SUFDTCxvRkFBb0Y7SUFFcEY7Ozs7QUFJQSxHQUVBLDBCQUEwQjtJQUMxQixxQkFBcUI7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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9uZXZiYXIvbmV2YmFyLnRzeD83YWRjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQWJvdXRQYWdlIGZyb20gXCIuLi9vdXJzdG9yeS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gXCJmbG93Yml0ZVwiO1xuaW1wb3J0IHR5cGUgeyBDb2xsYXBzZU9wdGlvbnMsIENvbGxhcHNlSW50ZXJmYWNlIH0gZnJvbSBcImZsb3diaXRlXCI7XG4vLyBpbXBvcnQge0VsZW1lbnRzLCBTdHJpcGVQcm92aWRlcn0gZnJvbSAncmVhY3Qtc3RyaXBlLWVsZW1lbnRzJztcbi8vIGltcG9ydCBDaGVja291dEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYXltZW50L0NoZWNrb3V0Rm9ybSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IE5ldmJhcnBhZ2U6TmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgW2NsaWVudFdpbmRvSGVpZ2h0LHNldENsaWVudFdpbmRvSGVpZ2h0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtsb2dvRGlzcGxheSxzZXRsb2dvRGlzcGxheV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoXCJoaWRkZW5cIilcblxuICAgIC8vIHNldCB0aGUgdGFyZ2V0IGVsZW1lbnQgdGhhdCB3aWxsIGJlIGNvbGxhcHNlZCBvciBleHBhbmRlZCAoZWcuIG5hdmJhciBtZW51KVxuY29uc3QgJHRhcmdldEVsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXRFbCcpO1xuXG5jb25zb2xlLmxvZygkdGFyZ2V0RWwxKTtcblxuLy8gb3B0aW9uYWxseSBzZXQgYSB0cmlnZ2VyIGVsZW1lbnQgKGVnLiBhIGJ1dHRvbiwgaGFtYnVyZ2VyIGljb24pXG5jb25zdCAkdHJpZ2dlckVsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmlnZ2VyRWwnKTtcblxuLy8gb3B0aW9uYWwgb3B0aW9ucyB3aXRoIGRlZmF1bHQgdmFsdWVzIGFuZCBjYWxsYmFjayBmdW5jdGlvbnNcbmNvbnN0IG9wdGlvbnM6IENvbGxhcHNlT3B0aW9ucyA9IHtcbiAgb25Db2xsYXBzZTogKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdlbGVtZW50IGhhcyBiZWVuIGNvbGxhcHNlZCcpXG4gICAgY29sbGFwc2UuY29sbGFwc2UoKTtcbiAgfSxcbiAgb25FeHBhbmQ6ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZWxlbWVudCBoYXMgYmVlbiBleHBhbmRlZCcpXG4gICAgY29sbGFwc2UuZXhwYW5kKCk7XG4gIH0sXG4gIG9uVG9nZ2xlOiAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2VsZW1lbnQgaGFzIGJlZW4gdG9nZ2xlZCcpXG4gICAgY29sbGFwc2UudG9nZ2xlKCk7XG4gIH1cbn07XG5cblxuXG5jb25zdCBjb2xsYXBzZTogQ29sbGFwc2VJbnRlcmZhY2UgPSBuZXcgQ29sbGFwc2UoJHRhcmdldEVsMSwgJHRyaWdnZXJFbDIsIG9wdGlvbnMpO1xuLy8gICAgIC8vIHNldCB0aGUgdGFyZ2V0IGVsZW1lbnQgdGhhdCB3aWxsIGJlIGNvbGxhcHNlZCBvciBleHBhbmRlZCAoZWcuIG5hdmJhciBtZW51KVxuLy8gY29uc3QgJHRhcmdldEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldEVsJyk7XG5cbi8vIC8vIG9wdGlvbmFsbHkgc2V0IGEgdHJpZ2dlciBlbGVtZW50IChlZy4gYSBidXR0b24sIGhhbWJ1cmdlciBpY29uKVxuLy8gY29uc3QgJHRyaWdnZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmlnZ2VyRWwnKTtcblxuLy8gLy8gb3B0aW9uYWwgb3B0aW9ucyB3aXRoIGRlZmF1bHQgdmFsdWVzIGFuZCBjYWxsYmFjayBmdW5jdGlvbnNcbi8vIGNvbnN0IG9wdGlvbnM6IENvbGxhcHNlT3B0aW9ucyA9IHtcbi8vICAgICBvbkNvbGxhcHNlOiAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdlbGVtZW50IGhhcyBiZWVuIGNvbGxhcHNlZCcpXG4vLyAgICAgfSxcbi8vICAgICBvbkV4cGFuZDogKCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCBoYXMgYmVlbiBleHBhbmRlZCcpXG4vLyAgICAgICAgIC8vIGNvbGxhcHNlLmV4cGFuZCgpO1xuLy8gICAgIH0sXG4vLyAgICAgb25Ub2dnbGU6ICgpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnQgaGFzIGJlZW4gdG9nZ2xlZCcpXG4vLyAgICAgfVxuLy8gfTtcbi8vIGNvbnN0IGNvbGxhcHNlOiBDb2xsYXBzZUludGVyZmFjZSA9IG5ldyBDb2xsYXBzZSgkdGFyZ2V0RWwsICR0cmlnZ2VyRWwsIG9wdGlvbnMpO1xuXG4vKlxuKiAkdGFyZ2V0RWw6IHJlcXVpcmVkXG4qICR0cmlnZ2VyRWw6IG9wdGlvbmFsXG4qIG9wdGlvbnM6IG9wdGlvbmFsXG4qL1xuXG4vLyBzaG93IHRoZSB0YXJnZXQgZWxlbWVudFxuLy8gY29sbGFwc2UuZXhwYW5kKCk7XG5cbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPT0gMCl7XG4gICAgICAgICAgICBzZXRDbGllbnRXaW5kb0hlaWdodChcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICBzZXRsb2dvRGlzcGxheShcImJsb2NrXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXZiYXJcIik/LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSBcImdyZWVuXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2xpZW50V2luZG9IZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldmJhclwiKT8uc3R5bGUuYmFja2dyb3VuZENvbG9yID09IFwiIzU3OTU4MXhgXCJcbiAgICAgICAgICAgIHNldENsaWVudFdpbmRvSGVpZ2h0KFwiIzU3OTU4MVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWVudFdpbmRvSGVpZ2h0KTtcbiAgICAgICAgICAgIHNldGxvZ29EaXNwbGF5KFwibm9uZVwiKTtcblxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJpZ2dlckVsJyk7XG4gICAgY29uc3QgYnV0dG9uQ2xpY2sgPSAoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgICAgY29uc29sZS5sb2coYnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0ICBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXInKTtcbiAgICAgICAgY29uc3QgbmF2YmFySGlkZGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGlkZGVuJylcbiAgICAgICAgaWYobmF2YmFyKXtcbiAgICAgICAgICBpZihuYXZiYXJIaWRkZW4pe1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2YmFyJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixoYW5kbGVTY3JvbGwpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixoYW5kbGVTY3JvbGwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgIFxuXG48bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1ncmF5LTIwMCBkYXJrOmJnLWdyYXktOTAwIGZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wXCIgIGlkPVwiTmV2YmFyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6Y2xpZW50V2luZG9IZWlnaHR9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4teGwgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBteC1hdXRvIHAtNFwiPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2Zsb3diaXRlLmNvbS9cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZmxvd2JpdGUuY29tL2RvY3MvaW1hZ2VzL2xvZ28uc3ZnXCIgY2xhc3NOYW1lPVwiaC04IG1yLTNcIiBhbHQ9XCJGbG93Yml0ZSBMb2dvXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5GbG93Yml0ZTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPGJ1dHRvbiBkYXRhLWNvbGxhcHNlLXRvZ2dsZT1cIm5hdmJhci1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2J1dHRvbkNsaWNrfSAgaWQ9XCJ0cmlnZ2VyRWxcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0yIHctMTAgaC0xMCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDAgcm91bmRlZC1sZyBtZDpoaWRkZW4gaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXItZGVmYXVsdFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTcgMTRcIj5cbiAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTEgMWgxNU0xIDdoMTVNMSAxM2gxNVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gdy1mdWxsIG1kOmJsb2NrIG1kOnctYXV0byBuYXZiYXJcIiBpZD1cIm5hdmJhci1kZWZhdWx0XCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gZmxleCBmbGV4LWNvbCBwLTQgbWQ6cC0wIG10LTQgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLWxnICBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggbWQ6bXQtMCBtZDpib3JkZXItMCAgZGFyazpiZy1ncmF5LTgwMCBtZDpkYXJrOmJnLWdyYXktOTAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcGwtMyBwci00IHRleHQtd2hpdGUgYmctYmx1ZS03MDAgcm91bmRlZCBtZDpiZy10cmFuc3BhcmVudCBtZDp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBkYXJrOnRleHQtd2hpdGUgbWQ6ZGFyazp0ZXh0LWJsdWUtNTAwXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPkhvbWU8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcGwtMyBwci00IHRleHQtZ3JheS05MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTEwMCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBtZDpib3JkZXItMCBtZDpob3Zlcjp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBkYXJrOnRleHQtd2hpdGUgbWQ6ZGFyazpob3Zlcjp0ZXh0LWJsdWUtNTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnRcIj5BYm91dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBwbC0zIHByLTQgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmJvcmRlci0wIG1kOmhvdmVyOnRleHQtYmx1ZS03MDAgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOnRleHQtYmx1ZS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudFwiPlNlcnZpY2VzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweS0yIHBsLTMgcHItNCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0xMDAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6aG92ZXI6dGV4dC1ibHVlLTcwMCBtZDpwLTAgZGFyazp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6dGV4dC1ibHVlLTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50XCI+UHJpY2luZzwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBwbC0zIHByLTQgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmJvcmRlci0wIG1kOmhvdmVyOnRleHQtYmx1ZS03MDAgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOnRleHQtYmx1ZS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudFwiPkNvbnRhY3Q8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmF2PlxuXG4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ldmJhcnBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbGxhcHNlIiwiTmV2YmFycGFnZSIsImNsaWVudFdpbmRvSGVpZ2h0Iiwic2V0Q2xpZW50V2luZG9IZWlnaHQiLCJsb2dvRGlzcGxheSIsInNldGxvZ29EaXNwbGF5IiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsIiR0YXJnZXRFbDEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsIiR0cmlnZ2VyRWwyIiwib3B0aW9ucyIsIm9uQ29sbGFwc2UiLCJjb2xsYXBzZSIsIm9uRXhwYW5kIiwiZXhwYW5kIiwib25Ub2dnbGUiLCJ0b2dnbGUiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJidXR0b24iLCJidXR0b25DbGljayIsIm5hdmJhciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJuYXZiYXJIaWRkZW4iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5hdiIsImNsYXNzTmFtZSIsImlkIiwiZGl2IiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwiZGF0YS1jb2xsYXBzZS10b2dnbGUiLCJ0eXBlIiwib25DbGljayIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsInN0cm9rZSIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwic3Ryb2tlLXdpZHRoIiwiZCIsInVsIiwibGkiLCJhcmlhLWN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/nevbar/nevbar.tsx\n"));

/***/ })

});