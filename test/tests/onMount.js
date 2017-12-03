import el from "../../index";
import log from "./helpers/log";

var isMounted = [ false, false, false ];

var a         = el("div", {
  onMount: function () {
    isMounted[0] = !isMounted[0];
  }
});

var b         = el("div", {
  onUnMount: function () {
    console.log("UNMOUNT");
  },
  onMount: function () {
    console.log("MOUNT");
    isMounted[1] = !isMounted[1];
  }
});

var c = el("div");

el(document.body).append([ a, c ]);
a.append(b);
b.remove(b);
a.append(b);

log(
  "onMount", (
    isMounted[0] === true && isMounted[1] === false
  )
);