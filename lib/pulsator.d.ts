declare type Options = {
    style: Record<string, string>;
    duration: number;
    iterations: number;
    color: {
        r: number;
        g: number;
        b: number;
    };
};
export default class Pulsator {
    private element;
    private animation;
    constructor(options?: Options);
    start(): void;
    stop(): void;
    pause(): void;
    reverse(): void;
    getElement(): HTMLElement;
}
export {};
