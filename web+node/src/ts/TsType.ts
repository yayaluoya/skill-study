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

type b = { a: string, d: string } extends { a: string } ? 'c' : 'd';
type b1 = { a: string } | { b: string } extends {
    a: string;
} | { b: string } | { e: string } ? 'c' : 'd'

const s = Symbol('a');


// 可以用赋值关系来判断继承关系
let __: 'a';
let ___: 'a' | 'c' = __;

/** unknown是所有类型的父类型，所以所有类型值都能赋值给它 */
unknown_ = {};
/** never是所有类型的子类型，所以它可以赋值给任何类型 */
let c: number = nerver_
