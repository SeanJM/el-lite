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

el.create("Modal", {
  append(children) {
    this.refs.content.append(children);
  },

  render() {
    return el("div", {
      class: "modal"
    }, [
      el("div", {
        class: "modal_chrome"
      }, [
        el("div", {
          ref : "content",
          class: "modal_content"
        })
      ])
    ]);
  }
});

function test() {
  var a = el("x", { ref: "a" });
  var b = el("x", [ a ]);

  var c = el("y", { ref: "c" }, [ b ]);
  var d = el("y", [ c ]);

  var m = el("Modal", [ d ]);

  console.log(
    "Component reference", (
      b.refs.a === a
      && d.refs.c === c
    )
  );
}

test();