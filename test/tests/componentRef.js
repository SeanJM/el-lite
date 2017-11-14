import el from "../../index";

el.create("x", {
  render() {
    return el("div");
  }
});

el.create("y", {
  render() {
    return el("x");
  }
});

function test() {
  var a = el("x", { ref: "a" });
  var b = el("x", [ a ]);

  var c = el("y", { ref: "c" }, [ b ]);
  var d = el("y", [ c ]);

  console.log(
    "Component reference", (
      b.refs.a === a
      && d.refs.c === c
    )
  );
}

test();