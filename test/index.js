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
  function e(r) {
    if (o[r]) return o[r].exports;var n = o[r] = { i: r, l: !1, exports: {} };return t[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports;
  }var o = {};return e.m = t, e.c = o, e.d = function (t, o, r) {
    e.o(t, o) || Object.defineProperty(t, o, { configurable: !1, enumerable: !0, get: r });
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
  var r = {},
      n = n || void 0,
      i = n ? n.getComputedStyle(document.body) : {};r.transform = i.webkitTransform ? "webkitTransform" : i.MozTransform ? "MozTransform" : i.msTransform ? "msTransform" : "transform", r.userSelect = i.webkitUserSelect ? "webkitUserSelect" : i.MozUserSelect ? "MozUserSelect" : i.msUserSelect ? "msUserSelect" : "userSelect";t.exports = { MOUNTED: [], STYLE_NAME: r, IS_OFFSET: ["width", "height", "top", "left"], XLINK_NS: "http://www.w3.org/1999/xlink", SVG_NS: "http://www.w3.org/2000/svg", IS_VALUE_DEG: ["rotate", "rotateX", "rotateY", "rotateZ"], IS_VALUE_PX: ["left", "right", "top", "bottom", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom", "height", "width", "minHeight", "minWidth", "maxHeight", "maxWidth", "padding", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "translate", "translateX", "translateY", "translateZ"], IS_TRANSFORM: ["rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "translateX", "translateY", "translateZ"] };
}, function (t, e, o) {
  "use strict";
  function r() {
    var t = this,
        e = [arguments[0], arguments[1], arguments[2]],
        o = s(e[0]),
        n = [];this.tagName = o ? arguments[0].tagName.toLowerCase() : "div", this.bus = new l({ target: this }), this.refs = {};for (var u = 0, a = e.length; u < a; u++) {
      "string" == typeof e[u] ? this.tagName = e[u] : i(e[u]) ? this.props = e[u] : Array.isArray(e[u]) && (n = e[u]);
    }for (this.isSvg = -1 !== ["use", "svg"].indexOf(this.tagName), o ? this.node = e[0] : this.isSvg ? this.node = document.createElementNS(g, this.tagName) : this.node = document.createElement(this.tagName), this.append(n), this.attr(this.props), u = 0, a = r.__onCreate.length; u < a; u++) {
      r.__onCreate[u].call(this);
    }o && setTimeout(function () {
      p(t.node);
    }, 0);
  }var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      i = o(2),
      s = o(7),
      u = o(3),
      p = o(8),
      a = o(9),
      f = o(10),
      c = o(4),
      h = o(11),
      l = o(5),
      d = o(0),
      y = d.XLINK_NS,
      g = d.SVG_NS,
      b = d.IS_TRANSFORM,
      m = d.STYLE_NAME;r.__onAttr = {}, r.__onCreate = [], r.prototype.setStyle = function (t) {
    var e,
        o = { transform: [], default: [] },
        r = [],
        i = {};for (var s in t) {
      if (b.indexOf(s) > -1) {
        if ("object" === n(t[s])) for (var u in t[s]) {
          o.transform.push(f(u, t[s][u]));
        } else o.transform.push(f(s, t[s]));
      } else r.push({ name: s, value: c(s, t[s]) });
    }o.transform.length && r.push({ name: "transform", value: o.transform.join(" ") });for (var p = 0, a = r.length; p < a; p++) {
      e = m[r[p].name] || r[p].name, this.node.style[e] = r[p].value, i[e] = r[p].value;
    }this.trigger("style", { list: r, value: i });
  }, r.prototype.style = function (t) {
    return "object" === (void 0 === t ? "undefined" : n(t)) ? (this.setStyle(t), this) : "string" == typeof t ? h(window.getComputedStyle(this.node)[m[t] || t]) : window.getComputedStyle(this.node);
  }, r.prototype.value = function (t) {
    return void 0 === t ? this.node.value : (this.node.value = t, this);
  }, r.prototype.offset = function () {
    return this.node.getBoundingClientRect();
  }, r.prototype.classList = function () {
    var t = this.node.getAttribute("class");return t ? t.split(" ") : [];
  }, r.prototype.removeClass = function (t) {
    var e = this.classList(),
        o = e.indexOf(t);return o > -1 && e.splice(o, 1), this.node.setAttribute("class", e.join(" ")), this;
  }, r.prototype.addClass = function (t) {
    var e = this.classList();return -1 === e.indexOf(t) && e.push(t), this.node.setAttribute("class", e.join(" ")), this;
  }, r.prototype.getRoot = function () {
    return this.node;
  }, r.prototype.getEl = function () {
    return this;
  }, r.prototype.focus = function () {
    return this.node.focus(), this;
  }, r.prototype.append = function (t) {
    var e;if (t) for (var o = 0, r = (t = [].concat(t)).length; o < r; o++) {
      e = t[o].getRoot ? t[o].getRoot() : new Text(t[o]), this.getRoot().appendChild(e), p(e), u.call(this, t[o]);
    }return this;
  }, r.prototype.prepend = function (t) {
    for (var e = this.node.childNodes[0], o = [].concat(t), r = 0, n = o.length; r < n; r++) {
      e.parentNode.insertBefore(o[r].getRoot(), e), u.call(this, o[r]);
    }
  }, r.prototype.attr = function (t) {
    var e;if ("string" == typeof t) return this.node.getAttribute(t);for (var o in t) {
      e = o.toLowerCase(), "ref" === o ? this.ref = t[o] : r.__onAttr[e] ? r.__onAttr[e].call(this, t[o]) : "style" === o ? this.setStyle(t[o]) : "once" === o.substring(0, 4) ? this.once(o.substring(4), t[o]) : "on" === o.substring(0, 2) ? this.on(o.substring(2), t[o]) : "class" === o ? "string" == typeof t[o] && this.node.setAttribute("class", t[o].split(" ").filter(function (t) {
        return t.length;
      }).map(function (t) {
        return t.trim();
      }).join(" ")) : t[o] && (this.isSvg ? this.node.setAttributeNS("href" === o ? y : g, o, t[o]) : this.node.setAttribute(o, t[o].toString()));
    }return this;
  }, r.prototype.closest = function (t) {
    return new r(this.node.closest(t));
  }, r.prototype.find = function (t) {
    return new r(this.node.querySelector(t));
  }, r.prototype.findAll = function (t) {
    for (var e = [], o = this.node.querySelectorAll(t), n = 0, i = o.length; n < i; n++) {
      e.push(new r(o[n]));
    }return e;
  }, r.prototype.children = function (t) {
    for (var e = [], o = this.node.childNodes, n = 0, i = o.length; n < i; n++) {
      if (s(o[n]) && (e.push(new r(o[n])), e[t])) return e[t];
    }return e;
  }, r.prototype.html = function (t) {
    return void 0 === t ? this.node.innerHTML : (this.node.innerHTML = t, this);
  }, r.prototype.remove = function () {
    return this.node.parentNode && (a(this.node), this.node.parentNode.removeChild(this.node)), this;
  }, r.prototype.replaceWith = function (t) {
    var e = t.getRoot();return this.node.parentNode.replaceChild(e, this.node), a(this.node), p(e), this;
  }, r.prototype.on = function (t, e) {
    var o = this,
        r = t.toLowerCase();return "function" == typeof e && (this.bus.on(r, e), "load" === r ? this.node.onload = function (t) {
      o.trigger(r, t);
    } : this.node.addEventListener(r, function (t) {
      o.trigger(r, t);
    }, !1)), this;
  }, r.prototype.once = function (t, e) {
    return this.on(t, function o() {
      e.call(this), this.off(t, o);
    }), this;
  }, r.prototype.off = function (t, e) {
    var o = t.toLowerCase();if (e) this.node.removeEventListener(o, e, !1);else for (var r = this.bus.subscribers.length - 1; r >= 0; r--) {
      this.node.removeEventListener(o, this.bus.subscribers[r], !1);
    }return this.bus.off(o, e), this;
  }, r.prototype.trigger = function (t, e) {
    return this.bus.trigger(t, e), this;
  }, r.prototype.contains = function (t) {
    return this.node.contains(s(t) ? t : t.getRoot());
  }, t.exports = r;
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
  var r = o(0),
      n = r.IS_VALUE_PX,
      i = r.IS_VALUE_DEG;t.exports = function (t, e) {
    return n.indexOf(t) > -1 ? "number" == typeof e ? e + "px" : e : i.indexOf(t) > -1 ? "number" == typeof e ? e + "deg" : e : e && e.toString();
  };
}, function (t, e, o) {
  "use strict";
  function r(t) {
    this.target = t.target || this, this.subscribers = {};
  }r.prototype.once = function (t, e) {
    var o = this;return this.on(t, function r(n) {
      o.off(t, r), e.call(o.target, n);
    });
  }, r.prototype.off = function (t, e) {
    var o = t.toLowerCase().trim(),
        r = (this.subscribers[o] || []).indexOf(e);return r > -1 ? this.subscribers[o].splice(r, 1) : void 0 === e && (this.subscribers[o] = []), this.target;
  }, r.prototype.on = function (t, e) {
    var o = t.toLowerCase().trim();return "function" == typeof e && (this.subscribers[o] = (this.subscribers[o] || []).concat(e)), this.target;
  }, r.prototype.trigger = function (t, e) {
    for (var o = t.toLowerCase().trim(), r = this.subscribers[o] || [], n = 0, i = r.length; n < i; n++) {
      r[n].call(this.target, e);
    }return this.target;
  }, t.exports = r;
}, function (t, e, o) {
  "use strict";
  function r(t, e, o) {
    return i.lib[t] ? new i.lib[t](e, o) : t instanceof Text || t instanceof Comment ? t : "body" === t ? u : new n(t, e, o);
  }var n = o(1),
      i = o(12),
      s = o(13),
      u = r(document.body);r.and = function (t) {
    return new s(t);
  }, r.onAttr = function (t, e) {
    n.__onAttr[t.toLowerCase()] = e;
  }, r.onCreate = function (t) {
    n.__onCreate.push(t);
  }, r.fn = function (t, e) {
    n.prototype[t] = e, i.prototype[t] = i.__extend(t), s.prototype[t] = s.__extend(t);for (var o in i.lib) {
      i.lib[o].prototype[t] || (i.lib[o].prototype[t] = i.prototype[t]);
    }
  }, r.create = i.create, t.exports = r;
}, function (t, e, o) {
  "use strict";
  t.exports = function (t) {
    var e = (t ? Object.prototype.toString.call(t) : "").substring(8);return 0 === e.indexOf("HTML") || 0 === e.indexOf("SVG");
  };
}, function (t, e, o) {
  "use strict";
  var r = o(0).MOUNTED;t.exports = function t(e) {
    var o = e.childNodes;if (document.body.contains(e) && -1 === r.indexOf(e)) {
      r.push(e), e.dispatchEvent(new Event("mount", { bubbles: !1 }));for (var n = 0, i = o.length; n < i; n++) {
        t(o[n]);
      }
    }
  };
}, function (t, e, o) {
  "use strict";
  var r = o(0).MOUNTED;t.exports = function t(e) {
    var o = e.childNodes,
        n = r.indexOf(e);if (-1 !== n) {
      r.splice(n, 1), e.dispatchEvent(new Event("unmount", { bubbles: !1 }));for (var i = 0, s = o.length; i < s; i++) {
        t(o[i]);
      }
    }
  };
}, function (t, e, o) {
  "use strict";
  var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      n = o(4);t.exports = function (t, e) {
    var o = [];return "object" === (void 0 === e ? "undefined" : r(e)) ? (e.x && o.push(n(t, e.x)), e.y && o.push(n(t, e.y)), e.z && o.push(n(t, e.z))) : o.push(n(t, e)), t + "(" + o.join(", ") + ")";
  };
}, function (t, e, o) {
  "use strict";
  t.exports = function (t) {
    return "px" === t.slice(-2) ? Number(t.slice(0, -2)) : t;
  };
}, function (t, e, o) {
  "use strict";
  function r() {}var n = o(2),
      i = o(3),
      s = o(5),
      u = o(1);r.__extend = function (t) {
    return function (e, o, r) {
      var n = this.node ? this.node[t](e, o, r) : u.prototype[t].call(null, e, o, r);return n === this.node ? this : n;
    };
  }, r.lib = {};for (var p in u.prototype) {
    r.prototype[p] = r.__extend(p);
  }r.prototype.append = function (t) {
    this.node.append(t);for (var e in this.node.refs) {
      this.refs[e] || (this.refs[e] = this.node.refs[e]);
    }return this;
  }, r.prototype.on = function (t, e) {
    return this.bus.on(t, e);
  }, r.prototype.once = function (t, e) {
    return this.bus.once(t, e);
  }, r.prototype.off = function (t, e) {
    return this.bus.off(t, e);
  }, r.prototype.trigger = function (t, e) {
    return this.bus.trigger(t, e);
  }, r.create = function (t, e) {
    function o(o, r) {
      var i = Array.isArray(o) ? o : r || [];if (this.props = n(o) ? o : {}, this.bus = new s({ target: this }), this.refs = {}, this.ref = this.props.ref, this.tagName = t, e.constructor && e.constructor.call(this, this.props), e.render) {
        if (this.node = e.render.call(this, this.props), void 0 === this.node) throw new Error('Component "' + t + '" does not return a valid element.');this.ref = this.props.ref || this.node.ref;for (var u in this.node.refs) {
          this.refs[u] || (this.refs[u] = this.node.refs[u]);
        }this.append(i);
      }
    }for (var u in r.prototype) {
      o.prototype[u] = r.prototype[u];
    }e.append && (o.prototype.append = function (t) {
      if (t) {
        t = [].concat(t), e.append.call(this, t);for (var o = 0, r = t.length; o < r; o++) {
          i.call(this, t[o]);
        }
      }
    });for (u in e) {
      "render" !== u && "append" !== u && (o.prototype[u] = e[u]);
    }return r.lib[t] = o, o;
  }, t.exports = r;
}, function (t, e, o) {
  "use strict";
  function r(t) {
    this.group = [].concat(t);
  }var n = o(1);r.prototype.and = function (t) {
    return this.group = this.group.concat(t), this;
  }, r.__extend = function (t) {
    return function (e, o, r) {
      for (var n = 0, i = this.group.length; n < i; n++) {
        this.group[n][t](e, o, r);
      }return this;
    };
  };for (var i in n.prototype) {
    r.prototype[i] = r.__extend(i);
  }t.exports = r;
}]);

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

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(22);

__webpack_require__(23);

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
var b = (0, _index2.default)("div");
_index2.default.and(a).and(b).addClass("my-class-name");

(0, _log2.default)("And", a.attr("class") === "my-class-name" && b.attr("class") === "my-class-name");

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
a.addClass("my-class-name");
(0, _log2.default)("Add class", a.attr("class") === "my-class-name");

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
var b = (0, _index2.default)("body");
var c = document.createElement("div");

b.node.appendChild(c);
b.append(a);

(0, _log2.default)("Contains", b.contains(a) && b.contains(c));

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

a.html("test");

(0, _log2.default)("HTML", a.node.innerHTML === "test");

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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

(0, _index2.default)(document.body).append(a);

a.on("unmount", function () {
  isMounted[0] = true;
});

a.remove();

(0, _log2.default)("onUnmount", isMounted[0] === true);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

(0, _index2.default)("body").append([a, b]);

/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map