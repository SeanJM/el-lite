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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports =
/******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 7);
  /******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

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

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

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

  /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = function isObject(a) {
    return Object.prototype.toString.call(a) === "[object Object]";
  };

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = function isNode(node) {
    var str = (node ? Object.prototype.toString.call(node) : "").substring(8);
    return str.indexOf("HTML") === 0 || str.indexOf("SVG") === 0;
  };

  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

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

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

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

  /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

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

  /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

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

  /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

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

  /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

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

  /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

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

  /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = function toUnit(a) {
    return a.slice(-2) === "px" ? Number(a.slice(0, -2)) : a;
  };

  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

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

  /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

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

  /***/
}]
/******/);
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = test;
var target = document.getElementById("log-target");

function test(name, boolean) {
  var element = document.createElement("div");
  var testname = document.createElement("div");
  var value = document.createElement("div");

  element.className = "log-message";
  testname.className = "log-message_test-name";
  value.className = "log-message_test-value";

  testname.innerHTML = name;

  if (boolean) {
    element.className += " log-message--true";
  } else {
    element.className += " log-message--false";
  }

  element.appendChild(testname);
  element.appendChild(value);
  target.appendChild(element);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

__webpack_require__(13);

__webpack_require__(8);

__webpack_require__(6);

__webpack_require__(5);

__webpack_require__(4);

__webpack_require__(3);

__webpack_require__(10);

__webpack_require__(7);

__webpack_require__(17);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(28);

__webpack_require__(23);

__webpack_require__(11);

__webpack_require__(26);

__webpack_require__(29);

__webpack_require__(24);

__webpack_require__(27);

__webpack_require__(22);

__webpack_require__(18);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(14);

__webpack_require__(12);

__webpack_require__(19);

__webpack_require__(25);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = (0, _index2.default)("input", { ref: "name", type: "text" });

_index2.default.create("Modal", {
  append: function append(children) {
    this.refs.content.append(children);
  },
  render: function render() {
    return (0, _index2.default)("div", {
      class: "modal"
    }, [(0, _index2.default)("div", {
      class: "modal_chrome"
    }, [(0, _index2.default)("div", {
      ref: "content",
      class: "modal_content"
    })])]);
  }
});

_index2.default.create("Modal2", {
  render: function render() {
    return (0, _index2.default)("Modal", [input]);
  }
});

var m = (0, _index2.default)("Modal");
var m2 = (0, _index2.default)("Modal2");
m.append((0, _index2.default)("div"));

(0, _log2.default)("component reference (depper)", input === m2.refs.name);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.create("x", {
  render: function render() {
    this.refs.test = (0, _index2.default)({ ref: "test2" });
    return (0, _index2.default)("div");
  }
});

var b = (0, _index2.default)("x");

(0, _log2.default)("component refs (after render)", !!b.refs.test2);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.create("x", {
  render: function render() {
    return (0, _index2.default)("div");
  }
});

_index2.default.create("y", {
  render: function render() {
    return (0, _index2.default)("x");
  }
});

var a = (0, _index2.default)("x", { ref: "a" });
var b = (0, _index2.default)("x", [a]);

var c = (0, _index2.default)("y", { ref: "c" }, [b]);
var d = (0, _index2.default)("y", [c]);

(0, _log2.default)("Component reference", b.refs.a === a && d.refs.c === c);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.create("x", {
  render: function render() {
    return (0, _index2.default)("div");
  }
});

var a = (0, _index2.default)("div");
var b = (0, _index2.default)("x");

b.append(a);

(0, _log2.default)("componentAppend", b.node.node.childNodes.length === 1);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.defaultProps({
  l: "testing"
});

var a = (0, _index2.default)("div");

(0, _log2.default)("Default props", a.props.l === "testing");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)("div");
var b = (0, _index2.default)("div");
_index2.default.and(a).and(b).addClass("my-class-name");

