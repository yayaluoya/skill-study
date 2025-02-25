## YAML 文件语法学习

### 一、概述
YAML是一个类似 XML、JSON 的标记性语言。YAML 强调以数据为中心，并不是以标识语言为重点，YAML 是一种较为人性化的数据序列化语言，可以配合目前大多数编程语言使用。

YAML 的语法比较简洁直观，特点是使用空格来表达层次结构，其最大优势在于数据结构方面的表达，所以 YAML 更多应用于编写配置文件，其文件一般以 .yaml 为后缀,通常也缩写为.yml。

### 二、yaml 语法特点

- 大小写敏感
- 使用缩进表示层级关系
- 缩进不允许使用tab，只允许空格( 低版本限制 )
- 缩进的空格数不重要，只要相同层级的元素左对齐即可
- #表示注释
- 使用 Unicode 编码作为字符标准编码，例如 UTF-8

### 三、YAML 与 XML、JSON

#### 3.1、YAML 与 XML

```
语法：YAML 更加简洁易读，更适合人类阅读和编辑，而 XML 语法比较繁琐，更适合机器解析。

树形结构：XML 是基于树形结构的，需要显式地定义父子节点的关系，而 YAML 是基于缩进的，通过缩进表示层级关系，更加灵活。

扩展性：XML 有大量的标准和规范，可以很好地支持扩展，而 YAML 的扩展性相对较差。

应用场景：XML 更适合用于传输和存储结构化数据，如配置文件、文档等；YAML 更适合用于定义数据结构和对象序列化，如在编程语言中使用。

总的来说，YAML 更加人性化和灵活，XML 更加标准化和严谨，应根据具体应用场景选择使用。

```

#### 3.2、YAML 与 JSON

- JSON 可以看作是 YAML 的子集，也就是说 JSON 能够做的事情，YAML 也能够做
- YAML 能表示得比 JSON 更加简单和阅读，例如“字符串不需要引号”。所以 YAML 容易可以写成 JSON 的格式，但并不建议这种做
- YAML 能够描述比 JSON 更加复杂的结构，例如“关系锚点”可以表示数据引用（如重复数据的引用）。

YAML 和 JSON 都是常用的数据序列化格式，它们有以下比较：

```
语法：YAML 语法相对于 JSON 更加简洁易读，更适合人类阅读和编辑，而 JSON 语法更加紧凑，更适合机器解析。

树形结构：JSON 和 XML 一样，是基于树形结构的，需要显式地定义父子节点的关系，而 YAML 是基于缩进的，通过缩进表示层级关系。

扩展性：JSON 的扩展性相对较好，支持各种数据类型，可用于序列化复杂数据结构，而 YAML 的扩展性相对较差。

应用场景：JSON 更适合用于 Web 应用中，如 Ajax 或 RESTful API，因为它更加轻量级和易于处理；YAML 更适合用于配置文件和数据序列化，如在编程语言中使用。

总的来说，YAML 更加人性化和易读，JSON 更加紧凑和高效，应根据具体应用场景选择使用。

```

### 四、yaml 支持的数据类型

- 纯量：单个的、不可再分的值
- 对象：键值对的集合，又称为映射（mapping）/哈希（hash）/字典（dictionary）
- 数组：一组按次序排列的值，又称为序列（sequence） /列表（list）

#### 4.1、对象

即键值对key: value

- 对象键值对使用冒号结构表示key: value，冒号后面要加一个空格
- 也可以使用key:{key1: value1, key2: value2, ...}
- 还可以使用缩进表示层级关系
- 较为复杂的对象格式，可以使用问号加一个空格代表一个复杂的 key，配合一个冒号加一个空格代表一个 value
如下：
```yaml
name: "Jahn"
age: 21

# 行内对象，即使用{}写成一行，在 YAML 1.0 中，流式风格被称为“非文档流式”，但是在 1.1 版本中更名为“流式”，并进行了更新。在 YAML 1.2 中，流式风格得到了进一步的改进和扩展。
info: {name: "Jahn", age: 21}

# 缩进表示层级关系
info: 
    name: "Jahn"
    age: 21

# 较为复杂的对象格式，可以使用问号加一个空格代表一个复杂的 key，配合一个冒号加一个空格代表一个 value
?
    -complexkey1
    - complexkey2
:
    - complexvalue1
    - complexvalue2

# 意思即对象的属性是一个数组 [complexkey1,complexkey2]，对应的值也是一个数组 [complexvalue1,complexvalue2]

```

