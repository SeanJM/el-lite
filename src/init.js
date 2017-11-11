import isNode from "./isNode";
import isObject from "./isObject";
import Bus from "./Bus";
import { SVG_NS } from "./CONSTANTS";

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

  for (var k in self.props) {
    if (k.substring(0, 4) === "once") {
      self.once(k.substring(4), self.props[k]);
    } else if (k.substring(0, 2) === "on") {
      self.on(k.substring(4), self.props[k]);
    }
  }
}

export default init;