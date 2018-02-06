import Pulsator from "../pulsator";

const el = document.createElement("div")
const target = new Pulsator(el);

document.body.appendChild(el);

window.onclick = function (event) {
  el.style.display = "block";
  el.style.marginLeft = event.pageX + "px";
  el.style.marginTop = event.pageY + "px";
  target.start();
};