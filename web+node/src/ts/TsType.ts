/**
 * 关于ts的类型 更深度的验证
 */

// unknown 未知的类型

let unknown_: unknown;

let undefined_: undefined;

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