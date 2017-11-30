import el from "../../index";

var a = el("div");
var b = el("body");
var c = document.createElement("div");

b.node.appendChild(c);
b.append(a);

console.log("Contains", b.contains(a) && b.contains(c));