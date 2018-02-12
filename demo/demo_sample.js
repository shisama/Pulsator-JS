import Pulsator from "../pulsator.js";

const options = {
  width: "20px",
  height: "20px"
};
const pulsator = new Pulsator(document.querySelector(".demo-space"), options);
const el = pulsator.getElement();

document.querySelector(".demo-space").addEventListener("click", function(event) {
  const rect = this.getBoundingClientRect();
  const x = event.pageX - rect.left - window.pageXOffset;
  const y = event.pageY - rect.top - window.pageYOffset;

  el.style.marginLeft = x + "px";
  el.style.marginTop = y + "px";
  pulsator.start();
});

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