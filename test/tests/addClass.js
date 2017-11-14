import el from "../../index";

function test() {
  var a = el("div");
  a.addClass("my-class-name");
  console.log("Add class", a.attr("class") === "my-class-name");
}

test();