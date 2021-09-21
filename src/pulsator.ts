export type Options = Partial<{
  style: Partial<{
    width: string | number;
    height: string | number;
    background: string;
  }>;
  duration: number;
  iterations: number;
  color: Partial<{
    r: number;
    g: number;
    b: number;
  }>
}>;

export default class Pulsator {
  private element: HTMLElement;
  private animation: Animation;
  constructor(options?: Options) {
    this.element = document.createElement("div");
    const color = Object.assign({
      r: 255,
      g: 0,
      b: 0,
    }, options?.color);
    const style = Object.assign({
      display: "none",
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      borderColor: `rgba(${color.r},${color.g},${color.b}, 1)`,
      background: `rgba(${color.r},${color.g},${color.b}, 1)`,
    }, options?.style);
    Object.assign(this.element.style, style);

    this.animation = this.element.animate(
      {
        boxShadow: [`0 0 0 0 rgba(${color.r},${color.g},${color.b},1)`, `0 0 0 20px rgba(${color.r},${color.g},${color.b}, 0)`],
      },
      {
        duration: options?.duration ?? 1500,
        iterations: options?.iterations ?? Infinity,
      }
    );
    this.animation.cancel();
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

  reverse() {
    this.animation.reverse();
  }

  getElement() {
    return this.element;
  }

  startByMouseEvent(e: MouseEvent) {
      this.element.style.left = `${e.pageX- this.element.offsetWidth / 2}px`
      this.element.style.top = `${e.pageY- this.element.offsetHeight / 2}px`;
      this.start();
  }
}
