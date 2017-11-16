module.exports = function unmount(node) {
  const children = node.childNodes;
  if (children.length === 0) {
    node.dispatchEvent(
      new Event("__unmount", { bubbles: false })
    );
  }
  for (var i = 0, n = children.length; i < n; i++) {
    unmount(children[i]);
  }
};