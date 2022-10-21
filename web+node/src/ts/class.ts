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


class D {
    /**
     * 把需要在constructor中初始化的属性直接写到constructor的参数中
     * 相当于把声明和赋值合并至一处
     * 写法更加简洁了，直接把属性修饰符写到参数前面就行了
     * @param a 
     * @param b 
     */
    constructor(
        /** a属性 */
        protected readonly a: string,
        /** b属性 */
        public b: string
    ) { }
}

class D1 extends D {
    getA() {
        return this.a;
    }
}

let d1 = new D1('a', 'b');

console.log(d1.b);

class E {
    /** 
     * 存取器a
     * 如果没有定义set的话，该寄存器会被自动推断成redonly
     */
    get a() {
        return 1;
    }
    // set a(a){
    //     console.log(a);
    // }
}

interface IE extends E { }

let e1: IE = {
    a: 1,
};

// e1.a = 3;

