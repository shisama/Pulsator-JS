import Pulsator from "../lib/pulsator.js";

const options = {
  width: "20px",
  height: "20px"
};
const parent = document.querySelector(".demo-space");
const pulsator = new Pulsator(parent, options);
const el = pulsator.getElement();
el.style.position = "absolute";

parent.addEventListener("click", function(event) {
  el.style.left = (event.pageX - 10 /* 10px is the half of pulsator width */) + "px";
  el.style.top = (event.pageY - 10 /* 10px is the half of pulsator height */) + "px";
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
  if (event.key === "Enter") {
    pulsator.reverse();
  }
};