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
type b2 = 'a' extends 'a' | 'b' ? 'a' : 'b';
type b3 = 'a' | 'b' extends { a: string } & ('a' | 'b') ? 'a' : 'b';
type b4 = { a: string; d: string } extends { a: string | number } ? 'a' : 'b';

const s = Symbol('a');

/**
 * 可以用赋值关系来判断继承关系
 * 关于类型兼容性的判断，对不同结构的类型方式是不一样的，比如联合类型和交叉类型和函数，他们的类型兼容性判断就有所不同
 * 基础类型 比较多，见文档中的表或图片../../images/Quicker_20231108_095657.png
 * 属性成员类型，若类型a的所有属性都能在类型b中找到且类型b的属性类型都是类型a属性对应类型的子类型则类型b是类型a的子类型
 * 联合类型 若类型s的所有类型都是类型t的子类型，则s是t的子类型
 * 交叉类型 若类型s的任意类型是类型t的子类型，则s是t的子类型
 * 函数类型 比较复杂，见文档
 * 泛型 见文档
 */
let __: 'a';
let ___: 'a' | 'c' = __;

/**
 * unknown 是所有类型的父类型，所以所有类型值都能赋值给它
 * unknown 可以认为是 类型更安全的 any。
 */
unknown_ = {};
/**
 * never是所有类型的子类型，所以它可以赋值给任何类型，但是它不能被使用
 * never 表示一个 无法被观测的类型，被赋予了该类型的变量什么都不能做
 */
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
