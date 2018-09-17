/**
 * 产品类
 * 
 * @class Product
 */
class Product {
    constructor(name){
        this.name = name
    }
    init(){
        console.log(`${this.name}`)
    }
    fun1(){
        console.log("fun1")
    }
    fun2(){
        console.log("fun2")
    }
}
/**
 * 工厂类
 * 
 * @class Factory
 */
class Factory {
        create(name){
            return new Product(name)
        }
}

// 测试

// 工厂的实例
let factory = new Factory()
// 用工厂实例创建Product类的实例
let p = factory.create("毛国涛")
p.init();
p.fun1();
p.fun2();


//使用场景
// vue的异步组件中使用到了
// 构建函数和创建者分离，开放和封闭原则