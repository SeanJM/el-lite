const target = document.getElementById("log-target");

export default function test(name, boolean) {
  const element  = document.createElement("div");
  const testname = document.createElement("div");
  const value    = document.createElement("div");

  element.className  = "log-message";
  testname.className = "log-message_test-name";
  value.className    = "log-message_test-value";

  testname.innerHTML = name;

  if (boolean) {
    element.className += " log-message--true";
  } else {
    element.className += " log-message--false";
  }

  element.appendChild(testname);
  element.appendChild(value);
  target.appendChild(element);
}