(0, _log2.default)("And", a.attr("class") === "my-class-name" && b.attr("class") === "my-class-name");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)("div");
a.addClass("my-class-name");
(0, _log2.default)("Add class", a.attr("class") === "my-class-name");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)("div");
var b = (0, _index2.default)("body");
var c = document.createElement("div");

b.node.appendChild(c);
b.append(a);

(0, _log2.default)("Contains", b.contains(a) && b.contains(c));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)("div");

a.html("test");

(0, _log2.default)("HTML", a.node.innerHTML === "test");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)("div", {
  class: "my-class-name"
});
a.removeClass("my-class-name");
(0, _log2.default)("Remove class", a.attr("class") === "");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)({ class: "a" });
var b = (0, _index2.default)({ class: "b" });
var c = (0, _index2.default)({ class: "c" });
var d = (0, _index2.default)({ class: "d" });

var e = (0, _index2.default)({ class: "a" });
var f = (0, _index2.default)({ class: "b" });
var g = (0, _index2.default)({ class: "c" });

a.append([b, d]);
e.append([f]);
c.after(b);
g.after(f);

console.log(a);

(0, _log2.default)("After", a.children()[1].node === c.node && e.children()[1].node === g.node);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var b = (0, _index2.default)("div", { ref: "a" });
var a = (0, _index2.default)("div", [b]);

(0, _log2.default)("Parent", b.parent().node === a.node);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var b = (0, _index2.default)("div", { ref: "a" });
var a = (0, _index2.default)("div", [b]);

var c = (0, _index2.default)("div", { ref: "c" });
var d = (0, _index2.default)("div", { ref: "d" });
var e = (0, _index2.default)("div", { ref: "e" });

c.append(d.append(e));

(0, _log2.default)("Element reference", a.refs.a === b && c.refs.d === d && d.refs.e === e);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)("div", {
  id: "test"
});

(0, _log2.default)("elements (#test)", _index2.default.id.test.node === a.node);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.create("test", {
  render: function render() {
    return (0, _index2.default)("div");
  }
});

_index2.default.fn("t", function (a) {
  return a;
});

(0, _log2.default)("el.augment", (0, _index2.default)("div").t(true) === (0, _index2.default)("test").t(true));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMounted = [false, false, false];

var a = (0, _index2.default)("div", {
  onMount: function onMount() {
    isMounted[0] = !isMounted[0];
  }
});

var b = (0, _index2.default)("div", {
  onUnMount: function onUnMount() {
    console.log("UNMOUNT");
  },
  onMount: function onMount() {
    console.log("MOUNT");
    isMounted[1] = !isMounted[1];
  }
});

var c = (0, _index2.default)("div");

(0, _index2.default)(document.body).append([a, c]);
a.append(b);
b.remove(b);
a.append(b);

(0, _log2.default)("onMount", isMounted[0] === true && isMounted[1] === false);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)({
  style: { height: "10px" }
});

a.style({ height: undefined });
(0, _log2.default)("style (undefined)", a.style("height"));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMounted = [false, false, false];
_index2.default.create("x", {
  onMount: function onMount() {
    isMounted[0] = !isMounted[0];
  },
  render: function render() {
    var _this = this;

    return (0, _index2.default)("div", {
      class: "app",
      onMount: function onMount() {
        return _this.onMount();
      }
    });
  }
});

var a = (0, _index2.default)("x");

(0, _index2.default)("body").append(a);

(0, _log2.default)("onMount (Body)", isMounted[0] === true);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMounted = [false, false];
var a = (0, _index2.default)("div");

(0, _index2.default)(document.body).append(a);

a.on("unmount", function () {
  isMounted[0] = true;
});

a.remove();

(0, _log2.default)("onUnmount", isMounted[0] === true);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.create("tfy", {
  render: function render() {
    return (0, _index2.default)({
      onMount: function onMount() {
        this.state = {
          index: 1
        };
        this.refs.text.html(this.state.index);
      },
      onClick: function onClick() {
        this.state.index += 1;
        this.refs.text.html(this.state.index);
      },


      style: {
        width: 60,
        height: 60,
        margin: 10,
        background: "red"
      }
    }, [(0, _index2.default)({
      ref: "text",
      style: {
        fontSize: 10,
        lineHeight: "10px"
      }
    })]);
  }
});

