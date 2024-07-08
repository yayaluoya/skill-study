type Box<T> = { t: T };
/** @see Box for implementation details */
type Boxify<T> = { [K in keyof T]: Box<T> };

/**
 * 从这里可以看出jsdoc在ts文件里是不生效的
 * 只有部分标签会生效，见文档https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
 */

/** @type {string} */
let aaaa;
