import el  from "../../index";
import log from "./helpers/log";

var a = [
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
];

a[0].appendChild(a[1]);
a[0].appendChild(a[2]);
a[0].appendChild(a[3]);
a[0].appendChild(new Text("Omit"));

log("map children", el.mapChildren(a[0]).length === 3);