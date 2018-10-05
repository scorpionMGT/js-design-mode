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
let arr = [1, 2, 3, 4, 5];
let container = new Container(arr);
let result = container.getIterator();

while (result.hasNext()) {
    console.log(result.next());
};

//场景
// es6 的 iterator 语法


// es6 有序集合的数据类型
// array map set string TypedArray arguments NodeList
// 需要有一个统一的遍历接口来遍历所有数据类型
// object 不是有序集合，可以用 map 代替

// es6 iterator 是什么
// 以上数据类型，都有 [Symbol.iterator] 属性
// 属性值是函数，执行函数返回一个迭代器
// 这个迭代器就有 next 方法可顺序迭代子元素
// 可运行 Array.prototype[Symbol.iterator] 来测试

function each(data) {
    let iterator = data[Symbol.iterator]();
    let item = { done: false };
    while (!item.done) {
        item = iterator.next();
        if (!item.done) {
            console.log(item.value);
        }
    }
}
// for ... of 遍历迭代器