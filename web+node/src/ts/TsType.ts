/**
 * 关于ts的类型 更深度的验证
 */

/**
 * 必须导出一个东西转成模块模式，不然就是脚本模式，容易命名冲突
 */
export default {};

// unknown 未知的类型

let unknown_: unknown;

let undefined_: undefined;

/** 除nerver之外的所有类型的子类型 */
let null_: null;

let void_: void;

let nerver_: never;

/** 注意他们之间可以相互赋值 */
void_ = null_ = undefined_;

undefined_ = null_;

// null_ = void_;
// undefined_ = void_;

let b: boolean = false;

b = {} as boolean;

type b = { a: string; d: string } extends { a: string } ? 'c' : 'd';
type b1 = { a: string } | { b: string } extends
    | {
          a: string;
      }
    | { b: string }
    | { e: string }
    ? 'c'
    : 'd';

const s = Symbol('a');

// 可以用赋值关系来判断继承关系
let __: 'a';
let ___: 'a' | 'c' = __;

/** unknown是所有类型的父类型，所以所有类型值都能赋值给它 */
unknown_ = {};
/** never是所有类型的子类型，所以它可以赋值给任何类型 */
let c: number = nerver_;

function A() {}

let a: typeof A = A;

interface Bird {
    fly();
    layEggs(n: { a: string });
}

interface Fish {
    swim();
    layEggs(s: { b: string });
}

function getSmallPet(): Bird | Fish {
    // ...
    return {} as any;
}

let pet = getSmallPet();
/**
 * 这里说明了联合类型对象可以使用类型里共有的成员
 * 而且在vscode中访问类型的顺序是顺序的
 * 参数类型是几个类型的交叉类型
 * 其实这是理所应当的
 */
pet.layEggs({
    a: '',
    b: '',
}); // okay
// pet.swim();    // errors

function isB(a: Bird | Fish | A | Array<any> | CA): a is Bird {
    return true;
}
if (isB(pet)) {
    pet.fly();
}

class CA {
    b: string;
    a() {}
}

let aaa: A | Bird | Array<any> | CA;

if (isB(aaa)) {
    aaa.fly();
}
if (aaa instanceof Array) {
    aaa;
}
if (aaa instanceof CA) {
    aaa.a();
    aaa.b;
}

interface AA {
    a: string;
    b: number;
    [key: string]: string | number;
}
type a = AA[keyof AA];
let _a: a = 'a';

/** 对一些内部条件类型的实现 */
type Exclude_<A, B> = A extends B ? never : A;
type NonNullable_<A> = A extends undefined | null ? never : A;
type ReturnType_<T> = T extends (...args) => infer R ? R : void;

type T00 = Exclude_<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>; // "b" | "d"
type T04 = NonNullable_<string | number | undefined>; // string | number
type T10 = ReturnType_<() => string>; // string
type ReturnType2 = ReturnType<any>;
type new2 = new (...args) => any;
// type new2 = { new(...args): any };
type T11 = Parameters<(s: string) => void>; // void
let T11_: T11 = [''];
type TTTT = [string, number];

type A12 = {
    a: string;
};

type a__ = typeof A;
