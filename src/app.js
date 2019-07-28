import { getSingle } from "@/singletonPattern/index1.js"

let fn = function () {
    return '单体模式'
}
let fn1 = function () {
    return '单体模式'
}
let single = getSingle(fn)
let single1 = getSingle(fn1)
console.log('==11=', single(), single() === single())