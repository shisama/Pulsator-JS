"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pulsator = (function () {
    function Pulsator(options) {
        var _a, _b;
        this.element = document.createElement("div");
        var color = Object.assign({
            r: 255,
            g: 0,
            b: 0,
        }, options === null || options === void 0 ? void 0 : options.color);
        var style = {
            display: "none",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            borderColor: "red",
            background: "red",
            boxShadow: "0 0 0 rgba(" + color.r + "," + color.g + "," + color.b + ", 0.4)",
        };
        if (options === null || options === void 0 ? void 0 : options.style) {
            Object.assign(this.element.style, style, options.style);
        }
        this.animation = this.element.animate({
            boxShadow: ["0 0 0 0 rgba(" + color.r + "," + color.g + "," + color.b + ")", "0 0 0 20px rgba(255,0,0, 0)"],
        }, {
            duration: (_a = options === null || options === void 0 ? void 0 : options.duration) !== null && _a !== void 0 ? _a : 1500,
            iterations: (_b = options === null || options === void 0 ? void 0 : options.iterations) !== null && _b !== void 0 ? _b : Infinity,
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
