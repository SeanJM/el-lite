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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__componentRef_deeper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentRef__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__removeClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elementRef__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__onMount__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__onUnmount__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__on_off__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__on_once__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fn__ = __webpack_require__(12);












/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


var isMounted = [ false, false, false ];

var a         = __WEBPACK_IMPORTED_MODULE_0__index___default()("div", {
  onMount: function () {
    isMounted[0] = !isMounted[0];
  }
});

var b         = __WEBPACK_IMPORTED_MODULE_0__index___default()("div", {
  onUnMount: function () {
    console.log("UNMOUNT");
  },
  onMount: function () {
    console.log("MOUNT");
    isMounted[1] = !isMounted[1];
  }
});

var c = __WEBPACK_IMPORTED_MODULE_0__index___default()("div");

__WEBPACK_IMPORTED_MODULE_0__index___default()(document.body).append([ a, c ]);
a.append(b);
b.remove(b);
a.append(b);

console.log(
  "onMount", (
    isMounted[0] === true && isMounted[1] === false
  )
);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports=function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){var o={},n=n||void 0,r=n?n.getComputedStyle(document.body):{};o.transform=r.webkitTransform?"webkitTransform":r.MozTransform?"MozTransform":r.msTransform?"msTransform":"transform",o.userSelect=r.webkitUserSelect?"webkitUserSelect":r.MozUserSelect?"MozUserSelect":r.msUserSelect?"msUserSelect":"userSelect";t.exports={MOUNTED:[],STYLE_NAME:o,IS_OFFSET:["width","height","top","left"],XLINK_NS:"http://www.w3.org/1999/xlink",SVG_NS:"http://www.w3.org/2000/svg",IS_VALUE_DEG:["rotate","rotateX","rotateY","rotateZ"],IS_VALUE_PX:["left","right","top","bottom","marginLeft","marginRight","marginTop","marginBottom","height","width","minHeight","minWidth","maxHeight","maxWidth","paddingLeft","paddingRight","paddingTop","paddingBottom","translate","translateX","translateY","translateZ"],IS_TRANSFORM:["rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","translateX","translateY","translateZ"]}},function(t,e){t.exports=function(t){return"[object Object]"===Object.prototype.toString.call(t)}},function(t,e){t.exports=function(t){const e=t.ref;e&&!this.refs[e]&&(this.refs[e]=t),Object.assign(this.refs,t.refs)}},function(t,e,o){const{IS_VALUE_PX:n,IS_VALUE_DEG:r}=o(0);t.exports=function(t,e){return n.indexOf(t)>-1?"number"==typeof e?e+"px":e:r.indexOf(t)>-1?"number"==typeof e?e+"deg":e:e.toString()}},function(t,e){function o(t){this.__t=t.target||this,this.__s={}}o.prototype.once=function(t,e){var o=this,n=function(r){o.off(t,n),e.call(o.target,r)};this.on(t,n)},o.prototype.off=function(t,e){const o=t.toLowerCase(),n=(this.__s[o]||[]).indexOf(e);return n>-1?this.__s[o].splice(n,1):this.__s[o]=[],this},o.prototype.on=function(t,e){return t=t.toLowerCase(),"function"==typeof e&&(this.__s[t]=(this.__s[t]||[]).concat(e)),this},o.prototype.trigger=function(t,e){for(var o=(this.__s[t.toLowerCase()]||[]).slice(),n=0,r=o.length;n<r;n++)o[n].call(this.__t,e);return this},t.exports=o},function(t,e,o){function n(t,e,o){return s.lib[t]?new s.lib[t](e,o):t instanceof Text||t instanceof Comment?t:new r(t,e,o)}const r=o(6),s=o(11);n.onAttr=function(t,e){r.__onAttr[t.toLowerCase()]=e},n.onCreate=function(t){r.__onCreate.push(t)},n.fn=function(t,e){r.prototype[t]=e,s.prototype[t]=function(e,o,n){return this.node[t](e,o,n),this};for(var o in s.lib)s.lib[o].prototype[t]=s.prototype[t]},n.create=s.create,t.exports=n},function(t,e,o){function n(){var t=this,e=[arguments[0],arguments[1],arguments[2]],o=s(e[0]),i={},p=[];this.isMounted=!1,this.tagName=o?arguments[0].tagName:"div",this.bus=new a({target:this}),this.refs={},this.isSvg=-1!==["use","svg"].indexOf(this.tagName);for(var h=0,u=e.length;h<u;h++)"string"==typeof e[h]?this.tagName=e[h]:r(e[h])?i=e[h]:Array.isArray(e[h])&&(p=e[h]);for(o?this.node=e[0]:this.isSvg?this.node=document.createElementNS(c,this.tagName):this.node=document.createElement(this.tagName),this.append(p),this.attr(i),h=0,u=n.__onCreate.length;h<u;h++)n.__onCreate[h].call(this);o&&setTimeout(function(){f(t.node)},0)}const r=o(1),s=o(7),i=o(2),f=o(8),p=o(9),h=o(10),u=o(3),a=o(4),{SVG_NS:c,IS_TRANSFORM:l,STYLE_NAME:d,XLINK_NS:g}=o(0);n.__onAttr={},n.__onCreate=[],n.prototype.setStyle=function(t){var e={transform:[],default:[]};for(var o in t)if(l.indexOf(o)>-1)if("object"==typeof t[o])for(var n in t[o])e.transform.push(h(n,t[o][n]));else e.transform.push(h(o,t[o]));else this.node.style[d[o]||o]=u(o,t[o]);e.transform.length&&(this.node.style[d.transform]=e.transform.join(" "))},n.prototype.style=function(t){return"object"==typeof t?(this.setStyle(t),this):"string"==typeof t?window.getComputedStyle(this.node)[d[t]||t]:window.getComputedStyle(this.node)},n.prototype.value=function(t){return void 0===t?this.node.value:(this.node.value=t,this)},n.prototype.offset=function(){return this.node.getBoundingClientRect()},n.prototype.classList=function(){var t=this.node.getAttribute("class");return t?t.split(" "):[]},n.prototype.removeClass=function(t){var e=this.classList(),o=e.indexOf(t);return o>-1&&e.splice(o,1),this.node.setAttribute("class",e.join(" ")),this},n.prototype.addClass=function(t){var e=this.classList();return-1===e.indexOf(t)&&e.push(t),this.node.setAttribute("class",e.join(" ")),this},n.prototype.getRoot=function(){return this.node},n.prototype.getEl=function(){return this},n.prototype.focus=function(){return this.node.focus(),this},n.prototype.append=function(t){var e;if(t)for(var o=0,n=(t=[].concat(t)).length;o<n;o++)e=t[o].getRoot?t[o].getRoot():new Text(t[o]),this.getRoot().appendChild(e),f(e),i.call(this,t[o]);return this},n.prototype.prepend=function(t){for(var e=this.node.childNodes[0],o=[].concat(t),n=0,r=o.length;n<r;n++)e.parentNode.insertBefore(o[n].getRoot(),e),i.call(this,o[n])},n.prototype.attr=function(t){var e;if("string"==typeof t)return this.node.getAttribute(t);for(var o in t)e=o.toLowerCase(),"ref"===o?this.ref=t[o]:n.__onAttr[e]?n.__onAttr[e].call(this,t[o]):"style"===o?this.setStyle(t[o]):this.isSvg&&"href"===o?this.node.setAttributeNS(g,o,t[o]):"once"===o.substring(0,4)?this.once(o.substring(4),t[o]):"on"===o.substring(0,2)?this.on(o.substring(2),t[o]):"class"===o?"string"==typeof t[o]&&this.node.setAttribute("class",t[o].split(" ").filter(t=>t.length).map(t=>t.trim()).join(" ")):t[o]&&this.node.setAttribute(o,t[o]);return this},n.prototype.closest=function(t){return new n(this.node.closest(t))},n.prototype.find=function(t){return new n(this.node.querySelector(t))},n.prototype.findAll=function(t){for(var e=[],o=this.node.querySelectorAll(t),r=0,s=o.length;r<s;r++)e.push(new n(o[r]));return e},n.prototype.html=function(t){return"string"!=typeof t?this.node.innerHTML:(this.node.innerHTML=t,this)},n.prototype.remove=function(){return this.node.parentNode&&(p(this.node),this.node.parentNode.removeChild(this.node)),this},n.prototype.replaceWith=function(t){var e=t.getRoot();return this.node.parentNode.replaceChild(e,this.node),p(this.node),f(e),this},n.prototype.on=function(t,e){var o=this,n=t.toLowerCase();return"function"==typeof e&&(this.bus.on(n,e),this.node.addEventListener(n,function(t){o.trigger(n,t)},!1)),this},n.prototype.once=function(t,e){const o=function(){e.call(this),this.off(t,o)};return this.on(t,o),this},n.prototype.off=function(t,e){var o=t.toLowerCase();if(e)this.node.removeEventListener(o,e,!1);else for(var n=this.bus.__s.length-1;n>=0;n--)this.node.removeEventListener(o,this.bus.__s[n],!1);return this.bus.off(o,e),this},n.prototype.trigger=function(t,e){return this.bus.trigger(t,e),this},t.exports=n},function(t,e){t.exports=function(t){var e=(t?Object.prototype.toString.call(t):"").substring(8);return 0===e.indexOf("HTML")||0===e.indexOf("SVG")}},function(t,e,o){const{MOUNTED:n}=o(0);t.exports=function t(e){const o=e.childNodes;if(document.body.contains(e)&&-1===n.indexOf(e)){n.push(e),e.dispatchEvent(new Event("mount",{bubbles:!1}));for(var r=0,s=o.length;r<s;r++)t(o[r])}}},function(t,e,o){const{MOUNTED:n}=o(0);t.exports=function t(e){const o=e.childNodes,r=n.indexOf(e);if(-1!==r){n.splice(r,1),e.dispatchEvent(new Event("unmount",{bubbles:!1}));for(var s=0,i=o.length;s<i;s++)t(o[s])}}},function(t,e,o){const n=o(3);t.exports=function(t,e){var o=[];return"object"==typeof e?(e.x&&o.push(n(t,e.x)),e.y&&o.push(n(t,e.y)),e.z&&o.push(n(t,e.z))):o.push(n(t,e)),t+"("+o.join(", ")+")"}},function(t,e,o){function n(){}const r=o(1),s=o(2),i=o(4);n.lib={},n.prototype.append=function(t){this.node.append(t);for(var e in this.node.refs)this.refs[e]||(this.refs[e]=this.node.refs[e]);return this},n.prototype.getRoot=function(){return this.node.getRoot()},n.prototype.addClass=function(t){return this.node.addClass(t),this},n.prototype.removeClass=function(t){return this.node.removeClass(t),this},n.prototype.remove=function(){return this.node.remove(),this},n.prototype.getEl=function(){return this.node.getEl()},n.prototype.on=function(t,e){return this.bus.on(t,e),this},n.prototype.once=function(t,e){return this.bus.once(t,e),this},n.prototype.off=function(t,e){return this.bus.off(t,e),this},n.prototype.trigger=function(t,e){return this.bus.trigger(t,e),this},n.create=function(t,e){function o(o,n){let s=Array.isArray(o)?o:n||[];if(this.props=r(o)?o:{},this.bus=new i({target:this}),this.refs={},this.ref=this.props.ref,this.tagName=t,e.constructor&&e.constructor.call(this,this.props),e.render){this.node=e.render.call(this,this.props),this.ref=this.props.ref||this.node.ref;for(var f in this.node.refs)this.refs[f]||(this.refs[f]=this.node.refs[f]);this.append(s)}}for(var f in n.prototype)o.prototype[f]=n.prototype[f];e.append&&(o.prototype.append=function(t){if(t){t=[].concat(t),e.append.call(this,t);for(var o=0,n=t.length;o<n;o++)s.call(this,t[o])}});for(f in e)"render"!==f&&"append"!==f&&(o.prototype[f]=e[f]);return n.lib[t]=o,o},t.exports=n}]);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


function test() {
  var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div");
  a.addClass("my-class-name");
  console.log("Add class", a.attr("class") === "my-class-name");
}

test();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div");

a.html("test");

console.log("HTML", a.node.innerHTML === "test");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


var isMounted = [ false, false ];
var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div");

__WEBPACK_IMPORTED_MODULE_0__index___default()(document.body).append(a);

a.on("unmount", function () {
  isMounted[0] = true;
});

a.remove();

console.log(
  "onUnmount", (
    isMounted[0] === true
  )
);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
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

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);

__WEBPACK_IMPORTED_MODULE_0__index___default.a.fn("classy", function () {
  this.addClass("classy");
});
var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div");
a.classy();
console.log("Add class", a.attr("class") === "classy");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map