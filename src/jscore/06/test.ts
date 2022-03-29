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

console.log('prototype', Fn.prototype.constructor)

console.log('prototype', Fn.prototype.constructor === Fn)

console.log('prototype', Fn.prototype.__proto__)

console.log('prototype', Fn.prototype.__proto__ === Object.prototype)

console.log('prototype', Object.prototype.constructor === Object)

console.log('prototype', Fn.prototype.__proto__.__proto__)

console.log('prototype', Object.prototype.__proto__)

console.log('prototype', Object.prototype.__proto__ === null)

console.log('fn', fn.__proto__ === Fn.prototype)

console.log('fn', fn.__proto__.constructor)

console.log('fn', fn.__proto__.__proto__)

console.log('fn', fn.__proto__.__proto__.constructor)

console.log('fn', fn.__proto__.__proto__.__proto__)







