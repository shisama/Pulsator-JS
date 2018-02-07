export default class Pulsator {
  constructor(parent, options) {
    this.element = document.createElement("div");
    parent.appendChild(this.element);
    const style = {
      display: "none",
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      borderColor: "red",
      background: "red",
      boxShadow: "0 0 0 rgba(255,0,0, 0.4)"
    };
    Object.assign(this.element.style, style, options);
    this.animation = this.element.animate([
        {
          boxShadow: "0 0 0 0 rgba(255,0,0, 1)"
        },
        {
          boxShadow: "0 0 0 20px rgba(255,0,0, 0)"
        }
      ],
      {
        duration: 1500,
        iterations: "Infinity"
      });
  }

  start() {
    this.element.style.display = "block";
    this.animation.play();
  }

  stop() {
    this.animation.cancel();
    this.element.style.display = "none";
  }

  pause() {
    this.animation.pause();
  }

  getElement() {
    return this.element;
  }
}