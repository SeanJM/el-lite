function Bus(props) {
  this.target = props.target || this;
  this.subscribers = {};
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
    this.subscribers[name].splice(this.subscribers[name].indexOf(callback), 1);
  } else {
    this.subscribers[name] = [];
  }
  return this;
};

Bus.prototype.on = function (name, callback) {
  name = name.toLowerCase();
  if (typeof callback === "function") {
    this.subscribers[name] = (this.subscribers[name] || []).concat(callback);
  }
  return this;
};

Bus.prototype.trigger = function (name, value) {
  var arr = (this.subscribers[name.toLowerCase()] || []);
  for (var i = 0, n = arr.length; i < n; i++) {
    arr[i].call(this.target, value);
  }
  return this;
};

module.exports = Bus;