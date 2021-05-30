export default class Pulsator {
    private element;
    private animation;
    constructor(parent: Element, options?: unknown);
    start(): void;
    stop(): void;
    pause(): void;
    reverse(): void;
    getElement(): HTMLElement;
}
