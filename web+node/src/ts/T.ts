export class A<T> {
  a: T;

  /** 静态成员不能引用类类型参数。 */
  // static get():T{}
}

interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

/**
 * 这里之所以能赋值是应为把泛型看做了任意类型
 * 如果identity的泛型参数继承自string的话就会报错了
 */
let myIdentity: GenericIdentityFn<number> = identity;

myIdentity(1);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a'); // okay
getProperty(x, 'b'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

interface Empty<T> {
  a: string;
  // b: T;
}
let x1: Empty<number>;
let y1: Empty<string>;

x1 = y1; // OK, because y matches structure of x
