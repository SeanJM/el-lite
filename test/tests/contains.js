import el from "../../index";
import log from "./helpers/log";

var a = el("div");
var b = el("body");
var c = document.createElement("div");

b.node.appendChild(c);
b.append(a);

log("Contains", b.contains(a) && b.contains(c));