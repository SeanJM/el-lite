import el from "../../index";

var a = el("div");

a.html("test");

console.log("HTML", a.node.innerHTML === "test");