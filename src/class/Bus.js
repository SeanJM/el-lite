function nameToArray(name) {
  return name.toLowerCase().split(",");
}

function Bus(props) {
  this.__t = props.target || this;
  this.__s = {};
}

Bus.prototype.once = function (name, callback) {
  const once = a => {
    this.off(name, once);
    callback.call(this.target, a);
  };
  return this.on(name, once);
};

Bus.prototype.off = function (name, callback) {
  nameToArray(name).forEach($name => {
    const name  = $name.trim();
    const index = (this.__s[name] || []).indexOf(callback);
    if (index > -1) {
      this.__s[name].splice(index, 1);
    } else if (typeof callback === "undefined") {
      this.__s[name] = [];
    }
  });
  return this.__t;
};

Bus.prototype.on = function (name, callback) {
  if (typeof callback === "function") {
    nameToArray(name).forEach($name => {
      const name = $name.trim();
      this.__s[name] = (this.__s[name] || []).concat(callback);
    });
  }
  return this.__t;
};

Bus.prototype.trigger = function (name, value) {
  nameToArray(name).forEach($name => {
    const name  = $name.trim();
    (this.__s[name] || [])
      .slice()
      .forEach(callback => {
        callback.call(this.__t, value);
      });
  });
  return this.__t;
};

module.exports = Bus;