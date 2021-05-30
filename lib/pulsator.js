"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pulsator = (function () {
    function Pulsator(parent, options) {
        this.element = document.createElement("div");
        parent.appendChild(this.element);
        var style = {
            display: "none",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            borderColor: "red",
            background: "red",
            boxShadow: "0 0 0 rgba(255,0,0, 0.4)"
        };
        Object.assign(this.element.style, style, options);
        this.animation = this.element.animate({
            boxShadow: ["0 0 0 0 rgba(255,0,0, 1)", "0 0 0 20px rgba(255,0,0, 0)"]
        }, {
            duration: 1500,
            iterations: Infinity
        });
        this.animation.cancel();
    }
    Pulsator.prototype.start = function () {
        this.element.style.display = "block";
        this.animation.play();
    };
    Pulsator.prototype.stop = function () {
        this.animation.cancel();
        this.element.style.display = "none";
    };
    Pulsator.prototype.pause = function () {
        this.animation.pause();
    };
    Pulsator.prototype.reverse = function () {
        this.animation.reverse();
    };
    Pulsator.prototype.getElement = function () {
        return this.element;
    };
    return Pulsator;
}());
exports.default = Pulsator;
