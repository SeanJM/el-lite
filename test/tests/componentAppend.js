import el from "../../index";
import log from "./helpers/log";

el.create("x", {
  render() {
    return el("div");
  }
});

var a = el("div");
var b = el("x");

b.append(a);

log("componentAppend", b.node.node.childNodes.length === 1);