import el from "../../index";

var isMounted = [ false, false, false ];

var a         = el("div", {
  onMount: function () {
    isMounted[0] = !isMounted[0];
  }
});

var b         = el("div", {
  onMount: function () {
    isMounted[1] = !isMounted[1];
  }
});

var c         = el("div", {
  onMount: function () {
    isMounted[2] = !isMounted[2];
  }
});

a.append([b, c]);
el(document.body).append(a);

console.log(
  "onMount", (
    isMounted[0] === isMounted[1]
  )
);