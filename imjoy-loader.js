(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("imjoyLoader", [], factory);
	else if(typeof exports === 'object')
		exports["imjoyLoader"] = factory();
	else
		root["imjoyLoader"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"imjoyLoader": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/imjoyLoader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\nmodule.exports = __webpack_amd_options__;\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack://%5Bname%5D/(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, private, description, author, license, repository, keywords, bugs, homepage, module, scripts, dependencies, devDependencies, eslintConfig, prettier, postcss, browserslist, husky, lint-staged, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"imjoy-core\\\",\\\"version\\\":\\\"0.13.69\\\",\\\"private\\\":false,\\\"description\\\":\\\"The core library for ImJoy -- a sandboxed plugin framework for computational web applications.\\\",\\\"author\\\":\\\"imjoy-team <imjoy.team@gmail.com>\\\",\\\"license\\\":\\\"MIT\\\",\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"git+https://github.com/imjoy-team/imjoy-core.git\\\"},\\\"keywords\\\":[\\\"ImJoy\\\",\\\"PWA\\\",\\\"Deep Learning\\\"],\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/imjoy-team/ImJoy/issues\\\"},\\\"homepage\\\":\\\"https://imjoy.io\\\",\\\"module\\\":\\\"index.js\\\",\\\"scripts\\\":{\\\"serve\\\":\\\"webpack-dev-server --config webpack.config.js --mode development\\\",\\\"build\\\":\\\"rm -rf dist && npm run build-prod && npm run build-dev\\\",\\\"build-prod\\\":\\\"NODE_ENV=production webpack --config webpack.config.js --mode production  --devtool source-map\\\",\\\"build-dev\\\":\\\"NODE_ENV=development webpack --config webpack.config.js --mode development\\\",\\\"watch\\\":\\\"webpack --watch --progress --config  webpack.config.js --mode development\\\",\\\"check-format\\\":\\\"prettier --check \\\\\\\"{src,tests}/**/**\\\\\\\"\\\",\\\"format\\\":\\\"prettier --write \\\\\\\"{src,tests}/**/**\\\\\\\"\\\",\\\"lint\\\":\\\"eslint \\\\\\\"{src,tests}/**/**\\\\\\\"\\\",\\\"check\\\":\\\"eslint \\\\\\\"{src,tests}/**/**\\\\\\\" && prettier --check \\\\\\\"{src,tests}/**/**\\\\\\\"\\\",\\\"test\\\":\\\"karma start --single-run --browsers ChromeHeadless,FirefoxHeadless karma.conf.js\\\",\\\"test-watch\\\":\\\"karma start --auto-watch --browsers Chrome,FirefoxHeadless karma.conf.js --debug\\\",\\\"deploy\\\":\\\"npm run build && node deploy-site.js\\\"},\\\"dependencies\\\":{\\\"@hscmap/vue-window\\\":\\\"github:oeway/vue-window\\\",\\\"ajv\\\":\\\"^6.9.1\\\",\\\"axios\\\":\\\"^0.21.1\\\",\\\"dompurify\\\":\\\"^2.0.8\\\",\\\"file-saver\\\":\\\"^1.3.3\\\",\\\"imjoy-rpc\\\":\\\"^0.2.32\\\",\\\"js-yaml\\\":\\\"^3.13.1\\\",\\\"lodash\\\":\\\"^4.17.15\\\",\\\"lz-string\\\":\\\"^1.4.4\\\",\\\"minibus\\\":\\\"^3.1.0\\\",\\\"pouchdb-browser\\\":\\\"^7.0.0\\\",\\\"socket.io-client\\\":\\\"^2.3.0\\\",\\\"spark-md5\\\":\\\"^3.0.0\\\"},\\\"devDependencies\\\":{\\\"@babel/core\\\":\\\"^7.0.0-beta.39\\\",\\\"@babel/plugin-syntax-dynamic-import\\\":\\\"^7.0.0-beta.39\\\",\\\"@babel/polyfill\\\":\\\"^7.0.0-beta.39\\\",\\\"@babel/preset-env\\\":\\\"^7.0.0-beta.39\\\",\\\"@types/requirejs\\\":\\\"^2.1.28\\\",\\\"babel-core\\\":\\\"^6.26.0\\\",\\\"babel-eslint\\\":\\\"^10.1.0\\\",\\\"babel-loader\\\":\\\"^8.1.0\\\",\\\"babel-plugin-lodash\\\":\\\"^3.3.4\\\",\\\"babel-runtime\\\":\\\"^6.26.0\\\",\\\"chai\\\":\\\"^4.1.2\\\",\\\"cname-webpack-plugin\\\":\\\"^1.0.3\\\",\\\"copy-webpack-plugin\\\":\\\"^5.1.1\\\",\\\"create-file-webpack\\\":\\\"^1.0.2\\\",\\\"cross-env\\\":\\\"^5.0.1\\\",\\\"cross-spawn\\\":\\\"^5.0.1\\\",\\\"eslint\\\":\\\"^6.8.0\\\",\\\"eslint-config-prettier\\\":\\\"^4.2.0\\\",\\\"gh-pages\\\":\\\"^2.0.1\\\",\\\"husky\\\":\\\"^4.2.3\\\",\\\"karma\\\":\\\"^6.1.1\\\",\\\"karma-chrome-launcher\\\":\\\"^3.1.0\\\",\\\"karma-firefox-launcher\\\":\\\"^1.3.0\\\",\\\"karma-mocha\\\":\\\"^1.3.0\\\",\\\"karma-spec-reporter\\\":\\\"0.0.32\\\",\\\"karma-webpack\\\":\\\"^4.0.2\\\",\\\"lint-staged\\\":\\\"^10.0.8\\\",\\\"mocha\\\":\\\"^7.1.0\\\",\\\"postcss-import\\\":\\\"^11.0.0\\\",\\\"postcss-loader\\\":\\\"^2.0.8\\\",\\\"postcss-url\\\":\\\"^7.2.1\\\",\\\"prettier\\\":\\\"1.17.0\\\",\\\"raw-loader\\\":\\\"^1.0.0\\\",\\\"rename-output-webpack-plugin\\\":\\\"^1.0.1\\\",\\\"uglify-es\\\":\\\"github:mishoo/UglifyJS2#harmony\\\",\\\"uglify-js\\\":\\\"^2.8.29\\\",\\\"url-loader\\\":\\\"^1.1.2\\\",\\\"webpack\\\":\\\"^4.42.0\\\",\\\"webpack-bundle-analyzer\\\":\\\"^3.7.0\\\",\\\"webpack-cli\\\":\\\"^3.3.6\\\",\\\"webpack-dev-server\\\":\\\"^3.1.1\\\",\\\"worker-loader\\\":\\\"^2.0.0\\\"},\\\"eslintConfig\\\":{\\\"root\\\":true,\\\"env\\\":{\\\"browser\\\":true,\\\"node\\\":true,\\\"es6\\\":true},\\\"extends\\\":[\\\"eslint:recommended\\\"],\\\"rules\\\":{\\\"no-console\\\":\\\"off\\\",\\\"no-debugger\\\":\\\"off\\\",\\\"no-empty\\\":[\\\"error\\\",{\\\"allowEmptyCatch\\\":true}]},\\\"parserOptions\\\":{\\\"parser\\\":\\\"babel-eslint\\\",\\\"ecmaVersion\\\":2017,\\\"sourceType\\\":\\\"module\\\",\\\"ecmaFeatures\\\":{\\\"modules\\\":true}}},\\\"prettier\\\":{\\\"trailingComma\\\":\\\"es5\\\"},\\\"postcss\\\":{\\\"plugins\\\":{\\\"autoprefixer\\\":{}}},\\\"browserslist\\\":[\\\"> 1%\\\",\\\"last 2 versions\\\",\\\"not ie <= 8\\\"],\\\"husky\\\":{\\\"hooks\\\":{\\\"pre-commit\\\":\\\"lint-staged\\\"}},\\\"lint-staged\\\":{\\\"{src,tests}/**/**}\\\":\\\"prettier --write\\\"}}\");\n\n//# sourceURL=webpack://%5Bname%5D/./package.json?");

/***/ }),

