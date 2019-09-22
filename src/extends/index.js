function Person ({name, age, address, compay=''}) {
    console.log('arg', arguments)
    this.name = name
    this.age = age
    this.address = address
    this.compay = compay
}

Person.prototype.goHome = function () {
    console.log('gohome')
    return 'gohome'
}

function User ({label}) {
    Person.call(this, {})
    this.label = label
}

User.prototype = Object.create(Person.prototype)
User.prototype.constructor = User
User.prototype.like = function () {
    console.log('like')
}

export default User

// es5 的方式实现构造函数的继承