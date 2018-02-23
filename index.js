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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var STYLE_NAME = {};
var window = window || undefined;
var BODY_CSS = window ? window.getComputedStyle(document.body) : {};
var MOUNTED = [];

STYLE_NAME.transform = BODY_CSS.webkitTransform ? "webkitTransform" : BODY_CSS.MozTransform ? "MozTransform" : BODY_CSS.msTransform ? "msTransform" : "transform";

STYLE_NAME.userSelect = BODY_CSS.webkitUserSelect ? "webkitUserSelect" : BODY_CSS.MozUserSelect ? "MozUserSelect" : BODY_CSS.msUserSelect ? "msUserSelect" : "userSelect";

var XLINK_NS = "http://www.w3.org/1999/xlink";
var SVG_NS = "http://www.w3.org/2000/svg";

var IS_OFFSET = ["width", "height", "top", "left"];

var IS_VALUE_DEG = ["rotate", "rotateX", "rotateY", "rotateZ"];

var IS_VALUE_PX = ["left", "right", "top", "bottom", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom", "height", "width", "minHeight", "minWidth", "maxHeight", "maxWidth", "padding", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "translate", "translateX", "translateY", "translateZ"];

var IS_TRANSFORM = ["rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "translateX", "translateY", "translateZ"];

module.exports = {
  MOUNTED: MOUNTED,
  STYLE_NAME: STYLE_NAME,
  IS_OFFSET: IS_OFFSET,
  XLINK_NS: XLINK_NS,
  SVG_NS: SVG_NS,
  IS_VALUE_DEG: IS_VALUE_DEG,
  IS_VALUE_PX: IS_VALUE_PX,
  IS_TRANSFORM: IS_TRANSFORM
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isObject = __webpack_require__(2);
var isNode = __webpack_require__(3);
var setRefs = __webpack_require__(4);
var mount = __webpack_require__(8);
var unmount = __webpack_require__(9);
var transformValue = __webpack_require__(10);
var propertyUnit = __webpack_require__(5);
var toUnit = __webpack_require__(11);
var Bus = __webpack_require__(6);

var _require = __webpack_require__(0),
    XLINK_NS = _require.XLINK_NS,
    SVG_NS = _require.SVG_NS,
    IS_TRANSFORM = _require.IS_TRANSFORM,
    STYLE_NAME = _require.STYLE_NAME;

function El() {
  var self = this;
  var args = [arguments[0], arguments[1], arguments[2]];
  var IS_NODE = isNode(args[0]);
  var children = [];

  this.tagName = IS_NODE ? arguments[0].tagName.toLowerCase() : "div";
  this.bus = new Bus({ target: this });
  this.refs = {};
  this.props = {};

  for (var i = 0, n = args.length; i < n; i++) {
    if (typeof args[i] === "string") {
      this.tagName = args[i];
    } else if (isObject(args[i])) {
      this.props = args[i];
    } else if (Array.isArray(args[i])) {
      children = args[i];
    }
  }

  this.isSvg = ["use", "svg"].indexOf(this.tagName) !== -1;

  if (IS_NODE) {
    this.node = args[0];
  } else if (this.isSvg) {
    this.node = document.createElementNS(SVG_NS, this.tagName);
  } else {
    this.node = document.createElement(this.tagName);
  }

  for (var k in El.__defaultProps) {
    if (!this.props[k]) {
      this.props[k] = El.__defaultProps[k];
    }
  }

  this.append(children);
  this.attr(this.props);

  for (i = 0, n = El.__onCreate.length; i < n; i++) {
    El.__onCreate[i].call(this);
  }

  if (IS_NODE) {
    mount(self.node);
  }
}

El.id = {};
El.__onAttr = {};
El.__defaultProps = {};
El.__onCreate = [];

El.prototype.setStyle = function (props) {
  var values = {
    transform: [],
    default: []
  };

  var list = [];
  var value = {};
  var name;

  for (var k in props) {
    if (IS_TRANSFORM.indexOf(k) > -1) {
      if (_typeof(props[k]) === "object") {
        for (var j in props[k]) {
          values.transform.push(transformValue(j, props[k][j]));
        }
      } else {
        values.transform.push(transformValue(k, props[k]));
      }
    } else {
      list.push({
        name: k,
        value: propertyUnit(k, props[k])
      });
    }
  }

  if (values.transform.length) {
    list.push({
      name: "transform",
      value: values.transform.join(" ")
    });
  }

  for (var i = 0, n = list.length; i < n; i++) {
    name = STYLE_NAME[list[i].name] || list[i].name;
    this.node.style[name] = list[i].value;
    value[name] = list[i].value;
  }

  this.trigger("style", {
    list: list,
    value: value
  });
};

El.prototype.style = function (props) {
  if ((typeof props === "undefined" ? "undefined" : _typeof(props)) === "object") {
    this.setStyle(props);
    return this;
  } else if (typeof props === "string") {
    return toUnit(window.getComputedStyle(this.node)[STYLE_NAME[props] || props]);
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
  var offset = this.node.getBoundingClientRect();
  return {
    top: offset.top,
    left: offset.left,
    width: offset.width,
    height: offset.height
  };
};

El.prototype.classList = function () {
  var className = this.node.getAttribute("class");
  return className ? className.split(" ") : [];
};

El.prototype.removeClass = function (x) {
  var classList = this.classList();
  var index = classList.indexOf(x);

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

El.prototype.parent = function () {
  return this.node.parentNode && new El(this.node.parentNode);
};

El.prototype.getRoot = function () {
  return this.node;
};

El.prototype.getEl = function () {
  return this;
};

El.prototype.focus = function () {
  this.node.focus();
  return this;
};

El.prototype.append = function (children) {
  var isEl;
  var child;

  if (children) {
    children = [].concat(children);

    for (var i = 0, n = children.length; i < n; i++) {
      isEl = children[i].getRoot;
      child = isEl ? children[i].getRoot() : new Text(children[i]);
      this.getRoot().appendChild(child);
      mount(child);
      setRefs.call(this, children[i]);
    }
  }
  return this;
};

El.prototype.after = function (target) {
  var targetNode = target.getRoot();
  var parent = targetNode.parentNode;
  var index = -1;
  var i = -1;

  var childNodes = void 0;
  var length = void 0;

  if (parent) {
    childNodes = parent.childNodes;
    length = parent.childNodes.length;

    while (++i < length) {
      if (childNodes[i] === targetNode) {
        index = i + 1;
      }
    }

    if (childNodes[index]) {
      parent.insertBefore(this.node, childNodes[index]);
    } else {
      parent.appendChild(this.node);
    }
  }

  return this;
};

El.prototype.prepend = function (element) {
  var first = this.node.childNodes[0];
  var children = [].concat(element);
  var i = 0,
      n = 0;
  if (first) {
    for (i = 0, n = children.length; i < n; i++) {
      first.parentNode.insertBefore(children[i].getRoot(), first);
      setRefs.call(this, children[i]);
    }
  } else {
    for (i = 0, n = children.length; i < n; i++) {
      this.node.appendChild(children[i].getRoot());
      setRefs.call(this, children[i]);
    }
  }
};

El.prototype.attr = function (attr) {
  var x;

  if (typeof attr === "string") {
    return this.node.getAttribute(attr);
  }

  if (attr.id) {
    El.id[attr.id] = this;
  }

  for (var k in attr) {
    x = k.toLowerCase();
    if (k === "ref") {
      this.ref = attr[k];
    } else if (El.__onAttr[x]) {
      El.__onAttr[x].call(this, attr[k]);
    } else if (k === "style") {
      this.setStyle(attr[k]);
    } else if (k.substring(0, 4) === "once") {
      this.once(k.substring(4), attr[k]);
    } else if (k.substring(0, 2) === "on") {
      this.on(k.substring(2), attr[k]);
    } else if (k === "class") {
      if (typeof attr[k] === "string") {
        this.node.setAttribute("class", attr[k].split(" ").filter(function (a) {
          return a.length;
        }).map(function (a) {
          return a.trim();
        }).join(" "));
      }
    } else if (attr[k] && _typeof(attr[k]) !== "object" && typeof attr[k] !== "function") {
      if (this.isSvg) {
        this.node.setAttributeNS(k === "href" ? XLINK_NS : SVG_NS, k, attr[k]);
      } else {
        this.node.setAttribute(k, attr[k].toString());
      }
    }
  }
  return this;
};

El.prototype.closest = function (selector) {
  var node = this.node.closest(selector);
  return new El(node);
};

El.prototype.find = function (selector) {
  var node = this.node.querySelector(selector);
  return new El(node);
};

El.prototype.findAll = function (selector) {
  var result = [];
  var nodes = this.node.querySelectorAll(selector);

  for (var i = 0, n = nodes.length; i < n; i++) {
    result.push(new El(nodes[i]));
  }

  return result;
};

El.prototype.children = function (index) {
  var children = [];
  var childNodes = this.node.childNodes;
  for (var i = 0, n = childNodes.length; i < n; i++) {
    if (isNode(childNodes[i])) {
      children.push(new El(childNodes[i]));
      if (children[index]) {
        return children[index];
      }
    }
  }
  return children;
};

El.prototype.html = function (value) {
  if (typeof value === "undefined") {
    return this.node.innerHTML;
  }
  Array.prototype.forEach.call(this.node.childNodes, unmount);
  this.node.innerHTML = value;
  return this;
};

El.prototype.remove = function () {
  if (this.node.parentNode) {
    unmount(this.node);
    this.node.parentNode.removeChild(this.node);
  }
  return this;
};

El.prototype.replaceWith = function (child) {
  var childNode = child.getRoot();
  this.node.parentNode.replaceChild(childNode, this.node);
  unmount(this.node);
  mount(childNode);
  return this;
};

El.prototype.on = function (name, callback) {
  var self = this;
  var nameLower = name.toLowerCase();

  if (typeof callback === "function") {
    this.bus.on(nameLower, callback);
    if (nameLower === "load") {
      this.node.onload = function (e) {
        self.trigger(nameLower, e);
      };
    } else if (this.bus.subscribers[nameLower].length === 1) {
      this.node.addEventListener(nameLower, function (e) {
        self.trigger(nameLower, e);
      }, false);
    }
  }

  return this;
};

El.prototype.once = function (a, b) {
  var once = function once() {
    b.call(this);
    this.off(a, once);
  };
  this.on(a, once);
  return this;
};

El.prototype.off = function (a, b) {
  var al = a.toLowerCase();
  if (!b) {
    for (var i = this.bus.subscribers.length - 1; i >= 0; i--) {
      this.node.removeEventListener(al, this.bus.subscribers[i], false);
    }
  } else {
    this.node.removeEventListener(al, b, false);
  }
  this.bus.off(al, b);
  return this;
};

El.prototype.trigger = function (a, b) {
  this.bus.trigger(a, b);
  return this;
};

El.prototype.contains = function (element) {
  return this.node.contains(isNode(element) ? element : element.getRoot());
};

module.exports = El;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isObject(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isNode(node) {
  var str = (node ? Object.prototype.toString.call(node) : "").substring(8);
  return str.indexOf("HTML") === 0 || str.indexOf("SVG") === 0;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function setRefs(child) {
  var cr = child.ref;
  if (cr && !this.refs[cr]) {
    this.refs[cr] = child;
  }
  for (var k in child.refs) {
    if (!this.refs[k]) {
      this.refs[k] = child.refs[k];
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    IS_VALUE_PX = _require.IS_VALUE_PX,
    IS_VALUE_DEG = _require.IS_VALUE_DEG;

module.exports = function propertyUnit(property, a) {
  if (IS_VALUE_PX.indexOf(property) > -1) {
    return typeof a === "number" ? a + "px" : a;
  } else if (IS_VALUE_DEG.indexOf(property) > -1) {
    return typeof a === "number" ? a + "deg" : a;
  }

  return a && a.toString();
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Bus(props) {
  this.target = props.target || this;
  this.subscribers = {};
}

Bus.prototype.once = function (name, callback) {
  var _this = this;

  var _once = void 0;

  if (typeof callback === "undefined") {
    throw new Error("Once cannot be used without a valid callback");
  }

  _once = function once(a) {
    _this.off(name, _once);
    callback.call(_this.target, a);
  };

  return this.on(name, _once);
};

Bus.prototype.off = function (name, callback) {
  var nameLower = name.toLowerCase().trim();
  var index = (this.subscribers[nameLower] || []).indexOf(callback);
  if (index > -1) {
    this.subscribers[nameLower].splice(index, 1);
  } else if (typeof callback === "undefined") {
    this.subscribers[nameLower] = [];
  }
  return this.target;
};

Bus.prototype.on = function (name, callback) {
  var nameLower = name.toLowerCase().trim();
  if (typeof callback === "function") {
    this.subscribers[nameLower] = (this.subscribers[nameLower] || []).concat(callback);
  }
  return this.target;
};

Bus.prototype.trigger = function (name, value) {
  var nameLower = name.toLowerCase().trim();
  var list = (this.subscribers[nameLower] || []).slice();

  for (var i = 0, n = list.length; i < n; i++) {
    list[i].call(this.target, value);
  }

  return this.target;
};

module.exports = Bus;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var El = __webpack_require__(1);
var Component = __webpack_require__(12);
var And = __webpack_require__(13);
var isNode = __webpack_require__(3);

var body = el(document.body);

function el(a, b, c) {
  if (Component.lib[a]) {
    return new Component.lib[a](b, c);
  } else if (a instanceof Text || a instanceof Comment) {
    return a;
  } else if (a === "body") {
    return body;
  } else {
    return new El(a, b, c);
  }
}

el.and = function (x) {
  return new And(x);
};

el.onAttr = function (name, callback) {
  El.__onAttr[name.toLowerCase()] = callback;
};

el.defaultProps = function (props) {
  Object.assign(El.__defaultProps, props);
};

el.onCreate = function (callback) {
  El.__onCreate.push(callback);
};

el.fn = function (name, callback) {
  El.prototype[name] = callback;
  Component.prototype[name] = Component.__extend(name);
  And.prototype[name] = And.__extend(name);

  for (var k in Component.lib) {
    if (!Component.lib[k].prototype[name]) {
      Component.lib[k].prototype[name] = Component.prototype[name];
    }
  }
};

el.getElementById = function (id) {
  var node = void 0;
  var element = void 0;

  if (el.id[id]) {
    return el.id[id];
  }

  node = document.getElementById(id);
  element = node && el(node);
  if (node) {
    el.id[id] = element;
  }
  return element;
};

el.getComponentById = function (id) {
  return Component.id[id];
};

el.mapChildren = function (node) {
  var res = [];
  var children = node.childNodes;

  var i = -1;
  var n = children.length;

  while (++i < n) {
    if (isNode(children[i])) {
      res.push(el(children[i]));
    }
  }

  return res;
};

el.id = El.id;
el.create = Component.create;

module.exports = el;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    MOUNTED = _require.MOUNTED;

module.exports = function mount(node) {
  var children = node.childNodes;

  if (document.body.contains(node) && MOUNTED.indexOf(node) === -1) {
    MOUNTED.push(node);

    node.dispatchEvent(new Event("mount", { bubbles: false }));

    for (var i = 0, n = children.length; i < n; i++) {
      mount(children[i]);
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    MOUNTED = _require.MOUNTED;

module.exports = function unmount(node) {
  var children = node.childNodes;
  var indexOf = MOUNTED.indexOf(node);
  if (indexOf !== -1) {
    MOUNTED.splice(indexOf, 1);

    node.dispatchEvent(new Event("unmount", { bubbles: false }));

    for (var i = 0, n = children.length; i < n; i++) {
      unmount(children[i]);
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var propertyUnit = __webpack_require__(5);

module.exports = function transformValue(name, value) {
  var result = [];

  if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
    if (value.x) {
      result.push(propertyUnit(name, value.x));
    }

    if (value.y) {
      result.push(propertyUnit(name, value.y));
    }

    if (value.z) {
      result.push(propertyUnit(name, value.z));
    }
  } else {
    result.push(propertyUnit(name, value));
  }

  return name + "(" + result.join(", ") + ")";
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function toUnit(a) {
  return a.slice(-2) === "px" ? Number(a.slice(0, -2)) : a;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2);
var setRefs = __webpack_require__(4);
var Bus = __webpack_require__(6);
var El = __webpack_require__(1);

function Component() {}

Component.__extend = function (name) {
  return function (a, b, c) {
    var o = this.node ? this.node[name](a, b, c) : El.prototype[name].call(null, a, b, c);
    return o === this.node ? this : o;
  };
};

Component.lib = {};
Component.id = {};

for (var k in El.prototype) {
  Component.prototype[k] = Component.__extend(k);
}

Component.prototype.append = function (children) {
  this.node.append(children);

  for (var k in this.node.refs) {
    if (!this.refs[k]) {
      this.refs[k] = this.node.refs[k];
    }
  }

  return this;
};

Component.prototype.attr = function (x) {
  if (x && x.id) {
    Component.id[x.id] = this;
  }
  return Component.__extend("attr").call(this, x);
};

Component.prototype.on = function (a, b) {
  return this.bus.on(a, b);
};

Component.prototype.once = function (a, b) {
  return this.bus.once(a, b);
};

Component.prototype.off = function (a, b) {
  return this.bus.off(a, b);
};

Component.prototype.trigger = function (a, b) {
  return this.bus.trigger(a, b);
};

Component.prototype.getEl = function () {
  return this.node.getEl();
};

Component.create = function (name, obj) {
  function C(a, b) {
    var children = Array.isArray(a) ? a : b || [];

    this.props = isObject(a) ? a : {};
    this.bus = new Bus({ target: this });
    this.refs = {};
    this.ref = this.props.ref;
    this.tagName = name;

    for (var k in El.__defaultProps) {
      if (!this.props[k]) {
        this.props[k] = El.__defaultProps[k];
      }
    }

    if (obj.constructor) {
      obj.constructor.call(this, this.props);
    }

    if (obj.render) {
      this.node = obj.render.call(this, this.props);

      if (typeof this.node === "undefined") {
        throw new Error("Component \"" + name + "\" does not return a valid element.");
      }

      this.ref = this.props.ref || this.node.ref;

      for (var _k in this.refs) {
        for (var j in this.refs[_k].refs) {
          if (!this.refs[j]) {
            this.refs[j] = this.refs[_k].refs[j];
          }
        }

        if (this.refs[_k].ref && !this.refs[this.refs[_k].ref]) {
          this.refs[this.refs[_k].ref] = this.refs[_k].ref;
        }
      }

      for (var _k2 in this.node.refs) {
        if (!this.refs[_k2]) {
          this.refs[_k2] = this.node.refs[_k2];
        }
      }

      this.append(children);
    }

    if (this.props.id) {
      Component.id[this.props.id] = this;
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

module.exports = Component;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var El = __webpack_require__(1);

function And(group) {
  this.group = [].concat(group);
}

And.prototype.and = function (x) {
  this.group = this.group.concat(x);
  return this;
};

And.__extend = function (key) {
  return function (a, b, c) {
    for (var i = 0, n = this.group.length; i < n; i++) {
      this.group[i][key](a, b, c);
    }
    return this;
  };
};

for (var k in El.prototype) {
  And.prototype[k] = And.__extend(k);
}

module.exports = And;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map