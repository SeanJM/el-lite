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

module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var STYLE_NAME = {};
var window     = window || undefined;
var BODY_CSS   = window ? window.getComputedStyle(document.body) : {};

STYLE_NAME.transform = (
  BODY_CSS.webkitTransform
    ? "webkitTransform"
    : BODY_CSS.MozTransform
      ? "MozTransform"
      : BODY_CSS.msTransform
        ? "msTransform"
        : "transform"
);

STYLE_NAME.userSelect = (
  BODY_CSS.webkitUserSelect
    ? "webkitUserSelect"
    : BODY_CSS.MozUserSelect
      ? "MozUserSelect"
      : BODY_CSS.msUserSelect
        ? "msUserSelect"
        : "transform"
);

var XLINK_NS = "http://www.w3.org/1999/xlink";
var SVG_NS   = "http://www.w3.org/2000/svg";

var IS_OFFSET = [
  "width",
  "height",
  "top",
  "left"
];

var IS_VALUE_DEG = [
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ"
];

var IS_VALUE_PX = [
  "left",
  "right",
  "top",
  "bottom",

  "marginLeft",
  "marginRight",
  "marginTop",
  "marginBottom",

  "height",
  "width",
  "minHeight",
  "minWidth",
  "maxHeight",
  "maxWidth",

  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",

  "translate",
  "translateX",
  "translateY",
  "translateZ"
];

var IS_TRANSFORM = [
  "rotateX",
  "rotateY",
  "rotateZ",

  "scale",

  "scaleX",
  "scaleY",
  "scaleZ",

  "translateX",
  "translateY",
  "translateZ"
];

