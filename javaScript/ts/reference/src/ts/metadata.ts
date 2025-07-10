import "reflect-metadata";


class User {
  name: string; // 类型为 string
  age: number;  // 类型为 number
}

// 获取类属性 `name` 的类型（`design:type`）
const nameType = Reflect.getMetadata("design:type", User.prototype, "name");

console.log('reflect-metadata 测试');
console.log(nameType); // 输出：[Function: String]（即 String 构造函数）

// 验证类型
console.log(nameType === String); // 输出：true