var a = (0, _index2.default)("div", {
  onMount: function onMount() {
    this.state = {
      index: 1
    };
    this.refs.text.html(this.state.index);
  },
  onClick: function onClick() {
    this.state.index += 1;
    this.refs.text.html(this.state.index);
  },


  style: {
    width: 60,
    height: 60,
    margin: 10,
    background: "red"
  }
}, [(0, _index2.default)({
  ref: "text",
  style: {
    fontSize: 10,
    lineHeight: "10px"
  }
})]);

var b = (0, _index2.default)("div", {
  onMount: function onMount() {
    this.state = {
      index: 1
    };
    this.refs.text.html(this.state.index);
  },
  onMouseDown: function onMouseDown() {
    this.state.index += 1;
    this.refs.text.html(this.state.index);
  },


  style: {
    width: 60,
    height: 60,
    margin: 10,
    background: "green"
  }
}, [(0, _index2.default)({
  ref: "text",
  style: {
    fontSize: 10,
    lineHeight: "10px"
  }
})]);

var c = (0, _index2.default)("tfy");

(0, _index2.default)("body").append([a, b, c]);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)("div", {
  style: {
    marginLeft: "16px"
  }
});

(0, _log2.default)("style (16px -> 16)", a.style("marginLeft") === 16);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMounted = [false, false, false];

var a = (0, _index2.default)("div", {
  onClick: function onClick() {
    isMounted[0] = !isMounted[0];
  },
  onceClack: function onceClack() {
    isMounted[1] = !isMounted[1];
  }
});

_index2.default.create("x", {
  constructor: function constructor(props) {
    this.on("click", props.onClick);
  },
  render: function render() {
    return (0, _index2.default)("div");
  }
});

var b = (0, _index2.default)("x", {
  onClick: function onClick() {
    isMounted[2] = !isMounted[2];
  }
});

a.trigger("click");
a.off("click");
a.trigger("click");
a.trigger("clack");
a.trigger("clack");
b.trigger("click");

(0, _log2.default)("on_off", isMounted[0] === true && isMounted[1] === true && isMounted[2] === true);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = (0, _index2.default)(document.body);

_index2.default.create("Icon", {
  render: function render(props) {
    return (0, _index2.default)("svg", {
      style: {
        display: "inline-block",
        width: "100px",
        height: "100px"
      }
    }, [(0, _index2.default)("use", { "href": "#icon_" + props.type })]);
  }
});

body.append((0, _index2.default)("Icon", { type: "eye" }));

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (0, _index2.default)("img");

a.attr({
  src: "alf.jpg"
});

(0, _index2.default)("body").append(a);

(0, _log2.default)("image src", true);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMounted = [false, false];

var a = (0, _index2.default)("div");

a.once("click", function () {
  isMounted[0] = true;
});

a.on("click", function () {
  isMounted[1] = true;
});

a.trigger("click");

(0, _log2.default)("on_once", isMounted[0] === true && isMounted[1] === true);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.fn("classy", function () {
  this.addClass("classy");
});
_index2.default.create("C", {
  render: function render() {
    return (0, _index2.default)("div");
  }
});

var a = (0, _index2.default)("div");
var b = (0, _index2.default)("C");
a.classy();
b.classy();
(0, _log2.default)("el.fn", a.attr("class") === "classy" && b.attr("class") === "classy");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _log = __webpack_require__(1);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")];

a[0].appendChild(a[1]);
a[0].appendChild(a[2]);
a[0].appendChild(a[3]);
a[0].appendChild(new Text("Omit"));

(0, _log2.default)("map children", _index2.default.mapChildren(a[0]).length === 3);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map