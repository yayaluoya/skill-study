/**
 * 类
 * @constructor
 */
let Person = function () {
  /**
   * 实例方法
   * @returns
   */
  this.say = function () {
    return "I'm an instance.";
  };

  /**
   * 内部方法
   * @returns
   */
  function say() {
    return "I'm inner.";
  }
};

/**
 * 静态方法
 * @returns
 */
Person.say = function () {
  return "I'm static.";
};

var p = new Person();

p.say(); // I'm an instance.
Person.say(); // I'm static.
// there is no way to directly access the inner function from here

/** @namespace */
var chat = {
  /**
   * Refer to this by {@link chat."#channel"}.
   * @namespace
   */
  '#channel': {
    /**
     * Refer to this by {@link chat."#channel".open}.
     * @type {boolean}
     * @defaultvalue
     */
    open: true,
    /**
     * Internal quotes have to be escaped by backslash. This is
     * {@link chat."#channel"."say-\"hello\""}.
     */
    'say-"hello"': function (msg) {},
  },
};

/**
 * Now we define an event in our {@link chat."#channel"} namespace.
 * @event chat."#channel"."op:announce-motd"
 */

chat['#channel']['say-"hello"'];

switch ('') {
  case 'a': {
    console.log('a');
    break;
  }
}

[].splice();
[].slice();

// Parameters may be declared in a variety of syntactic forms
/**
 * @param {string}  p1 - A string param.
 * @param {string=} p2 - An optional param (Google Closure syntax)
 * @param {string} [p3] - Another optional param (JSDoc syntax).
 * @param {string} [p4="test"] - An optional param with a default value
 * @returns {string} This is the result
 */
function stringsStringStrings(p1, p2, p3, p4) {
  return '';
}

/**
 * @param {Object} options - The shape is the same as SpecialType above
 * @param {string} options.prop1
 * @param {number} options.prop2
 * @param {number=} options.prop3
 * @param {number} [options.prop4]
 * @param {number} [options.prop5=42]
 */
function special(options) {
  return (options.prop4 || 1001) + options.prop5;
}

//@callback与 类似，但它指定函数类型而不是对象类型：@typedef
/**
 * @callback Predicate
 * @param {string} data
 * @param {number} [index]
 * @returns {boolean}
 */

/** @type {Predicate} */
const ok = (s) => !(s.length % 2);

//可以使用标记声明类型参数。 这使您可以创建泛型的函数、类或类型：@template

/**
 * @template T
 * @param {T} x - A generic parameter that flows through to the return type
 * @returns {T}
 */
function id(x) {
  return x;
}

const a = id('string');
const b = id(123);
const c = id({});

//使用逗号或多个标记来声明多个类型参数：
/**
 * @template T,U,V
 * @template W,X
 */

//还可以在类型参数名称之前指定类型约束。 仅约束列表中的第一个类型参数：

/**
 * @template {string} [K=string] - K must be a string or string literal
 * @template {{ serious(): string }} Seriousalizable - must have a serious method
 * @param {K} key
 * @param {Seriousalizable} object
 */
function seriousalize(key, object) {
  // ????
}

/**
 * 关于带泛型的类型定于与使用
 * @template T
 * @typedef customT
 * @type {Record<string,T>}
 */

/** @type {customT<string[]>} */
let customV;

customV.s;
