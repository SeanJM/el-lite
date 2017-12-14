import el from "../../index";
import log from "./helpers/log";

var a = el("div");
var b = el("div");
el
  .and(a)
  .and(b)
  .addClass("my-class-name");

log("And", a.attr("class") === "my-class-name" && b.attr("class") === "my-class-name");
