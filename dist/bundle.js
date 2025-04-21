/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./image/backgroundImage.png */ \"./src/image/backgroundImage.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./image/backgroundImage@2x.png */ \"./src/image/backgroundImage@2x.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./image/backgroundImage@3x.png */ \"./src/image/backgroundImage@3x.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./image/img1.png */ \"./src/image/img1.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./image/img2.png */ \"./src/image/img2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./image/img3.png */ \"./src/image/img3.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;\n    background-image: image-set(\n            url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 1x,\n            url(${___CSS_LOADER_URL_REPLACEMENT_1___}) 2x,\n            url(${___CSS_LOADER_URL_REPLACEMENT_2___}) 3x\n    );\n    background-size: cover;\n    color: white;\n    min-height: 100vh;\n    display: flex;\n    overflow: hidden;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 24px;\n    margin: 0;\n}\n\n.container {\n    width: 100%;\n    max-width: 400px;\n}\n\n.title {\n    text-align: center;\n    margin-bottom: 24px;\n}\n\n.title h1 {\n    font-size: 42px;\n    font-weight: 820;\n    white-space: normal;\n    overflow-wrap: break-word;\n}\n\n.features-container {\n    display: flex;\n    justify-content: space-between;\n    gap: 6px;\n    margin-bottom: 34px;\n}\n\n.feature-card {\n    flex: 1;\n    min-height: 146px;\n    height: auto;\n    border-radius: 15px;\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    justify-content: start;\n    align-items: start;\n    text-align: start;\n    color: #fff;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n.feature-text-container {\n    position: relative;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 96px 8px;\n    padding-bottom: 12px;\n}\n\n.feature-card p {\n    font-family: 'SF Pro Display', sans-serif;\n    font-weight: 200;\n    color: #fff;\n    padding-bottom: 8px;\n    font-size: 12px;\n    text-align: start;\n    white-space: normal;\n    word-break: break-word;\n}\n\n.art-creation {\n    background-image:\n            url(${___CSS_LOADER_URL_REPLACEMENT_3___})\n\n}\n\n.exclusive-styles {\n    background-image:\n            url(${___CSS_LOADER_URL_REPLACEMENT_4___})\n\n}\n\n.magic-avatars {\n    background-image:\n            url(${___CSS_LOADER_URL_REPLACEMENT_5___})\n}\n\n.pricing-option {\n    width: 100%;\n    height: 56px;\n    padding: 9px 24px;\n    border-radius: 100px;\n    margin-bottom: 8px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: none;\n    cursor: pointer;\n    transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.pricing-option:hover {\n    transform: translateY(-2px);\n}\n\n.pricing-option:active {\n    transform: translateY(0);\n}\n\n.yearly {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 56px;\n    border-radius: 40px;\n    background-color: #24212E;\n    box-shadow: 4px -4px 10px 2px rgba(188, 31, 239, 0.8),\n    4px -4px 10px 2px rgba(0, 53, 255, 0.8);\n    color: white;\n    font-size: 16px;\n    font-family: 'SF Pro Display', sans-serif;\n    cursor: pointer;\n    transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.yearly-thrown {\n    border: 1px solid white;\n    background-color: #55535B;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n.ribbon {\n    position: absolute;\n    top: -12px;\n    right: 24px;\n    padding: 2px 22px;\n    border: 1px solid transparent;\n    border-radius: 16px;\n    background: linear-gradient(to right, #BC1FEF, #0035FF) border-box;\n    background-clip: padding-box, border-box;\n    background-color: #55535B;\n    color: #fff;\n    font-size: 13px;\n    text-align: center;\n    white-space: nowrap;\n}\n\n.ribbon-thrown {\n    position: absolute;\n    top: -12px;\n    right: 24px;\n    display: inline-block;\n    padding: 2px 22px;\n    background-color: white;\n    border: 1px solid white;\n    border-radius: 16px;\n    color: black;\n    text-align: center;\n    font-size: 13px;\n}\n\n.weekly {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 56px;\n    border-radius: 40px;\n    background-color: #24222B;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n    color: white;\n    font-size: 16px;\n    font-family: 'SF Pro Display', sans-serif;\n    cursor: pointer;\n    transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.weekly-thrown {\n    border: 1px solid white;\n    background-color: #55535B;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n}\n\n.pricing-info {\n    text-align: left;\n    flex-grow: 1;\n}\n\n.pricing-title {\n    font-size: 15px;\n    font-weight: 400;\n    margin: 0;\n    white-space: nowrap;\n}\n\n.pricing-subtitle {\n    font-family: 'SF Pro Display', sans-serif;\n    font-size: 15px;\n    font-weight: 200;\n    margin: 4px 0 0;\n    opacity: 0.7;\n    white-space: nowrap;\n}\n\n.price {\n    font-size: 15px;\n    text-align: start;\n    font-weight: 200;\n    margin-right: 36px;\n    opacity: 0.7;\n}\n\n.price span {\n    font-size: 14px;\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.continue-btn {\n    width: 100%;\n    height: 56px;\n    background-color: white;\n    color: black;\n    font-weight: 590;\n    border-radius: 100px;\n    border: none;\n    font-size: 20px;\n    cursor: pointer;\n    transition: transform 0.2s;\n}\n\n.continue-btn:hover {\n    transform: translateY(-2px);\n}\n\n.continue-btn:active {\n    transform: translateY(0);\n}\n\n.footer-links {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 58px;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    font-weight: 200;\n    color: #ffffff;\n    gap: 16px;\n    padding: 0 16px;\n    max-width: unset;\n    width: 100vw;\n    box-sizing: border-box;\n}\n\n.footer-links a {\n    display: flex;\n    color: inherit;\n    text-decoration: none;\n    font-size: 13px;\n    white-space: nowrap;\n}\n\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.7);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s ease, visibility 0.3s ease;\n}\n\n.modal.show {\n    opacity: 1;\n    visibility: visible;\n}\n\n.modal-content {\n    position: relative;\n    justify-items: center;\n    background: transparent;\n    border-radius: 10px;\n    top: 20vh;\n    padding: 20px;\n    width: 100%;\n    height: 100%;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n}\n\n.close-modal-btn {\n    position: fixed;\n    top: 70px;\n    left: 22px;\n    background: transparent;\n    border: none;\n    font-size: 20px;\n}\n\n.close-icon {\n    width: 21px;\n    height: 21px;\n}\n\n.open-modal-btn {\n    padding: 10px 20px;\n    font-size: 16px;\n    border-radius: 5px;\n    background: #3b82f6;\n    color: white;\n    border: none;\n    cursor: pointer;\n    transition: background 0.3s ease;\n}\n\n.open-modal-btn:hover {\n    background: #2563eb;\n}\n\n/* for iPhone SE (375x667) */\n@media only screen and (min-width: 390px) and (max-width: 390px) and (min-height: 844px) and (max-height: 844px) {\n    .container {\n        max-width: 350px;\n    }\n    .title h1 {\n        font-size: 28px;\n    }\n    .feature-card {\n        min-height: 120px;\n    }\n    .feature-text-container {\n        padding: 80px 6px 10px;\n    }\n    .feature-card p {\n        font-size: 10px;\n    }\n    .modal-content {\n        top: 10vh;\n        padding: 16px;\n    }\n    .footer-links {\n        bottom: 10px;\n        gap: 12px;\n        padding: 0 12px;\n    }\n    .footer-links a {\n        font-size: 12px;\n    }\n}\n\n/* for iPhone XR/11 (414x896) */\n@media only screen and (min-width: 414px) and (max-width: 414px) and (min-height: 896px) and (max-height: 896px) {\n    .container {\n        max-width: 400px;\n    }\n    .title h1 {\n        font-size: 40px;\n    }\n    .feature-card {\n        min-height: 140px;\n    }\n    .feature-text-container {\n        padding: 90px 8px 12px;\n    }\n    .feature-card p {\n        font-size: 12px;\n    }\n    .modal-content {\n        top: 20vh;\n        padding: 20px;\n\n    }\n    .footer-links {\n        bottom: 50px;\n        gap: 16px;\n    }\n}\n\n/* for iPhone 14 (390x844) */\n@media only screen and (max-width: 390px) and (max-height: 844px) {\n    .container {\n        max-width: 360px;\n    }\n    .title h1 {\n        font-size: 38px;\n    }\n    .feature-card {\n        min-height: 130px;\n    }\n    .feature-text-container {\n        padding: 85px 6px 10px;\n    }\n    .feature-card p {\n        font-size: 11px;\n    }\n    .modal-content {\n        top: 18vh;\n        padding: 18px;\n    }\n    .footer-links {\n        bottom: 40px;\n        gap: 14px;\n    }\n}\n\n/* for iPhone 14 Pro (393x852) */\n@media only screen and (max-width: 393px) and (max-height: 852px) {\n    .container {\n        max-width: 370px;\n    }\n    .title h1 {\n        font-size: 28px;\n    }\n    .feature-card {\n        min-height: 130px;\n    }\n    .feature-text-container {\n        padding: 85px 6px 10px;\n    }\n    .feature-card p {\n        font-size: 11px;\n    }\n    .modal-content {\n        top: 16vh;\n        padding: 18px;\n    }\n    .footer-links {\n        bottom: 8px;\n        gap: 14px;\n    }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bp-mobile-test/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://bp-mobile-test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://bp-mobile-test/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://bp-mobile-test/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bp-mobile-test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bp-mobile-test/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bp-mobile-test/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bp-mobile-test/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bp-mobile-test/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bp-mobile-test/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/image/backgroundImage.png":
/*!***************************************!*\
  !*** ./src/image/backgroundImage.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"image/backgroundImage.png\";\n\n//# sourceURL=webpack://bp-mobile-test/./src/image/backgroundImage.png?");

/***/ }),

