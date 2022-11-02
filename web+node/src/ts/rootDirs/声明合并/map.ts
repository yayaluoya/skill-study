import { Observable } from "./observable";

/**
 * 相对路径模块不能再.d.ts中声明，这里有点特殊
 *
 */
declare module "./observable" {
    interface Observable<T> {
        aaa(): string;
    }
}

Observable.prototype.aaa = function () {
    // ... another exercise for the reader
    return 'c';
}

let o = new Observable()

o.a();
o.aaa();