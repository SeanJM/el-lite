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


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (t) {
  function e(n) {
    if (o[n]) return o[n].exports;var r = o[n] = { i: n, l: !1, exports: {} };return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
  }var o = {};return e.m = t, e.c = o, e.d = function (t, o, n) {
    e.o(t, o) || Object.defineProperty(t, o, { configurable: !1, enumerable: !0, get: n });
  }, e.n = function (t) {
    var o = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return e.d(o, "a", o), o;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 6);
}([function (t, e, o) {
  "use strict";
  var n = {},
      r = r || void 0,
      i = r ? r.getComputedStyle(document.body) : {};n.transform = i.webkitTransform ? "webkitTransform" : i.MozTransform ? "MozTransform" : i.msTransform ? "msTransform" : "transform", n.userSelect = i.webkitUserSelect ? "webkitUserSelect" : i.MozUserSelect ? "MozUserSelect" : i.msUserSelect ? "msUserSelect" : "userSelect";t.exports = { MOUNTED: [], STYLE_NAME: n, IS_OFFSET: ["width", "height", "top", "left"], XLINK_NS: "http://www.w3.org/1999/xlink", SVG_NS: "http://www.w3.org/2000/svg", IS_VALUE_DEG: ["rotate", "rotateX", "rotateY", "rotateZ"], IS_VALUE_PX: ["left", "right", "top", "bottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "height", "width", "minHeight", "minWidth", "maxHeight", "maxWidth", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "translate", "translateX", "translateY", "translateZ"], IS_TRANSFORM: ["rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "translateX", "translateY", "translateZ"] };
}, function (t, e, o) {
  "use strict";
  function n() {
    var t = this,
        e = [arguments[0], arguments[1], arguments[2]],
        o = s(e[0]),
        r = [];this.tagName = o ? arguments[0].tagName.toLowerCase() : "div", this.bus = new h({ target: this }), this.refs = {};for (var u = 0, a = e.length; u < a; u++) {
      "string" == typeof e[u] ? this.tagName = e[u] : i(e[u]) ? this.props = e[u] : Array.isArray(e[u]) && (r = e[u]);
    }for (this.isSvg = -1 !== ["use", "svg"].indexOf(this.tagName), o ? this.node = e[0] : this.isSvg ? this.node = document.createElementNS(y, this.tagName) : this.node = document.createElement(this.tagName), this.append(r), this.attr(this.props), u = 0, a = n.__onCreate.length; u < a; u++) {
      n.__onCreate[u].call(this);
    }o && setTimeout(function () {
      f(t.node);
    }, 0);
  }var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      i = o(2),
      s = o(7),
      u = o(3),
      f = o(8),
      a = o(9),
      p = o(10),
      c = o(4),
      h = o(5),
      l = o(0),
      d = l.XLINK_NS,
      y = l.SVG_NS,
      g = l.IS_TRANSFORM,
      v = l.STYLE_NAME;n.__onAttr = {}, n.__onCreate = [], n.prototype.setStyle = function (t) {
    var e,
        o = { transform: [], default: [] },
        n = [],
        i = {};for (var s in t) {
      if (g.indexOf(s) > -1) {
        if ("object" === r(t[s])) for (var u in t[s]) {
          o.transform.push(p(u, t[s][u]));
        } else o.transform.push(p(s, t[s]));
      } else n.push({ name: s, value: c(s, t[s]) });
    }o.transform.length && n.push({ name: "transform", value: o.transform.join(" ") });for (var f = 0, a = n.length; f < a; f++) {
      e = v[n[f].name] || n[f].name, this.node.style[e] = n[f].value, i[e] = n[f].value;
    }this.trigger("style", { list: n, value: i });
  }, n.prototype.style = function (t) {
    return "object" === (void 0 === t ? "undefined" : r(t)) ? (this.setStyle(t), this) : "string" == typeof t ? window.getComputedStyle(this.node)[v[t] || t] : window.getComputedStyle(this.node);
  }, n.prototype.value = function (t) {
    return void 0 === t ? this.node.value : (this.node.value = t, this);
  }, n.prototype.offset = function () {
    return this.node.getBoundingClientRect();
  }, n.prototype.classList = function () {
    var t = this.node.getAttribute("class");return t ? t.split(" ") : [];
  }, n.prototype.removeClass = function (t) {
    var e = this.classList(),
        o = e.indexOf(t);return o > -1 && e.splice(o, 1), this.node.setAttribute("class", e.join(" ")), this;
  }, n.prototype.addClass = function (t) {
    var e = this.classList();return -1 === e.indexOf(t) && e.push(t), this.node.setAttribute("class", e.join(" ")), this;
  }, n.prototype.getRoot = function () {
    return this.node;
  }, n.prototype.getEl = function () {
    return this;
  }, n.prototype.focus = function () {
    return this.node.focus(), this;
  }, n.prototype.append = function (t) {
    var e;if (t) for (var o = 0, n = (t = [].concat(t)).length; o < n; o++) {
      e = t[o].getRoot ? t[o].getRoot() : new Text(t[o]), this.getRoot().appendChild(e), f(e), u.call(this, t[o]);
    }return this;
  }, n.prototype.prepend = function (t) {
    for (var e = this.node.childNodes[0], o = [].concat(t), n = 0, r = o.length; n < r; n++) {
      e.parentNode.insertBefore(o[n].getRoot(), e), u.call(this, o[n]);
    }
  }, n.prototype.attr = function (t) {
    var e;if ("string" == typeof t) return this.node.getAttribute(t);for (var o in t) {
      e = o.toLowerCase(), "ref" === o ? this.ref = t[o] : n.__onAttr[e] ? n.__onAttr[e].call(this, t[o]) : "style" === o ? this.setStyle(t[o]) : "once" === o.substring(0, 4) ? this.once(o.substring(4), t[o]) : "on" === o.substring(0, 2) ? this.on(o.substring(2), t[o]) : "class" === o ? "string" == typeof t[o] && this.node.setAttribute("class", t[o].split(" ").filter(function (t) {
        return t.length;
      }).map(function (t) {
        return t.trim();
      }).join(" ")) : t[o] && (this.isSvg ? this.node.setAttributeNS("href" === o ? d : y, o, t[o]) : this.node.setAttribute(o, t[o]));
    }return this;
  }, n.prototype.closest = function (t) {
    return new n(this.node.closest(t));
  }, n.prototype.find = function (t) {
    return new n(this.node.querySelector(t));
  }, n.prototype.findAll = function (t) {
    for (var e = [], o = this.node.querySelectorAll(t), r = 0, i = o.length; r < i; r++) {
      e.push(new n(o[r]));
    }return e;
  }, n.prototype.children = function (t) {
    for (var e = [], o = this.node.childNodes, r = 0, i = o.length; r < i; r++) {
      if (s(o[r]) && (e.push(new n(o[r])), e[t])) return e[t];
    }return e;
  }, n.prototype.html = function (t) {
    return "string" != typeof t ? this.node.innerHTML : (this.node.innerHTML = t, this);
  }, n.prototype.remove = function () {
    return this.node.parentNode && (a(this.node), this.node.parentNode.removeChild(this.node)), this;
  }, n.prototype.replaceWith = function (t) {
    var e = t.getRoot();return this.node.parentNode.replaceChild(e, this.node), a(this.node), f(e), this;
  }, n.prototype.on = function (t, e) {
    var o = this,
        n = t.toLowerCase();return "function" == typeof e && (this.bus.on(n, e), this.node.addEventListener(n, function (t) {
      o.trigger(n, t);
    }, !1)), this;
  }, n.prototype.once = function (t, e) {
    return this.on(t, function o() {
      e.call(this), this.off(t, o);
    }), this;
  }, n.prototype.off = function (t, e) {
    var o = t.toLowerCase();if (e) this.node.removeEventListener(o, e, !1);else for (var n = this.bus.__s.length - 1; n >= 0; n--) {
      this.node.removeEventListener(o, this.bus.__s[n], !1);
    }return this.bus.off(o, e), this;
  }, n.prototype.trigger = function (t, e) {
    return this.bus.trigger(t, e), this;
  }, n.prototype.contains = function (t) {
    return this.node.contains(s(t) ? t : t.getRoot());
  }, t.exports = n;
}, function (t, e, o) {
  "use strict";
  t.exports = function (t) {
    return "[object Object]" === Object.prototype.toString.call(t);
  };
}, function (t, e, o) {
  "use strict";
  t.exports = function (t) {
    var e = t.ref;e && !this.refs[e] && (this.refs[e] = t);for (var o in t.refs) {
      this.refs[o] || (this.refs[o] = t.refs[o]);
    }
  };
}, function (t, e, o) {
  "use strict";
  var n = o(0),
      r = n.IS_VALUE_PX,
      i = n.IS_VALUE_DEG;t.exports = function (t, e) {
    return r.indexOf(t) > -1 ? "number" == typeof e ? e + "px" : e : i.indexOf(t) > -1 ? "number" == typeof e ? e + "deg" : e : e.toString();
  };
}, function (t, e, o) {
  "use strict";
  function n(t) {
    return t.toLowerCase().split(",");
  }function r(t) {
    this.__t = t.target || this, this.__s = {};
  }r.prototype.once = function (t, e) {
    var o = this;return this.on(t, function n(r) {
      o.off(t, n), e.call(o.target, r);
    });
  }, r.prototype.off = function (t, e) {
    var o = this;return n(t).forEach(function (t) {
      var n = t.trim(),
          r = (o.__s[n] || []).indexOf(e);r > -1 ? o.__s[n].splice(r, 1) : void 0 === e && (o.__s[n] = []);
    }), this.__t;
  }, r.prototype.on = function (t, e) {
    var o = this;return "function" == typeof e && n(t).forEach(function (t) {
      var n = t.trim();o.__s[n] = (o.__s[n] || []).concat(e);
    }), this.__t;
  }, r.prototype.trigger = function (t, e) {
    var o = this;return n(t).forEach(function (t) {
      var n = t.trim();(o.__s[n] || []).slice().forEach(function (t) {
        t.call(o.__t, e);
      });
    }), this.__t;
  }, t.exports = r;
}, function (t, e, o) {
  "use strict";
  function n(t, e, o) {
    return i.lib[t] ? new i.lib[t](e, o) : t instanceof Text || t instanceof Comment ? t : "body" === t ? s : new r(t, e, o);
  }var r = o(1),
      i = o(11),
      s = n(document.body);n.onAttr = function (t, e) {
    r.__onAttr[t.toLowerCase()] = e;
  }, n.onCreate = function (t) {
    r.__onCreate.push(t);
  }, n.fn = function (t, e) {
    r.prototype[t] = e, i.prototype[t] = function (e, o, n) {
      var i = r.prototype[t].call(this.node, e, o, n);return i === this.node ? this : i;
    };for (var o in i.lib) {
      i.lib[o].prototype[t] || (i.lib[o].prototype[t] = i.prototype[t]);
    }
  }, n.create = i.create, t.exports = n;
}, function (t, e, o) {
  "use strict";
  t.exports = function (t) {
    var e = (t ? Object.prototype.toString.call(t) : "").substring(8);return 0 === e.indexOf("HTML") || 0 === e.indexOf("SVG");
  };
}, function (t, e, o) {
  "use strict";
  var n = o(0).MOUNTED;t.exports = function t(e) {
    var o = e.childNodes;if (document.body.contains(e) && -1 === n.indexOf(e)) {
      n.push(e), e.dispatchEvent(new Event("mount", { bubbles: !1 }));for (var r = 0, i = o.length; r < i; r++) {
        t(o[r]);
      }
    }
  };
}, function (t, e, o) {
  "use strict";
  var n = o(0).MOUNTED;t.exports = function t(e) {
    var o = e.childNodes,
        r = n.indexOf(e);if (-1 !== r) {
      n.splice(r, 1), e.dispatchEvent(new Event("unmount", { bubbles: !1 }));for (var i = 0, s = o.length; i < s; i++) {
        t(o[i]);
      }
    }
  };
}, function (t, e, o) {
  "use strict";
  var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      r = o(4);t.exports = function (t, e) {
    var o = [];return "object" === (void 0 === e ? "undefined" : n(e)) ? (e.x && o.push(r(t, e.x)), e.y && o.push(r(t, e.y)), e.z && o.push(r(t, e.z))) : o.push(r(t, e)), t + "(" + o.join(", ") + ")";
  };
}, function (t, e, o) {
  "use strict";
  function n() {}function r(t) {
    return function (e, o, n) {
      var r = this.node[t](e, o, n);return r === this.node ? this : r;
    };
  }var i = o(2),
      s = o(3),
      u = o(5),
      f = o(1);n.lib = {};for (var a in f.prototype) {
    n.prototype[a] = r(a);
  }n.prototype.append = function (t) {
    this.node.append(t);for (var e in this.node.refs) {
      this.refs[e] || (this.refs[e] = this.node.refs[e]);
    }return this;
  }, n.prototype.on = function (t, e) {
    return this.bus.on(t, e);
  }, n.prototype.once = function (t, e) {
    return this.bus.once(t, e);
  }, n.prototype.off = function (t, e) {
    return this.bus.off(t, e);
  }, n.prototype.trigger = function (t, e) {
    return this.bus.trigger(t, e);
  }, n.create = function (t, e) {
    function o(o, n) {
      var r = Array.isArray(o) ? o : n || [];if (this.props = i(o) ? o : {}, this.bus = new u({ target: this }), this.refs = {}, this.ref = this.props.ref, this.tagName = t, e.constructor && e.constructor.call(this, this.props), e.render) {
        if (this.node = e.render.call(this, this.props), void 0 === this.node) throw new Error('Component "' + t + '" does not return a valid element.');this.ref = this.props.ref || this.node.ref;for (var s in this.node.refs) {
          this.refs[s] || (this.refs[s] = this.node.refs[s]);
        }this.append(r);
      }
    }for (var r in n.prototype) {
      o.prototype[r] = n.prototype[r];
    }e.append && (o.prototype.append = function (t) {
      if (t) {
        t = [].concat(t), e.append.call(this, t);for (var o = 0, n = t.length; o < n; o++) {
          s.call(this, t[o]);
        }
      }
    });for (r in e) {
      "render" !== r && "append" !== r && (o.prototype[r] = e[r]);
    }return n.lib[t] = o, o;
  }, t.exports = n;
}]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = test;
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
  document.body.appendChild(element);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(18);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

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

var a = (0, _index2.default)("div");
var b = (0, _index2.default)("x");

b.append(a);

(0, _log2.default)("componentAppend", b.node.node.childNodes.length === 1);

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
var a = (0, _index2.default)("div");
a.classy();
(0, _log2.default)("Add class", a.attr("class") === "classy");

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

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map