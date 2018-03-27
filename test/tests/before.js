import el from "../../index";
import log from "./helpers/log";

var a = [ el({ class : "a" }), el({ class : "b" }), el({ class : "c" }), el({ class : "d" }) ];

a[0].append([ a[1], a[2] ]);
a[3].before(a[2]);

log("Before", a[0].children()[1].node === a[3].node);
