import el from "../../index";
import log from "./helpers/log";

var a = el("div", {
  style : {
    marginLeft : "16px"
  }
});

log("style (16px -> 16)", a.style("marginLeft") === 16);