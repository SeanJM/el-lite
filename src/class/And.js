const El  = require("./El");

function And(group) {
  this.group = [].concat(group);
}

And.prototype.and = function (x) {
  this.group = this.group.concat(x);
  return this;
};

And.__extend = function (key) {
  return function (a, b, c) {
    for (var i = 0, n = this.group.length; i < n; i++) {
      this.group[i][key](a, b, c);
    }
    return this;
  };
};

for (var k in El.prototype) {
  And.prototype[k] = And.__extend(k);
}

module.exports = And;