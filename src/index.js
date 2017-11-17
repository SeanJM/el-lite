const isObject       = require("./isObject");
const init           = require("./init");
const isNode         = require("./isNode");
const setRefs        = require("./setRefs");
const mount          = require("./mount");
const unmount        = require("./unmount");
const bind           = require("./bind");
const transformValue = require("./transformValue");
const propertyUnit   = require("./propertyUnit");

const {
  IS_TRANSFORM,
  STYLE_NAME,
  XLINK_NS
} = require("./CONSTANTS");

function El(a, b, c) {
  var self    = this;
  var IS_NODE = isNode(a);

  init(this, a, b, c);

  this.append(this.children);
  this.attr(this.props);
  this.isMounted = false;

  this.on("__mount", e => {
    if (!this.isMounted) {
      this.isMounted = true;
      this.trigger("mount", e);
    }
  });

  this.on("__unmount", e => {
    if (this.isMounted) {
      this.isMounted = false;
      this.trigger("unmount", e);
    }
  });

  for (var i = 0, n = El.__onCreate.length; i < n; i++) {
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
    children      = [].concat(children);
    this.children = this.children.concat(children);

    for (var i = 0, n = children.length; i < n; i++) {
      isEl = children[i].getRoot;
      child = isEl ? children[i].getRoot() : new Text(children[i]);
      bind.call(this, children[i]);
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
      this.node.setAttribute(
        "class",
        attr[k]
          .split(" ")
          .filter(a => a.length)
          .map(a => a.trim())
          .join(" ")
      );
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
        node => bind.call(this, el(node))
      );
    }
  } else {
    return this.node.innerHTML;
  }
  return this;
};

El.prototype.removeChild = function (child) {
  const childNode = child.getRoot();
  this.children.splice(this.children.indexOf(child), 1);
  if (this.node.contains(childNode)) {
    unmount(childNode);
    this.node.removeChild(childNode);
  }
  return this;
};

El.prototype.remove = function () {
  this.trigger("removeChild");
  this.off("removeChild");
  if (this.node.parentNode) {
    unmount(this.node);
    this.node.parentNode.removeChild(this.node);
  }
  return this;
};

El.prototype.on = function (name, callback) {
  var self = this;
  var nameLower   = name.toLowerCase();
  this.bus.on(nameLower, callback);
  this.node.addEventListener(nameLower, function (e) {
    self.trigger(nameLower, e);
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
    let props    = isObject(a) ? a : {};
    let children = Array.isArray(a) ? a : b || [];

    init(this, name, props, children);

    if (obj.constructor) {
      obj.constructor.call(this, props);
    }

    if (obj.render) {
      this.node = obj.render.call(this, props);
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
  Component.prototype[name] = Component.__extend(El.prototype[name]);
  for (var k in Component.lib) {
    Component.lib[k].prototype[name] = Component.prototype[name];
  }
};

el.create = Component.create;

module.exports = el;