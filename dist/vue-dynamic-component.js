(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueDynamicComponent"] = factory();
	else
		root["vueDynamicComponent"] = factory();
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
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var install = exports.install = function install(Vue) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _ref$componentName = _ref.componentName;
	  var componentName = _ref$componentName === undefined ? 'vue-dynamic-component' : _ref$componentName;
	
	
	  var componentModel = {
	    template: '<component :is="activeComponentName" keep-alive></component>',
	    props: {
	      component: {
	        type: Object,
	        required: true,
	        coerce: function coerce(val) {
	          return Object.create(val || {});
	        }
	      }
	    },
	    data: function data() {
	      return {
	        inlineTemplate: this.$options.el.innerHTML || false,
	        componentIndex: 0,
	        activeComponentName: ''
	      };
	    },
	
	    watch: {
	      'component': 'render'
	    },
	    created: function created() {
	      this.render();
	    },
	
	    methods: {
	      render: function render() {
	        var _component = this.component;
	        var keepAliveId = _component.keepAliveId;
	        var inlineTemplate = _component.inlineTemplate;
	
	
	        delete this.component.keepAliveId;
	        delete this.component.inlineTemplate;
	
	        this.createComponent({
	          keepAliveId: keepAliveId,
	          inlineTemplate: inlineTemplate,
	          component: this.component
	        });
	      },
	      createComponent: function createComponent(_ref2) {
	        var component = _ref2.component;
	        var keepAliveId = _ref2.keepAliveId;
	        var inlineTemplate = _ref2.inlineTemplate;
	
	        if (!component && !keepAliveId) return;
	
	        if (inlineTemplate && this.inlineTemplate) {
	          component.template = this.inlineTemplate;
	        }
	
	        if (keepAliveId && this.$options.components[keepAliveId]) {
	          this.activeComponentName = keepAliveId;
	        } else if (component.template) {
	          var name = void 0;
	
	          if (keepAliveId) {
	            name = keepAliveId;
	          } else {
	            name = 'componentIndex' + this.componentIndex++;
	          }
	
	          this.$options.components[name] = Vue.extend(component);
	          this.activeComponentName = name;
	        }
	      }
	    }
	  };
	
	  Vue.component(componentName, componentModel);
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-dynamic-component.js.map