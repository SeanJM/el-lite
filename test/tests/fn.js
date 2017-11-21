import el from "../../index";
el.fn("classy", function () {
  this.addClass("classy");
});
var a = el("div");
a.classy();
console.log("Add class", a.attr("class") === "classy");