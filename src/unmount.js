module.exports = function unmount(children) {
  children = [].concat(children);
  for (var i = 0, n = children.length; i < n; i++) {
    if (children[i].getRoot) {
      children[i].unmount();
      unmount(children[i].children);
    }
  }
};