# 关于 glob 

在线编写glob规则测试 https://globster.xyz/

## 介绍

根据[维基百科](<https://en.wikipedia.org/wiki/Glob_(programming)>)的介绍，在计算机编程中 glob 模式表示带有通配符的路径名，例如在 bash 中查看文件列表：

```bash
$ls src/*.js
src/a.js src/b.js
```

它最初是贝尔实验室 Unix 系统上的一个名叫 glob 的命令（glob 是 global 的缩写），用于展开命令行中的通配符。后来系统提供了该功能的 C 语言库函数`glob()`，知名的 shell 解释器就使用了该接口，shell 脚本和命令行中使用的 glob 模式匹配功能便源自于此。

<!-- truncate -->

## 基础语法

相比正则表达式大量的元字符，glob 模式中元字符极少，所以掌握起来也很快。glob 默认不匹配隐藏文件（以点`.`开头的文件或目录），下面是 glob 的语法：

| 通配符             | 描述                           | 示例      | 匹配                   | 不匹配              |
| ------------------ | ------------------------------ | --------- | ---------------------- | ------------------- |
| `*`                | 匹配 0 个或多个字符，包含空串  | `Law*`    | `Law`, `Laws`和`Lawer` | `La`, `aw`          |
| `?`                | 匹配 1 个字符                  | `?at`     | `cat`, `bat`           | `at`                |
| `[abc]`            | 匹配括号内字符集合中的单个字符 | `[cb]at`  | `cat`, `bat`           | `at`, `bcat`        |
| `[a-z]`            | 匹配括号内字符范围中的单个字符 | `[a-z]at` | `aat`, `bat`, `zat`    | `at`, `bcat`, `Bat` |
|`[^abc]`或`[!abc]`|匹配非括号内字符集合中的单个字符|`[!CB]at`|`cat`, `bat`|`Cat`, `Bat`|
|`[^a-z]`或`[!a-z]`|匹配非括号内字符范围中的单个字符|`[!A-Z]at`|`aat`, `bat`, `zat`|`Aat`, `Bat`, `Zat`|

> 在 bash 命令行中`[!abc]`需要转义成`[\!abc]`

## 扩展语法

除了基础语法外，bash 还支持 glob 的一些扩展语法，主要包含三种：

- Brace Expansion
- globstar
- extglob

三种扩展语法的定义和描述如下：

| 通配符            | 描述                                                                                | 示例              | 匹配                               | 不匹配           |
| ----------------- | ----------------------------------------------------------------------------------- | ----------------- | ---------------------------------- | ---------------- |
| `{x, y, ...}`     | Brace Expansion，展开花括号内容，支持展开嵌套括号                                   | `a.{png,jp{,e}g}` | `a.png`, `a.jpg`, `a.jpeg`         |                  |
| `**`              | globstar，匹配所有文件和任意层目录，如果`**`后面紧接着`/`则只匹配目录，不含隐藏目录 | `src/**`          | `src/a.js`, `src/b/a.js`, `src/b/` | `src/.hide/a.js` |
| `?(pattern-list)` | 匹配 0 次或 1 次给定的模式                                                          | `a.?(txt\|bin)`   | `a.`, `a.txt`, `a.bin`             | `a`              |
| `*(pattern-list)` | 匹配 0 次或多次给定的模式                                                           | `a.*(txt\|bin)`   | `a.`, `a.txt`, `a.bin`, `a.txtbin` | `a`              |
| `+(pattern-list)` | 匹配 1 次或多次给定的模式                                                           | `a.+(txt\|bin)`   | `a.txt`, `a.bin`, `a.txtbin`       | `a.`, `a`        |
| `@(pattern-list)` | 匹配给定的模式                                                                      | `a.@(txt\|bin)`   | `a.txt`, `a.bin`                   | `a.`, `a.txtbin` |
| `!(pattern-list)` | 匹配非给定的模式                                                                    | `a.!(txt\|bin)`   | `a.`, `a.txtbin`                   | `a.txt`, `a.bin` |

> pattern-list 是一组以`|`作为分隔符的模式集合，例如`abc|a?c|ac*`

## 与 regexp 的差异

glob 模式主要用于匹配文件路径，当然也可以用于匹配字符串，不过在匹配字符串的能力上比 regexp 要弱很多。由于 glob 模式和 regexp 存在相同的元字符，但是含义却不同，容易导致混淆，为了避免混淆，下面将 glob 模式转换成对应的 regexp 表示，以便区分他们的异同点。

| glob    | regexp  | 精确的 regexp     |
| ------- | ------- | ----------------- |
| `*`     | `.*`    | `^(?!\.)[^\/]*?$` |
| `?`     | `.`     | `^(?!\.)[^\/]$`   |
| `[a-z]` | `[a-z]` | `^[a-z]$`         |

> glob 匹配的是整个字符串，而 regexp 默认匹配的是子串，regexp 如果要匹配整个字符串需显式指定`^`和`$`。正则表达式中的`(?!\.)`，其表示不匹配隐藏文件

## JavaScript API

通过上面的介绍，已经了解到 glob 模式可以用于匹配文件路径，甚至字符串，如何使用呢？在 JavaScript 中，正则表达式是以标准 API 形式提供的，开箱即用。但是 glob 模式匹配并非 JavaScript 中的标准 API，需要自行解析和匹配，这里介绍一个用 JavaScript 编写的 glob 的匹配库 [minimatch](https://github.com/isaacs/minimatch)，它支持 glob 基础语法和扩展语法，可以实现 glob 的测试、匹配以及转换成正则表达式。下面是使用示例：

```js
const minimatch = require("minimatch");

// minimatch 作为函数使用测试路径匹配
// 第一个参数是输入路径
// 第二个参数是 glob 模式
// 返回 boolean 值
minimatch("a.txt", "*.txt"); // true
minimatch("a.txt", "*.bin"); // false

// minimatch.makeRe 可将 glob 模式串转换成 JS 中的 RegExp 对象
// 然后使用生成的正则表达式，进行路径匹配测试
minimatch.makeRe("*.txt").test("a.txt"); // true
minimatch.makeRe("*.bin").test("a.txt"); // false
```

## 应用例子

glob 最常见的应用场景是匹配文件路径，使用 glob 匹配文件路径比正则表达式更简洁。下面例子实现利用 glob 模式过滤文件路径：

```js
var minimatch = require("minimatch");

const fileList = [
  "src/index.js",
  "src/index.css",
  "src/pages/HomePage.jsx",
  "src/pages/AboutPage/index.jsx",
];

// minimatch.match 方法根据 glob 模式过滤路径列表
// 第一个参数是路径列表
// 第二个参数与是 glob 模式串
// 返回过滤后的路径列表
console.log(minimatch.match(fileList, "src/**/*.js{,x}"));
// ["src/index.js", "src/pages/HomePage.jsx", "src/pages/AboutPage/index.jsx"]
```

如果要通过 glob 模式遍历文件系统，可使用 [node-glob](https://github.com/isaacs/node-glob) ，它基于 minimatch 和 node 实现 glob 模式遍历文件的 API。

## 参考

- https://en.wikipedia.org/wiki/Glob_(programming)
- https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html#Brace-Expansion
- https://www.gnu.org/software/bash/manual/html_node/Pattern-Matching.html#Pattern-Matching
- https://github.com/isaacs/minimatch
- https://github.com/qdlaoyao/js-regex-mini-book