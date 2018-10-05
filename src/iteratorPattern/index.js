// 迭代器模式
// 顺序访问集合
// 使用者不需要知道集合的内部结构（封装）
class Iterator {
    constructor(container) {
        this.list = container.list;
        this.index = 0;
    }
    next() {
        if (this.hasNext()) {

            return this.list[this.index++];
        }
        return null;
    }
    hasNext() {
        if (this.index >= this.list.length) {
            return false;
        };
        return true;
    }
}

class Container {
    constructor(list) {
        this.list = list;
    }
    // 生成遍历器
    getIterator() {
        return new Iterator(this);
    }
}

//测试 
let arr = [1,2,3,4,5];
let container = new Container(arr);
let result = container.getIterator();

while(result.hasNext()){
    console.log(result.next());
};

//场景
// es6 的 iterator 语法
