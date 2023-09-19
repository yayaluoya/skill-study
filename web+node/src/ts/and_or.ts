/**
 * 关于交集和并集的学习
 * | 是并集
 * & 是交集
 * 一个困扰了我很多久的问题，就是我一直以为|是交集&是并集，所以一直感觉有点怪，现在总算明白了，原来一直是我理解错了
 */

/**
 * 必须导出一个东西转成模块模式，不然就是脚本模式，容易命名冲突
 */
export default {};

type a = { a: string; e: string };
type b = { a: number; b: string };

type a_or_b = a | b;
type a_and_b = a & b;

let _: a_or_b = {
  a: 1,
  b: '',
};

let __: a_and_b = {
  a: 1 as never,
  e: '',
  b: '',
};

// type t = ('a' | 'b') & 'c'; //never
// type t = ('a' | 'b') | 'c'; //"b" | "a" | "c"
type t = ({ a: string } | { b: string }) & { c: string };
let t: t = {
  a: '',
  b: '',
  c: '',
};
