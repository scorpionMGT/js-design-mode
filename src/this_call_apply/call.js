const  call = function () {
    'use strict'
    // 手动实现apply 和 call 
    Function.prototype.newCall = function () {
        let context = arguments[0]
        let args =  Array.from(arguments).slice(1)
        let symbol = Symbol('context')
        let self = this
        if (context === null || context === undefined)  {
            self(...args)
        } else { 
            context[symbol] = self
            context[symbol](...args)
        }
    }

    let obj = {}

    function getUserName (a,b) {
        console.log('newCall', a, b)
    }
    console.log('===================================')
    getUserName.newCall(obj, 'guo', 'tao')
    getUserName.newCall(null, 'guo', 'tao')

}

export default call