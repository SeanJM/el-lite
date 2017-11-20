module.exports = function unmount(node) {
  const children = node.childNodes;

  node.dispatchEvent(
    new Event("unmount", { bubbles: false })
  );

  for (var i = 0, n = children.length; i < n; i++) {
    unmount(children[i]);
  }
};