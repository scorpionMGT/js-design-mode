const  apply = function () {
    'use strict'
    let hasStrictMode = (function () { 
        // 判断当前环境是否处于严格模式下
        return this == undefined
    })()
    // 手动实现apply 和 call 
    Function.prototype.newApply = function () { 
        //使用symbol数据类型可以避免和外部的context的属性有冲突
        let context = arguments[0]
        let arg =  arguments[1]
        let symbol = Symbol('temp') 
        let self = this
        if (context === null || context === undefined)  {
            self(...arg)
        } else {
            context[symbol] = self
            context[symbol](...arg)
        }
    }

    let symbol = Symbol('temp')
    let obj = {
        [symbol]: 'test'
    }

    function getUserName (a,b) {
    console.log('newApply', a, b)
    }
    console.log('===================================')
    getUserName.newApply(obj, ['guo', 'tao'])
    getUserName.newApply(null, ['guo', 'tao'])
    getUserName.newApply(undefined, ['guo', 'tao'])
    // getUserName.apply(obj, ['guo', 'tao'])
    // getUserName.apply(null, ['guo', 'tao'])
    // getUserName.apply(undefined, ['guo', 'tao'])
}

export default apply