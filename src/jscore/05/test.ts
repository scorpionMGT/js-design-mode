// let date = new Date()
// console.log(date, Date.parse(date))

// const test = 'agaat'
// let regexp = /.at/ig

// console.log('ignoreCase', regexp.ignoreCase)

// console.log(regexp.global, 'global')

// console.log(regexp.source, 'source')

// console.log(regexp.exec(test), 'test')
// console.log(test.match(regexp), 'test')

// let str = new Object('test')

// console.log(str instanceof String)

class Fn {
    * [Symbol.iterator] () {
        yield 'test1';
        yield 2;
        yield 3;
    }
}

const fn = new Fn();

// console.log('fn', fn[Symbol.iterator]().next());

for (const i of fn[Symbol.iterator]()) {
    console.log('i', i)
}

const str = 'test'
console.log('test', str[Symbol.iterator]())
// let regexp = /\[bc\]at/i

// console.log('ignoreCase', regexp.ignoreCase)

// console.log(regexp.global, 'global')

// console.log(regexp.source, 'source')

console.log('global', global)

console.log('this', this)


export default {}


