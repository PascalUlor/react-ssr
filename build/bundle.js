/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/data.json":
/*!**************************!*\
  !*** ./assets/data.json ***!
  \**************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"Netflix\\\",\\\"publisher\\\":\\\"Netflix, Inc\\\",\\\"price\\\":\\\"Free\\\",\\\"img\\\":{\\\"src\\\":\\\"media/netflix.jpg\\\",\\\"alt\\\":\\\"netflix app icon\\\"},\\\"desc\\\":\\\"<p>Watch TV shows and movies recommended just for you, including award-winning Netflix original series, movies, and documentaries.</p><p>Netflix has something for everyone. </p>\\\",\\\"link\\\":\\\"https://itunes.apple.com/us/app/netflix/id363590051?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4\\\",\\\"tweet\\\":\\\"Watch TV shows and movies recommended just for you\\\"},{\\\"name\\\":\\\"Pandora Music\\\",\\\"publisher\\\":\\\"Pandora Media, Inc\\\",\\\"price\\\":\\\"Free\\\",\\\"img\\\":{\\\"src\\\":\\\"media/pandora.jpg\\\",\\\"alt\\\":\\\"pandora icon\\\"},\\\"desc\\\":\\\"<p>Pandora gives you a personalized music experience that continually evolves with your tastes.</p><p>Create stations from your favorite songs, artists or genres. Or search browse to find recommended stations for your mood or activity.</p>\\\",\\\"link\\\":\\\"https://itunes.apple.com/us/app/pandora-music/id284035177?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4\\\",\\\"tweet\\\":\\\"Pandora gives you a personalized music experience that continually evolves with your tastes\\\"},{\\\"name\\\":\\\"Hulu: Watch TV Shows & Movies\\\",\\\"publisher\\\":\\\"Hulu, LLC\\\",\\\"price\\\":\\\"Free\\\",\\\"img\\\":{\\\"src\\\":\\\"media/hulu.jpg\\\",\\\"alt\\\":\\\"hulu icon\\\"},\\\"desc\\\":\\\"<p>Enjoy all your TV in one place with a new Hulu experience – more personalized and intuitive than ever before.</p><p> The choice is yours - select a plan featuring Hulu’s entire streaming library, or if you’ve subscribed through Hulu to a plan that includes Live TV</p>\\\",\\\"link\\\":\\\"https://itunes.apple.com/us/app/hulu-watch-tv-shows-movies/id376510438?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4\\\",\\\"tweet\\\":\\\"Enjoy all your TV in one place with a new Hulu experience\\\"},{\\\"name\\\":\\\"Clash of Clans \\\",\\\"publisher\\\":\\\"Supercell\\\",\\\"price\\\":\\\"Free\\\",\\\"img\\\":{\\\"src\\\":\\\"media/coc.jpg\\\",\\\"alt\\\":\\\"coc icon\\\"},\\\"desc\\\":\\\"<p>Join millions of players worldwide as you build your village, raise a clan, and compete in epic Clan Wars!</p><p>Mustachioed Barbarians, fire wielding Wizards, and other unique troops are waiting for you! Enter the world of Clash!</p>\\\",\\\"link\\\":\\\"https://itunes.apple.com/us/app/clash-of-clans/id529479190?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4\\\",\\\"tweet\\\":\\\"Join millions of players worldwide as you build your village\\\"},{\\\"name\\\":\\\"MARVEL Contest of Champions\\\",\\\"publisher\\\":\\\"Marvel\\\",\\\"price\\\":\\\"Free\\\",\\\"img\\\":{\\\"src\\\":\\\"media/mcc.jpg\\\",\\\"alt\\\":\\\"mcc icon\\\"},\\\"desc\\\":\\\"<p>Prepare for epic versus-fighting action with your favorite Marvel Super Heroes & Super Villains in the ultimate cosmic showdown! Spider-Man, Iron Man, Wolverine & more await your summons to battle! Assemble a team & begin your quest to become the Ultimate Marvel Champion!</p>\\\",\\\"link\\\":\\\"https://itunes.apple.com/us/app/marvel-contest-of-champions/id896112560?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4\\\",\\\"tweet\\\":\\\"Prepare for epic versus-fighting action with your favorite Marvel Super Heroes\\\"},{\\\"name\\\":\\\"Candy Crush Saga\\\",\\\"publisher\\\":\\\"King\\\",\\\"price\\\":\\\"Free\\\",\\\"img\\\":{\\\"src\\\":\\\"media/ccs.jpg\\\",\\\"alt\\\":\\\"Candy Crush Saga icon\\\"},\\\"desc\\\":\\\"<p>Start playing Candy Crush Saga today - loved by millions of players around the world.</p><p>With over a trillion levels played, this match 3 puzzle game is one of the most popular mobile games of all time!</p>\\\",\\\"link\\\":\\\"https://itunes.apple.com/us/app/candy-crush-saga/id553834731?mt=8&v0=WWW-NAUS-ITSTOP100-GROSSINGAPPS&l=en&ign-mpt=uo%3D4\\\",\\\"tweet\\\":\\\"Start playing Candy Crush Saga today\\\"}]\");\n\n//# sourceURL=webpack:///./assets/data.json?");

/***/ }),

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar App = function App(_ref) {\n  var initialText = _ref.initialText;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialText),\n      _useState2 = _slicedToArray(_useState, 2),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var handleClick = function handleClick() {\n    setText('changed in the browser!');\n    console.log('>>> FIRED >>>');\n  };\n\n  var metaHeader = function metaHeader() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"My Page Title\"));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, metaHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleClick\n  }, \"change text!\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/redux/actions/index.js":
/*!*******************************************!*\
  !*** ./src/client/redux/actions/index.js ***!
  \*******************************************/
