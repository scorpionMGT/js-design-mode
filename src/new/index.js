// new命令 的实现原理
export function newFactory () {
    let obj = new Object()
    // 创建一个新的空对象
    let context = Array.prototype.shift.call(arguments)
    // 空对象的隐式原型指向构造函数原型
    obj.__proto__ = context.prototype
    // 将空对象的指向构造函数的this, 即将构造函数的内部this, 改为你创建的obj
    let result = context.apply(obj, arguments)
    // 如果构造函数有返回一个对象，则直接返回这个对象
    if (typeof result === 'object' && result !== null) return result
    return obj
}
export function PersonList (username, zone, address) {
    this.username = username
    this.zone = zone
    this.address = address
    return {test: 'test'}
}

// new.target 属性，在执行函数是如果使用的是new 命令调用该函数，则new.target 指向的是原函数
// 如果是创建直接使用函数的话，则new.target为undefined

// Object.create() // 现有的对象作为模板，生成新的实例对象

let a = {
    username: 'travel_xcc',
}
let b = Object.create(a) // 实际上是 b.__proto__ === a
// 等于a的原型赋值给b的隐式原型

// 使用new调用类的构造函数会执行如下操作。
// （1）在内存中创建一个新对象。
// （2）这个新对象内部的[[Prototype]]指针被赋值为构造函数的prototype属性。
// （3）构造函数内部的this被赋值为这个新对象（即this指向新对象）。
// （4）执行构造函数内部的代码（给新对象添加属性）。
// （5）如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。