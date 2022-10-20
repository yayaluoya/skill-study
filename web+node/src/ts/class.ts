interface IA {
    a: string;
}

interface IANew {
    new(a: string): IA;
    A(): string;
}

/**
 * 类A
 * 类类型都有两个类型，一个实例类型，一个静态类型，implements 关键字只对实例类型进行检查，不检查静态类型
 */
class A implements IA {
    public a: string;
    private b: string = 'adfasdf';
    protected c: string;

    constructor(a: string) {
        this.a = a;
        console.log('构造函数');
        console.log('私有属性', this.b);
    }

    static A() {
        return 'A类的静态方法';
    }
}

class AA2 implements IA {
    public a: string;
    private b: string = 'adfasdf';
    protected c: string;
}

interface IA1 extends A { }

class A2 extends A implements IA1 {
    public a: string = '';
    protected c: string = '';
}

let IA1_a: IA1;

type B = string;
let b: B = '';

let A_1: IANew = A;
let A_2 = new A('a');
let A_3: {
    new(a: string): A;
    A(): string;
} = A;
let A_4: typeof A = A;

/**
 * 递归把一个元素变只读
 */
type TC<T> = {
    [P in keyof T]?: TC<T[P]>;
}

type TC_ = TC<{ a: string }>

/**
 * TODO 这里需要注意，为什么传的string进去却原路返回的string
 */
type TD = Partial<string>
