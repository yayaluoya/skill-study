/**
 * IterableIterator 可迭代的迭代器
 * Iterable 可迭代对象
 * Iterator 迭代器
 */
function* i(): IterableIterator<number> {
    let a: number;
    while (true) {
        a++;
        yield a;
    }
}

let _i = i();
let v = _i.next();
console.log(v.value);

let a: Iterable<number> = {
    *[Symbol.iterator]() {
        yield 1;
    }
};
let _a = a[Symbol.iterator]();

export default {};

/** 简写版的调用签名 */
let f: () => void;
/** 完整版的调用签名，因为函数是一个可调用对象，所有用对象的形式来描述调用签名才能实现最多功能 */
let f2: {
    (): void;
    (): number;
};

type f2_ = typeof f2;

type f3 = {
    (a: number): number;
    (b: string): string;
};

let f3_: f3 = ((a) => {
    return a;
});
let f3__ = f3_(1);

function fun(a: () => void, a2: {
    (): void
}) { }

function fun1(a: number): number;
function fun1(a: string): string;
function fun1(a: number | string): number | string {
    return a;
}
