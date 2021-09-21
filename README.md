# Pulsator JS
Pulse animation with Web Animations API inspired by [Pulsator](https://github.com/shu223/Pulsator)

![](capture/pulsator.gif)

##  [Demo](https://shisama.github.io/Pulsator-JS/demo/)

## Usage
+ Install
`npm install pulsator --save`

+ import pulsator.js in your JavaScript files

  `import Pulsator from "pulsator"`

+ create Pulsator instance with arguments
  * options: object for changing pulsator
  
`const pulsator = new Pulsator(options)`

example(below is a part of [Demo](https://shisama.github.io/Pulsator-JS/demo/))


```typescript
import Pulsator, {Options} from "pulsator";

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

```

## API
### start()
This starts pulse animation

### startByMouseEvent(e: MouseEvent)
This starts pulse animation triggered by mouse event.
This takes MouseEvent object as an argument.

### stop()
This stops pulse animation

### pause()
This s pulse animation

### reverse()
This reverses pulse animation

### getElement()
This returns the element of pulsator

## Options

```typescript
export type Options = Partial<{
  style: Partial<{
    width: string | number; // default: 15px
    height: string | number; // default: 15px
  }>;
  duration: number; // default: 1500
  iterations: number; // default: Infinity
  color: Partial<{
    r: number; // default: 255
    g: number; // default: 0
    b: number; // default: 0
  }>
}>;
```

# Browser compatibility
see [Web Animations API Browser compatibility](https://caniuse.com/web-animation)!

# LICENSE
This project is licensed under the terms of the [MIT license](./LICENSE).