#### 4.2、数组

一组按次序排列的值，又称为序列（sequence）/列表（list）有以下集中形式：

- 一组以区块格式（Block Format）（即“破折号+空格”）开头的数据组成一个数组
```yaml
animals:
  - Cat
  - Dog
  - Goldfish

{ animals: [ 'Cat', 'Dog', 'Goldfish' ] }
```
- 同时也支持内联格式（Inline Format）来表达（用方括号包裹，逗号加空格分隔，类似 JSON）
```yaml
values: [value1, value2, value3]

{ values: [ 'value1', 'value2', 'value3' ] }
```
- 支持多维数组（用缩进表示层级关系）

```yaml
values:
  -        # 数据结构的子成员是一个数组，则可以在该项下面缩进一个空格。
    - value1
    - value2
  -
    - value3
    - value4

{ values: [ [ 'value1', 'value2' ], [ 'value3', 'value4' ] ] }

```

注意，第2行和第5行不能添加东西，否则解析出来就不是二维数组了，如下面反例

```yaml
values:
  - sx1
    - value1
    - value2
  - sx2
    - value3
    - value4

{ values: [ 'sx1 - value1 - value2', 'sx2 - value3 - value4' ] }

```

#### 4.3、复合结构
对象和数组可以结合使用，形成复合结构
```yaml
sport:
 - swim
 - run
 - basketball

city:
 haidian: beijing.haidian
 jinan: shandong.jinan
 hefei: anhui.hefei

```
#### 4.4、纯量

纯量是最基本的、不可再分的值
```
字符串
布尔值
整数
浮点数
Null
时间
日期

```
示例如下：
```yaml
boolean: 
    - TRUE  # true,True都可以
    - FALSE  # false，False都可以
float:
    - 3.14
    - 6.8523015e+5  # 可以使用科学计数法
int:
    - 123
    - 0b1010_0111_0100_1010_1110    # 二进制表示
null:
    nodeName: 'node'
    parent: ~  # 使用~表示null
string:
    - 哈哈
    - 'Hello world'  # 可以使用双引号或者单引号包裹特殊字符
    - newline
      newline2    # 字符串可以拆成多行，每一行会被转化成一个空格
date:
    - 2018-02-17    # 日期必须使用ISO 8601格式，即yyyy-MM-dd
datetime: 
    -  2018-02-17T15:02:31+08:00    # 时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区

```
#### 4.4.1、字符串

- 字符串一般不需要用引号包裹，但是如果字符串中使用了反斜杠“\”开头的转义字符就必须使用引号包裹
```yaml
strings:
  - Hello without quote        # 不用引号包裹
  - Hello
    world                      # 拆成多行后会自动在中间添加空格
  - 'Hello with single quotes' # 单引号包裹
  - "Hello with double quotes" # 双引号包裹
  - "I am fine. \u263A"        # 使用双引号包裹时支持 Unicode 编码
  - "\x0d\x0a is \r\n"         # 使用双引号包裹时还支持 Hex 编码
  - 'He said: "Hello!"'        # 单双引号支持嵌套"
  - \n \r             
  - '\n \r'                    
  - "\n \r"                    

```
其JSON如下：
```json
{ strings: 
   [ 'Hello without quote',
     'Hello world',
     'Hello with single quotes',
     'Hello with double quotes',
     'I am fine. ☺',
     '\r\n is \r\n',
     'He said: "Hello!"',
     '\\n \\r',
     '\\n \\r',
     '\n \r' ] }

```
- 对于多行的文字，YAML 提供了两种特殊的语法支持

  - 保留换行(Newlines preserved)
