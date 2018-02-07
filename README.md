# Pulsator JS
Pulse animation with JavaScript inspired by [Pulsator](https://github.com/shu223/Pulsator)

![](capture/pulsator.gif)

##  [Demo](https://shisama.github.io/Pulsator-JS/demo/)


# Usage
+ Download from GitHub
  - [pulsator.js](pulsator.js)


import pulsator.js in your JavaScript files

```js
import Pulsator from "../pulsator.js";

const el = document.createElement("div")
const target = new Pulsator(el);

document.body.appendChild(el);

window.onclick = function (event) {
  el.style.display = "block";
  el.style.marginLeft = event.pageX + "px";
  el.style.marginTop = event.pageY + "px";
  target.start();
};
```

# LICENSE
This project is licensed under the terms of the MIT license
