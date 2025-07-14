import default_export from "./default";

export function a(){
  console.log('a');
}


/**
 * 从这个文件的编译输出结果可以看出
 * esModuleInterop 的作用
 */
console.log(default_export)