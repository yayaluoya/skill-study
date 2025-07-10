import './Function';

import './ES13';
import './ts/metadata';
console.log('hello word');

// let test = TEST;

let i_m: ITest;

import './ts/enum';

class AAA {
  a: string;
  b: number = (function () {
    console.log('b属性初始化');
    return 10;
  })();
  constructor() {
    this.a = 'a';
    this.b = 1;
  }
  f() {
    return this.a;
  }
}

class AAAA extends AAA {}

console.log(AAA.prototype);

// new AAA();

let arr = [];
arr.at__();
arr.toString();
