import el from "../../index";

var a = el("div", {
  onMount() {
    this.state = {
      index : 1
    };
    this.refs.text.html(this.state.index);
  },

  onClick() {
    this.state.index += 1;
    this.refs.text.html(this.state.index);
  },

  style : {
    width      : 60,
    height     : 60,
    margin     : 10,
    background : "red"
  }
}, [
  el({
    ref   : "text",
    style : {
      fontSize   : 10,
      lineHeight : "10px"
    }
  })
]);

var b = el("div", {
  onMount() {
    this.state = {
      index : 1
    };
    this.refs.text.html(this.state.index);
  },

  onMouseDown() {
    this.state.index += 1;
    this.refs.text.html(this.state.index);
  },

  style : {
    width      : 60,
    height     : 60,
    margin     : 10,
    background : "green"
  }
}, [
  el({
    ref   : "text",
    style : {
      fontSize   : 10,
      lineHeight : "10px"
    }
  })
]);

el("body").append([ a, b ]);