import Pulsator from "../pulsator.js";

const options = {
  width: "20px",
  height: "20px"
};
const pulsator = new Pulsator(document.body, options);
const el = pulsator.getElement();

window.onclick = function(event) {
  el.style.marginLeft = event.pageX - 15 + "px";
  el.style.marginTop = event.pageY - 120 + "px";
  pulsator.start();
};

el.onmouseover = function(event) {
  pulsator.pause();
};

el.onmouseleave = function(event) {
  pulsator.start();
};

window.onkeydown = function(event) {
  if (event.key === "Escape") {
    pulsator.stop();
  }
};