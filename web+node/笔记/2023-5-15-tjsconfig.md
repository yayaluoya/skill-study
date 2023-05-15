## 关于 jsconfig 的详解

具体文档见https://www.typescriptlang.org/tsconfig

#### jsconfig.json 是什么？

目录中存在 jsconfig.json 文件时，表明该目录是 JavaScript 项目的根目录。jsconfig.json 文件指定了根文件以及 JavaScript 语言服务 提供的功能选项

Tip: 如果不使用 JavaScript，那么无需关心 jsconfig.json

Tip: jsconfig.json 源于 TypeScript 的配置文件 tsconfig.json。相当于 tsconfig.json 的 allowJs 属性设置为 true

#### 关于代码提示在 vscode 中如果包含的太多引用，vscode 是会隐藏部分引用的，所以需要手动排除，或者指定 include，因为不配置 include 的话默认就是项目下的全部文件。
