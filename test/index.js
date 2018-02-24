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
/******/{

  /***/7:
  /***/function _(module, exports) {

    throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/sean/.babelrc'\n    at Object.fs.openSync (fs.js:663:18)\n    at Object.fs.readFileSync (fs.js:568:33)\n    at ConfigChainBuilder.addConfig (/Users/sean/Dropbox/projects/el-lite/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:146:32)\n    at ConfigChainBuilder.findConfigs (/Users/sean/Dropbox/projects/el-lite/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:96:16)\n    at buildConfigChain (/Users/sean/Dropbox/projects/el-lite/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:61:13)\n    at OptionManager.init (/Users/sean/Dropbox/projects/el-lite/node_modules/babel-core/lib/transformation/file/options/option-manager.js:354:58)\n    at File.initOptions (/Users/sean/Dropbox/projects/el-lite/node_modules/babel-core/lib/transformation/file/index.js:212:65)\n    at new File (/Users/sean/Dropbox/projects/el-lite/node_modules/babel-core/lib/transformation/file/index.js:135:24)\n    at Pipeline.transform (/Users/sean/Dropbox/projects/el-lite/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/Users/sean/Dropbox/projects/el-lite/node_modules/babel-loader/lib/index.js:50:20)\n    at Object.module.exports (/Users/sean/Dropbox/projects/el-lite/node_modules/babel-loader/lib/index.js:175:20)");

    /***/
  }

  /******/ });
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

__webpack_require__(24);

__webpack_require__(25);

__webpack_require__(26);

__webpack_require__(27);

__webpack_require__(28);

__webpack_require__(29);

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 8 */
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
/* 9 */
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

_index2.default.defaultProps({
  l: "testing"
});

var a = (0, _index2.default)("div");

(0, _log2.default)("Default props", a.props.l === "testing");

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

var b = (0, _index2.default)("div", { ref: "a" });
var a = (0, _index2.default)("div", [b]);

var c = (0, _index2.default)("div", { ref: "c" });
var d = (0, _index2.default)("div", { ref: "d" });
var e = (0, _index2.default)("div", { ref: "e" });

c.append(d.append(e));

(0, _log2.default)("Element reference", a.refs.a === b && c.refs.d === d && d.refs.e === e);

/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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

/***/ })
/******/ ]);