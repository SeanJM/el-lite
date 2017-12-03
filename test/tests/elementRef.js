import el from "../../index";
import log from "./helpers/log";

var b = el("div", { ref: "a" });
var a = el("div", [ b ]);

var c = el("div", { ref: "c" });
var d = el("div", { ref: "d" });
var e = el("div", { ref: "e" });

c.append(d.append(e));

log(
  "Element reference", (
    a.refs.a === b
    && c.refs.d === d
    && d.refs.e === e
  )
);