/***/ "./src/imjoyBasicApp.js":
/*!******************************!*\
  !*** ./src/imjoyBasicApp.js ***!
  \******************************/
/*! exports provided: injectScript, loadImJoyBasicApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injectScript\", function() { return injectScript; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImJoyBasicApp\", function() { return loadImJoyBasicApp; });\n/* harmony import */ var _imjoyBasicApp_template_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imjoyBasicApp.template.css */ \"./src/imjoyBasicApp.template.css\");\n/* harmony import */ var _imjoyBasicApp_template_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_imjoyBasicApp_template_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _imjoyBasicApp_template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imjoyBasicApp.template.html */ \"./src/imjoyBasicApp.template.html\");\n/* harmony import */ var _imjoyBasicApp_template_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imjoyBasicApp_template_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _imjoyBasicAppMenu_template_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imjoyBasicAppMenu.template.html */ \"./src/imjoyBasicAppMenu.template.html\");\n/* harmony import */ var _imjoyBasicAppMenu_template_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imjoyBasicAppMenu_template_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _imjoyBasicAppWindows_template_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imjoyBasicAppWindows.template.html */ \"./src/imjoyBasicAppWindows.template.html\");\n/* harmony import */ var _imjoyBasicAppWindows_template_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imjoyBasicAppWindows_template_html__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction injectScript(src) {\n  return new Promise((resolve, reject) => {\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.addEventListener(\"load\", resolve);\n    script.addEventListener(\"error\", () => {\n      document.head.removeChild(script);\n      reject(\"Error loading script: \" + src);\n    });\n    script.addEventListener(\"abort\", () => reject(\"Script loading aborted.\"));\n    document.head.appendChild(script);\n  });\n}\n\nfunction getUrlParameter(name) {\n  name = name.replace(/[\\[]/, \"\\\\[\").replace(/[\\]]/, \"\\\\]\");\n  var regex = new RegExp(\"[\\\\?&]\" + name + \"=([^&#]*)\");\n  var results = regex.exec(location.search);\n  return results === null ? \"\" : decodeURIComponent(results[1].replace(/\\+/g, \" \"));\n}\n\nfunction loadCss(url) {\n  const fileref = document.createElement(\"link\");\n  fileref.setAttribute(\"rel\", \"stylesheet\");\n  fileref.setAttribute(\"type\", \"text/css\");\n  fileref.setAttribute(\"href\", url);\n  document.getElementsByTagName(\"head\")[0].appendChild(fileref);\n}\n\nasync function loadImJoyBasicApp(config) {\n  await injectScript(\"https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js\");\n  await injectScript(\"https://imjoy-team.github.io/vue-js-modal/index.js\");\n  loadCss(\"https://imjoy-team.github.io/vue-js-modal/styles.css\");\n  const VueWindow = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! @hscmap/vue-window */ \"./node_modules/@hscmap/vue-window/lib/index.js\", 7));\n  config = config || {};\n  let app;\n  const imjoy_api = {\n    showDialog(plugin, cfg, extra_cfg) {\n      extra_cfg = extra_cfg || {};\n      extra_cfg.dialog = true;\n      return imjoy.pm.createWindow(plugin, cfg, extra_cfg);\n    },\n\n    createWindow(plugin, cfg, extra_cfg) {\n      extra_cfg = extra_cfg || {};\n      if (!config.window_manager_container) extra_cfg.dialog = true;\n      return imjoy.pm.createWindow(plugin, cfg, extra_cfg);\n    },\n\n    showSnackbar(plugin, msg, duration) {\n      app.showSnackbar(msg, duration);\n    },\n\n    showMessage(plugin, msg) {\n      app.showSnackbar(msg, 5);\n    },\n\n    showStatus(plugin, msg) {\n      app.showSnackbar(msg, 5);\n    },\n\n    showProgress(plugin, progress) {\n      progress = progress || 0;\n      if (progress < 1) progress = progress * 100;\n      app.progress = progress;\n      app.$forceUpdate();\n    }\n\n  };\n\n  if (config.imjoy_api) {\n    for (let k of Object.keys(config.imjoy_api)) {\n      imjoy_api[k] = config.imjoy_api[k];\n    }\n  }\n\n  const imjoyCore = await loadImJoyCore(config);\n  const imjoy = new imjoyCore.ImJoy({\n    imjoy_api\n  });\n  await imjoy.start(config);\n  console.log(\"ImJoy Core started successfully!\");\n  Vue.use(window[\"vue-js-modal\"].default);\n  Vue.use(VueWindow);\n  let elem;\n\n  if (config.main_container) {\n    if (typeof config.main_container === \"string\") elem = document.getElementById(config.main_container);else elem = config.main_container;\n  } else {\n    elem = document.createElement(\"div\");\n    document.body.appendChild(elem);\n  }\n\n  elem.style.visibility = \"hidden\";\n  elem.innerHTML = _imjoyBasicApp_template_html__WEBPACK_IMPORTED_MODULE_1___default.a;\n  document.head.insertAdjacentHTML(\"beforeend\", `<style>${_imjoyBasicApp_template_css__WEBPACK_IMPORTED_MODULE_0___default.a}</style>`);\n  let windowManager;\n\n  if (config.window_manager_container) {\n    let windowsElem;\n    if (typeof config.window_manager_container === \"string\") windowsElem = document.getElementById(config.window_manager_container);else windowsElem = config.window_manager_container;\n    windowsElem.innerHTML = _imjoyBasicAppWindows_template_html__WEBPACK_IMPORTED_MODULE_3___default.a;\n    windowManager = new Vue({\n      el: windowsElem,\n      data: {\n        type: config.window_manager_type || \"standard\",\n        blockPointerEvents: false,\n        windowStyle: config.window_style || {},\n        showEmpty: config.show_empty_window || false,\n        showWindowTitle: config.show_window_title || false,\n        windows: [],\n        activeWindow: null\n      },\n      methods: {\n        closeWindow(w) {\n          w.hidden = true;\n          this.$forceUpdate();\n          w.close();\n        }\n\n      }\n    });\n  }\n\n  let menuManager;\n\n  if (config.menu_container) {\n    let menuElem;\n    if (typeof config.menu_container === \"string\") menuElem = document.getElementById(config.menu_container);else menuElem = config.menu_container;\n    menuElem.innerHTML = _imjoyBasicAppMenu_template_html__WEBPACK_IMPORTED_MODULE_2___default.a;\n    menuElem.style.minHeight = \"30px\";\n    menuManager = new Vue({\n      el: menuElem,\n      data: {\n        menuPos: config.menu_pos || \"right\",\n        menuStyle: config.menu_style || {},\n        activeWindow: null,\n        closeWindow: null,\n        showAboutImJoy: null,\n        extraMenuItems: [],\n        loadedPlugins: [],\n        allWindows: []\n      },\n\n      mounted() {\n        this.menuStyle = this.menuStyle || {};\n        this.menuStyle.float = this.menuPos === \"left\" ? \"left\" : \"right\";\n      }\n\n    });\n  }\n\n  app = new Vue({\n    el: elem,\n    data: {\n      dialogWindows: [],\n      selectedDialogWindow: null,\n      selectedWindowsStack: [],\n      selectedRegularWindow: null,\n      fullscreen: false,\n      loading: false,\n      snackBarContent: false,\n      progress: 0,\n      loadedPlugins: [],\n      allWindows: [],\n      extraMenuItems: [],\n      showProgressBar: config.show_progress_bar,\n      showLoader: config.show_loader,\n      showWindows: config.show_windows\n    },\n\n    mounted() {\n      this.$el.style.visibility = \"visible\";\n      imjoy.event_bus.on(\"close_window\", w => {\n        this.closeWindow(w);\n        this.$forceUpdate();\n      });\n      imjoy.event_bus.on(\"add_window\", w => {\n        this.allWindows.push(w);\n        this.addWindow(w);\n      });\n      this.imjoy = imjoy;\n\n      if (config.process_url_query) {\n        this.processURLQuery();\n      }\n\n      if (menuManager) {\n        menuManager.closeWindow = w => {\n          this.closeWindow(w);\n        };\n\n        if (!config.hide_about_imjoy) {\n          menuManager.showAboutImJoy = () => {\n            imjoy.api.showDialog({\n              src: \"https://imjoy.io/docs/\",\n              passive: true\n            });\n          };\n        }\n      }\n    },\n\n    computed: {\n      regularWindows: function () {\n        return this.allWindows.filter(w => !this.dialogWindows.includes(w) && !w.inline);\n      }\n    },\n    watch: {\n      regularWindows: function (newVal) {\n        if (windowManager) {\n          windowManager.windows = newVal;\n          windowManager.$forceUpdate();\n        }\n      },\n      selectedRegularWindow: function (newVal) {\n        if (windowManager) {\n          windowManager.activeWindow = newVal;\n          windowManager.$forceUpdate();\n        }\n\n        if (menuManager && config.window_manager_type === \"simple\") {\n          menuManager.activeWindow = newVal;\n          menuManager.$forceUpdate();\n        }\n      },\n      extraMenuItems: function (newVal) {\n        if (menuManager) {\n          menuManager.extraMenuItems = newVal;\n          menuManager.$forceUpdate();\n        }\n      },\n      allWindows: function (newVal) {\n        if (menuManager) {\n          menuManager.allWindows = newVal;\n          menuManager.$forceUpdate();\n        }\n      },\n      loadedPlugins: function (newVal) {\n        if (menuManager) {\n          menuManager.loadedPlugins = newVal;\n          menuManager.$forceUpdate();\n        }\n      }\n    },\n    methods: {\n      processURLQuery() {\n        const token = getUrlParameter(\"token\") || getUrlParameter(\"t\");\n        const engine = getUrlParameter(\"engine\") || getUrlParameter(\"e\");\n        const p = getUrlParameter(\"plugin\") || getUrlParameter(\"p\");\n\n        if (engine) {\n          this.setupPluginEngine(engine, token);\n        }\n\n        if (p) {\n          this.loadPlugin(p).then(plugin => {\n            let config = {},\n                data = {},\n                tmp;\n            tmp = getUrlParameter(\"data\");\n            if (tmp) data = JSON.parse(tmp);\n            tmp = getUrlParameter(\"config\");\n            if (tmp) config = JSON.parse(tmp);\n            this.runPlugin(plugin, config, data);\n          });\n        }\n      },\n\n      async runPlugin(plugin, config, data) {\n        if (!config && plugin.config.ui && plugin.config.ui.indexOf(\"{\") > -1) {\n          config = await imjoy.pm.imjoy_api.showDialog(plugin, plugin.config);\n        }\n\n        data = data || {};\n        return await plugin.api.run({\n          config: config,\n          data: data\n        });\n      },\n\n      async setupPluginEngine(engine, token) {\n        try {\n          console.log(\"Loading Jupyter-Engine-Manager from Gist...\");\n          await imjoy.pm.reloadPluginRecursively({\n            uri: \"https://imjoy-team.github.io/jupyter-engine-manager/Jupyter-Engine-Manager.imjoy.html\"\n          });\n          console.log(\"Jupyter-Engine-Manager loaded.\");\n          const factory = imjoy.em.getFactory(\"Jupyter-Engine\");\n          await factory.addEngine({\n            url: engine,\n            token: token\n          });\n          console.log(\"plugin engine added:\", engine);\n        } catch (e) {\n          console.error(e);\n          alert(`Failed to connect to the engine: ${e}`);\n        }\n      },\n\n      async loadPlugin(uri) {\n        try {\n          this.loading = true;\n          const p = await imjoy.pm.reloadPluginRecursively({\n            uri\n          });\n          this.loadedPlugins.push(p);\n          this.showSnackbar(`Plugin ${p.name} successfully loaded.`);\n          return p;\n        } finally {\n          this.loading = false;\n        }\n      },\n\n      addMenuItem(config) {\n        this.extraMenuItems.push(config);\n        this.$forceUpdate();\n      },\n\n      removeMenuItem(label) {\n        const item = this.extraMenuItems.filter(it => it.label === label)[0];\n        const idx = this.extraMenuItems.indexOf(item);\n        if (idx >= 0) this.extraMenuItems.splice(idx, 1);\n      },\n\n      showSnackbar(msg, duration) {\n        duration = duration || 3;\n        this.snackBarContent = msg;\n        this.$forceUpdate();\n        setTimeout(() => {\n          this.snackBarContent = null;\n          this.$forceUpdate();\n        }, duration * 1000);\n      },\n\n      addWindow(w) {\n        w.api = w.api || {};\n        const windowElm = document.getElementById(w.window_id);\n\n        if (windowElm) {\n          if (w.window_style) Object.assign(windowElm.style, w.window_style);\n          w.inline = true;\n\n          w.api.show = w.show = () => {\n            windowElm.scrollIntoView();\n          };\n\n          return;\n        }\n\n        if (!w.dialog) {\n          this.selectedRegularWindow = w;\n          setTimeout(() => {\n            if (w.fullscreen || w.standalone) {\n              w.sizeState = \"maximized\";\n            } else {\n              w.sizeState = \"normal\";\n            }\n\n            this.$forceUpdate();\n          }, 0);\n          const self = this;\n\n          w.api.show = w.show = () => {\n            w.sizeState = \"restore\";\n            self.selectedRegularWindow = w;\n            self.$forceUpdate();\n            imjoy.wm.selectWindow(w);\n            w.api.emit(\"show\");\n          };\n        } else {\n          this.dialogWindows.push(w);\n\n          if (this.selectedDialogWindow) {\n            this.selectedWindowsStack.push(this.selectedDialogWindow);\n          }\n\n          this.selectedDialogWindow = w;\n          if (w.fullscreen || w.standalone) this.fullscreen = true;else this.fullscreen = false;\n          this.$modal.show(\"window-modal-dialog\");\n          this.$forceUpdate();\n\n          w.api.show = w.show = () => {\n            this.selectedDialogWindow = w;\n            this.$modal.show(\"window-modal-dialog\");\n            imjoy.wm.selectWindow(w);\n            w.api.emit(\"show\");\n          };\n\n          w.api.hide = w.hide = () => {\n            if (this.selectedDialogWindow === w) {\n              this.$modal.hide(\"window-modal-dialog\");\n            }\n\n            w.api.emit(\"hide\");\n          };\n\n          setTimeout(() => {\n            try {\n              w.show();\n            } catch (e) {\n              console.error(e);\n            }\n          }, 500);\n        }\n      },\n\n      showWindow(w) {\n        if (w.fullscreen || w.standalone) this.fullscreen = true;else this.fullscreen = false;\n        if (w) this.selectedDialogWindow = w;\n        this.$modal.show(\"window-modal-dialog\");\n      },\n\n      closeWindow(w) {\n        let idx = this.dialogWindows.indexOf(w);\n        if (idx >= 0) this.dialogWindows.splice(idx, 1);\n        idx = this.allWindows.indexOf(w);\n        if (idx >= 0) this.allWindows.splice(idx, 1);\n\n        if (w === this.selectedDialogWindow) {\n          this.selectedDialogWindow = this.selectedWindowsStack.pop();\n        }\n\n        if (!this.selectedDialogWindow) this.$modal.hide(\"window-modal-dialog\");\n\n        if (w === this.selectedRegularWindow) {\n          if (this.regularWindows.length > 0) this.selectedRegularWindow = this.regularWindows[this.regularWindows.length - 1] || null;else this.selectedRegularWindow = null;\n        }\n\n        this.$forceUpdate();\n      },\n\n      minimizeWindow() {\n        this.$modal.hide(\"window-modal-dialog\");\n      },\n\n      maximizeWindow() {\n        this.fullscreen = !this.fullscreen;\n      }\n\n    }\n  });\n  return app;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyBasicApp.js?");

