/**
 * .cts 文会被强制当成 使用 ESM 模块系统
 */

import { b } from "./b.js";
import default_export from "./default.js";

export function a() {
  console.log('a mjs');
  b()
}

/**
 * 从这个打印结果可以看出
 * esm 模块 导入 commonJs 模块 的规则
 */
console.log(default_export)
