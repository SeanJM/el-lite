module.exports = function mount(node) {
  const children = node.childNodes;

  if (document.body.contains(node)) {
    if (children.length === 0) {
      node.dispatchEvent(
        new Event("__mount")
      );
    }

    for (var i = 0, n = children.length; i < n; i++) {
      mount(children[i]);
    }
  }
};