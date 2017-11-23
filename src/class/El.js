const isObject       = require("../isObject");
const isNode         = require("../isNode");
const setRefs        = require("../setRefs");
const mount          = require("../mount");
const unmount        = require("../unmount");
const transformValue = require("../transformValue");
const propertyUnit   = require("../propertyUnit");
const Bus            = require("./Bus");

const {
  XLINK_NS,
  SVG_NS,
  IS_TRANSFORM,
  STYLE_NAME
} = require("../CONSTANTS");

function El() {
  var self     = this;
  var args     = [ arguments[0], arguments[1], arguments[2] ];
  var IS_NODE  = isNode(args[0]);
  var children = [];

  this.isMounted = false;
  this.tagName   = IS_NODE ? arguments[0].tagName.toLowerCase() : "div";
  this.bus       = new Bus({ target: this });
  this.refs      = {};

  for (var i = 0, n = args.length; i < n; i++) {
    if (typeof args[i] === "string") {
      this.tagName = args[i];
    } else if (isObject(args[i])) {
      this.props = args[i];
    } else if (Array.isArray(args[i])) {
      children = args[i];
    }
  }

  this.isSvg = [ "use", "svg" ].indexOf(this.tagName) !== -1;

  if (IS_NODE) {
    this.node = args[0];
  } else if (this.isSvg) {
    this.node = document.createElementNS(SVG_NS, this.tagName);
  } else {
    this.node = document.createElement(this.tagName);
  }

  this.append(children);
  this.attr(this.props);

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

El.prototype.setStyle = function (props) {
  var values = {
    transform : [],
    default   : []
  };

  var list  = [];
  var value = {};
  var name;

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
      list.push({
        name  : k,
        value : propertyUnit(k, props[k])
      });
    }
  }

  if (values.transform.length) {
    list.push({
      name  : "transform",
      value : values.transform.join(" ")
    });
  }

  for (var i = 0, n = list.length; i < n; i++) {
    name = STYLE_NAME[list[i].name] || list[i].name;
    this.node.style[name] = list[i].value;
    value[name]           = list[i].value;
  }

  this.trigger("style", {
    list  : list,
    value : value
  });
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
      if (this.isSvg) {
        this.node.setAttributeNS(k === "href" ? XLINK_NS : SVG_NS, k, attr[k]);
      } else {
        this.node.setAttribute(k, attr[k]);
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
  var nodes  = this.node.querySelectorAll(selector);

  for (var i = 0, n = nodes.length; i < n; i++) {
    result.push(
      new El(nodes[i])
    );
  }

  return result;
};

El.prototype.children = function (index) {
  const children   = [];
  const childNodes = this.node.childNodes;
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
  if (typeof value === "string") {
    this.node.innerHTML = value;
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

module.exports = El;