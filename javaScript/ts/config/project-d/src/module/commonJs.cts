/**
 * .cts 文会被强制当成 使用 CommonJs 模块系统
 */

import normalDefF from "./normal";

export function cjsF(){
  console.log('commonJs 模块');
}

console.log(normalDefF());