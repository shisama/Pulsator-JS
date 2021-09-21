# Pulsator JS
Pulse animation with Web Animations API inspired by [Pulsator](https://github.com/shu223/Pulsator)

![](capture/pulsator.gif)

##  [Demo](https://shisama.github.io/Pulsator-JS/demo/)


# Usage
+ Install
`npm install pulsator --save`

+ import pulsator.js in your JavaScript files

  `import Pulsator from "pulsator"`

+ create Pulsator instance with arguments
  * element: required. parent element of pulse element
  * options: object for changing pulsator's style
  
  `const pulsator = new Pulsator(element, options)`

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

# API
## start()
start pulse animation

## stop()
stop pulse animation

## pause()
pause pulse animation

## reverse()
reverse pulse animation

## getElement()
get pulse element

# Browser compatibility
* Chrome 36
* Firefox 48

see [Web Animations API Browser compatibility](https://caniuse.com/web-animation)!

# LICENSE
This project is licensed under the terms of the MIT license
