import el from "../../index";
import log from "./helpers/log";

el.fn("classy", function () {
  this.addClass("classy");
});
var a = el("div");
a.classy();
log("Add class", a.attr("class") === "classy");