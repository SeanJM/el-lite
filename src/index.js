const isObject       = require("./isObject");
const init           = require("./init");
const isNode         = require("./isNode");
const mount          = require("./mount");
const bind           = require("./bind");
const transformValue = require("./transformValue");
const propertyUnit   = require("./propertyUnit");

const {
  IS_TRANSFORM,
  STYLE_NAME,
  IS_OFFSET,
  XLINK_NS
} = require("./CONSTANTS");

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

El.prototype.setRefs = function (child) {
  if (child.ref && !this.refs[child.ref]) {
    this.refs[child.ref] = child;
  }

  for (var k in child.refs) {
    this.refs[k] = child.refs[k];
  }
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

      if (isEl) {
        this.setRefs(children[i]);
      }
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
    this.setRefs(children[i]);
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
    } else if (k.substring(0, 2) === "on") {
      this.on(k.substring(2).toLowerCase(), attr[k]);
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
    } else {
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
  this.bus.once(a, b);
  return this;
};

El.prototype.off = function (a, b) {
  if (!b) {
    for (var i = this.bus.subscribers.length - 1; i >= 0; i--) {
      this.node.removeEventListener(a, this.bus.subscribers[i], false);
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
      this.ref  = this.props.ref;
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