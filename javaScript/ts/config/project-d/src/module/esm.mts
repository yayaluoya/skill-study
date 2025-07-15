/**
 * .cts 文会被强制当成 使用 ESM 模块系统
 */

import normalDefF from "./normal.js";

export function esmF() {
  console.log('esm 模块');
}

normalDefF.default();
