module.exports = function setRefs(child) {
  const cr = child.ref;
  if (cr && !this.refs[cr]) {
    this.refs[cr] = child;
  }
  Object.assign(this.refs, child.refs);
};
