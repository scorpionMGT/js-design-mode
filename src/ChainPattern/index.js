// orderType表示订单类型，code为1表示500元定金用户，为2表示200元定金用户，为3普通用户
// pay 表示用户是否已经支付定金，true/false，true, 表示订单支付成功，false,表示没有支付订单定金，将为普通用户模式
// stock 表示当前用户普通购买的手机库存数量，已经支付成功订单的用户不受限制

let order500 =  (orderType, pay, stock) => {
    if (orderType === 1 && pay === true) console.log('500元定金订购，享有100元优惠券')
    else return 'nextSuccessor'  // 我也不知道下个一节点是谁，反正就是把请求往后面传递
}

let order200 =  (orderType, pay, stock) => {
    if (orderType === 2 && pay === true) console.log('200元定金订购，享有50元优惠券')
    else return 'nextSuccessor'  // 我也不知道下个一节点是谁，反正就是把请求往后面传递
}

let orderNormal = (orderType, pay, stock) => {
    if (stock > 0) console.log('普通购买模式，无优惠券')
    else console.log('手机库存不足，无法购买')
}

// 职责链模式
class Chain  {
   constructor (fn) {
       this.fn = fn
       this.successor = null
   }
   setNextSuccessor (successor) {
       return this.successor = successor
   }
   passRequest (...args) { // 如果是严格模式下可以用 ...rest 风格表示参数 例如用 ...args 代替 arguments
       console.log('this', this, args)
       let ret = this.fn.apply(this, args)
       if(ret === 'nextSuccessor') {
           console.log('this.sucesssor', this.successor)
           return this.successor && this.successor.passRequest.apply(this.successor, args)
       }
       return ret
   }
}

// 把三个订单函数分别包装成职责链的节点
let chainOrder500 = new Chain(order500)
let chainOrder200 = new Chain(order200)
let chainOrderNormal = new Chain(orderNormal)

// 指定节点在职责链中的顺序
chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

// 最后把请求传递给第一个节点
// chainOrder500.passRequest(1, true, 1000)
// chainOrder200.passRequest(2, true, 1000)
// chainOrder500.passRequest(3, true, 1000)
// chainOrder500.passRequest(1, false, 0)


// 某一天需求要增加一个定金 1000元， 享有300优惠券，并且送beat便携式耳机，和保修期限增加一年
// 因此只需orderType 为 4
let order1000 = (orderType, pay, stock) => {
    if (orderType === 4 && pay === true) console.log('1000元定金订购， 享有300优惠券，并且送beat便携式耳机，和保修期限增加一年')
    else return 'nextSuccessor'  // 我也不知道下个一节点是谁，反正就是把请求往后面传递
}

let chainOrder1000 = new Chain(order1000)

chainOrder1000.setNextSuccessor(chainOrder500)

chainOrder1000.passRequest(4, true, 1000)

// 经常用职责链模式重构多重选择的函数