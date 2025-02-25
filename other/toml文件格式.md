TOML（Tom's Obvious, Minimal Language）是一种旨在成为一个小规模、易于使用的语义化配置文件格式。它的目标是易于阅读，清晰地映射到哈希表，并且易于解析成各种数据结构。TOML 的设计理念是“显而易见的、最小的”，力求简洁明了，避免不必要的复杂性。

**基本概念**

TOML 文件主要由以下几个部分组成：

*   **键值对（Key/Value Pairs）：** 这是 TOML 的基本组成单元。键和值之间用等号 `=` 分隔。例如：

    ```toml
    name = "Tom"
    age = 30
    ```

*   **表格（Table）：** 表格用于组织相关的键值对。表格用方括号 `[]` 包围。例如：

    ```toml
    [database]
    server = "192.168.1.1"
    ports = [ 8001, 8001, 8002 ]
    connection_max = 5000
    enabled = true
    ```

*   **内联表格（Inline Table）：** 内联表格提供了一种更紧凑的方式来表示表格。它们用花括号 `{}` 包围。例如：

    ```toml
    point = { x = 1, y = 2 }
    ```

*   **数组（Array）：** 数组用于存储多个值。数组用方括号 `[]` 包围，元素之间用逗号 `,` 分隔。例如：

    ```toml
    fruits = ["apple", "banana", "orange"]
    ```

*   **注释（Comment）：** 注释以井号 `#` 开头。例如：

    ```toml
    # 这是一个注释
    name = "Tom" # 行尾注释
    ```

**数据类型**

TOML 支持以下数据类型：

*   **字符串（String）：** 可以使用单引号 `'` 或双引号 `"` 包围。双引号字符串支持转义字符。例如：

    ```toml
    str1 = "这是一个字符串"
    str2 = '这是一个字符串'
    str3 = "包含 \" 引号的字符串"
    ```

*   **整数（Integer）：** 可以是正数、负数或零。例如：

    ```toml
    int1 = 123
    int2 = -456
    int3 = 0
    ```

*   **浮点数（Float）：** 可以是小数或科学计数法。例如：

    ```toml
    float1 = 3.14
    float2 = -0.01
    float3 = 1e6
    ```

*   **布尔值（Boolean）：** 可以是 `true` 或 `false`。例如：

    ```toml
    bool1 = true
    bool2 = false
    ```

*   **日期和时间（Datetime）：** 可以表示日期、时间和日期时间。例如：

    ```toml
    date1 = 1979-05-27T07:32:00Z # UTC 时间
    date2 = 1979-05-27T00:32:00-07:00 # 带时区偏移
    date3 = 1979-05-27 # 仅日期
    ```

**语法规则**

*   TOML 是大小写敏感的。
*   TOML 文件必须是合法的 UTF-8 编码的 Unicode 文档。
*   空白字符包括 Tab（0x09）和空格（0x20）。
*   换行符可以是 LF（0x0A）或 CRLF（0x0D0A）。

**示例**

一个更完整的 TOML 文件示例如下：

```toml
title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00Z

[database]
server = "192.168.1.1"
ports = [ 8001, 8001, 8002 ]
connection_max = 5000
enabled = true

[servers]

  [servers.alpha]
  ip = "10.0.0.1"
  dc = "eqdc10"

  [servers.beta]
  ip = "10.0.0.2"
  dc = "eqdc11"

[clients]
data = [ ["gamma", "delta"], [1, 2] ]

# 行内表格
fruit = [
  { name = "apple", color = "red" },
  { name = "banana", color = "yellow" }
]
```

**与 INI 的比较**

相比 INI 文件，TOML 具有以下优点：

*   **更清晰的语法：** 提供了更明确的语法规则，避免了 INI 文件格式的歧义。
*   **支持更多数据类型：** 除了字符串，还支持整数、浮点数、布尔值、日期和时间等数据类型。
*   **支持更复杂的数据结构：** 支持表格和数组，可以表示更复杂的数据结构。

**应用场景**

TOML 广泛应用于各种项目，例如：

*   Cargo（Rust 的包管理器）使用 TOML 作为其配置文件。
*   许多其他编程语言的工具和库也使用 TOML 作为配置文件格式。

**编程语言中的支持**

几乎所有主流的编程语言都提供了 TOML 解析库。例如：

*   **Python:** `toml` 库（`pip install toml`）
*   **Go:** `github.com/BurntSushi/toml`
*   **Rust:** `toml` crate
*   **JavaScript:** `@iarna/toml`

总而言之，TOML 是一种易于阅读和编写的配置文件格式，它具有清晰的语法、丰富的数据类型和良好的可扩展性，适合用于各种项目的配置。
