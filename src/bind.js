module.exports = function bind(child) {
  var self = this;
  if (child.on) {
    child.on("removeChild", function () {
      self.removeChild(child);
    });
  }
  return child;
};
