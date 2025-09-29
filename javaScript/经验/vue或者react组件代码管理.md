# vue 或者 react 组件代码管理

## 文件结构

- index.vue | index.tsx
  入口文件，仅保留状态管理，生命周期，导入导出，相关的代码

- index.scss
  样式文件（入口文件主动导入）

- index.ts
  组件主要可拆分的代码

- type.ts
  组件的类型定义

- utils.ts 可放到到index.ts文件中
  组件使用的一些工具函数

- constants.ts 可放到index.ts文件中
  组件使用的一些常量
