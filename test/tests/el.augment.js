import el from "../../index";

el.create("test", {
  render() {
    return el("div");
  }
});

el.fn("t", a => {
  return a;
});

console.log("el.augment", el("div").t(true) === el("test").t(true));