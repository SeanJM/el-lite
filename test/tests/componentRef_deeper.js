import el from "../../index";
const input = el("input", { ref: "name", type: "text" });

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

el.create("Modal2", {
  render() {
    return el("Modal", [ input ]);
  }
});

var m = el("Modal");
var m2 = el("Modal2");
m.append(el("div"));
console.log("component reference (depper)", input === m2.refs.name);