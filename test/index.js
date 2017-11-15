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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports=function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e){var o={},n=n||void 0,r=n?n.getComputedStyle(document.body):{};o.transform=r.webkitTransform?"webkitTransform":r.MozTransform?"MozTransform":r.msTransform?"msTransform":"transform",o.userSelect=r.webkitUserSelect?"webkitUserSelect":r.MozUserSelect?"MozUserSelect":r.msUserSelect?"msUserSelect":"transform";t.exports={STYLE_NAME:o,IS_OFFSET:["width","height","top","left"],XLINK_NS:"http://www.w3.org/1999/xlink",SVG_NS:"http://www.w3.org/2000/svg",IS_VALUE_DEG:["rotate","rotateX","rotateY","rotateZ"],IS_VALUE_PX:["left","right","top","bottom","marginLeft","marginRight","marginTop","marginBottom","height","width","minHeight","minWidth","maxHeight","maxWidth","paddingLeft","paddingRight","paddingTop","paddingBottom","translate","translateX","translateY","translateZ"],IS_TRANSFORM:["rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","translateX","translateY","translateZ"]}},function(t,e){t.exports=function(t){return"[object Object]"===Object.prototype.toString.call(t)}},function(t,e){t.exports=function(t){var e=(t?Object.prototype.toString.call(t):"").substring(8);return 0===e.indexOf("HTML")||0===e.indexOf("SVG")}},function(t,e,o){const{IS_VALUE_PX:n,IS_VALUE_DEG:r}=o(0);t.exports=function(t,e){return n.indexOf(t)>-1?"number"==typeof e?e+"px":e:r.indexOf(t)>-1?"number"==typeof e?e+"deg":e:e.toString()}},function(t,e,o){function n(t,e,o){var r=this,s=c(t);h(this,t,e,o),this.append(this.children),this.attr(this.props);for(var u=0,a=n.__onCreate.length;u<a;u++)n.__onCreate[u].call(this);if(s){for(u=0,a=this.node.childNodes.length;u<a;u++)c(this.node.childNodes[u])&&(f.call(this,this.node.childNodes[u]),this.children.push(i(this.node.childNodes[u])));setTimeout(function(){p(r)},0)}}function r(){}function i(t,e,o){return r.lib[t]?new r.lib[t](e,o):t instanceof Text||t instanceof Comment?t:new n(t,e,o)}const s=o(1),h=o(5),c=o(2),u=o(7),p=o(8),f=o(9),a=o(10),l=o(3),{IS_TRANSFORM:d,STYLE_NAME:g,IS_OFFSET:y,XLINK_NS:m}=o(0);n.__onAttr={},n.__onCreate=[],n.__extend=function(t){return function(e){return e&&(this.node[t]=e),this.node[t]}},n.prototype.setStyle=function(t){var e={transform:[],default:[]};for(var o in t)if(d.indexOf(o)>-1)if("object"==typeof t[o])for(var n in t[o])e.transform.push(a(n,t[o][n]));else e.transform.push(a(o,t[o]));else this.node.style[g[o]||o]=l(o,t[o]);e.transform.length&&(this.node.style[g.transform]=e.transform.join(" "))},n.prototype.style=function(t){return"object"==typeof t?(this.setStyle(t),this):"string"==typeof t?y.indexOf(t)>-1?this.offset()[t]:window.getComputedStyle(this.node)[g[t]||t]:window.getComputedStyle(this.node)},n.prototype.value=function(t){return void 0===t?this.node.value:(this.node.value=t,this)},n.prototype.offset=function(){return this.node.getBoundingClientRect()},n.prototype.classList=function(t){var e=this.node.getAttribute("class");return e?e.split(" "):[]},n.prototype.removeClass=function(t){var e=this.classList(),o=e.indexOf(t);return o>-1&&e.splice(o,1),this.node.setAttribute("class",e.join(" ")),this},n.prototype.addClass=function(t){var e=this.classList();return-1===e.indexOf(t)&&e.push(t),this.node.setAttribute("class",e.join(" ")),this},n.prototype.getRoot=function(){return this.node},n.prototype.getEl=function(){return this},n.prototype.mount=function(){return this.isMounted||(this.trigger("mount"),this.isMounted=!0),this},n.prototype.focus=function(){return this.node.focus(),this},n.prototype.append=function(t){var e;if(t){t=[].concat(t),this.children=this.children.concat(t);for(var o=0,n=t.length;o<n;o++)e=t[o].getRoot,f.call(this,t[o]),this.getRoot().appendChild(e?t[o].getRoot():new Text(t[o])),u.call(this,t[o]);p(t)}return this},n.prototype.prepend=function(t){for(var e=this.node.childNodes[0],o=[].concat(t),n=0,r=o.length;n<r;n++)e.parentNode.insertBefore(o[n].getRoot(),e),u.call(this,o[n])},n.prototype.attr=function(t){var e;if("string"==typeof t)return this.node.getAttribute(t);for(var o in t)e=o.toLowerCase(),"ref"===o?this.ref=t[o]:n.__onAttr[e]?n.__onAttr[e].call(this,t[o]):"style"===o?this.setStyle(t[o]):this.isSvg&&"href"===o?this.node.setAttributeNS(m,o,t[o]):"once"===o.substring(0,4)?this.once(o.substring(4),this.props[o]):"on"===o.substring(0,2)?this.on(o.substring(2),this.props[o]):"class"===o?this.node.setAttribute("class",t[o].split(" ").filter(t=>t.length).map(t=>t.trim()).join(" ")):"once"!==o.substring(0,4)&&"on"!==o.substring(0,2)&&this.node.setAttribute(o,t[o]);return this},n.prototype.find=function(t){var e=this.node.querySelector(t);return f.call(this,i(e))},n.prototype.findAll=function(t){for(var e=[],o=this.node.querySelectorAll(t),n=0,r=o.length;n<r;n++)e.push(f.call(this,i(o[n])));return e},n.prototype.html=function(t){if(this.node.innerHTML=t,t&&!t.length){for(var e=0,o=this.children.length;e<o;e++)delete this.children[e];this.children=[]}return this},n.prototype.removeChild=function(t){this.children.splice(this.children.indexOf(t),1),this.node.removeChild(t.node)},n.prototype.remove=function(){return this.isMounted=!1,this.trigger("removeChild"),this},n.prototype.on=function(t,e){var o=this,n=t.toLowerCase();return this.bus.on(n,e),this.node.addEventListener(n,function(t){o.trigger(n,t)},!1),this},n.prototype.once=function(t,e){const o=function(){e.call(this),this.off(t,o)};return this.on(t,o),this},n.prototype.off=function(t,e){var o=t.toLowerCase();if(e)this.node.removeEventListener(o,e,!1);else for(var n=this.bus.__s.length-1;n>=0;n--)this.node.removeEventListener(o,this.bus.__s[n],!1);return this.bus.off(o,e),this},n.prototype.trigger=function(t,e){return this.bus.trigger(t,e),this},r.lib={},r.__extend=function(t){return function(){var e=this.getEl(),o=t.call(e,arguments[0],arguments[1]);return o===e||void 0===o?this:o}};for(var _ in n.prototype)r.prototype[_]=r.__extend(n.prototype[_]);r.prototype.append=function(t){return this.node.append(t),this.children=this.node.children,Object.assign(this.refs,this.node.refs),this},r.prototype.getRoot=function(){return this.node.getRoot()},r.prototype.getEl=function(){return this.node.getEl()},r.prototype.on=function(t,e){return this.bus.on(t,e),this},r.prototype.once=function(t,e){return this.bus.once(t,e),this},r.prototype.off=function(t,e){return this.bus.off(t,e),this},r.prototype.trigger=function(t,e){return this.bus.trigger(t,e),this},r.create=function(t,e){function o(o,n){let r=s(o)?o:{},i=Array.isArray(o)?o:n||[];h(this,t,r,i),e.constructor&&e.constructor.call(this,r),e.render&&(this.node=e.render.call(this,r),this.ref=this.props.ref||this.node.ref,Object.assign(this.refs,this.node.refs),this.append(i))}for(var n in r.prototype)o.prototype[n]=r.prototype[n];e.append&&(o.prototype.append=function(t){if(t){t=[].concat(t),e.append.call(this,t);for(var o=0,n=t.length;o<n;o++)u.call(this,t[o])}});for(n in e)"render"!==n&&"append"!==n&&(o.prototype[n]=e[n]);return r.lib[t]=o,o},i.onAttr=function(t,e){n.__onAttr[t.toLowerCase()]=e},i.onCreate=function(t){n.__onCreate.push(t)},i.fn=function(t,e){n.prototype[t]=e,r.prototype[t]=r.__extend(n.prototype[t]);for(var o in r.lib)r.lib[o].prototype[t]=r.prototype[t]},i.create=r.create,t.exports=i},function(t,e,o){function n(t,e){"string"==typeof e?t.tagName=e:Array.isArray(e)?t.children=e:i(e)&&(t.props=e)}const r=o(2),i=o(1),s=o(6),{SVG_NS:h}=o(0);t.exports=function(t,e,o,i){var c=r(e);t.bus=new s({target:t}),t.refs={},t.subscribers={},t.props={},t.children=[],t.isMounted=!1,t.tagName=c?e.tagName.toLowerCase():e,t.isSvg=-1!==["use","svg"].indexOf(t.tagName),c?t.node=e:t.isSvg?t.node=document.createElementNS(h,t.tagName):t.node=document.createElement(t.tagName),n(t,e),n(t,o),n(t,i)}},function(t,e){function o(t){this.__t=t.target||this,this.__s={}}o.prototype.once=function(t,e){var o=this,n=function(r){o.off(t,n),e.call(o.target,r)};this.on(t,n)},o.prototype.off=function(t,e){const o=t.toLowerCase(),n=this.__s[o].indexOf(e);return n>-1?this.__s[o].splice(n,1):this.__s[o]=[],this},o.prototype.on=function(t,e){return t=t.toLowerCase(),"function"==typeof e&&(this.__s[t]=(this.__s[t]||[]).concat(e)),this},o.prototype.trigger=function(t,e){for(var o=(this.__s[t.toLowerCase()]||[]).slice(),n=0,r=o.length;n<r;n++)o[n].call(this.__t,e);return this},t.exports=o},function(t,e){t.exports=function(t){const e=t.ref;e&&!this.refs[e]&&(this.refs[e]=t),Object.assign(this.refs,t.refs)}},function(t,e){t.exports=function t(e){for(var o=0,n=(e=[].concat(e)).length;o<n;o++)e[o].getRoot&&document.body.contains(e[o].getRoot())&&(e[o].mount(),t(e[o].children))}},function(t,e){t.exports=function(t){var e=this;return t.on&&t.on("removeChild",function(){e.removeChild(t)}),t}},function(t,e,o){const n=o(3);t.exports=function(t,e){var o=[];return"object"==typeof e?(e.x&&o.push(n(t,e.x)),e.y&&o.push(n(t,e.y)),e.z&&o.push(n(t,e.z))):o.push(n(t,e)),t+"("+o.join(", ")+")"}}]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__componentRef_deeper__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentRef__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__removeClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elementRef__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__onMount__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__on_off__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__on_once__ = __webpack_require__(9);