/***/ }),

/***/ "./src/imjoyBasicApp.template.css":
/*!****************************************!*\
  !*** ./src/imjoyBasicApp.template.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".vm--modal {\\n  max-height: 100% !important;\\n  max-width: 100% !important;\\n}\\n\\n.imjoy-inline-window {\\n  width: 100%;\\n  height: 600px;\\n}\\n\\n.imjoy-progress-border > div {\\n  background-color: #448aff;\\n  height: 3px;\\n}\\n\\n.imjoy-progress-border {\\n  top: 0;\\n  left: 0;\\n  position: absolute;\\n  width: 100%;\\n  height: 3px;\\n}\\n\\n.imjoy-noselect {\\n  -webkit-touch-callout: none;\\n  -webkit-user-select: none;\\n  -khtml-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\n\\nbody {\\n  margin: 0px;\\n}\\n.imjoy-dialog-control {\\n  height: 23px;\\n  width: 25px;\\n  border: 0px;\\n  font-size: 1rem;\\n  position: absolute;\\n  color: white;\\n  top: 1px;\\n}\\n\\n.imjoy-dialog-control:focus {\\n  outline: none;\\n}\\n\\n.imjoy-loader {\\n  position: fixed;\\n  top: 40%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  transform: -webkit-translate(-50%, -50%);\\n  transform: -moz-translate(-50%, -50%);\\n  transform: -ms-translate(-50%, -50%);\\n  border: 10px solid #f3f3f3;\\n  /* Light grey */\\n  border-top: 10px solid #448aff;\\n  /* Blue */\\n  border-radius: 50%;\\n  width: 40px;\\n  height: 40px;\\n  animation: spin 2s linear infinite;\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n/* The snackbar - position it at the bottom and in the middle of the screen */\\n.imjoy-snackbar {\\n  font-family: Arial, Helvetica, sans-serif;\\n  visibility: hidden;\\n  /* Hidden by default. Visible on click */\\n  min-width: 250px;\\n  /* Set a default minimum width */\\n  background-color: #333333c2;\\n  /* Black background color */\\n  color: #fff;\\n  /* White text color */\\n  text-align: center;\\n  /* Centered text */\\n  border-radius: 5px;\\n  /* Rounded borders */\\n  padding: 16px;\\n  /* Padding */\\n  position: fixed;\\n  /* Sit on top of the screen */\\n  z-index: 9999;\\n  /* Add a z-index if needed */\\n  left: 50%;\\n  /* Center the snackbar */\\n  transform: translate(-50%, 0);\\n  bottom: 20px;\\n  /* 20px from the bottom */\\n}\\n\\n.imjoy-window-title-bar {\\n  cursor: move;\\n  background-color: #448aff;\\n  color: white;\\n  text-align: center;\\n  height: 24px;\\n}\\n\\n.imjoy-window-title {\\n  text-align: center;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-size: 16px;\\n  line-height: 23px;\\n  margin: 0px;\\n}\\n\\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\\n.imjoy-snackbar.show-snackbar {\\n  visibility: visible;\\n  /* Show the snackbar */\\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\\n  However, delay the fade out process for 2.5 seconds */\\n  -webkit-animation: imjoy-fadein 0.5s;\\n  animation: imjoy-fadein 0.5s;\\n}\\n\\n/* Animations to fade the snackbar in and out */\\n@-webkit-keyframes imjoy-fadein {\\n  from {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n\\n  to {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes imjoy-fadein {\\n  from {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n\\n  to {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n}\\n\\n.dropdown-btn {\\n  padding: 4px;\\n  font-size: 16px;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.dropdown {\\n  position: relative;\\n  display: inline-block;\\n}\\n\\n.dropdown-content {\\n  display: none;\\n  position: absolute;\\n  right: 0;\\n  background-color: #f9f9f9;\\n  min-width: 200px;\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\\n  z-index: 1;\\n}\\n\\n.dropdown-content a {\\n  font-family: Arial, Helvetica, sans-serif;\\n  color: black;\\n  padding: 6px 10px;\\n  text-decoration: none;\\n  display: block;\\n}\\n\\n.dropdown-content a:hover {\\n  background-color: #f1f1f1;\\n}\\n\\n.dropdown:hover .dropdown-content {\\n  display: block;\\n}\\n\\n.dropdown:hover .dropbtn {\\n  background-color: #3e8e41;\\n}\\n\\n.imjoy-window-container {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.imjoy-windows {\\n  position: relative;\\n  min-height: 100px;\\n  height: calc(100% - 30px);\\n}\\n\\n.blockPointerEvents {\\n  pointer-events: none;\\n}\\n\"\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyBasicApp.template.css?");

