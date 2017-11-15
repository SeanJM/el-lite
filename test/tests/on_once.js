import el from "../../index";

var isMounted = [ false, false ];

var a = el("div");

a.once("click", function () {
  isMounted[0] = true;
});

a.on("click", function () {
  isMounted[1] = true;
});

a.trigger("click");

console.log(
  "on_once", (
    isMounted[0] === true
    && isMounted[1] === true
  )
);