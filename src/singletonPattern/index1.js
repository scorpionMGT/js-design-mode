let getSingle = function (fn) {
    let result
    return function () {
        console.log('this', this, result, fn.apply(this, arguments))
        return result || (result = fn.apply(this, arguments))
    }
}

let fn = function () {
    return '单体模式'
}
let fn1 = function () {
    console.log('单体模式1')
}
let single = getSingle(fn)
let single1 = getSingle(fn1)
console.log(single(), single(), single1())


