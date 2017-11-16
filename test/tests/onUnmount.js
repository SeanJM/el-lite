import el from "../../index";

var isMounted = [ false, false ];
var a = el("div");

el(document.body).append(a);

a.on("unmount", function () {
  isMounted[0] = true;
});

a.remove();

console.log(
  "onUnmount", (
    isMounted[0] === true
  )
);