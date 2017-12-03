import el from "../../index";
import log from "./helpers/log";

var a = el("div");

a.html("test");

log("HTML", a.node.innerHTML === "test");