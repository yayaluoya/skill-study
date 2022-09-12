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