/*! exports provided: REQUEST_APPS, RECEIVE_APPS, fetchAppsIfNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_APPS\", function() { return REQUEST_APPS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVE_APPS\", function() { return RECEIVE_APPS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAppsIfNeeded\", function() { return fetchAppsIfNeeded; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar REQUEST_APPS = 'REQUEST_APPS';\nvar RECEIVE_APPS = 'RECEIVE_APPS';\n\nvar requestApps = function requestApps() {\n  return {\n    type: REQUEST_APPS\n  };\n};\n\nvar receiveApps = function receiveApps(json) {\n  return {\n    type: RECEIVE_APPS,\n    apps: json\n  };\n};\n\nvar fetchApps = function fetchApps() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var response, json;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch(requestApps());\n              _context.next = 3;\n              return fetch(\"assets/data.json\");\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              json = _context.sent;\n              return _context.abrupt(\"return\", dispatch(receiveApps(json)));\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar shouldFetchApps = function shouldFetchApps(state) {\n  var apps = state.apps;\n\n  if (apps.length == 0) {\n    return true;\n  } else if (state.isFetching) {\n    return false;\n  }\n};\n\nvar fetchAppsIfNeeded = function fetchAppsIfNeeded() {\n  return function (dispatch, getState) {\n    if (shouldFetchApps(getState())) {\n      return dispatch(fetchApps());\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/client/redux/actions/index.js?");

/***/ }),

/***/ "./src/client/redux/reducers/index.js":
/*!********************************************!*\
  !*** ./src/client/redux/reducers/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/redux/actions/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  isFetching: false,\n  apps: []\n};\n\nvar apps = function apps() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_APPS\"]:\n      return Object.assign({}, state, {\n        isFetching: true\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"RECEIVE_APPS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isFetching: false,\n        apps: action.apps\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apps);\n\n//# sourceURL=webpack:///./src/client/redux/reducers/index.js?");

/***/ }),

/***/ "./src/helpers/creatStore.js":
/*!***********************************!*\
  !*** ./src/helpers/creatStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_redux_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/redux/reducers */ \"./src/client/redux/reducers/index.js\");\n\n\n\nfunction configureStore(preloadedState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_redux_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n}\n\n//# sourceURL=webpack:///./src/helpers/creatStore.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_creatStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/creatStore */ \"./src/helpers/creatStore.js\");\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/App */ \"./src/client/App.js\");\n/* harmony import */ var _assets_data_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/data.json */ \"./assets/data.json\");\nvar _assets_data_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/data.json */ \"./assets/data.json\", 1);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar render = function render(initialState) {\n  // Configure the store with the initial state provided\n  var store = Object(_helpers_creatStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(initialState); // render the App store static markup ins content variable\n\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))); // Get a copy of store data to create the same store on client side \n\n  var preloadedState = store.getState(); // helmet to parse metadatas\n\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_4__[\"Helmet\"].renderStatic();\n  return {\n    content: content,\n    preloadedState: preloadedState,\n    helmet: helmet\n  };\n};\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('build/public'));\nvar PORT = process.env.PORT || 3000; // Serving static files\n\napp.use('../assets', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, 'assets')));\napp.use('../media', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, 'media'))); // hide powered by express\n\napp.disable('x-powered-by'); // start server\n\napp.listen(PORT, function () {\n  console.log(\"App running on \".concat(PORT));\n});\nvar initialState = {\n  isFetching: false,\n  apps: _assets_data_json__WEBPACK_IMPORTED_MODULE_8__\n}; // server rendered home page\n\napp.get('/', function (req, res) {\n  var _render = render(initialState),\n      preloadedState = _render.preloadedState,\n      content = _render.content,\n      helmet = _render.helmet;\n\n  var response = Object(_template__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"Server Rendered Page\", preloadedState, content, helmet);\n  res.setHeader('Cache-Control', 'assets, max-age=604800');\n  res.send(response);\n}); // Pure client side rendered page\n\napp.get('/client', function (req, res) {\n  var response = Object(_template__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('Client Side Rendered page');\n  res.setHeader('Cache-Control', 'assets, max-age=604800');\n  res.send(response);\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return template; });\n// html skeleton provider\nfunction template(title) {\n  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n  var helmet = arguments.length > 3 ? arguments[3] : undefined;\n  var scripts = ''; // Dynamically ship scripts based on render type\n\n  if (content) {\n    scripts = \" <script>\\n                     window.__STATE__ = \".concat(JSON.stringify(initialState), \"\\n                  </script>\\n                  <script src=\\\"assets/client.js\\\"></script>\\n                  \");\n  } else {\n    scripts = \" <script src=\\\"assets/bundle.js\\\"> </script> \";\n  }\n\n  var page = \"<!DOCTYPE html>\\n                <html lang=\\\"en\\\">\\n                <head>\\n                  <meta charset=\\\"utf-8\\\">\\n                  \".concat(helmet.meta.toString(), \"\\n                  \").concat(helmet.title.toString(), \"\\n                  <title> \").concat(title, \" </title>\\n                  <link href=\\\"assets/style.css\\\" rel=\\\"stylesheet\\\">\\n                </head>\\n                <body>\\n                  <div class=\\\"content\\\">\\n                     <div id=\\\"root\\\" class=\\\"wrap-inner\\\">\\n                        \").concat(content, \"\\n                     </div>\\n                  </div>\\n  \\n                    \").concat(scripts, \"\\n                </body>\\n                \");\n  return page;\n}\n\n//# sourceURL=webpack:///./src/template.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });