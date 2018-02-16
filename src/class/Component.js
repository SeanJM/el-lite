const isObject = require("../isObject");
const setRefs  = require("../setRefs");
const Bus      = require("./Bus");
const El       = require("./El");

function Component() {}

Component.__extend = function (name) {
  return function (a, b, c) {
    let o = this.node
      ? this.node[name](a, b, c)
      : El.prototype[name].call(null, a, b, c);
    return o === this.node ? this : o;
  };
};

Component.lib = {};
Component.id  = {};

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
    let children = Array.isArray(a) ? a : b || [];

    this.props   = isObject(a) ? a : {};
    this.bus     = new Bus({ target: this });
    this.refs    = {};
    this.ref     = this.props.ref;
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

      for (let k in this.refs) {
        for (var j in this.refs[k].refs) {
          if (!this.refs[j]) {
            this.refs[j] = this.refs[k].refs[j];
          }
        }

        if (this.refs[k].ref && !this.refs[this.refs[k].ref]) {
          this.refs[this.refs[k].ref] = this.refs[k].ref;
        }
      }

      for (let k in this.node.refs) {
        if (!this.refs[k]) {
          this.refs[k] = this.node.refs[k];
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