/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);

const input = __WEBPACK_IMPORTED_MODULE_0__index___default()("input", { ref: "name", type: "text" });

__WEBPACK_IMPORTED_MODULE_0__index___default.a.create("Modal", {
  append(children) {
    this.refs.content.append(children);
  },

  render() {
    return __WEBPACK_IMPORTED_MODULE_0__index___default()("div", {
      class: "modal"
    }, [
      __WEBPACK_IMPORTED_MODULE_0__index___default()("div", {
        class: "modal_chrome"
      }, [
        __WEBPACK_IMPORTED_MODULE_0__index___default()("div", {
          ref : "content",
          class: "modal_content"
        })
      ])
    ]);
  }
});

__WEBPACK_IMPORTED_MODULE_0__index___default.a.create("Modal2", {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0__index___default()("Modal", [ input ]);
  }
});

var m = __WEBPACK_IMPORTED_MODULE_0__index___default()("Modal");
var m2 = __WEBPACK_IMPORTED_MODULE_0__index___default()("Modal2");
m.append(__WEBPACK_IMPORTED_MODULE_0__index___default()("div"));
console.log("component reference (depper)", input === m2.refs.name);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


__WEBPACK_IMPORTED_MODULE_0__index___default.a.create("x", {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0__index___default()("div");
  }
});

