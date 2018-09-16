/**
 * 
 * 车类
 * @class Car
 */
class Car {
    constructor(number,name){
        this.name = name
        this.number = number
    }
}
/**
 * 快车类
 * 
 * @class Kuaiche
 */
class Kuaiche extends Car {
    constructor(number,name){
        super(number,name)
        this.price = 1
    }
}
/**
 * 专车类
 * 
 * @class Kuaiche
 */
class Zhuanche extends Car {
    constructor(number,name){
        super(number,name)
        this.price = 2
    }
}
/**
 * 
 * 
 * @class Trip
 */
class Trip {
    constructor(car,mileage){
        this.car = car
        this.mileage = mileage
    }
     start(){
        console.log(`开始行程，名称为：${this.car.name}, 车牌号：${this.car.number}`)
     }
     end(){
        console.log(`行程结束，价格为：${this.car.price*this.mileage}`)
     }
}

// 快车实例
let k  = new Kuaiche(10010,"大众")
let trip1  = new Trip(k,20)
trip1.start();
trip1.end();

// 快车实例
let z  = new Zhuanche(10086,"别克")
let trip2  = new Trip(z,20)
trip2.start();
trip2.end();