/***/ "./src/image/backgroundImage@2x.png":
/*!******************************************!*\
  !*** ./src/image/backgroundImage@2x.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"image/backgroundImage@2x.png\";\n\n//# sourceURL=webpack://bp-mobile-test/./src/image/backgroundImage@2x.png?");

/***/ }),

/***/ "./src/image/backgroundImage@3x.png":
/*!******************************************!*\
  !*** ./src/image/backgroundImage@3x.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"image/backgroundImage@3x.png\";\n\n//# sourceURL=webpack://bp-mobile-test/./src/image/backgroundImage@3x.png?");

/***/ }),

/***/ "./src/image/img1.png":
/*!****************************!*\
  !*** ./src/image/img1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"image/img1.png\";\n\n//# sourceURL=webpack://bp-mobile-test/./src/image/img1.png?");

/***/ }),

/***/ "./src/image/img2.png":
/*!****************************!*\
  !*** ./src/image/img2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"image/img2.png\";\n\n//# sourceURL=webpack://bp-mobile-test/./src/image/img2.png?");

/***/ }),

/***/ "./src/image/img3.png":
/*!****************************!*\
  !*** ./src/image/img3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"image/img3.png\";\n\n//# sourceURL=webpack://bp-mobile-test/./src/image/img3.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _locales_de_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales/de.json */ \"./src/locales/de.json\");\n/* harmony import */ var _locales_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/en.json */ \"./src/locales/en.json\");\n/* harmony import */ var _locales_es_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locales/es.json */ \"./src/locales/es.json\");\n/* harmony import */ var _locales_fr_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales/fr.json */ \"./src/locales/fr.json\");\n/* harmony import */ var _locales_ja_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales/ja.json */ \"./src/locales/ja.json\");\n/* harmony import */ var _locales_pt_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locales/pt.json */ \"./src/locales/pt.json\");\n\n\n\n\n\n\n\n\n// Список доступных переводов\nvar translations = {\n  de: _locales_de_json__WEBPACK_IMPORTED_MODULE_1__,\n  en: _locales_en_json__WEBPACK_IMPORTED_MODULE_2__,\n  es: _locales_es_json__WEBPACK_IMPORTED_MODULE_3__,\n  fr: _locales_fr_json__WEBPACK_IMPORTED_MODULE_4__,\n  ja: _locales_ja_json__WEBPACK_IMPORTED_MODULE_5__,\n  pt: _locales_pt_json__WEBPACK_IMPORTED_MODULE_6__\n};\nvar supportedLanguages = ['de', 'en', 'es', 'fr', 'ja', 'pt'];\n\n// Значения цен для подстановки\nvar prices = {\n  yearly: '$39.99',\n  weekly: '$6.99',\n  yearly_per_week: '$0.48'\n};\n\n// Получение языка из URL или системы\nfunction getLanguage() {\n  var urlParams = new URLSearchParams(window.location.search);\n  var langParam = urlParams.get('lang');\n  if (langParam && supportedLanguages.includes(langParam)) {\n    return langParam;\n  }\n  var systemLang = navigator.language.split('-')[0];\n  return supportedLanguages.includes(systemLang) ? systemLang : 'en';\n}\n\n// Замена плейсхолдеров\nfunction replacePlaceholders(str, values) {\n  return str.replace(/{{(\\w+)}}/g, function (_, key) {\n    return values[key] || \"{{\".concat(key, \"}}\"); // Если ключ не найден, оставляем как есть\n  });\n}\n\n// Обновление текста на странице\nfunction updateTranslations(translations, lang) {\n  var elements = document.querySelectorAll('[data-i18n]');\n  elements.forEach(function (element) {\n    var key = element.getAttribute('data-i18n');\n    if (translations[key]) {\n      var text = translations[key];\n\n      // Заменяем {{price}} на значение из объекта prices\n      text = replacePlaceholders(text, {\n        price: key.includes(\"per year\") ? prices.yearly : prices.weekly\n      });\n      element.innerHTML = text;\n    } else {\n      console.warn(\"Missing translation for key: \".concat(key));\n    }\n  });\n}\n\n// Корректировка размера шрифта для длинных текстов\nfunction adjustFontSize() {\n  var featureTexts = document.querySelectorAll('.feature-card p');\n  featureTexts.forEach(function (text) {\n    if (text.scrollWidth > text.offsetWidth) {\n      var fontSize = parseFloat(window.getComputedStyle(text).fontSize);\n      text.style.fontSize = \"\".concat(Math.max(fontSize - 2, 8), \"px\");\n    }\n  });\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  // Инициализация языка\n  var lang = getLanguage();\n  document.documentElement.lang = lang; // Устанавливаем атрибут lang\n  var selectedTranslations = translations[lang] || translations.en;\n  updateTranslations(selectedTranslations, lang);\n  adjustFontSize();\n\n  // Логика модального окна\n  var modal = document.getElementById('modal');\n  var openModalBtn = document.getElementById('openModal');\n  var closeModalBtn = document.getElementById('closeModal');\n  var continueBtn = document.getElementById('continueBtn');\n  if (openModalBtn && modal && closeModalBtn) {\n    openModalBtn.addEventListener('click', function () {\n      modal.classList.add('show');\n    });\n    closeModalBtn.addEventListener('click', function () {\n      modal.classList.remove('show');\n    });\n    modal.addEventListener('click', function (event) {\n      if (event.target === modal) {\n        modal.classList.remove('show');\n      }\n    });\n  } else {\n    console.error('Modal elements not found!');\n  }\n\n  // Логика выбора тарифа\n  var yearlyOption = document.querySelector('.pricing-option.yearly');\n  var weeklyOption = document.querySelector('.pricing-option.weekly');\n  var ribbon = yearlyOption ? yearlyOption.querySelector('.ribbon') : null;\n  var selectedType = 'yearly';\n  function updateSelection(type) {\n    selectedType = type;\n    if (type === 'yearly') {\n      yearlyOption.classList.add('yearly-thrown');\n      weeklyOption.classList.remove('weekly-thrown');\n      if (ribbon) {\n        ribbon.classList.add('ribbon-thrown');\n        ribbon.classList.remove('ribbon');\n      }\n    } else {\n      weeklyOption.classList.add('weekly-thrown');\n      yearlyOption.classList.remove('yearly-thrown');\n      if (ribbon) {\n        ribbon.classList.add('ribbon');\n        ribbon.classList.remove('ribbon-thrown');\n      }\n    }\n  }\n  if (yearlyOption && weeklyOption) {\n    yearlyOption.addEventListener('click', function (e) {\n      e.preventDefault();\n      updateSelection('yearly');\n    });\n    weeklyOption.addEventListener('click', function (e) {\n      e.preventDefault();\n      updateSelection('weekly');\n    });\n  } else {\n    console.error('Pricing options not found!');\n  }\n  if (continueBtn) {\n    continueBtn.addEventListener('click', function () {\n      var url = selectedType === 'yearly' ? 'https://apple.com/' : 'https://google.com/';\n      window.location.href = url;\n    });\n  } else {\n    console.error('Continue button not found!');\n  }\n});\n\n//# sourceURL=webpack://bp-mobile-test/./src/index.js?");

