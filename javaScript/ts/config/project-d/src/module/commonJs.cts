/**
 * .cts 文会被强制当成 使用 CommonJs 模块系统
 * 可用从这个脚本的输出文件来观察 esModuleInterop 配置的行为
 */

import normalDefF, { normalF } from "./normal";

export function cjsF(){
  console.log('commonJs 模块');
}

normalDefF();
normalF();