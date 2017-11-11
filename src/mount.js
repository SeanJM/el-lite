module.exports = function mount(children) {
  children = [].concat(children);
  for (var i = 0, n = children.length; i < n; i++) {
    if (children[i].getRoot && document.body.contains(children[i].getRoot())) {
      children[i].mount();
      mount(children[i].children);
    }
  }
};