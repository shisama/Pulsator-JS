export declare type Options = Partial<{
    style: Partial<{
        width: string | number;
        height: string | number;
    }>;
    duration: number;
    iterations: number;
    color: Partial<{
        r: number;
        g: number;
        b: number;
    }>;
}>;
export default class Pulsator {
    private element;
    private animation;
    constructor(options?: Options);
    start(): void;
    stop(): void;
    pause(): void;
    reverse(): void;
    getElement(): HTMLElement;
    startByMouseEvent(e: MouseEvent): void;
}
