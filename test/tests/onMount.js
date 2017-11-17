import el from "../../index";

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
a.removeChild(b);
a.append(b);

console.log(
  "onMount", (
    isMounted[0] === true && isMounted[1] === false
  )
);