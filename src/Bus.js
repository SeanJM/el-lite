function Bus(props) {
  this.__t = props.target || this;
  this.__s = {};
}

Bus.prototype.once = function (name, callback) {
  var self = this;
  var once = function (a) {
    self.off(name, once);
    callback.call(self.target, a);
  };
  this.on(name, once);
};

Bus.prototype.off = function (name, callback) {
  name = name.toLowerCase();
  if (name && callback) {
    this.__s[name].splice(this.__s[name].indexOf(callback), 1);
  } else {
    this.__s[name] = [];
  }
  return this;
};

Bus.prototype.on = function (name, callback) {
  name = name.toLowerCase();
  if (typeof callback === "function") {
    this.__s[name] = (this.__s[name] || []).concat(callback);
  }
  return this;
};

Bus.prototype.trigger = function (name, value) {
  var arr = (this.__s[name.toLowerCase()] || []);
  for (var i = 0, n = arr.length; i < n; i++) {
    arr[i].call(this.__t, value);
  }
  return this;
};

module.exports = Bus;