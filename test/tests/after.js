import el from "../../index";
import log from "./helpers/log";

var a = el({ class : "a" });
var b = el({ class : "b" });
var c = el({ class : "c" });
var d = el({ class : "d" });

var e = el({ class : "a" });
var f = el({ class : "b" });
var g = el({ class : "c" });

a.append([ b, d ]);
e.append([ f ]);
c.after(b);
g.after(f);

log("After", a.children()[1].node === c.node && e.children()[1].node === g.node);
