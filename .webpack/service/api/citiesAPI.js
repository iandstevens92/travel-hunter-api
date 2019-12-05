(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./api/citiesAPI.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/citiesAPI.js":
/*!**************************!*\
  !*** ./api/citiesAPI.js ***!
  \**************************/
/*! exports provided: getCities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCities", function() { return getCities; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_citiesController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/citiesController */ "./controllers/citiesController.js");



const getCities = async (event, context, callback) => {
  try {
    const {
      Items
    } = await _controllers_citiesController__WEBPACK_IMPORTED_MODULE_1__["getCities"]();
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: "Returned list of cities"
      }),
      data: Items
    });
  } catch (e) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message: "Problem querying the database",
        error: e
      })
    });
  }
};



/***/ }),

/***/ "./config/app.js":
/*!***********************!*\
  !*** ./config/app.js ***!
  \***********************/
/*! exports provided: IS_OFFLINE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_OFFLINE", function() { return IS_OFFLINE; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const IS_OFFLINE = process.env.IS_OFFLINE;

/***/ }),

/***/ "./controllers/citiesController.js":
/*!*****************************************!*\
  !*** ./controllers/citiesController.js ***!
  \*****************************************/
/*! exports provided: getCities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCities", function() { return getCities; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_dynamoDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/dynamoDB */ "./db/dynamoDB.js");



const getCities = () => {
  const params = {
    TableName: process.env.TRAVEL_HUNTER_TABLE,
    KeyConditionExpression: "#city = :cityName",
    ExpressionAttributeNames: {
      "#city": "id"
    },
    ExpressionAttributeValues: {
      ":cityName": "City"
    },
    ProjectionExpression: "sort_key, best_time, average_price, average_age"
  };
  return new Promise((resolve, revoke) => {
    _db_dynamoDB__WEBPACK_IMPORTED_MODULE_1__["default"].query(params, (err, data) => {
      if (err) {
        console.error("Couldn't get city list from table", JSON.stringify(err, null, 2));
        revoke(err);
      } else {
        console.log("Query succeeded.");
        resolve(data);
      }
    });
  });
};



/***/ }),

/***/ "./db/dynamoDB.js":
/*!************************!*\
  !*** ./db/dynamoDB.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app */ "./config/app.js");



const dynamoDB = _config_app__WEBPACK_IMPORTED_MODULE_2__["IS_OFFLINE"] ? new aws_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.DynamoDB.DocumentClient({
  region: "localhost",
  endpoint: "http://localhost:8000",
  convertEmptyValues: true
}) : new aws_sdk__WEBPACK_IMPORTED_MODULE_1___default.a.DynamoDB.DocumentClient({
  convertEmptyValues: true
});
/* harmony default export */ __webpack_exports__["default"] = (dynamoDB);

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ })));
//# sourceMappingURL=citiesAPI.js.map