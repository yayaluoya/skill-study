function a() {
    return 1;
}

export enum EA {
    A = '123'.length + 1,
    B = a(),
}

/**
 * 字面量枚举
 */
enum BooleanLikeHeterogeneousEnum {
    No = 1,
    No2 = 1,
    /** 字符串类型的枚举成员是不会有反向映射的，看打包后的文件就能知道 */
    Yes = "YES",
    Yes2 = "YES",
}

enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}

/**
 * 常量枚举
 * const修饰后的枚举会在编译后被静态替换成对应的值，防止额外代码的开销
 * 常量枚举只能使用常量枚举表达式而且不允许包含计算值
 */
const enum EC {
    a = 1,
    b = 2,
    c = 3,
}

let value1: EC.a | EC.c = EC.a;

/**
 * EA和FileAccess因为不是非计算的常量枚举成员所以它的成员不能作为类型
 * 还有一个变化是枚举本身变成了每个枚举成员的联合
 */
let value2: BooleanLikeHeterogeneousEnum.No = BooleanLikeHeterogeneousEnum.No;