import el from "../../index";
import log from "./helpers/log";

var isMounted = [ false, false ];
var a = el("div");

el(document.body).append(a);

a.on("unmount", function () {
  isMounted[0] = true;
});

a.remove();

log(
  "onUnmount", (
    isMounted[0] === true
  )
);