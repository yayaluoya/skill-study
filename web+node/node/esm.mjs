import b from './esm-commjs.js';
import { createRequire } from 'module';

console.log('在es模块中导入commonJs模块的内容', b);

export default {
    a: 10,
    path: createRequire(import.meta.url)('path').join(import.meta.url, '../'),
};
