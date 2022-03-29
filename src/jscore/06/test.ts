// const m = new Map();

// m.set(null, 111)

// console.log('m', Array.from(m))

// const arr = [1]

// arr.reduce((prev, cur, index, arr) => {
//     console.log('this', prev, cur, index, arr)
// }, '')

const Fn = function () {

}

const fn = new Fn();

console.log('fn', fn.constructor === Fn)
// console.log('prototype', Fn.__proto__.constructor === Function)

// console.log('prototype', Fn.__proto__.__proto__ === Object.prototype)

// console.log('prototype', Fn.prototype.constructor)

// console.log('prototype', Fn.prototype.constructor === Fn)

// console.log('prototype', Fn.prototype.__proto__)

// console.log('prototype', Fn.prototype.__proto__ === Object.prototype)

// console.log('prototype', Fn.prototype.__proto__ === Function.prototype)

// console.log('prototype', Object.prototype.constructor === Function)

// console.log('prototype', Fn.prototype.__proto__.__proto__)

// console.log('prototype', Fn.__proto__ === Function.prototype)

// console.log('prototype', Function.__proto__ === Function.prototype)

// console.log('prototype', Function.prototype.constructor === Function )

// console.log('prototype', Function.prototype.__proto__ === Object.prototype)

// console.log('prototype', Function.prototype.__proto__.__proto__ === null)

// console.log('prototype', Object.prototype.__proto__)

// console.log('prototype', Object.prototype.__proto__ === null)

// console.log('fn', fn.__proto__ === Fn.prototype)

// console.log('fn', fn.__proto__.constructor)

// console.log('fn', fn.__proto__.__proto__)

// console.log('fn', fn.__proto__.__proto__.constructor)

// console.log('fn', fn.__proto__.__proto__.__proto__)

// function newFactory () {
//     let obj = new Object()
//     // 创建一个新的空对象
//     let context = Array.prototype.shift.call(arguments)
//     console.log('arguments', [...arguments], context)
//     // 空对象的隐式原型指向构造函数原型
//     obj.__proto__ = context.prototype
//     // 将空对象的指向构造函数的this, 即将构造函数的内部this, 改为你创建的obj
//     let result = context.apply(obj, arguments)
//     // 如果构造函数有返回一个对象，则直接返回这个对象
//     if (typeof result === 'object' && result !== null) return result
//     return obj
// }
// const Fn1 = function () {

// }
// let fn1 = newFactory(Fn1);


class Person {
    static className = 'person';
    static say () {
        console.log('say', this === Person)
    }
    static walk () {
        console.log('walk', this === Person)
    }
}

console.log('person', Person.className, Person.say(), Person.walk())








