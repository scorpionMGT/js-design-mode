let shoulouchu = {}
shoulouchu.clientList = []
shoulouchu.listen = function (fn) {
    console.log('this', this)
    this.clientList.push(fn)
}
shoulouchu.trigger = function () {
    // console.log('this.', this)
    for (let i = 0, fn; fn = this.clientList[i++];) {
        console.log('this.trigger', this)
        fn.apply(this, arguments)
    }
}
shoulouchu.listen( (price, squareMeter) => {
    console.log('小明咨询的房价', price, squareMeter)

})

shoulouchu.listen( (price, squareMeter) => {
    console.log('小红咨询的房价', price, squareMeter)

})

shoulouchu.trigger(2000, 3)
shoulouchu.trigger(2100, 34)