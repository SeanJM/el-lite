module.exports = function toUnit(a) {
  return a.slice(-2) === "px" ? Number(a.slice(0, -2)) : a;
};