__WEBPACK_IMPORTED_MODULE_0__index___default.a.create("y", {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0__index___default()("x");
  }
});

function test() {
  var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("x", { ref: "a" });
  var b = __WEBPACK_IMPORTED_MODULE_0__index___default()("x", [ a ]);

  var c = __WEBPACK_IMPORTED_MODULE_0__index___default()("y", { ref: "c" }, [ b ]);
  var d = __WEBPACK_IMPORTED_MODULE_0__index___default()("y", [ c ]);

  console.log(
    "Component reference", (
      b.refs.a === a
      && d.refs.c === c
    )
  );
}

test();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


function test() {
  var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div");
  a.addClass("my-class-name");
  console.log("Add class", a.attr("class") === "my-class-name");
}

test();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


function test() {
  var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div", {
    class : "my-class-name"
  });
  a.removeClass("my-class-name");
  console.log("Remove class", a.attr("class") === "");
}

test();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


function test() {
  var b = __WEBPACK_IMPORTED_MODULE_0__index___default()("div", { ref: "a" });
  var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div", [ b ]);

  var c = __WEBPACK_IMPORTED_MODULE_0__index___default()("div", { ref: "c" });
  var d = __WEBPACK_IMPORTED_MODULE_0__index___default()("div", { ref: "d" });
  var e = __WEBPACK_IMPORTED_MODULE_0__index___default()("div", { ref: "e" });

  c.append(d.append(e));

  console.log(
    "Element reference", (
      a.refs.a === b
      && c.refs.d === d
      && d.refs.e === e
    )
  );
}

