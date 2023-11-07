/**
 * 关于交叉类型和联合类型的学习
 * & 是交叉类型 跟逻辑符号与差不懂
 * | 是联合类型 跟逻辑符号或差不多
 * 其实和数学中的交集和并集并不同
 * 交集 记作A∩B，读作“A与B的交集” 由所有属于集合A且属于集合B的元素所组成的集合
 * 并集 记作A∪B，读作A并B 把A与B合并在一起组成的集合
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