module.exports = {
  STYLE_NAME,
  IS_OFFSET,
  XLINK_NS,
  SVG_NS,
  IS_VALUE_DEG,
  IS_VALUE_PX,
  IS_TRANSFORM,
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function isObject(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function isNode(node) {
  var str = (node ? Object.prototype.toString.call(node) : "").substring(8);
  return str.indexOf("HTML") === 0 || str.indexOf("SVG") === 0;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const { IS_VALUE_PX, IS_VALUE_DEG } = __webpack_require__(0);

module.exports = function propertyUnit(property, a) {
  if (IS_VALUE_PX.indexOf(property) > -1) {
    return typeof a === "number" ? a + "px" : a;
  } else if (IS_VALUE_DEG.indexOf(property) > -1) {
    return typeof a === "number" ? a + "deg" : a;
  }

  return a.toString();
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const isObject       = __webpack_require__(1);
const init           = __webpack_require__(5);
const isNode         = __webpack_require__(2);
const setRefs        = __webpack_require__(7);
const mount          = __webpack_require__(8);
const bind           = __webpack_require__(9);
const transformValue = __webpack_require__(10);
const propertyUnit   = __webpack_require__(3);

const {
  IS_TRANSFORM,
  STYLE_NAME,
  IS_OFFSET,
  XLINK_NS
} = __webpack_require__(0);

function El(a, b, c) {
  var self    = this;
  var IS_NODE = isNode(a);

  init(this, a, b, c);

  this.append(this.children);
  this.attr(this.props);

  for (var i = 0, n = El.__onCreate.length; i < n; i++) {
    El.__onCreate[i].call(this);
  }

  if (IS_NODE) {
    for (i = 0, n = this.node.childNodes.length; i < n; i++) {
      if (isNode(this.node.childNodes[i])) {
        bind.call(this, this.node.childNodes[i]);
        this.children.push(
          el(this.node.childNodes[i])
        );
      }
    }
    setTimeout(function () {
      mount(self);
    }, 0);
  }
}

El.__onAttr   = {};
El.__onCreate = [];

El.__extend = function (property) {
  return function (a) {
    if (a) {
      this.node[property] = a;
    }
    return this.node[property];
  };
};

El.prototype.setStyle = function (props) {
  var values = {
    transform : [],
    default   : []
  };

  for (var k in props) {
    if (IS_TRANSFORM.indexOf(k) > -1) {
      if (typeof props[k] === "object") {
        for (var j in props[k]) {
          values.transform.push(
            transformValue(j, props[k][j])
          );
        }
      } else {
        values.transform.push(
          transformValue(k, props[k])
        );
      }
    } else {
      this.node.style[STYLE_NAME[k] || k] = propertyUnit(k, props[k]);
    }
  }

  if (values.transform.length) {
    this.node.style[STYLE_NAME.transform] = values.transform.join(" ");
  }
};

El.prototype.style = function (props) {
  if (typeof props === "object") {
    this.setStyle(props);
    return this;
  } else if (typeof props === "string") {
    if (IS_OFFSET.indexOf(props) > -1) {
      return this.offset()[props];
    } else {
      return window.getComputedStyle(this.node)[STYLE_NAME[props] || props];
    }
  } else {
    return window.getComputedStyle(this.node);
  }
};

El.prototype.value = function (value) {
  if (typeof value === "undefined") {
    return this.node.value;
  }
  this.node.value = value;
  return this;
};

El.prototype.offset = function () {
  return this.node.getBoundingClientRect();
};

El.prototype.classList = function (x) {
  var className = this.node.getAttribute("class");
  return className ? className.split(" ") : [];
};

El.prototype.removeClass = function (x) {
  var classList = this.classList();
  var index     = classList.indexOf(x);

  if (index > -1) {
    classList.splice(index, 1);
  }

  this.node.setAttribute("class", classList.join(" "));
  return this;
};

El.prototype.addClass = function (x) {
  var classList = this.classList();

  if (classList.indexOf(x) === -1) {
    classList.push(x);
  }

  this.node.setAttribute("class", classList.join(" "));
  return this;
};

El.prototype.getRoot = function () {
  return this.node;
};

El.prototype.getEl = function () {
  return this;
};

El.prototype.mount = function () {
  if (!this.isMounted) {
    this.trigger("mount");
    this.isMounted = true;
  }
  return this;
};

El.prototype.focus = function () {
  this.node.focus();
  return this;
};

El.prototype.append = function (children) {
  var isEl;

  if (children) {
    children      = [].concat(children);
    this.children = this.children.concat(children);

    for (var i = 0, n = children.length; i < n; i++) {
      isEl = children[i].getRoot;
      bind.call(this, children[i]);
      this.getRoot().appendChild(
        isEl
          ? children[i].getRoot()
          : new Text(children[i])
      );

      setRefs.call(this, children[i]);
    }

    mount(children);
  }
  return this;
};

El.prototype.prepend = function (element) {
  var first = this.node.childNodes[0];
  var children = [].concat(element);
  for (var i = 0, n = children.length; i < n; i++) {
    first.parentNode.insertBefore(children[i].getRoot(), first);
    setRefs.call(this, children[i]);
  }
};

El.prototype.attr = function (attr) {
  var x;

  if (typeof attr === "string") {
    return this.node.getAttribute(attr);
  }

  for (var k in attr) {
    x = k.toLowerCase();
    if (k === "ref") {
      this.ref = attr[k];
    } else if (El.__onAttr[x]) {
      El.__onAttr[x].call(this, attr[k]);
    } else if (k === "style") {
      this.setStyle(attr[k]);
    } else if (this.isSvg && k === "href") {
      this.node.setAttributeNS(XLINK_NS, k, attr[k]);
    } else if (k === "class") {
      this.node.setAttribute(
        "class",
        attr[k]
          .split(" ")
          .filter(a => a.length)
          .map(a => a.trim())
          .join(" ")
      );
    } else if (k.substring(0, 4) !== "once" && k.substring(0, 2) !== "on") {
      this.node.setAttribute(k, attr[k]);
    }
  }
  return this;
};

El.prototype.find = function (selector) {
  var node = this.node.querySelector(selector);
  return bind.call(this, el(node));
};

El.prototype.findAll = function (selector) {
  var result = [];
  var nodes  = this.node.querySelectorAll(selector);

  for (var i = 0, n = nodes.length; i < n; i++) {
    result.push(
      bind.call(this, el(nodes[i]))
    );
  }

  return result;
};

El.prototype.html = function (value) {
  this.node.innerHTML = value;
  if (value && !value.length) {
    for (var i = 0, n = this.children.length; i < n; i++) {
      delete this.children[i];
    }
    this.children = [];
  }
  return this;
};

El.prototype.removeChild = function (child) {
  this.children.splice(this.children.indexOf(child), 1);
  this.node.removeChild(child.node);
};

El.prototype.remove = function () {
  this.isMounted = false;
  this.trigger("removeChild");
  return this;
};

El.prototype.on = function (a, b) {
  var self = this;
  this.bus.on(a, b);
  this.node.addEventListener(a, function (e) {
    self.trigger(a, e);
  }, false);
  return this;
};

El.prototype.once = function (a, b) {
  const once = function () {
    b.call(this);
    this.off(a, once);
  };
  this.on(a, once);
  return this;
};

El.prototype.off = function (a, b) {
  if (!b) {
    for (var i = this.bus.__s.length - 1; i >= 0; i--) {
      this.node.removeEventListener(a, this.bus.__s[i], false);
    }
  } else {
    this.node.removeEventListener(a, b, false);
  }
  this.bus.off(a, b);
  return this;
};

El.prototype.trigger = function (a, b) {
  this.bus.trigger(a, b);
  return this;
};

function Component() {}

Component.lib = {};

Component.__extend = function (fn) {
  return function () {
    var element = this.getEl();
    var out     = fn.call(element, arguments[0], arguments[1]);
    return (
      out === element || typeof out === "undefined"
        ? this
        : out
    );
  };
};

for (var k in El.prototype) {
  Component.prototype[k] = Component.__extend(El.prototype[k]);
}

Component.prototype.append = function (children) {
  this.node.append(children);
  this.children = this.node.children;
  Object.assign(this.refs, this.node.refs);
  return this;
};

Component.prototype.getRoot = function () {
  return this.node.getRoot();
};

Component.prototype.getEl = function () {
  return this.node.getEl();
};

Component.prototype.on = function (a, b) {
  this.bus.on(a, b);
  return this;
};

Component.prototype.once = function (a, b) {
  this.bus.once(a, b);
  return this;
};

Component.prototype.off = function (a, b) {
  this.bus.off(a, b);
  return this;
};

Component.prototype.trigger = function (a, b) {
  this.bus.trigger(a, b);
  return this;
};

Component.create = function (name, obj) {
  function C(a, b) {
    let props    = isObject(a) ? a : {};
    let children = Array.isArray(a) ? a : b || [];

    init(this, name, props, children);

    if (obj.constructor) {
      obj.constructor.call(this, props);
    }

    if (obj.render) {
      this.node = obj.render.call(this, props);
      this.ref  = this.props.ref || this.node.ref;
      Object.assign(this.refs, this.node.refs);
      this.append(children);
    }
  }

  for (var k in Component.prototype) {
    C.prototype[k] = Component.prototype[k];
  }

  if (obj.append) {
    C.prototype.append = function (children) {
      if (children) {
        children = [].concat(children);
        obj.append.call(this, children);
        for (var i = 0, n = children.length; i < n; i++) {
          setRefs.call(this, children[i]);
        }
      }
    };
  }

  for (k in obj) {
    if (k !== "render" && k !== "append") {
      C.prototype[k] = obj[k];
    }
  }

  Component.lib[name] = C;
  return C;
};

function el(a, b, c) {
  if (Component.lib[a]) {
    return new Component.lib[a](b, c);
  } else if (a instanceof Text || a instanceof Comment) {
    return a;
  } else {
    return new El(a, b, c);
  }
}

el.onAttr = function (name, callback) {
  El.__onAttr[name.toLowerCase()] = callback;
};

el.onCreate = function (callback) {
  El.__onCreate.push(callback);
};

el.fn = function (name, callback) {
  El.prototype[name] = callback;
  Component.prototype[name] = Component.__extend(El.prototype[name]);
  for (var k in Component.lib) {
    Component.lib[k].prototype[name] = Component.prototype[name];
  }
};

el.create = Component.create;

module.exports = el;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const isNode     = __webpack_require__(2);
const isObject   = __webpack_require__(1);
const Bus        = __webpack_require__(6);
const { SVG_NS } = __webpack_require__(0);

function set(self, x) {
  if (typeof x === "string") {
    self.tagName  = x;
  } else if (Array.isArray(x)) {
    self.children = x;
  } else if (isObject(x)) {
    self.props = x;
  }
}

function init(self, a, b, c) {
  var IS_NODE = isNode(a);

  self.bus         = new Bus({ target: self });
  self.refs        = {};
  self.subscribers = {};
  self.props       = {};
  self.children    = [];

  self.isMounted = false;
  self.tagName = IS_NODE ? a.tagName.toLowerCase() : a;
  self.isSvg = [ "use", "svg" ].indexOf(self.tagName) !== -1;

  if (IS_NODE) {
    self.node = a;
  } else if (self.isSvg) {
    self.node = document.createElementNS(SVG_NS, self.tagName);
  } else {
    self.node = document.createElement(self.tagName);
  }

  set(self, a);
  set(self, b);
  set(self, c);

  for (var k in self.props) {
    if (k.substring(0, 4) === "once") {
      self.once(k.substring(4), self.props[k]);
    } else if (k.substring(0, 2) === "on") {
      self.on(k.substring(2), self.props[k]);
    }
  }
}

module.exports = init;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function Bus(props) {
  this.__t = props.target || this;
  this.__s = {};
}

Bus.prototype.once = function (name, callback) {
  var self = this;
  var once = function (a) {
    self.off(name, once);
    callback.call(self.target, a);
  };
  this.on(name, once);
};

Bus.prototype.off = function (name, callback) {
  const nl    = name.toLowerCase();
  const index = this.__s[nl].indexOf(callback);
  if (index > -1) {
    this.__s[nl].splice(index, 1);
  } else {
    this.__s[nl] = [];
  }
  return this;
};

Bus.prototype.on = function (name, callback) {
  name = name.toLowerCase();
  if (typeof callback === "function") {
    this.__s[name] = (this.__s[name] || []).concat(callback);
  }
  return this;
};

Bus.prototype.trigger = function (name, value) {
  var arr = (this.__s[name.toLowerCase()] || []);
  for (var i = 0, n = arr.length; i < n; i++) {
    arr[i].call(this.__t, value);
  }
  return this;
};

module.exports = Bus;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function setRefs(child) {
  const cr = child.ref;
  if (cr && !this.refs[cr]) {
    this.refs[cr] = child;
  }
  Object.assign(this.refs, child.refs);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function mount(children) {
  children = [].concat(children);
  for (var i = 0, n = children.length; i < n; i++) {
    if (children[i].getRoot && document.body.contains(children[i].getRoot())) {
      children[i].mount();
      mount(children[i].children);
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function bind(child) {
  var self = this;
  if (child.on) {
    child.on("removeChild", function () {
      self.removeChild(child);
    });
  }
  return child;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const propertyUnit = __webpack_require__(3);

module.exports = function transformValue(name, value) {
  var result = [];

  if (typeof value === "object") {
    if (value.x) {
      result.push(
        propertyUnit(name, value.x)
      );
    }

    if (value.y) {
      result.push(
        propertyUnit(name, value.y)
      );
    }

    if (value.z) {
      result.push(
        propertyUnit(name, value.z)
      );
    }
  } else {
    result.push(
      propertyUnit(name, value)
    );
  }

  return name + "(" + result.join(", ") + ")";
};

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map

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


var isMounted = [ false, false ];

var a = __WEBPACK_IMPORTED_MODULE_0__index___default()("div", {
  onClick: function () {
    isMounted[0] = !isMounted[0];
  },
  onceClack: function () {
    isMounted[1] = !isMounted[0];
  }
});

a.trigger("click");
a.off("click");
a.trigger("click");
a.trigger("clack");
a.trigger("clack");

console.log(
  "on_off", (
    isMounted[0] === true
    && isMounted[0] === true
  )
);

/***/ })
/******/ ]);