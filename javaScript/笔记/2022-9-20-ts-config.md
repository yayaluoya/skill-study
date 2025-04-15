# 类型根路径 - typeRoots

默认情况下，所有 可见 的 ”@types” 包都将包含在你的编译过程中。 在 node_modules/@types 中的任何包都被认为是 可见 的。 例如，这意味着包含 ./node_modules/@types/，../node_modules/@types/，../../node_modules/@types/ 中所有的包。

当 typeRoots 被指定，仅有 在 typeRoots 下的包会被包含。例如：

{
  "compilerOptions": {
    "typeRoots": ["./typings", "./vendor/types"]
  }
}
这个配置文件将包含 ./typings 和 ./vendor/types 下的所有包，而不包括 ./node_modules/@types 下的。其中所有的路径都是相对于 tsconfig.json。

Related:
types

# 类型 - types

默认情况下，所有 可见 的 ”@types” 包都将包含在你的编译过程中。 在 node_modules/@types 中的任何包都被认为是 可见 的。 例如，这意味着包含 ./node_modules/@types/，../node_modules/@types/，../../node_modules/@types/ 中所有的包。。

当 types 被指定，则只有列出的包才会被包含在**全局**范围内。例如：

{
  "compilerOptions": {
    "types": ["node", "jest", "express"]
  }
}
这个 tsconfig.json 文件将 只会 包含 ./node_modules/@types/node，./node_modules/@types/jest 和 ./node_modules/@types/express。 其他在 node_modules/@types/* 下的包将不会被包含。

这会影响什么？
此选项不会影响 @types/* 如何被包含在你的代码中，例如你在有上面例子里 compilerOptions 的环境中写了这样的代码：

import * as moment from "moment";
moment().format("MMMM Do YYYY, h:mm:ss a");
moment 导入会有完整的类型。

当你设置了这个选项，通过不在 types 数组中包含，它将：

不会再你的项目中添加全局声明（例如 node 中的 process 或 Jest 中的 expect）
导出不会出现再自动导入的建议中

#### 总结

此功能与 类型根路径 不同的是，它只指定你想要包含的具体类型，而 类型根路径 支持你想要特定的文件夹。

#### 关于types的补充

types是用来扩展其它包中的types，比如说你装了一个包a，然而这个包a没有类型声明，那么它就会通过配置的typeRoots或者types中的类型来扩展这个包。

如果想要把类型包含进当前项目中，可以通过以下方式

``` ts
/// <reference types="weixin-app" />
```

reference 引用的意思