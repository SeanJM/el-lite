import el from "../../index";

function test() {
  var a = el("div", {
    class : "my-class-name"
  });
  a.removeClass("my-class-name");
  console.log("Remove class", a.attr("class") === "");
}

test();