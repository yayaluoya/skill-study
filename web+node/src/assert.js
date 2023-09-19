const assert = require('assert');

const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 5,
  },
};

assert.deepStrictEqual(obj1, obj2, '不相同');