/***/ }),

/***/ "./src/locales/de.json":
/*!*****************************!*\
  !*** ./src/locales/de.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Erhalten Sie unbegrenzten <br>Zugriff\",\"Unlimited Art <br>Creation\":\"Unbegrenzte <br>Kunstschaffung\",\"Exclusive <br>Styles\":\"Exklusive <br>Stile\",\"Magic Avatars <br>With 20% Off\":\"20 % Rabatt auf <br>KI-Avatare\",\"YEARLY ACCESS\":\"JÄHRLICHER ZUGRIFF\",\"BEST OFFER\":\"BESTES ANGEBOT\",\"Just {{price}} per year\":\"Nur {{price}} pro Jahr\",\"WEEKLY ACCESS\":\"WÖCHENTLICHER ZUGRIFF\",\"{{price}} <br>per week\":\"{{price}} <br>pro Woche\",\"Terms of Use\":\"Nutzungsbedingungen\",\"Privacy Policy\":\"Datenschutzrichtlinie\",\"Restore\":\"Wiederherstellen\",\"Continue\":\"Weiter\"}');\n\n//# sourceURL=webpack://bp-mobile-test/./src/locales/de.json?");

/***/ }),

/***/ "./src/locales/en.json":
/*!*****************************!*\
  !*** ./src/locales/en.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Get Unlimited <br>Access\",\"Unlimited Art <br>Creation\":\"Unlimited Art <br>Creation\",\"Exclusive <br>Styles\":\"Exclusive <br>Styles\",\"Magic Avatars <br>With 20% Off\":\"Magic Avatars <br>With 20% Off\",\"YEARLY ACCESS\":\"YEARLY ACCESS\",\"BEST OFFER\":\"BEST OFFER\",\"Just {{price}} per year\":\"Just {{price}} per year\",\"WEEKLY ACCESS\":\"WEEKLY ACCESS\",\"{{price}} <br>per week\":\"{{price}} <br>per week\",\"Terms of Use\":\"Terms of Use\",\"Privacy Policy\":\"Privacy Policy\",\"Restore\":\"Restore\",\"Continue\":\"Continue\"}');\n\n//# sourceURL=webpack://bp-mobile-test/./src/locales/en.json?");

/***/ }),

