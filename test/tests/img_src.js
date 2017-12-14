import el from "../../index";
import log from "./helpers/log";

var a = el("img");

a.attr({
  src : "alf.jpg"
});

el("body").append(a);

log(
  "image src", true
);