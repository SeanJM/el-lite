import el from "../../index";
import log from "./helpers/log";

el.create("x", {
  render() {
    this.refs.test = el({ ref : "test2" });
    return el("div");
  }
});

var b = el("x");

log("component refs (after render)", !!b.refs.test2);