使用竖线符|来表示该语法，每行的缩进和行尾空白都会被去掉，而额外的缩进会被保留
```yaml
lines: |
我是第一行
我是第二行
    我是吴彦祖
    我是第四行
我是第五行

```
JSON格式如下：
```json
{ lines: '我是第一行\n我是第二行\n  我是吴彦祖\n    我是第四行\n我是第五行\n' }

```

- 折叠换行(Newlines folded)使用右尖括号>来表示该语法，只有空白行才会被识别为换行，原来的换行符都会被转换成空格

```yaml
lines: >
我是第一行
我也是第一行
我仍是第一行
我依旧是第一行

我是第二行
这么巧我也是第二行

```

其JSON格式如下：
```json
{ lines: '我是第一行 我也是第一行 我仍是第一行 我依旧是第一行\n我是第二行 这么巧我也是第二行\n' }

```

注意，此方法最后一行末尾换行符会被识别

- 还可以用+和-来选择是否保留文字块末尾的换行符 + 表示保留文字块末尾的换行，-表示删除字符串末尾的换行

#### 4.4.2、布尔值

- "true"、"True"、"TRUE"、"yes"、"Yes"和"YES"皆为真
- "false"、"False"、"FALSE"、"no"、"No"和"NO"皆为假

```yaml
boolean:
  - True
  - true
  - False
  - FALSE

```

#### 4.4.3、整数

支持二进制表示

```yaml
int:
  - 666    # 十进制
  - 0b10   # 0b 前缀，二进制
  - 010    # 0 前缀，八进制
  - 0x10   # 0x 前缀，十六进制

```

#### 4.4.4、浮点数

支持科学计数法

```yaml
float:
  - 3.14
  - 6.8523015e+5  # 指数必须是整数
  - 6E3

```

#### 4.4.5、空值
```yaml
nulls:
  - 
  - null
  - Null
  - NULL
  - ~

```

#### 4.4.6、时间

时间采用 ISO8601 格式

```yaml
iso8601: 2001-12-14t21:59:43.10-05:00

```

#### 4.4.7、日期

日期采用 ISO8601 格式的年、月、日表示

```yaml
date: 1976-07-31

```

#### 4.5、类型转换

YAML 支持使用严格类型标签!!（双感叹号+目标类型）来强制转换类型，下面是内置类型

```yaml
a: !!float '666' # !! 为严格类型标签
b: '666' # 其实双引号也算是类型转换符
c: !!str 666 # 整数转为字符串
d: !!str 666.66 # 浮点数转为字符串
e: !!str true # 布尔值转为字符串
f: !!str yes # 布尔值转为字符串

```

#### 4.6、引用

为了保持内容的简洁，避免过多重复的定义，YAML 提供了由锚点标签"&"和引用标签"*"组成的语法，利用这套语法可以快速引用相同的一些数据.

```yaml
a: &anchor # 设置锚点
  one: 1
  two: 2
  three: 3
b: *anchor # 引用锚点

# 锚点必须加在冒号后，值之前，然后用*符号可以解引用

```

#### 4.7、合并

配合合并标签"<<"使用可以与任意数据进行合并，你可以把这套操作想象成面向对象语言中的继承

```yaml
human: &base # 添加名为 base 的锚点
    body: 1
    hair: 999
singer:
    <<: *base # 引用 base 锚点，实例化时会自动展开
    skill: sing # 添加额外的属性
programer:
    <<: *base # 引用 base 锚点，实例化时会自动展开
    hair: 6 # 覆写 base 中的属性
    skill: code # 添加额外的属性

```

可以对比其jaon值理解：

```json
{ human: { body: 1, hair: 999 },
  singer: { body: 1, hair: 999, skill: 'sing' },
  programer: { body: 1, hair: 6, skill: 'code' } }

```