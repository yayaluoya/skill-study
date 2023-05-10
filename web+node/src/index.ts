import { AAAA } from './_d/index';

console.log(wx);

AAAA.A;

/**
 * 关于类静态部分和实例部分类型的验证
 */
class A {
    constructor(a: string) {}
}

type AC = typeof A;
type a = ConstructorParameters<AC>;
