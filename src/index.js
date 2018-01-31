const El        = require("./class/El");
const Component = require("./class/Component");
const And       = require("./class/And");
const body      = el(document.body);

function el(a, b, c) {
  if (Component.lib[a]) {
    return new Component.lib[a](b, c);
  } else if (a instanceof Text || a instanceof Comment) {
    return a;
  } else if (a === "body") {
    return body;
  } else {
    return new El(a, b, c);
  }
}

el.and = function (x) {
  return new And(x);
};

el.onAttr = function (name, callback) {
  El.__onAttr[name.toLowerCase()] = callback;
};

el.defaultProps = function (props) {
  Object.assign(El.__defaultProps, props);
};

el.onCreate = function (callback) {
  El.__onCreate.push(callback);
};

el.fn = function (name, callback) {
  El.prototype[name]        = callback;
  Component.prototype[name] = Component.__extend(name);
  And.prototype[name]       = And.__extend(name);

  for (var k in Component.lib) {
    if (!Component.lib[k].prototype[name]) {
      Component.lib[k].prototype[name] = Component.prototype[name];
    }
  }
};

el.getElementById = function (id) {
  const node = document.getElementById(id);
  const element = node && el(node);
  if (node) { el.id[id] = element; }
  return element;
};

el.id          = El.id;
el.create      = Component.create;
el.componentId = Component.id;

module.exports = el;