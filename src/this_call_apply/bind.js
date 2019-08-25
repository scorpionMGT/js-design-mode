const bind = function () {
    Function.prototype.newBind = function () {
        let context = arguments[0]
        let args = Array.from(arguments).slice(1)
        let self = this
        let symbol = Symbol('bind')
        if (context === null || context === undefined)  {
            context = self
            return function () {
                args = args.concat(Array.from(arguments))
                context(...args) 
            }
        } else {
            context[symbol] = self
            return function () {
                args = args.concat(Array.from(arguments))
                context[symbol](...args) 
            }
        }
    }
    let obj = {}
    function getUserName (a, b) {
        console.log('newBind', a, b, arguments)
    }
    console.log('===================================')
    let getuserInfo = getUserName.newBind(obj, 'mao', 'tao')
    getuserInfo('guo')
    let getuserInfo1 = getUserName.newBind(null, 'mao', 'tao')
    getuserInfo1('111')
}

export default bind