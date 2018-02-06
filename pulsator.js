export default class Pulsator {
  constructor(target, options) {
    const style = {
      display: "none",
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      borderColor: "red",
      background: "red",
      boxShadow: "0 0 0 rgba(255,0,0, 0.4)"
    };
    Object.assign(target.style, style, options);
    this.target = target;
  }

  start() {
    this.target.animate([
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
      })
  }
}