function DD() {
    return function (v) {
        console.log(v);
    };
}

@DD()
class DDD {
    private a: string;
}
