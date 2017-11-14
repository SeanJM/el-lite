import el from "../../index";

var isMounted = [ false, false ];

el(document.body).append(el("div", {
  onMount: function () {
    isMounted[0] = true;
  }
}));

el.create("x", {
  render() {
    return el("div", {
      onMount: function () {
        isMounted[1] = true;
      }
    });
  }
});

el(document.body).append(el("x"));

console.log(
  "onMount", (
    isMounted[0] === isMounted[1]
  )
);