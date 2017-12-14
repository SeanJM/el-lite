import el from "../../index";
import log from "./helpers/log";

el.fn("classy", function () {
  this.addClass("classy");
});
el.create("C", {
  render() {
    return el("div");
  }
});

var a = el("div");
var b = el("C");
a.classy();
b.classy();
log("el.fn", a.attr("class") === "classy" && b.attr("class") === "classy");