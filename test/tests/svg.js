import el from "../../index";

var body = el(document.body);

el.create("Icon", {
  render(props) {
    return el("svg", {
      style : {
        display : "inline-block",
        width : "100px",
        height : "100px"
      }
    }, [ el("use", { "href" : "#icon_" + props.type })]);
  }
});

body.append(el("Icon", { type : "eye"}));