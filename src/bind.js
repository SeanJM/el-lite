module.exports = function bind(child) {
  var self = this;
  if (child.on) {
    child.on("removeChild", function () {
      self.removeChild(child);
    });

    child.on("appended", function () {
      for (var i = 0, n = child.children.length; i < n; i++) {
        if (child.children[i].trigger) {
          child.children[i].trigger("appended");
        }
      }
      if (document.body.contains(this.getRoot())) {
        this.getEl().trigger("mount");
      }
    });
  }
  return child;
};
