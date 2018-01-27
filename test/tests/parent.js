import el from "../../index";
import log from "./helpers/log";

var b = el("div", { ref: "a" });
var a = el("div", [ b ]);

log(
  "Parent", (
    b.parent().node === a.node
  )
);
