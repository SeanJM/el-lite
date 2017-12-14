import el from "../../index";
import log from "./helpers/log";

const a = el({
  style : { height : "10px" }
});

a.style({ height : undefined });
log("style (undefined)", a.style("height"));