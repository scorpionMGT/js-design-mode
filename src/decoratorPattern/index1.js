// AOP 面向切面编程 Aspect Oriented Programming 通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术。AOP是OOP的延续，是软件开发中的一个热点
// AOP 应用领域
// 日志记录
// 性能统计
// 安全控制
// 事务处理
// 异常处理等等。

// AOP作用是: 将日志记录，性能统计，安全控制，事务处理，异常处理等代码从业务逻辑代码中划分出来，通过对这些行为的分离，
// 我们希望可以将它们独立到非指导业务逻辑的方法中，进而改变这些行为的时候不影响业务逻辑的代码。
Function.prototype.before = function (beforeFn) {
    console.log('this', this)
    let _this = this  // 保存原函数的引用
    return async function (...args) {
        console.log('this.', this)   // this 指向的是window, 这里是严格模式因此为undefined
        await beforeFn.apply(this, args)  // 执行新函数，且保证 this 不被劫持，新函数接受的参数 ，也会被原封不动地传入原函数，新函数在原函数之前执行
        return _this.apply(this, args) // 执行原函数并返回原函数的执行结果，并且保证 this 不被劫持
    }
}

Function.prototype.after = function (afterFn) {
    console.log('this', this)
    let _this = this  // 保存原函数的引用
    return function (...args) {
        console.log('this.', this)   // this 指向的是window, 这里是严格模式因此为undefined
        let ret = _this.apply(this, args)
        afterFn.apply(this, args)
        return ret
    }
}

function test1 () {
    console.log('test')
}

let before1 = test1.before(function () {
    setTimeout(() => {
        console.log('在输出test之前输出')
    }, 3000)
})
before1()

function test2 () {
    console.log('test')
}
let after2 = test2.after(function () {console.log('在输出test之后输出')})
after2()
export default {
    before1,
    after2
}
// 用AOP装饰函数的技巧在实际开发中非常实用，不论是业务代码的编写，还是在框架层面，
// 我们都可以把行为依照职责分成粒度更细的函数，随后通过装饰把它们合并到一起，这有助于我
// 们编写一个松耦合和高复用性的系统。