let a: number[] = [10];
let a2: Array<string> = [''];

/** 可选元素写法 */
let a3: [number, number?] = [1, 2];
a3.push(3);

/** 剩余元素写法 */
let a4: [number, ...string[]] = [1, ''];
a4.push(2);

let a5: readonly number[] = [];
// a5.push();// 会报错
let a6: ReadonlyArray<number> = [];
// 这里可能是Readonly做了一些判断吧
let a7: Readonly<string[]> = [];