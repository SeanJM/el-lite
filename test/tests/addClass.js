import el from "../../index";
import log from "./helpers/log";

var a = el("div");
a.addClass("my-class-name");
log("Add class", a.attr("class") === "my-class-name");
