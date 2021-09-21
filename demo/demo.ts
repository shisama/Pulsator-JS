import Pulsator, {Options} from "../src/pulsator";

const options: Options = {
  style: {
    width: "20px",
    height: "20px",
  },
  color: {
    r: 244,
    g: 67,
    b: 54
  },
  duration: 1200,
  iterations: 10,
};

const parent = document.querySelector(".demo-space");
const pulsator = new Pulsator(options);
const el = pulsator.getElement();
el.style.position = "absolute";

if (parent === null) {
  throw new Error('Parent node is null');
}
parent.appendChild(el);

parent.addEventListener('click', (e) => {
  if (e instanceof MouseEvent) {
    pulsator.startByMouseEvent(e)
  }
});

el.addEventListener('mouseover', () => pulsator.pause());

el.addEventListener('mouseleave', () => pulsator.start());

window.addEventListener('keydown', e => {
  switch(e.key) {
    case 'Escape':
      pulsator.stop();
      break;
    case 'Enter':
      pulsator.reverse();
      break;
  }
});
