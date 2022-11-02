import "weixin-app";
import "glob";

declare module 'glob' {
    export class A { }
}

type a = string;

export default a;

/**
 * 这个是特殊的
 */
declare global {
    interface Array<T> {
        at__(): string;
    }
}

/**
 * 普通模块是局部的
 */
declare module AAAA { }