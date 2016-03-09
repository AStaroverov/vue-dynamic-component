(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueDynamicTemplate"] = factory();
	else
		root["vueDynamicTemplate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.install = undefined;
	
	var _objectAssign = __webpack_require__(2);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import objectHash from 'object-hash'
	
	var install = exports.install = function install(Vue) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _ref$componentName = _ref.componentName;
	  var componentName = _ref$componentName === undefined ? 'vue-dynamic-template' : _ref$componentName;
	
	
	  var componentModel = {
	    template: '<div><component :is="activeComponentName" keep-alive></component></div>',
	    props: {
	      template: {
	        type: String,
	        required: true
	      },
	      model: {
	        type: Object,
	        default: {}
	      },
	      options: {
	        type: Object,
	        coerce: function coerce(opt) {
	          return (0, _objectAssign2.default)({
	            cache: true
	          }, opt);
	        }
	      }
	    },
	    data: function data() {
	      return {
	        activeComponentName: ''
	      };
	    },
	
	    watch: {
	      'template && model': 'render'
	    },
	    created: function created() {
	      this.render();
	    },
	
	    methods: {
	      render: function render() {
	        this.createComponent({
	          model: this.model,
	          template: this.template,
	          options: this.options,
	          templateInline: this.templateInline
	        });
	      },
	      createComponent: function createComponent(_ref2) {
	        var model = _ref2.model;
	        var template = _ref2.template;
	        var options = _ref2.options;
	
	        if (!template || template.length === 0) return;
	
	        var component = (0, _objectAssign2.default)({}, { template: template }, model);
	        var id = 'objectHash(component)';
	        // let id = objectHash(component)
	
	        if (options.cache && this.$options.components[id]) {
	          this.activeComponentName = id;
	        } else if (template && template.length > 0) {
	          this.$options.components[id] = Vue.extend(component);
	          this.activeComponentName = id;
	        }
	      }
	    }
	  };
	
	  Vue.component(componentName, componentModel);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-dynamic-template.js.map