/**
 * 这个是特殊的
 */
declare global {
    interface Array<T> {
        at__(): string;
    }
}

declare const s: string;

export default s;