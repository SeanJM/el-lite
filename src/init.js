const isNode     = require("./isNode");
const isObject   = require("./isObject");
const Bus        = require("./Bus");
const { SVG_NS } = require("./CONSTANTS");

function set(self, x) {
  if (typeof x === "string") {
    self.tagName  = x;
  } else if (Array.isArray(x)) {
    self.children = x;
  } else if (isObject(x)) {
    self.props = x;
  }
}

function init(self, a, b, c) {
  var IS_NODE = isNode(a);

  self.bus         = new Bus({ target: self });
  self.refs        = {};
  self.subscribers = {};
  self.props       = {};
  self.children    = [];

  self.isMounted = false;
  self.tagName = IS_NODE ? a.tagName.toLowerCase() : a;
  self.isSvg = [ "use", "svg" ].indexOf(self.tagName) !== -1;

  if (IS_NODE) {
    self.node = a;
  } else if (self.isSvg) {
    self.node = document.createElementNS(SVG_NS, self.tagName);
  } else {
    self.node = document.createElement(self.tagName);
  }

  set(self, a);
  set(self, b);
  set(self, c);
}

module.exports = init;