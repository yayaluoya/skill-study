// console.log(require.main == module);

// const { findSourceMap, SourceMap } = require('module');
// const path = require('path');

// console.log(findSourceMap(path.join(__dirname, '../dist/bundle.js')));

/**
 * import 语句可以引用 ES 模块或 CommonJS 模块。 import 语句只允许在 ES 模块中使用，但 CommonJS 支持动态 import() 表达式来加载 ES 模块。

当导入 CommonJS 模块 时，提供 module.exports 对象作为默认导出。 命名导出可能可用，由静态分析提供，以方便更好的生态系统兼容性。
 */

// 只用通过esm或者import()的方式导入esm模块，不能用require()导入esm模块，因为ES 模块具有异步执行
// 同步能变异步，但异步是永远不能变同步的
// 至于esm为什么是异步的，因为这样更加自由，强大。更符合网络的思想
import('./esm.mjs').then(({ default: a }) => {
    console.log('在commonJs模块中导入esm模块的内容', a);
});

//当使用 import 关键字解析相对或绝对的说明符时，必须提供文件扩展名。 还必须完全指定目录索引（例如 './startup/index.js'）。

// CommonJS 模块的 ECMAScript 模块命名空间表示始终是使用 default 导出键指向 CommonJS module.exports 值的命名空间。

// 在es模块中没有require这个方法了，如果要用的话需要用 module.createRequire() 构造require()方法，而且es模块中也没有__dirname,__filename了
