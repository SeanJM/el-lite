import el from "../../index";
import log from "./helpers/log";

el.create("test", {
  render() {
    return el("div");
  }
});

el.fn("t", a => {
  return a;
});

log("el.augment", el("div").t(true) === el("test").t(true));