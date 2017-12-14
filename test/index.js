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
  function e(o) {
    if (r[o]) return r[o].exports;var n = r[o] = { i: o, l: !1, exports: {} };return t[o].call(n.exports, n, n.exports, e), n.l = !0, n.exports;
  }var r = {};return e.m = t, e.c = r, e.d = function (t, r, o) {
    e.o(t, r) || Object.defineProperty(t, r, { configurable: !1, enumerable: !0, get: o });
  }, e.n = function (t) {
    var r = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return e.d(r, "a", r), r;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 6);
}([function (t, e, r) {
  "use strict";
  var o = {},
      n = n || void 0,
      i = n ? n.getComputedStyle(document.body) : {};o.transform = i.webkitTransform ? "webkitTransform" : i.MozTransform ? "MozTransform" : i.msTransform ? "msTransform" : "transform", o.userSelect = i.webkitUserSelect ? "webkitUserSelect" : i.MozUserSelect ? "MozUserSelect" : i.msUserSelect ? "msUserSelect" : "userSelect";t.exports = { MOUNTED: [], STYLE_NAME: o, IS_OFFSET: ["width", "height", "top", "left"], XLINK_NS: "http://www.w3.org/1999/xlink", SVG_NS: "http://www.w3.org/2000/svg", IS_VALUE_DEG: ["rotate", "rotateX", "rotateY", "rotateZ"], IS_VALUE_PX: ["left", "right", "top", "bottom", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom", "height", "width", "minHeight", "minWidth", "maxHeight", "maxWidth", "padding", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "translate", "translateX", "translateY", "translateZ"], IS_TRANSFORM: ["rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "translateX", "translateY", "translateZ"] };
}, function (t, e, r) {
  "use strict";
  function o() {
    var t = this,
        e = [arguments[0], arguments[1], arguments[2]],
        r = s(e[0]),
        n = [];this.tagName = r ? arguments[0].tagName.toLowerCase() : "div", this.bus = new l({ target: this }), this.refs = {};for (var u = 0, a = e.length; u < a; u++) {
      "string" == typeof e[u] ? this.tagName = e[u] : i(e[u]) ? this.props = e[u] : Array.isArray(e[u]) && (n = e[u]);
    }for (this.isSvg = -1 !== ["use", "svg"].indexOf(this.tagName), r ? this.node = e[0] : this.isSvg ? this.node = document.createElementNS(g, this.tagName) : this.node = document.createElement(this.tagName), this.append(n), this.attr(this.props), u = 0, a = o.__onCreate.length; u < a; u++) {
      o.__onCreate[u].call(this);
    }r && setTimeout(function () {
      p(t.node);
    }, 0);
  }var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      i = r(2),
      s = r(7),
      u = r(3),
      p = r(8),
      a = r(9),
      f = r(10),
      c = r(4),
      h = r(11),
      l = r(5),
      d = r(0),
      y = d.XLINK_NS,
      g = d.SVG_NS,
      b = d.IS_TRANSFORM,
      m = d.STYLE_NAME;o.__onAttr = {}, o.__onCreate = [], o.prototype.setStyle = function (t) {
    var e,
        r = { transform: [], default: [] },
        o = [],
        i = {};for (var s in t) {
      if (b.indexOf(s) > -1) {
        if ("object" === n(t[s])) for (var u in t[s]) {
          r.transform.push(f(u, t[s][u]));
        } else r.transform.push(f(s, t[s]));
      } else o.push({ name: s, value: c(s, t[s]) });
    }r.transform.length && o.push({ name: "transform", value: r.transform.join(" ") });for (var p = 0, a = o.length; p < a; p++) {
      e = m[o[p].name] || o[p].name, this.node.style[e] = o[p].value, i[e] = o[p].value;
    }this.trigger("style", { list: o, value: i });
  }, o.prototype.style = function (t) {
    return "object" === (void 0 === t ? "undefined" : n(t)) ? (this.setStyle(t), this) : "string" == typeof t ? h(window.getComputedStyle(this.node)[m[t] || t]) : window.getComputedStyle(this.node);
  }, o.prototype.value = function (t) {
    return void 0 === t ? this.node.value : (this.node.value = t, this);
  }, o.prototype.offset = function () {
    return this.node.getBoundingClientRect();
  }, o.prototype.classList = function () {
    var t = this.node.getAttribute("class");return t ? t.split(" ") : [];
  }, o.prototype.removeClass = function (t) {
    var e = this.classList(),
        r = e.indexOf(t);return r > -1 && e.splice(r, 1), this.node.setAttribute("class", e.join(" ")), this;
  }, o.prototype.addClass = function (t) {
    var e = this.classList();return -1 === e.indexOf(t) && e.push(t), this.node.setAttribute("class", e.join(" ")), this;
  }, o.prototype.getRoot = function () {
    return this.node;
  }, o.prototype.getEl = function () {
    return this;
  }, o.prototype.focus = function () {
    return this.node.focus(), this;
  }, o.prototype.append = function (t) {
    var e;if (t) for (var r = 0, o = (t = [].concat(t)).length; r < o; r++) {
      e = t[r].getRoot ? t[r].getRoot() : new Text(t[r]), this.getRoot().appendChild(e), p(e), u.call(this, t[r]);
    }return this;
  }, o.prototype.prepend = function (t) {
    for (var e = this.node.childNodes[0], r = [].concat(t), o = 0, n = r.length; o < n; o++) {
      e.parentNode.insertBefore(r[o].getRoot(), e), u.call(this, r[o]);
    }
  }, o.prototype.attr = function (t) {
    var e;if ("string" == typeof t) return this.node.getAttribute(t);for (var r in t) {
      e = r.toLowerCase(), "ref" === r ? this.ref = t[r] : o.__onAttr[e] ? o.__onAttr[e].call(this, t[r]) : "style" === r ? this.setStyle(t[r]) : "once" === r.substring(0, 4) ? this.once(r.substring(4), t[r]) : "on" === r.substring(0, 2) ? this.on(r.substring(2), t[r]) : "class" === r ? "string" == typeof t[r] && this.node.setAttribute("class", t[r].split(" ").filter(function (t) {
        return t.length;
      }).map(function (t) {
        return t.trim();
      }).join(" ")) : t[r] && (this.isSvg ? this.node.setAttributeNS("href" === r ? y : g, r, t[r]) : this.node.setAttribute(r, t[r].toString()));
    }return this;
  }, o.prototype.closest = function (t) {
    return new o(this.node.closest(t));
  }, o.prototype.find = function (t) {
    return new o(this.node.querySelector(t));
  }, o.prototype.findAll = function (t) {
    for (var e = [], r = this.node.querySelectorAll(t), n = 0, i = r.length; n < i; n++) {
      e.push(new o(r[n]));
    }return e;
  }, o.prototype.children = function (t) {
    for (var e = [], r = this.node.childNodes, n = 0, i = r.length; n < i; n++) {
      if (s(r[n]) && (e.push(new o(r[n])), e[t])) return e[t];
    }return e;
  }, o.prototype.html = function (t) {
    return void 0 === t ? this.node.innerHTML : (this.node.innerHTML = t, this);
  }, o.prototype.remove = function () {
    return this.node.parentNode && (a(this.node), this.node.parentNode.removeChild(this.node)), this;
  }, o.prototype.replaceWith = function (t) {
    var e = t.getRoot();return this.node.parentNode.replaceChild(e, this.node), a(this.node), p(e), this;
  }, o.prototype.on = function (t, e) {
    var r = this,
        o = t.toLowerCase();return "function" == typeof e && (this.bus.on(o, e), "load" === o ? this.node.onload = function (t) {
      r.trigger(o, t);
    } : 1 === this.bus.subscribers[o].length && this.node.addEventListener(o, function (t) {
      r.trigger(o, t);
    }, !1)), this;
  }, o.prototype.once = function (t, e) {
    return this.on(t, function r() {
      e.call(this), this.off(t, r);
    }), this;
  }, o.prototype.off = function (t, e) {
    var r = t.toLowerCase();if (e) this.node.removeEventListener(r, e, !1);else for (var o = this.bus.subscribers.length - 1; o >= 0; o--) {
      this.node.removeEventListener(r, this.bus.subscribers[o], !1);
    }return this.bus.off(r, e), this;
  }, o.prototype.trigger = function (t, e) {
    return this.bus.trigger(t, e), this;
  }, o.prototype.contains = function (t) {
    return this.node.contains(s(t) ? t : t.getRoot());
  }, t.exports = o;
}, function (t, e, r) {
  "use strict";
  t.exports = function (t) {
    return "[object Object]" === Object.prototype.toString.call(t);
  };
}, function (t, e, r) {
  "use strict";
  t.exports = function (t) {
    var e = t.ref;e && !this.refs[e] && (this.refs[e] = t);for (var r in t.refs) {
      this.refs[r] || (this.refs[r] = t.refs[r]);
    }
  };
}, function (t, e, r) {
  "use strict";
  var o = r(0),
      n = o.IS_VALUE_PX,
      i = o.IS_VALUE_DEG;t.exports = function (t, e) {
    return n.indexOf(t) > -1 ? "number" == typeof e ? e + "px" : e : i.indexOf(t) > -1 ? "number" == typeof e ? e + "deg" : e : e && e.toString();
  };
}, function (t, e, r) {
  "use strict";
  function o(t) {
    this.target = t.target || this, this.subscribers = {};
  }o.prototype.once = function (t, e) {
    var r = this;return this.on(t, function o(n) {
      r.off(t, o), e.call(r.target, n);
    });
  }, o.prototype.off = function (t, e) {
    var r = t.toLowerCase().trim(),
        o = (this.subscribers[r] || []).indexOf(e);return o > -1 ? this.subscribers[r].splice(o, 1) : void 0 === e && (this.subscribers[r] = []), this.target;
  }, o.prototype.on = function (t, e) {
    var r = t.toLowerCase().trim();return "function" == typeof e && (this.subscribers[r] = (this.subscribers[r] || []).concat(e)), this.target;
  }, o.prototype.trigger = function (t, e) {
    for (var r = t.toLowerCase().trim(), o = this.subscribers[r] || [], n = 0, i = o.length; n < i; n++) {
      o[n].call(this.target, e);
    }return this.target;
  }, t.exports = o;
}, function (t, e, r) {
  "use strict";
  function o(t, e, r) {
    return i.lib[t] ? new i.lib[t](e, r) : t instanceof Text || t instanceof Comment ? t : "body" === t ? u : new n(t, e, r);
  }var n = r(1),
      i = r(12),
      s = r(13),
      u = o(document.body);o.and = function (t) {
    return new s(t);
  }, o.onAttr = function (t, e) {
    n.__onAttr[t.toLowerCase()] = e;
  }, o.onCreate = function (t) {
    n.__onCreate.push(t);
  }, o.fn = function (t, e) {
    n.prototype[t] = e, i.prototype[t] = i.__extend(t), s.prototype[t] = s.__extend(t);for (var r in i.lib) {
      i.lib[r].prototype[t] || (i.lib[r].prototype[t] = i.prototype[t]);
    }
  }, o.create = i.create, t.exports = o;
}, function (t, e, r) {
  "use strict";
  t.exports = function (t) {
    var e = (t ? Object.prototype.toString.call(t) : "").substring(8);return 0 === e.indexOf("HTML") || 0 === e.indexOf("SVG");
  };
}, function (t, e, r) {
  "use strict";
  var o = r(0).MOUNTED;t.exports = function t(e) {
    var r = e.childNodes;if (document.body.contains(e) && -1 === o.indexOf(e)) {
      o.push(e), e.dispatchEvent(new Event("mount", { bubbles: !1 }));for (var n = 0, i = r.length; n < i; n++) {
        t(r[n]);
      }
    }
  };
}, function (t, e, r) {
  "use strict";
  var o = r(0).MOUNTED;t.exports = function t(e) {
    var r = e.childNodes,
        n = o.indexOf(e);if (-1 !== n) {
      o.splice(n, 1), e.dispatchEvent(new Event("unmount", { bubbles: !1 }));for (var i = 0, s = r.length; i < s; i++) {
        t(r[i]);
      }
    }
  };
}, function (t, e, r) {
  "use strict";
  var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      n = r(4);t.exports = function (t, e) {
    var r = [];return "object" === (void 0 === e ? "undefined" : o(e)) ? (e.x && r.push(n(t, e.x)), e.y && r.push(n(t, e.y)), e.z && r.push(n(t, e.z))) : r.push(n(t, e)), t + "(" + r.join(", ") + ")";
  };
}, function (t, e, r) {
  "use strict";
  t.exports = function (t) {
    return "px" === t.slice(-2) ? Number(t.slice(0, -2)) : t;
  };
}, function (t, e, r) {
  "use strict";
  function o() {}var n = r(2),
      i = r(3),
      s = r(5),
      u = r(1);o.__extend = function (t) {
    return function (e, r, o) {
      var n = this.node ? this.node[t](e, r, o) : u.prototype[t].call(null, e, r, o);return n === this.node ? this : n;
    };
  }, o.lib = {};for (var p in u.prototype) {
    o.prototype[p] = o.__extend(p);
  }o.prototype.append = function (t) {
    this.node.append(t);for (var e in this.node.refs) {
      this.refs[e] || (this.refs[e] = this.node.refs[e]);
    }return this;
  }, o.prototype.on = function (t, e) {
    return this.bus.on(t, e);
  }, o.prototype.once = function (t, e) {
    return this.bus.once(t, e);
  }, o.prototype.off = function (t, e) {
    return this.bus.off(t, e);
  }, o.prototype.trigger = function (t, e) {
    return this.bus.trigger(t, e);
  }, o.create = function (t, e) {
    function r(r, o) {
      var i = Array.isArray(r) ? r : o || [];if (this.props = n(r) ? r : {}, this.bus = new s({ target: this }), this.refs = {}, this.ref = this.props.ref, this.tagName = t, e.constructor && e.constructor.call(this, this.props), e.render) {
        if (this.node = e.render.call(this, this.props), void 0 === this.node) throw new Error('Component "' + t + '" does not return a valid element.');this.ref = this.props.ref || this.node.ref;for (var u in this.node.refs) {
          this.refs[u] || (this.refs[u] = this.node.refs[u]);
        }this.append(i);
      }
    }for (var u in o.prototype) {
      r.prototype[u] = o.prototype[u];
    }e.append && (r.prototype.append = function (t) {
      if (t) {
        t = [].concat(t), e.append.call(this, t);for (var r = 0, o = t.length; r < o; r++) {
          i.call(this, t[r]);
        }
      }
    });for (u in e) {
      "render" !== u && "append" !== u && (r.prototype[u] = e[u]);
    }return o.lib[t] = r, r;
  }, t.exports = o;
}, function (t, e, r) {
  "use strict";
  function o(t) {
    this.group = [].concat(t);
  }var n = r(1);o.prototype.and = function (t) {
    return this.group = this.group.concat(t), this;
  }, o.__extend = function (t) {
    return function (e, r, o) {
      for (var n = 0, i = this.group.length; n < i; n++) {
        this.group[n][t](e, r, o);
      }return this;
    };
  };for (var i in n.prototype) {
    o.prototype[i] = o.__extend(i);
  }t.exports = o;
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

__webpack_require__(23);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(22);

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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 19 */
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
/* 20 */
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

a.once("click", function () {
  isMounted[0] = true;
});

a.on("click", function () {
  isMounted[1] = true;
});

a.trigger("click");

(0, _log2.default)("on_once", isMounted[0] === true && isMounted[1] === true);

/***/ }),
/* 22 */
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
/* 23 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map