test();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


var isMounted = [ false, false ];

__WEBPACK_IMPORTED_MODULE_0__index___default()(document.body).append(__WEBPACK_IMPORTED_MODULE_0__index___default()("div", {
  onMount: function () {
    isMounted[0] = true;
  }
}));

__WEBPACK_IMPORTED_MODULE_0__index___default.a.create("x", {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0__index___default()("div", {
      onMount: function () {
        isMounted[1] = true;
      }
    });
  }
});

__WEBPACK_IMPORTED_MODULE_0__index___default()(document.body).append(__WEBPACK_IMPORTED_MODULE_0__index___default()("x"));

console.log(
  "onMount", (
    isMounted[0] === isMounted[1]
  )
);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


var isMounted = [ false, false, false ];

var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div", {
  onClick: function () {
    isMounted[0] = !isMounted[0];
  },
  onceClack: function () {
    isMounted[1] = !isMounted[1];
  }
});

__WEBPACK_IMPORTED_MODULE_0__index___default.a.create("x", {
  constructor(props) {
    this.on("click", props.onClick);
  },

  render() {
    return __WEBPACK_IMPORTED_MODULE_0__index___default()("div");
  }
});

var b = __WEBPACK_IMPORTED_MODULE_0__index___default()("x", {
  onClick: function () {
    isMounted[2] = !isMounted[2];
  }
});

a.trigger("click");
a.off("click");
a.trigger("click");
a.trigger("clack");
a.trigger("clack");
b.trigger("click");

console.log(
  "on_off", (
    isMounted[0] === true
    && isMounted[1] === true
    && isMounted[2] === true
  )
);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


var isMounted = [ false, false ];

var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div");

a.once("click", function () {
  isMounted[0] = true;
});

a.on("click", function () {
  isMounted[1] = true;
});

a.trigger("click");

console.log(
  "on_once", (
    isMounted[0] === true
    && isMounted[1] === true
  )
);

/***/ })
/******/ ]);