/**
 * .cts 文会被强制当成 使用 CommonJs 模块系统
 */

import { b } from "./b";

export function a(){
  console.log('a cjs');
  b()
}