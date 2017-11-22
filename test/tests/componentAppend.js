import el from "../../index";

el.create("x", {
  render() {
    return el("div");
  }
});

var a = el("div");
var b = el("x");

b.append(a);

console.log("componentAppend", b.node.node.childNodes.length === 1);