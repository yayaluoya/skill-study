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
    },
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

let f3_: f3 = (a) => {
    return a;
};
let f3__ = f3_(1);

function fun(
    a: () => void,
    a2: {
        (): void;
    },
) {}

function fun1(a: number): number;
function fun1(a: string): string;
function fun1(a: number | string): number | string {
    return a;
}

/**
 * 关于函数签名什么时候用(a: number)=>number和什么时候用{(a: number):number}
 * 如果是简写版的话就要写成=>如果是完整版的话就要写成{:}，因为{:}的写法是类定义的
 */

/**
 *
 * @param a
 * @param b
 */
function fun2(a: any, b: any): void;
function fun2(this: void, a = 'fasd', b: string, c?: string) {
    //
}

let el = document.createElement('div');

el.addEventListener('click', function (this: string) {
    console.log(this);
});

let x = (a: number): string => '';
let y = (b: number | string, s: string): string | number => '';

y = x; // OK
// x = y; // Error

/**
 * 注意实现方法的签名是不可用的
 * @param b
 * @param s
 */
function fun3(b: number | string): number | string;
function fun3(
    b: number | string | boolean,
    s?: boolean,
    d?: boolean,
): number | string | { a: string };
/**
 * 实现方法的类型必须是各个重载类型的并集
 * @param b
 * @param s
 * @returns
 */
function fun3(b: number, s?: string | boolean): number | string {
    return b;
}
fun3(1, false);
// fun3(1);// Error

let fun4: (b: number) => number | string = fun3;
fun4(1);

/**
 * 关于函数参数双向协变性的测试代码
 */
enum EventType {
    Mouse,
    Keyboard,
}
interface Event {
    timestamp: number;
}
interface MouseEvent extends Event {
    x: number;
    y: number;
}
interface KeyEvent extends Event {
    keyCode: number;
}

function listenEvent(eventType: EventType, handler: (n: Event, c: string) => void) {
    /* ... */
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Keyboard, (e: KeyEvent) =>
    console.log((<KeyEvent>e).keyCode + ',' + (<KeyEvent>e).keyCode),
);
listenEvent(EventType.Mouse, <(e: Event) => void>(
    ((e: MouseEvent) => console.log(e.x + ',' + e.y))
));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));

/**
 * 关于剩余参数的类型探讨
 */

function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));