/***/ "./src/locales/es.json":
/*!*****************************!*\
  !*** ./src/locales/es.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Obtén acceso <br>ilimitado\",\"Unlimited Art <br>Creation\":\"Ilimitada creación <br>de arte\",\"Exclusive <br>Styles\":\"Estilos <br>exclusivos\",\"Magic Avatars <br>With 20% Off\":\"20 % de descuento en <br>avatares de IA\",\"YEARLY ACCESS\":\"ACCESO ANUAL\",\"BEST OFFER\":\"MEJOR OFERTA\",\"Just {{price}} per year\":\"Solo {{price}} por año\",\"WEEKLY ACCESS\":\"ACCESO SEMANAL\",\"{{price}} <br>per week\":\"{{price}} <br>por semana\",\"Terms of Use\":\"Términos de uso\",\"Privacy Policy\":\"Política de privacidad\",\"Restore\":\"Restaurar\",\"Continue\":\"Continuar\"}');\n\n//# sourceURL=webpack://bp-mobile-test/./src/locales/es.json?");

/***/ }),

/***/ "./src/locales/fr.json":
/*!*****************************!*\
  !*** ./src/locales/fr.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Obtenez un accès <br>illimité\",\"Unlimited Art <br>Creation\":\"Création artistique <br>illimitée\",\"Exclusive <br>Styles\":\"Styles <br>exclusifs\",\"Magic Avatars <br>With 20% Off\":\"20&nbsp;% de réduction <br>sur les avatars IA\",\"YEARLY ACCESS\":\"ACCÈS ANNUEL\",\"BEST OFFER\":\"MEILLEURE OFFRE\",\"Just {{price}} per year\":\"Seulement {{price}} par an\",\"WEEKLY ACCESS\":\"ACCÈS HEBDOMADAIRE\",\"{{price}} <br>per week\":\"{{price}} <br>par semaine\",\"Terms of Use\":\"Conditions d’utilisation\",\"Privacy Policy\":\"Politique de confidentialité\",\"Restore\":\"Restaurer\",\"Continue\":\"Continuer\"}');\n\n//# sourceURL=webpack://bp-mobile-test/./src/locales/fr.json?");

/***/ }),

