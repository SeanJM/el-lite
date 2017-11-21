const isObject       = require("./isObject");
const isNode         = require("./isNode");
const setRefs        = require("./setRefs");
const mount          = require("./mount");
const unmount        = require("./unmount");
const transformValue = require("./transformValue");
const propertyUnit   = require("./propertyUnit");
const Bus            = require("./Bus");

const {
  SVG_NS,
  IS_TRANSFORM,
  STYLE_NAME,
  XLINK_NS
} = require("./CONSTANTS");

function El() {
  var self     = this;
  var args     = [ arguments[0], arguments[1], arguments[2] ];
  var IS_NODE  = isNode(args[0]);
  var props    = {};
  var children = [];

  this.isMounted = false;
  this.tagName   = IS_NODE ? arguments[0].tagName : "div";
  this.bus       = new Bus({ target: this });
  this.refs      = {};
  this.isSvg     = [ "use", "svg" ].indexOf(this.tagName) !== -1;

  for (var i = 0, n = args.length; i < n; i++) {
    if (typeof args[i] === "string") {
      this.tagName = args[i];
    } else if (isObject(args[i])) {
      props = args[i];
    } else if (Array.isArray(args[i])) {
      children = args[i];
    }
  }

  if (IS_NODE) {
    this.node = args[0];
  } else if (this.isSvg) {
    this.node = document.createElementNS(SVG_NS, this.tagName);
  } else {
    this.node = document.createElement(this.tagName);
  }

  this.append(children);
  this.attr(props);

  for (i = 0, n = El.__onCreate.length; i < n; i++) {
    El.__onCreate[i].call(this);
  }

  if (IS_NODE) {
    setTimeout(function () {
      mount(self.node);
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
    return window.getComputedStyle(this.node)[STYLE_NAME[props] || props];
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

El.prototype.classList = function () {
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
      isEl  = children[i].getRoot;
      child = isEl ? children[i].getRoot() : new Text(children[i]);
      this.getRoot().appendChild(child);
      mount(child);
      setRefs.call(this, children[i]);
    }

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
    } else if (k.substring(0, 4) === "once") {
      this.once(k.substring(4), attr[k]);
    } else if (k.substring(0, 2) === "on") {
      this.on(k.substring(2), attr[k]);
    } else if (k === "class") {
      if (typeof attr[k] === "string") {
        this.node.setAttribute(
          "class",
          attr[k]
            .split(" ")
            .filter(a => a.length)
            .map(a => a.trim())
            .join(" ")
        );
      }
    } else if (attr[k]) {
      this.node.setAttribute(k, attr[k]);
    }
  }
  return this;
};

El.prototype.closest = function (selector) {
  var node = this.node.closest(selector);
  return el(node);
};

El.prototype.find = function (selector) {
  var node = this.node.querySelector(selector);
  return el(node);
};

El.prototype.findAll = function (selector) {
  var result = [];
  var nodes  = this.node.querySelectorAll(selector);

  for (var i = 0, n = nodes.length; i < n; i++) {
    result.push(
      el(nodes[i])
    );
  }

  return result;
};

El.prototype.html = function (value) {
  if (typeof value === "string") {
    this.node.innerHTML = value;
    if (value.length === 0) {
      for (var i = 0, n = this.children.length; i < n; i++) {
        delete this.children[i];
      }
      this.children = [];
    } else {
      this.children = Array.prototype.map.call(
        this.node.childNodes,
        node => el(node)
      );
    }
  } else {
    return this.node.innerHTML;
  }
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
  var self      = this;
  var nameLower = name.toLowerCase();

  if (typeof callback === "function") {
    this.bus.on(nameLower, callback);
    this.node.addEventListener(nameLower, function (e) {
      self.trigger(nameLower, e);
    }, false);
  }

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
  var al = a.toLowerCase();
  if (!b) {
    for (var i = this.bus.__s.length - 1; i >= 0; i--) {
      this.node.removeEventListener(al, this.bus.__s[i], false);
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

function Component() {}

Component.lib = {};

Component.prototype.append = function (children) {
  this.node.append(children);

  for (var k in this.node.refs) {
    if (!this.refs[k]) {
      this.refs[k] = this.node.refs[k];
    }
  }

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
    let children = Array.isArray(a) ? a : b || [];

    this.props = isObject(a) ? a : {};
    this.bus   = new Bus({ target: this });
    this.refs  = {};
    this.ref   = this.props.ref;

    if (obj.constructor) {
      obj.constructor.call(this, this.props);
    }

    if (obj.render) {
      this.node = obj.render.call(this, this.props);
      this.ref  = this.props.ref || this.node.ref;

      for (var k in this.node.refs) {
        if (!this.refs[k]) {
          this.refs[k] = this.node.refs[k];
        }
      }

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

  Component.prototype[name] = function (a, b, c) {
    this.node[name](a, b, c);
    return this;
  };

  for (var k in Component.lib) {
    Component.lib[k].prototype[name] = Component.prototype[name];
  }
};

el.create = Component.create;

module.exports = el;