/***/ }),

/***/ "./src/imjoyBasicApp.template.html":
/*!*****************************************!*\
  !*** ./src/imjoyBasicApp.template.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div v-if=\\\"showLoader\\\" class=\\\"imjoy-loader\\\" v-show=\\\"loading\\\"></div>\\n<div v-if=\\\"showProgressBar\\\" class=\\\"imjoy-progress-border\\\" v-show=\\\"progress\\\">\\n  <div :style=\\\"{width: progress+'%'}\\\"></div>\\n</div>\\n<div\\n  v-show=\\\"snackBarContent\\\"\\n  :class=\\\"{'show-snackbar': snackBarContent}\\\"\\n  class=\\\"imjoy-snackbar\\\"\\n>\\n  {{snackBarContent}}\\n</div>\\n<modal\\n  name=\\\"window-modal-dialog\\\"\\n  height=\\\"500px\\\"\\n  style=\\\"max-height: 100%; max-width: 100%\\\"\\n  :fullscreen=\\\"fullscreen\\\"\\n  :resizable=\\\"true\\\"\\n  draggable=\\\".imjoy-drag-handle\\\"\\n  :scrollable=\\\"true\\\"\\n>\\n  <div\\n    v-if=\\\"selectedDialogWindow\\\"\\n    @dblclick=\\\"maximizeWindow()\\\"\\n    class=\\\"imjoy-drag-handle imjoy-window-title-bar\\\"\\n  >\\n    <span class=\\\"imjoy-noselect imjoy-window-title\\\"\\n      >{{ selectedDialogWindow.name}}</span\\n    >\\n    <button\\n      @click=\\\"closeWindow(selectedDialogWindow)\\\"\\n      class=\\\"imjoy-noselect imjoy-dialog-control\\\"\\n      style=\\\"background:#ff0000c4;left:1px;\\\"\\n    >\\n      x\\n    </button>\\n    <button\\n      @click=\\\"minimizeWindow()\\\"\\n      class=\\\"imjoy-noselect imjoy-dialog-control\\\"\\n      style=\\\"background:#00cdff61;left:28px;\\\"\\n    >\\n      -\\n    </button>\\n    <button\\n      @click=\\\"maximizeWindow()\\\"\\n      class=\\\"imjoy-noselect imjoy-dialog-control\\\"\\n      style=\\\"background:#00cdff61;left:55px;\\\"\\n    >\\n      {{fullscreen?'=': '+'}}\\n    </button>\\n  </div>\\n  <template v-for=\\\"wdialog in dialogWindows\\\">\\n    <div\\n      :key=\\\"wdialog.window_id\\\"\\n      v-show=\\\"wdialog === selectedDialogWindow\\\"\\n      style=\\\"height: calc(100% - 18px);\\\"\\n    >\\n      <div :id=\\\"wdialog.window_id\\\" style=\\\"width: 100%;height: 100%;\\\"></div>\\n    </div>\\n  </template>\\n</modal>\\n\"\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyBasicApp.template.html?");

/***/ }),

