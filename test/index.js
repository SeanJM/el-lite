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

module.exports=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e){var n={},o=o||void 0,r=o?o.getComputedStyle(document.body):{};n.transform=r.webkitTransform?"webkitTransform":r.MozTransform?"MozTransform":r.msTransform?"msTransform":"transform",n.userSelect=r.webkitUserSelect?"webkitUserSelect":r.MozUserSelect?"MozUserSelect":r.msUserSelect?"msUserSelect":"transform";t.exports={STYLE_NAME:n,IS_OFFSET:["width","height","top","left"],XLINK_NS:"http://www.w3.org/1999/xlink",SVG_NS:"http://www.w3.org/2000/svg",IS_VALUE_DEG:["rotate","rotateX","rotateY","rotateZ"],IS_VALUE_PX:["left","right","top","bottom","marginLeft","marginRight","marginTop","marginBottom","height","width","minHeight","minWidth","maxHeight","maxWidth","paddingLeft","paddingRight","paddingTop","paddingBottom","translate","translateX","translateY","translateZ"],IS_TRANSFORM:["rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","translateX","translateY","translateZ"]}},function(t,e){t.exports=function(t){return"[object Object]"===Object.prototype.toString.call(t)}},function(t,e){t.exports=function(t){var e=(t?Object.prototype.toString.call(t):"").substring(8);return 0===e.indexOf("HTML")||0===e.indexOf("SVG")}},function(t,e,n){const{IS_VALUE_PX:o,IS_VALUE_DEG:r}=n(0);t.exports=function(t,e){return o.indexOf(t)>-1?"number"==typeof e?e+"px":e:r.indexOf(t)>-1?"number"==typeof e?e+"deg":e:e.toString()}},function(t,e,n){function o(t,e,n){var r=this,s=c(t);h(this,t,e,n),this.append(this.children),this.attr(this.props);for(var u=0,p=o.__onCreate.length;u<p;u++)o.__onCreate[u].call(this);if(s){for(u=0,p=this.node.childNodes.length;u<p;u++)c(this.node.childNodes[u])&&(a.call(this,this.node.childNodes[u]),this.children.push(i(this.node.childNodes[u])));setTimeout(function(){f(r)},0)}}function r(){}function i(t,e,n){return r.lib[t]?new r.lib[t](e,n):t instanceof Text||t instanceof Comment?t:new o(t,e,n)}const s=n(1),h=n(5),c=n(2),u=n(7),f=n(8),p=n(9),a=n(10),l=n(11),d=n(3),{IS_TRANSFORM:g,STYLE_NAME:y,IS_OFFSET:m,XLINK_NS:_}=n(0);o.__onAttr={},o.__onCreate=[],o.__extend=function(t){return function(e){return e&&(this.node[t]=e),this.node[t]}},o.prototype.setStyle=function(t){var e={transform:[],default:[]};for(var n in t)if(g.indexOf(n)>-1)if("object"==typeof t[n])for(var o in t[n])e.transform.push(l(o,t[n][o]));else e.transform.push(l(n,t[n]));else this.node.style[y[n]||n]=d(n,t[n]);e.transform.length&&(this.node.style[y.transform]=e.transform.join(" "))},o.prototype.style=function(t){return"object"==typeof t?(this.setStyle(t),this):"string"==typeof t?m.indexOf(t)>-1?this.offset()[t]:window.getComputedStyle(this.node)[y[t]||t]:window.getComputedStyle(this.node)},o.prototype.value=function(t){return void 0===t?this.node.value:(this.node.value=t,this)},o.prototype.offset=function(){return this.node.getBoundingClientRect()},o.prototype.classList=function(t){var e=this.node.getAttribute("class");return e?e.split(" "):[]},o.prototype.removeClass=function(t){var e=this.classList(),n=e.indexOf(t);return n>-1&&e.splice(n,1),this.node.setAttribute("class",e.join(" ")),this},o.prototype.addClass=function(t){var e=this.classList();return-1===e.indexOf(t)&&e.push(t),this.node.setAttribute("class",e.join(" ")),this},o.prototype.getRoot=function(){return this.node},o.prototype.getEl=function(){return this},o.prototype.unmount=function(){return this.isMounted&&(this.trigger("unmount"),this.isMounted=!1),this},o.prototype.mount=function(){return this.isMounted||(this.trigger("mount"),this.isMounted=!0),this},o.prototype.focus=function(){return this.node.focus(),this},o.prototype.append=function(t){var e;if(t){t=[].concat(t),this.children=this.children.concat(t);for(var n=0,o=t.length;n<o;n++)e=t[n].getRoot,a.call(this,t[n]),this.getRoot().appendChild(e?t[n].getRoot():new Text(t[n])),u.call(this,t[n]);f(t)}return this},o.prototype.prepend=function(t){for(var e=this.node.childNodes[0],n=[].concat(t),o=0,r=n.length;o<r;o++)e.parentNode.insertBefore(n[o].getRoot(),e),u.call(this,n[o])},o.prototype.attr=function(t){var e;if("string"==typeof t)return this.node.getAttribute(t);for(var n in t)e=n.toLowerCase(),"ref"===n?this.ref=t[n]:o.__onAttr[e]?o.__onAttr[e].call(this,t[n]):"style"===n?this.setStyle(t[n]):this.isSvg&&"href"===n?this.node.setAttributeNS(_,n,t[n]):"once"===n.substring(0,4)?this.once(n.substring(4),t[n]):"on"===n.substring(0,2)?this.on(n.substring(2),t[n]):"class"===n?this.node.setAttribute("class",t[n].split(" ").filter(t=>t.length).map(t=>t.trim()).join(" ")):"once"!==n.substring(0,4)&&"on"!==n.substring(0,2)&&this.node.setAttribute(n,t[n]);return this},o.prototype.find=function(t){var e=this.node.querySelector(t);return a.call(this,i(e))},o.prototype.findAll=function(t){for(var e=[],n=this.node.querySelectorAll(t),o=0,r=n.length;o<r;o++)e.push(a.call(this,i(n[o])));return e},o.prototype.html=function(t){if("string"!=typeof t)return this.node.innerHTML;if(this.node.innerHTML=t,0===t.length){for(var e=0,n=this.children.length;e<n;e++)delete this.children[e];this.children=[]}else this.children=Array.prototype.map.call(this.node.childNodes,t=>a.call(this,i(t)));return this},o.prototype.removeChild=function(t){return p(this.children),this.children.splice(this.children.indexOf(t),1),this.node.removeChild(t.node),this},o.prototype.remove=function(){return this.trigger("removeChild"),this.off("removeChild"),this},o.prototype.on=function(t,e){var n=this,o=t.toLowerCase();return this.bus.on(o,e),this.node.addEventListener(o,function(t){n.trigger(o,t)},!1),this},o.prototype.once=function(t,e){const n=function(){e.call(this),this.off(t,n)};return this.on(t,n),this},o.prototype.off=function(t,e){var n=t.toLowerCase();if(e)this.node.removeEventListener(n,e,!1);else for(var o=this.bus.__s.length-1;o>=0;o--)this.node.removeEventListener(n,this.bus.__s[o],!1);return this.bus.off(n,e),this},o.prototype.trigger=function(t,e){return this.bus.trigger(t,e),this},r.lib={},r.__extend=function(t){return function(){var e=this.getEl(),n=t.call(e,arguments[0],arguments[1]);return n===e||void 0===n?this:n}};for(var v in o.prototype)r.prototype[v]=r.__extend(o.prototype[v]);r.prototype.append=function(t){return this.node.append(t),this.children=this.node.children,Object.assign(this.refs,this.node.refs),this},r.prototype.getRoot=function(){return this.node.getRoot()},r.prototype.getEl=function(){return this.node.getEl()},r.prototype.on=function(t,e){return this.bus.on(t,e),this},r.prototype.once=function(t,e){return this.bus.once(t,e),this},r.prototype.off=function(t,e){return this.bus.off(t,e),this},r.prototype.trigger=function(t,e){return this.bus.trigger(t,e),this},r.create=function(t,e){function n(n,o){let r=s(n)?n:{},i=Array.isArray(n)?n:o||[];h(this,t,r,i),e.constructor&&e.constructor.call(this,r),e.render&&(this.node=e.render.call(this,r),this.ref=this.props.ref||this.node.ref,Object.assign(this.refs,this.node.refs),this.append(i))}for(var o in r.prototype)n.prototype[o]=r.prototype[o];e.append&&(n.prototype.append=function(t){if(t){t=[].concat(t),e.append.call(this,t);for(var n=0,o=t.length;n<o;n++)u.call(this,t[n])}});for(o in e)"render"!==o&&"append"!==o&&(n.prototype[o]=e[o]);return r.lib[t]=n,n},i.onAttr=function(t,e){o.__onAttr[t.toLowerCase()]=e},i.onCreate=function(t){o.__onCreate.push(t)},i.fn=function(t,e){o.prototype[t]=e,r.prototype[t]=r.__extend(o.prototype[t]);for(var n in r.lib)r.lib[n].prototype[t]=r.prototype[t]},i.create=r.create,t.exports=i},function(t,e,n){function o(t,e){"string"==typeof e?t.tagName=e:Array.isArray(e)?t.children=e:i(e)&&(t.props=e)}const r=n(2),i=n(1),s=n(6),{SVG_NS:h}=n(0);t.exports=function(t,e,n,i){var c=r(e);t.bus=new s({target:t}),t.refs={},t.subscribers={},t.props={},t.children=[],t.isMounted=!1,t.tagName=c?e.tagName.toLowerCase():e,t.isSvg=-1!==["use","svg"].indexOf(t.tagName),c?t.node=e:t.isSvg?t.node=document.createElementNS(h,t.tagName):t.node=document.createElement(t.tagName),o(t,e),o(t,n),o(t,i)}},function(t,e){function n(t){this.__t=t.target||this,this.__s={}}n.prototype.once=function(t,e){var n=this,o=function(r){n.off(t,o),e.call(n.target,r)};this.on(t,o)},n.prototype.off=function(t,e){const n=t.toLowerCase(),o=this.__s[n].indexOf(e);return o>-1?this.__s[n].splice(o,1):this.__s[n]=[],this},n.prototype.on=function(t,e){return t=t.toLowerCase(),"function"==typeof e&&(this.__s[t]=(this.__s[t]||[]).concat(e)),this},n.prototype.trigger=function(t,e){for(var n=(this.__s[t.toLowerCase()]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].call(this.__t,e);return this},t.exports=n},function(t,e){t.exports=function(t){const e=t.ref;e&&!this.refs[e]&&(this.refs[e]=t),Object.assign(this.refs,t.refs)}},function(t,e){t.exports=function t(e){for(var n=0,o=(e=[].concat(e)).length;n<o;n++)e[n].getRoot&&document.body.contains(e[n].getRoot())&&(e[n].mount(),t(e[n].children))}},function(t,e){t.exports=function t(e){for(var n=0,o=(e=[].concat(e)).length;n<o;n++)e[n].getRoot&&(e[n].unmount(),t(e[n].children))}},function(t,e){t.exports=function(t){var e=this;return t.on&&t.on("removeChild",function(){e.removeChild(t)}),t}},function(t,e,n){const o=n(3);t.exports=function(t,e){var n=[];return"object"==typeof e?(e.x&&n.push(o(t,e.x)),e.y&&n.push(o(t,e.y)),e.z&&n.push(o(t,e.z))):n.push(o(t,e)),t+"("+n.join(", ")+")"}}]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__componentRef_deeper__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentRef__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addClass__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__removeClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elementRef__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__onMount__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__on_off__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__on_once__ = __webpack_require__(10);










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


var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div");

a.html("test");

console.log("HTML", a.node.innerHTML === "test");

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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