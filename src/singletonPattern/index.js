/**
 * 单例模式, 一个类只有一个实例，符合单一职责原则
 * 
 * @class SingleObject
 */
class SingleObject {
    constructor() {
        this.instance = null;
    }
    // 静态方法，通过类去调用
    static init() {
        if (this.instance == null) {
            this.instance = new SingleObject()
        }
        return this.instance
    }
    login() {
        console.log("login...")
    }
}

// 测试
let single1 = SingleObject.init()
single1.login()

let single2 = SingleObject.init()
single2.login()
console.log("single1 === single2", single1 === single2) // true

let single3 = new SingleObject();  // 无法控制的使用方式
single3.login()
console.log("single1 === single2", single1 === single3) // false


// 模拟登陆框，购物车，或者只能播放一首歌的类。
// vuex中的store