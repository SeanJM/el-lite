import el from "../../index";
import log from "./helpers/log";

el.defaultProps({
  l : "testing"
});

var a = el("div");

log("Default props", a.props.l === "testing");