const El        = require("./class/El");
const Component = require("./class/Component");

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