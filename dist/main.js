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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("\r\n\r\nconst startStopBtn = document.querySelector('#startStopBtn');\r\nconst resetBtn = document.querySelector('#resetBtn');\r\n\r\n\r\n//Variab;es for time values\r\n\r\nlet seconds =0; \r\nlet minutes = 0;\r\nlet hours = 0; \r\n\r\n//Vairaibles for Format\r\n\r\nlet leadingSeconds = 0;\r\nlet leadingMinute = 0;\r\nlet leadingHours = 0;\r\n\r\n\r\n//Buttons Variables\r\n\r\nlet timerInterval = null;\r\nlet timerStatus = \"Stopped\";\r\n\r\n//STOP WATCH FUNTIONS\r\n\r\nfunction stopWatch(){\r\n\r\n    seconds++\r\n    \r\n    if(seconds / 60 === 1){\r\n        seconds = 0;\r\n        minutes++\r\n    }\r\n    if(minutes / 60 === 1){\r\n        minutes = 0;\r\n        hours++;\r\n    }\r\n\r\n\r\n    if(seconds <10){\r\n        leadingSeconds = \"0\" + seconds.toString();\r\n    }else{\r\n        leadingSeconds = seconds\r\n    }\r\n    \r\n    if(minutes <10){\r\n        leadingMinute = \"0\" + minutes.toString();\r\n    }else{\r\n        leadingMinute = minutes\r\n    }\r\n\r\n    if(hours <10){\r\n        leadingHours = \"0\" + hours.toString();\r\n    }else{\r\n        leadingHours = hours\r\n    }\r\n    let displayTimer = document.getElementById('timer').innerText = leadingHours+ \":\" + leadingMinute + \":\" + leadingSeconds;\r\n\r\n}\r\n\r\n//window.setInterval(stopWatch, 1000)\r\n\r\nstartStopBtn.addEventListener('click', function() {\r\n\r\n    if(timerStatus === \"stopped\"){\r\n        timerInterval = window.setInterval(stopWatch, 1000);\r\n        document.getElementById('startStopBtn').innerHTML = `<i class=\"fa-solid fa-pause\" id=\"pause\"></i>`;\r\n        timerStatus = \"started\";\r\n\r\n    }else{\r\n        window.clearInterval(timerInterval);\r\n        document.getElementById('startStopBtn').innerHTML =`<i class=\"fa-solid fa-play\" id=\"play\"></i>`; \r\n        timerStatus = \"stopped\"\r\n    }\r\n})\r\n\r\nresetBtn.addEventListener('click', function (){\r\n\r\n    window.clearInterval(timerInterval);\r\n    seconds = 0;\r\n    minutes = 0;\r\n    hours = 0;\r\n\r\n    document.getElementById('timer').innerHTML = \"00:00:00\";\r\n})\n\n//# sourceURL=webpack://timer/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;