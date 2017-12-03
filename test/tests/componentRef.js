import el from "../../index";
import log from "./helpers/log";

el.create("x", {
  render() {
    return el("div");
  }
});

el.create("y", {
  render() {
    return el("x");
  }
});

var a = el("x", { ref: "a" });
var b = el("x", [ a ]);

var c = el("y", { ref: "c" }, [ b ]);
var d = el("y", [ c ]);

log("Component reference", (
  b.refs.a === a
  && d.refs.c === c
));