/***/ "./src/imjoyBasicAppMenu.template.html":
/*!*********************************************!*\
  !*** ./src/imjoyBasicAppMenu.template.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"dropdown\\\" :style=\\\"menuStyle\\\">\\n  <a class=\\\"dropdown-btn\\\"\\n    ><img\\n      style=\\\"width:24px;\\\"\\n      src=\\\"https://imjoy.io/static/img/imjoy-icon.svg\\\"\\n    />\\n  </a>\\n  <div class=\\\"dropdown-content\\\" :style=\\\"{left: menuPos==='left'? 0: null}\\\">\\n    <a\\n      href=\\\"#\\\"\\n      v-for=\\\"item in extraMenuItems\\\"\\n      :key=\\\"item.label\\\"\\n      @click.prevent=\\\"item.callback()\\\"\\n      >{{item.label}}</a\\n    >\\n    <hr\\n      style=\\\"margin: 0;border-style: solid;color: rgb(157 205 255 / 45%);\\\"\\n      v-show=\\\"extraMenuItems.length>0 && loadedPlugins.length>0\\\"\\n    />\\n    <a\\n      href=\\\"#\\\"\\n      v-for=\\\"p in loadedPlugins\\\"\\n      :key=\\\"p.id\\\"\\n      @click.prevent=\\\"p.api.run()\\\"\\n      >🧩 {{p.name}}</a\\n    >\\n    <hr\\n      style=\\\"margin: 0;border-style: solid;color: rgb(157 205 255 / 45%);\\\"\\n      v-show=\\\"allWindows.length>0 && loadedPlugins.length>0\\\"\\n    />\\n    <a href=\\\"#\\\" v-if=\\\"showAboutImJoy\\\" @click.prevent=\\\"showAboutImJoy()\\\"\\n      >ℹ️ About ImJoy</a\\n    >\\n    <hr\\n      style=\\\"margin: 0;border-style: solid;color: rgb(157 205 255 / 45%);\\\"\\n      v-show=\\\"allWindows.length>0 && loadedPlugins.length>0\\\"\\n    />\\n    <a\\n      href=\\\"#\\\"\\n      v-for=\\\"w in allWindows\\\"\\n      :style=\\\"{'background-color': activeWindow===w?'#adcafb78':'', 'font-weight': activeWindow===w? 600:300}\\\"\\n      :key=\\\"w.id\\\"\\n      @click.prevent=\\\"w.api.show()\\\"\\n      >🔳 {{w.name}}</a\\n    >\\n    <a\\n      href=\\\"#\\\"\\n      v-if=\\\"activeWindow && closeWindow\\\"\\n      @click.prevent=\\\"closeWindow(activeWindow)\\\"\\n      >❌ Close Window</a\\n    >\\n  </div>\\n</div>\\n\"\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyBasicAppMenu.template.html?");

/***/ }),

