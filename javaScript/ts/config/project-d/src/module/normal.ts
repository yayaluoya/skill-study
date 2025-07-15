/**
 * mode = NodeNext 说明宿主环境可以用commonJs 和 esm 模块
 * 具体使用那种模块的规则如下
 * 1.看脚本后缀是否mts 或者 cts
 * 2.看最近的package.json中是否有 type=module字段来判断是否使用esm，否则使用是commonJs模块
 */

export function normalF (){
  console.log('正常情况的模块');
}

export default function normalDefF(str: string = ''){
  console.log('正常模块 默认导出');
}