var STYLE_NAME = {};
var BODY_CSS   = window.getComputedStyle(document.body);

STYLE_NAME.transform = (
  BODY_CSS.webkitTransform
    ? "webkitTransform"
    : BODY_CSS.MozTransform
      ? "MozTransform"
      : BODY_CSS.msTransform
        ? "msTransform"
        : "transform"
);

STYLE_NAME.userSelect = (
  BODY_CSS.webkitUserSelect
    ? "webkitUserSelect"
    : BODY_CSS.MozUserSelect
      ? "MozUserSelect"
      : BODY_CSS.msUserSelect
        ? "msUserSelect"
        : "transform"
);

var XLINK_NS = "http://www.w3.org/1999/xlink";
var SVG_NS   = "http://www.w3.org/2000/svg";

var IS_OFFSET = [
  "width",
  "height",
  "top",
  "left"
];

var IS_VALUE_DEG = [
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ"
];

var IS_VALUE_PX = [
  "left",
  "right",
  "top",
  "bottom",

  "marginLeft",
  "marginRight",
  "marginTop",
  "marginBottom",

  "height",
  "width",
  "minHeight",
  "minWidth",
  "maxHeight",
  "maxWidth",

  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",

  "translate",
  "translateX",
  "translateY",
  "translateZ"
];

var IS_TRANSFORM = [
  "rotateX",
  "rotateY",
  "rotateZ",

  "scale",

  "scaleX",
  "scaleY",
  "scaleZ",

  "translateX",
  "translateY",
  "translateZ"
];

export {
  STYLE_NAME,
  IS_OFFSET,
  XLINK_NS,
  SVG_NS,
  IS_VALUE_DEG,
  IS_VALUE_PX,
  IS_TRANSFORM,
};