/***/ "./src/imjoyBasicAppWindows.template.html":
/*!************************************************!*\
  !*** ./src/imjoyBasicAppWindows.template.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template v-if=\\\"type==='standard'\\\">\\n  <hsc-window-style-material>\\n    <hsc-window\\n      v-for=\\\"w in windows\\\"\\n      :key=\\\"w.id\\\"\\n      v-show=\\\"!w.hidden\\\"\\n      :title=\\\"w.name\\\"\\n      :minimize-style=\\\"{display: 'none'}\\\"\\n      :close-button=\\\"!w.disable_close\\\"\\n      @close=\\\"closeWindow(w)\\\"\\n      :size-state.sync=\\\"w.sizeState\\\"\\n      :maximize-button=\\\"true\\\"\\n      :resizable=\\\"true\\\"\\n      :min-width=\\\"200\\\"\\n      :min-height=\\\"200\\\"\\n      :width=\\\"w.w*30\\\"\\n      :height=\\\"w.h*30\\\"\\n      :resizable=\\\"true\\\"\\n      @resize-start=\\\"blockPointerEvents = true\\\"\\n      @resize-end=\\\"blockPointerEvents = false\\\"\\n      @move-start=\\\"blockPointerEvents = true\\\"\\n      @move-end=\\\"blockPointerEvents = false\\\"\\n    >\\n      <div\\n        :class=\\\"{ blockPointerEvents }\\\"\\n        :id=\\\"w.window_id\\\"\\n        class=\\\"imjoy-window-container\\\"\\n      ></div>\\n    </hsc-window>\\n  </hsc-window-style-material>\\n</template>\\n<template v-else>\\n  <div\\n    v-for=\\\"w in windows\\\"\\n    v-show=\\\"w === activeWindow\\\"\\n    :key=\\\"w.id\\\"\\n    class=\\\"imjoy-windows\\\"\\n    :style=\\\"windowStyle\\\"\\n  >\\n    <div\\n      v-if=\\\"showWindowTitle\\\"\\n      style=\\\"text-align: center;height:24px; background: #cacaca66;\\\"\\n    >\\n      <span\\n        style=\\\"font-size:1rem;font-family: Arial, Helvetica, sans-serif;line-height: 24px;\\\"\\n        >{{ w.name }}</span\\n      >\\n    </div>\\n    <div\\n      :id=\\\"w.window_id\\\"\\n      class=\\\"imjoy-window-container\\\"\\n      :style=\\\"{height: showWindowTitle?'calc(100% - 24px)': '100%'}\\\"\\n    ></div>\\n  </div>\\n</template>\\n<div\\n  v-if=\\\"showEmpty && (!activeWindow || windows.length <= 0)\\\"\\n  class=\\\"imjoy-windows\\\"\\n  :style=\\\"windowStyle\\\"\\n>\\n  <img\\n    style=\\\"width:80px; position:absolute; left:50%; top: 50%; transform: translate(-50%, -50%);\\\"\\n    src=\\\"https://imjoy.io/static/img/imjoy-icon.svg\\\"\\n  />\\n</div>\\n\"\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyBasicAppWindows.template.html?");

/***/ }),

