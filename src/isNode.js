function isNode(node) {
  var str = (node ? Object.prototype.toString.call(node) : "").substring(8);
  return str.indexOf("HTML") === 0 || str.indexOf("SVG") === 0;
}

export default isNode;