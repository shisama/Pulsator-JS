var Pulsator = (function () {
    function Pulsator(options) {
        var _a, _b, _c, _d, _e, _f;
        this.element = document.createElement("div");
        var color = Object.assign({
            r: 255,
            g: 0,
            b: 0,
        }, options === null || options === void 0 ? void 0 : options.color);
        Object.assign(this.element.style, {
            display: "none",
            width: (_b = (_a = options === null || options === void 0 ? void 0 : options.style) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : "15px",
            height: (_d = (_c = options === null || options === void 0 ? void 0 : options.style) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : "15px",
            borderRadius: "50%",
            borderColor: "rgba(" + color.r + "," + color.g + "," + color.b + ", 1)",
            background: "rgba(" + color.r + "," + color.g + "," + color.b + ", 1)",
        });
        this.animation = this.element.animate({
            boxShadow: ["0 0 0 0 rgba(" + color.r + "," + color.g + "," + color.b + ",1)", "0 0 0 20px rgba(" + color.r + "," + color.g + "," + color.b + ", 0)"],
        }, {
            duration: (_e = options === null || options === void 0 ? void 0 : options.duration) !== null && _e !== void 0 ? _e : 1500,
            iterations: (_f = options === null || options === void 0 ? void 0 : options.iterations) !== null && _f !== void 0 ? _f : Infinity,
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
    Pulsator.prototype.startByMouseEvent = function (e) {
        this.element.style.left = e.pageX - this.element.offsetWidth / 2 + "px";
        this.element.style.top = e.pageY - this.element.offsetHeight / 2 + "px";
        this.start();
    };
    return Pulsator;
}());
export default Pulsator;
