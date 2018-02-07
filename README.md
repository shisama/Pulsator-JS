# Pulsator JS
Pulse animation with JavaScript inspired by [Pulsator](https://github.com/shu223/Pulsator)

![](capture/pulsator.gif)

##  [Demo](https://shisama.github.io/Pulsator-JS/demo/)


# Usage
+ Download from GitHub
  - [pulsator.js](pulsator.js)


+ import pulsator.js in your JavaScript files

`import Pulsator from "pulsator"`

+ create Pulsator instance with arguments
  * element: required. parent element of pulse element
  * options: object for changing pulsator's style
  
`const pulsator = new Pulsator(element)`

example(below code is implement of demo page)
```js
import Pulsator from "pulsator.js";

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
```

# API
## start()
start pulse animation

## stop()
stop pulse animation

## pause()
pause pulse animation

## getElement()
get pulse element

# LICENSE
This project is licensed under the terms of the MIT license
