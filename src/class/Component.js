const isObject = require("../isObject");
const setRefs  = require("../setRefs");
const Bus      = require("./Bus");

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

    this.props   = isObject(a) ? a : {};
    this.bus     = new Bus({ target: this });
    this.refs    = {};
    this.ref     = this.props.ref;
    this.tagName = name;

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

module.exports = Component;