import el from "../../index";

var isMounted = [ false, false ];

var a = el("div", {
  onClick: function () {
    isMounted[0] = !isMounted[0];
  },
  onceClack: function () {
    isMounted[1] = !isMounted[1];
  }
});

a.trigger("click");
a.off("click");
a.trigger("click");
a.trigger("clack");
a.trigger("clack");

console.log(
  "on_off", (
    isMounted[0] === true
    && isMounted[1] === true
  )
);