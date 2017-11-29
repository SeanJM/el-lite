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

module.exports=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e){var n={},o=o||void 0,r=o?o.getComputedStyle(document.body):{};n.transform=r.webkitTransform?"webkitTransform":r.MozTransform?"MozTransform":r.msTransform?"msTransform":"transform",n.userSelect=r.webkitUserSelect?"webkitUserSelect":r.MozUserSelect?"MozUserSelect":r.msUserSelect?"msUserSelect":"userSelect";t.exports={MOUNTED:[],STYLE_NAME:n,IS_OFFSET:["width","height","top","left"],XLINK_NS:"http://www.w3.org/1999/xlink",SVG_NS:"http://www.w3.org/2000/svg",IS_VALUE_DEG:["rotate","rotateX","rotateY","rotateZ"],IS_VALUE_PX:["left","right","top","bottom","marginLeft","marginRight","marginTop","marginBottom","height","width","minHeight","minWidth","maxHeight","maxWidth","paddingLeft","paddingRight","paddingTop","paddingBottom","translate","translateX","translateY","translateZ"],IS_TRANSFORM:["rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","translateX","translateY","translateZ"]}},function(t,e,n){function o(){var t=this,e=[arguments[0],arguments[1],arguments[2]],n=s(e[0]),i=[];this.tagName=n?arguments[0].tagName.toLowerCase():"div",this.bus=new a({target:this}),this.refs={};for(var f=0,h=e.length;f<h;f++)"string"==typeof e[f]?this.tagName=e[f]:r(e[f])?this.props=e[f]:Array.isArray(e[f])&&(i=e[f]);for(this.isSvg=-1!==["use","svg"].indexOf(this.tagName),n?this.node=e[0]:this.isSvg?this.node=document.createElementNS(l,this.tagName):this.node=document.createElement(this.tagName),this.append(i),this.attr(this.props),f=0,h=o.__onCreate.length;f<h;f++)o.__onCreate[f].call(this);n&&setTimeout(function(){p(t.node)},0)}const r=n(2),s=n(7),i=n(3),p=n(8),f=n(9),h=n(10),u=n(4),a=n(5),{XLINK_NS:c,SVG_NS:l,IS_TRANSFORM:d,STYLE_NAME:g}=n(0);o.__onAttr={},o.__onCreate=[],o.prototype.setStyle=function(t){var e,n={transform:[],default:[]},o=[],r={};for(var s in t)if(d.indexOf(s)>-1)if("object"==typeof t[s])for(var i in t[s])n.transform.push(h(i,t[s][i]));else n.transform.push(h(s,t[s]));else o.push({name:s,value:u(s,t[s])});n.transform.length&&o.push({name:"transform",value:n.transform.join(" ")});for(var p=0,f=o.length;p<f;p++)e=g[o[p].name]||o[p].name,this.node.style[e]=o[p].value,r[e]=o[p].value;this.trigger("style",{list:o,value:r})},o.prototype.style=function(t){return"object"==typeof t?(this.setStyle(t),this):"string"==typeof t?window.getComputedStyle(this.node)[g[t]||t]:window.getComputedStyle(this.node)},o.prototype.value=function(t){return void 0===t?this.node.value:(this.node.value=t,this)},o.prototype.offset=function(){return this.node.getBoundingClientRect()},o.prototype.classList=function(){var t=this.node.getAttribute("class");return t?t.split(" "):[]},o.prototype.removeClass=function(t){var e=this.classList(),n=e.indexOf(t);return n>-1&&e.splice(n,1),this.node.setAttribute("class",e.join(" ")),this},o.prototype.addClass=function(t){var e=this.classList();return-1===e.indexOf(t)&&e.push(t),this.node.setAttribute("class",e.join(" ")),this},o.prototype.getRoot=function(){return this.node},o.prototype.getEl=function(){return this},o.prototype.focus=function(){return this.node.focus(),this},o.prototype.append=function(t){var e;if(t)for(var n=0,o=(t=[].concat(t)).length;n<o;n++)e=t[n].getRoot?t[n].getRoot():new Text(t[n]),this.getRoot().appendChild(e),p(e),i.call(this,t[n]);return this},o.prototype.prepend=function(t){for(var e=this.node.childNodes[0],n=[].concat(t),o=0,r=n.length;o<r;o++)e.parentNode.insertBefore(n[o].getRoot(),e),i.call(this,n[o])},o.prototype.attr=function(t){var e;if("string"==typeof t)return this.node.getAttribute(t);for(var n in t)e=n.toLowerCase(),"ref"===n?this.ref=t[n]:o.__onAttr[e]?o.__onAttr[e].call(this,t[n]):"style"===n?this.setStyle(t[n]):"once"===n.substring(0,4)?this.once(n.substring(4),t[n]):"on"===n.substring(0,2)?this.on(n.substring(2),t[n]):"class"===n?"string"==typeof t[n]&&this.node.setAttribute("class",t[n].split(" ").filter(t=>t.length).map(t=>t.trim()).join(" ")):t[n]&&(this.isSvg?this.node.setAttributeNS("href"===n?c:l,n,t[n]):this.node.setAttribute(n,t[n]));return this},o.prototype.closest=function(t){return new o(this.node.closest(t))},o.prototype.find=function(t){return new o(this.node.querySelector(t))},o.prototype.findAll=function(t){for(var e=[],n=this.node.querySelectorAll(t),r=0,s=n.length;r<s;r++)e.push(new o(n[r]));return e},o.prototype.children=function(t){const e=[],n=this.node.childNodes;for(var r=0,i=n.length;r<i;r++)if(s(n[r])&&(e.push(new o(n[r])),e[t]))return e[t];return e},o.prototype.html=function(t){return"string"!=typeof t?this.node.innerHTML:(this.node.innerHTML=t,this)},o.prototype.remove=function(){return this.node.parentNode&&(f(this.node),this.node.parentNode.removeChild(this.node)),this},o.prototype.replaceWith=function(t){var e=t.getRoot();return this.node.parentNode.replaceChild(e,this.node),f(this.node),p(e),this},o.prototype.on=function(t,e){var n=this,o=t.toLowerCase();return"function"==typeof e&&(this.bus.on(o,e),this.node.addEventListener(o,function(t){n.trigger(o,t)},!1)),this},o.prototype.once=function(t,e){const n=function(){e.call(this),this.off(t,n)};return this.on(t,n),this},o.prototype.off=function(t,e){var n=t.toLowerCase();if(e)this.node.removeEventListener(n,e,!1);else for(var o=this.bus.__s.length-1;o>=0;o--)this.node.removeEventListener(n,this.bus.__s[o],!1);return this.bus.off(n,e),this},o.prototype.trigger=function(t,e){return this.bus.trigger(t,e),this},t.exports=o},function(t,e){t.exports=function(t){return"[object Object]"===Object.prototype.toString.call(t)}},function(t,e){t.exports=function(t){const e=t.ref;e&&!this.refs[e]&&(this.refs[e]=t),Object.assign(this.refs,t.refs)}},function(t,e,n){const{IS_VALUE_PX:o,IS_VALUE_DEG:r}=n(0);t.exports=function(t,e){return o.indexOf(t)>-1?"number"==typeof e?e+"px":e:r.indexOf(t)>-1?"number"==typeof e?e+"deg":e:e.toString()}},function(t,e){function n(t){this.__t=t.target||this,this.__s={}}n.prototype.once=function(t,e){var n=this,o=function(r){n.off(t,o),e.call(n.target,r)};this.on(t,o)},n.prototype.off=function(t,e){const n=t.toLowerCase(),o=(this.__s[n]||[]).indexOf(e);return o>-1?this.__s[n].splice(o,1):this.__s[n]=[],this},n.prototype.on=function(t,e){return t=t.toLowerCase(),"function"==typeof e&&(this.__s[t]=(this.__s[t]||[]).concat(e)),this},n.prototype.trigger=function(t,e){for(var n=(this.__s[t.toLowerCase()]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].call(this.__t,e);return this},t.exports=n},function(t,e,n){function o(t,e,n){return s.lib[t]?new s.lib[t](e,n):t instanceof Text||t instanceof Comment?t:"body"===t?i:new r(t,e,n)}const r=n(1),s=n(11),i=o(document.body);o.onAttr=function(t,e){r.__onAttr[t.toLowerCase()]=e},o.onCreate=function(t){r.__onCreate.push(t)},o.fn=function(t,e){r.prototype[t]=e,s.prototype[t]=function(e,n,o){return this.node[t](e,n,o),this};for(var n in s.lib)s.lib[n].prototype[t]=s.prototype[t]},o.create=s.create,t.exports=o},function(t,e){t.exports=function(t){var e=(t?Object.prototype.toString.call(t):"").substring(8);return 0===e.indexOf("HTML")||0===e.indexOf("SVG")}},function(t,e,n){const{MOUNTED:o}=n(0);t.exports=function t(e){const n=e.childNodes;if(document.body.contains(e)&&-1===o.indexOf(e)){o.push(e),e.dispatchEvent(new Event("mount",{bubbles:!1}));for(var r=0,s=n.length;r<s;r++)t(n[r])}}},function(t,e,n){const{MOUNTED:o}=n(0);t.exports=function t(e){const n=e.childNodes,r=o.indexOf(e);if(-1!==r){o.splice(r,1),e.dispatchEvent(new Event("unmount",{bubbles:!1}));for(var s=0,i=n.length;s<i;s++)t(n[s])}}},function(t,e,n){const o=n(4);t.exports=function(t,e){var n=[];return"object"==typeof e?(e.x&&n.push(o(t,e.x)),e.y&&n.push(o(t,e.y)),e.z&&n.push(o(t,e.z))):n.push(o(t,e)),t+"("+n.join(", ")+")"}},function(t,e,n){function o(){}function r(t){return function(e,n,o){let r=this.node[t](e,n,o);return r===this.node?this:r}}const s=n(2),i=n(3),p=n(5),f=n(1);o.lib={};for(var h in f.prototype)o.prototype[h]=r(h);o.prototype.append=function(t){this.node.append(t);for(var e in this.node.refs)this.refs[e]||(this.refs[e]=this.node.refs[e]);return this},o.prototype.on=function(t,e){return this.bus.on(t,e),this},o.prototype.once=function(t,e){return this.bus.once(t,e),this},o.prototype.off=function(t,e){return this.bus.off(t,e),this},o.prototype.trigger=function(t,e){return this.bus.trigger(t,e),this},o.create=function(t,e){function n(n,o){let r=Array.isArray(n)?n:o||[];if(this.props=s(n)?n:{},this.bus=new p({target:this}),this.refs={},this.ref=this.props.ref,this.tagName=t,e.constructor&&e.constructor.call(this,this.props),e.render){this.node=e.render.call(this,this.props),this.ref=this.props.ref||this.node.ref;for(var i in this.node.refs)this.refs[i]||(this.refs[i]=this.node.refs[i]);this.append(r)}}for(var r in o.prototype)n.prototype[r]=o.prototype[r];e.append&&(n.prototype.append=function(t){if(t){t=[].concat(t),e.append.call(this,t);for(var n=0,o=t.length;n<o;n++)i.call(this,t[n])}});for(r in e)"render"!==r&&"append"!==r&&(n.prototype[r]=e[r]);return o.lib[t]=n,n},t.exports=o}]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__componentRef_deeper__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentRef__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentAppend__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__removeClass__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__elementRef__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__onMount__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__onUnmount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__on_off__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__svg__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__on_once__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fn__ = __webpack_require__(14);














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


__WEBPACK_IMPORTED_MODULE_0__index___default.a.create("x", {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0__index___default()("div");
  }
});

var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div");
var b = __WEBPACK_IMPORTED_MODULE_0__index___default()("x");

b.append(a);

console.log("componentAppend", b.node.node.childNodes.length === 1);

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div");

a.html("test");

console.log("HTML", a.node.innerHTML === "test");

/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
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
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);


var body = __WEBPACK_IMPORTED_MODULE_0__index___default()(document.body);

__WEBPACK_IMPORTED_MODULE_0__index___default.a.create("Icon", {
  render(props) {
    return __WEBPACK_IMPORTED_MODULE_0__index___default()("svg", {
      style : {
        display : "inline-block",
        width : "100px",
        height : "100px"
      }
    }, [ __WEBPACK_IMPORTED_MODULE_0__index___default()("use", { "href" : "#icon_" + props.type })]);
  }
});

body.append(__WEBPACK_IMPORTED_MODULE_0__index___default()("Icon", { type : "eye"}));

/***/ }),
/* 13 */
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

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
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