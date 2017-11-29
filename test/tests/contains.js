import el from "../../index";

var a = el("div");
var b = el("body");

b.append(a);
console.log("Contains", b.contains(a));