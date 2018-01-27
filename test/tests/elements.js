import el from "../../index";
import log from "./helpers/log";

var a = el("div", {
  id : "test"
});

log("elements (#test)", el.id.test.node === a.node);