/***/ "./src/imjoyLoader.js":
/*!****************************!*\
  !*** ./src/imjoyLoader.js ***!
  \****************************/
/*! exports provided: loadImJoyCore, latest_rpc_version, loadImJoyRPC, loadImJoyBasicApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImJoyCore\", function() { return loadImJoyCore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"latest_rpc_version\", function() { return latest_rpc_version; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImJoyRPC\", function() { return loadImJoyRPC; });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n/* harmony import */ var _imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imjoyBasicApp.js */ \"./src/imjoyBasicApp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loadImJoyBasicApp\", function() { return _imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__[\"loadImJoyBasicApp\"]; });\n\n\n\n/**\n * Get the URL parameters\n * source: https://css-tricks.com/snippets/javascript/get-url-variables/\n * @param  {String} url The URL\n * @return {Object}     The URL parameters\n */\n\nvar _getParams = function (url) {\n  var params = {};\n  var parser = document.createElement(\"a\");\n  parser.href = url;\n  var query = parser.search.substring(1);\n  var vars = query.split(\"&\");\n\n  for (var i = 0; i < vars.length; i++) {\n    var pair = vars[i].split(\"=\");\n    params[pair[0]] = decodeURIComponent(pair[1]);\n  }\n\n  return params;\n}; // Load the imjoy core script\n// it support the following options:\n// 1) version, you can specify a specific version of the core,\n// for example `version: \"0.11.13\"` or `version: \"latest\"`\n// 2) debug, by default, the minified version will be used,\n// if debug==true, the full version will be served\n// 3) base_url, the url for loading the core library\n\n\nfunction loadImJoyCore(config) {\n  config = config || {}; // eslint-disable-next-line no-async-promise-executor\n\n  return new Promise(async (resolve, reject) => {\n    try {\n      var baseUrl = config.base_url;\n\n      if (!baseUrl) {\n        const version = config.version || \"latest\";\n        baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-core@${version}/dist/`;\n      }\n\n      delete window.imjoyCore;\n\n      if (config.debug) {\n        await Object(_imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__[\"injectScript\"])(baseUrl + \"imjoy-core.js\");\n      } else {\n        await Object(_imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__[\"injectScript\"])(baseUrl + \"imjoy-core.min.js\");\n      }\n\n      if (window.imjoyCore) {\n        const imjoyCore = window.imjoyCore;\n        delete window.imjoyCore;\n        resolve(imjoyCore);\n      } else if (typeof define === \"function\" && // eslint-disable-next-line no-undef\n      __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) eval(\"require\")([\"imjoyCore\"], resolve);else reject(\"Failed to import imjoy-core.\");\n    } catch (e) {\n      reject(e);\n    }\n  });\n}\nconst _rpc_registry = {}; // get version number from package.json\n\nconst latest_rpc_version = _package_json__WEBPACK_IMPORTED_MODULE_0__[\"dependencies\"][\"imjoy-rpc\"].replace(/[^\\d.-]/g, \"\");\nconst _rpc_api_versions = {\n  \"0.2.0\": {\n    from: \"0.1.10\",\n    to: \"0.1.17\",\n    skips: []\n  },\n  \"0.2.1\": {\n    from: \"0.1.18\",\n    to: \"0.2.5\",\n    skips: []\n  },\n  \"0.2.2\": {\n    from: \"0.2.6\",\n    to: \"0.2.6\",\n    skips: []\n  },\n  \"0.2.3\": {\n    from: \"0.2.7\",\n    to: latest_rpc_version,\n    skips: [\"0.2.9\", \"0.2.15\", \"0.2.16\", \"0.2.18\", \"0.2.23\", \"0.2.24\", \"0.2.25\"]\n  }\n}; // specify an api version and this function will return the actual imjoy-rpc version\n// if you set latestOnly to true, then it returns always the latest for the api version\n// otherwise, it will try to find a compatible version in the cached version.\n\nfunction findRPCVersionByAPIVersion(apiVersion, latestOnly) {\n  if (!apiVersion || !apiVersion.includes(\".\")) return;\n  let cached = Object.keys(_rpc_registry);\n\n  if (_rpc_api_versions[apiVersion]) {\n    if (cached.length <= 0 || latestOnly) {\n      return _rpc_api_versions[apiVersion].to;\n    } // see if we can find a compatible version in the cache\n    // sort the cached version\n\n\n    cached = (f => f(f(cached, 1).sort(), -1))((cached, v) => cached.map(a => a.replace(/\\d+/g, n => +n + v * 100000)));\n\n    for (let c of cached.reverse()) {\n      if (_rpc_registry[c].API_VERSION === apiVersion) return c;\n    }\n\n    return _rpc_api_versions[apiVersion].to;\n  } else {\n    return null;\n  }\n} // Load the script for a plugin to communicate with imjoy-rpc\n// This should only be called when the window is inside the iframe\n// it support the following options:\n// 1) version, you can specify a specific version of the imjoy-rpc,\n// for example `version: \"0.11.13\"` or `version: \"latest\"`\n// 2) api_version, specify the api version of the imjoy-rpc\n// 3) debug, by default, the minified version will be used,\n// if debug==true, the full version will be served\n// 4) base_url, the url for loading the rpc library\n\n\nfunction loadImJoyRPC(config) {\n  config = config || {};\n  return new Promise((resolve, reject) => {\n    var baseUrl = config.base_url;\n    let version = config.version;\n\n    if (!baseUrl) {\n      if (config.version) {\n        baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@${config.version}/dist/`;\n      } else {\n        if (config.api_version) {\n          // find the latest version for this api_version\n          version = findRPCVersionByAPIVersion(config.api_version, true);\n\n          if (version) {\n            baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@${version}/dist/`;\n          } else {\n            reject(Error(`Cannot find a version of imjoy-rpc that supports api v${config.api_version}`));\n            return;\n          }\n        } else {\n          baseUrl = `https://cdn.jsdelivr.net/npm/imjoy-rpc@latest/dist/`;\n          version = \"latest\";\n          console.info(`Using imjoy-rpc library from ${baseUrl}.`);\n        }\n      }\n    }\n\n    if (version && _rpc_registry[version]) {\n      console.info(`Using cached imjoy-rpc library v${version}.`);\n      resolve(_rpc_registry[version]);\n      return;\n    }\n\n    let rpc_url = baseUrl + \"imjoy-rpc.min.js\";\n\n    if (config.debug) {\n      rpc_url = baseUrl + \"imjoy-rpc.js\";\n    }\n\n    function checkAndCacheLib(imjoyRPC) {\n      if (version && version !== \"latest\" && version !== imjoyRPC.VERSION) {\n        throw new Error(`imjoy-rpc version mismatch ${version} != ${imjoyRPC.VERSION}`);\n      }\n\n      if (config.api_version && config.api_version !== imjoyRPC.API_VERSION) {\n        throw new Error(`imjoy-rpc api version mismatch ${config.api_version} != ${imjoyRPC.API_VERSION}`);\n      }\n\n      _rpc_registry[imjoyRPC.VERSION] = imjoyRPC;\n    }\n\n    delete window.imjoyRPC;\n    Object(_imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__[\"injectScript\"])(rpc_url).then(() => {\n      if (window.imjoyRPC) {\n        const imjoyRPC = window.imjoyRPC;\n        delete window.imjoyRPC;\n\n        try {\n          checkAndCacheLib(imjoyRPC);\n          resolve(imjoyRPC);\n        } catch (e) {\n          reject(e);\n        }\n      } else if (typeof define === \"function\" && // eslint-disable-next-line no-undef\n      __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) eval(\"require\")([\"imjoyRPC\"], imjoyRPC => {\n        try {\n          checkAndCacheLib(imjoyRPC);\n          resolve(imjoyRPC);\n        } catch (e) {\n          reject(e);\n        }\n      });else {\n        reject(\"Failed to import imjoy-rpc.\");\n        return;\n      }\n    }).catch(reject);\n  });\n}\n\nasync function loadImJoyRPCByQueryString() {\n  const urlParams = _getParams(window.location);\n\n  return await loadImJoyRPC(urlParams);\n}\n\n\nwindow.loadImJoyRPCByQueryString = loadImJoyRPCByQueryString;\nwindow.loadImJoyRPC = loadImJoyRPC;\nwindow.loadImJoyCore = loadImJoyCore;\nwindow.loadImJoyBasicApp = _imjoyBasicApp_js__WEBPACK_IMPORTED_MODULE_1__[\"loadImJoyBasicApp\"];\n\n//# sourceURL=webpack://%5Bname%5D/./src/imjoyLoader.js?");

/***/ })

/******/ });
});