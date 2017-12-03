import el from "../../index";
import log from "./helpers/log";

var isMounted = [ false, false, false ];
el.create("x", {
  onMount() {
    isMounted[0] = !isMounted[0];
  },
  render() {
    return el("div", {
      class   : "app",
      onMount : () => this.onMount()
    });
  }
});

var a = el("x");

el("body").append(a);

log(
  "onMount (Body)", (
    isMounted[0] === true
  )
);