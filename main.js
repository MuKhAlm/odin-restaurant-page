/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const contentDiv = document.getElementById('content');\n\nclass MainScreen {\n  constructor() {\n    // Create a header element\n    const header = document.createElement('header');\n    // Create h1 element\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Primordial Taste'\n    // Add h1 element to header\n    header.appendChild(h1);\n    // Add header to content div\n    contentDiv.appendChild(header);\n\n    // Create a main element\n    const main = document.createElement('main');\n    // Create about-container div\n    const aboutContainer = document.createElement('div');\n    // Set aboutContainer ID\n    aboutContainer.id = 'about-container';\n    // Add about-container div to main\n    main.appendChild(aboutContainer);\n    // Create p elements\n    const p0 = document.createElement('p');\n    const p1 = document.createElement('p');\n    const p2 = document.createElement('p');\n\n    p0.textContent = 'Best food in the universe';\n    p1.textContent = 'Made with perfection since the down of time';\n    p2.textContent = 'Order via the ether or wrap to us!!';\n    // Add p elements to about-container\n    main.append(p0, p1, p2);\n    // Add main to content div\n    contentDiv.appendChild(main);\n\n    // Create footer\n    const footer = document.createElement('footer');\n    const a = document.createElement('a');\n    a.href = 'https://github.com/MuKhAlt/odin-restaurant-page.git';\n    a.textContent = 'GitHub';\n    footer.appendChild(a);\n    document.body.appendChild(footer);\n  }\n}\n\nconst mainScreen = new MainScreen();\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;