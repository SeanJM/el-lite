import el from "../../index";
import log from "./helpers/log";

var a = el("div", {
  class : "my-class-name"
});
a.removeClass("my-class-name");
log("Remove class", a.attr("class") === "");