/***/ "./src/locales/ja.json":
/*!*****************************!*\
  !*** ./src/locales/ja.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"無制限アクセス<br>を入手\",\"Unlimited Art <br>Creation\":\"アート作品を<br>無制限に創造\",\"Exclusive <br>Styles\":\"特別な<br>スタイル\",\"Magic Avatars <br>With 20% Off\":\"AIアバターが<br>20%オフ\",\"YEARLY ACCESS\":\"年間アクセス\",\"BEST OFFER\":\"ベストオファー\",\"Just {{price}} per year\":\"わずか{{price}}/年\",\"WEEKLY ACCESS\":\"週ごとのアクセス\",\"{{price}} <br>per week\":\"{{price}}/週<br>\",\"Terms of Use\":\"利用規約\",\"Privacy Policy\":\"プライバシーポリシー\",\"Restore\":\"復元する\",\"Continue\":\"続行する\"}');\n\n//# sourceURL=webpack://bp-mobile-test/./src/locales/ja.json?");

/***/ }),

/***/ "./src/locales/pt.json":
/*!*****************************!*\
  !*** ./src/locales/pt.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Get Unlimited <br>Access\":\"Obtenha Acesso <br>Ilimitado\",\"Unlimited Art <br>Creation\":\"Criação de Arte <br>Ilimitada\",\"Exclusive <br>Styles\":\"Estilos <br>Exclusivos\",\"Magic Avatars <br>With 20% Off\":\"20% de Desconto em <br>Avatares de IA\",\"YEARLY ACCESS\":\"ACESSO ANUAL\",\"BEST OFFER\":\"MELHOR OFERTA\",\"Just {{price}} per year\":\"Apenas {{price}} por ano\",\"WEEKLY ACCESS\":\"ACESSO SEMANAL\",\"{{price}} <br>per week\":\"{{price}} <br>por semana\",\"Terms of Use\":\"Termos de Uso\",\"Privacy Policy\":\"Política de Privacidade\",\"Restore\":\"Restaurar\",\"Continue\":\"Continuar\"}');\n\n//# sourceURL=webpack://bp-mobile-test/./src/locales/pt.json?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://bp-mobile-test/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;