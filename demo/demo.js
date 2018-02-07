import Pulsator from "../pulsator.js";

const el = document.createElement("div")
const target = new Pulsator(el);

document.body.appendChild(el);

window.onclick = function (event) {
  el.style.display = "block";
  el.style.marginLeft = event.pageX - 15 + "px";
  el.style.marginTop = event.pageY - 50 + "px";
  target.start();
};