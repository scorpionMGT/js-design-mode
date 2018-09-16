
/**
 * 
 * 
 * @class Car
 */
class Car {
    constructor(num) {
        this.number = num
    }
}
/**
 * 
 * 
 * @class Camera
 */
class Camera {
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

class Screen {
    show(car, inTime) {
        console.log("车牌号：", car.num)
        console.log("停车时间: ", Date.now() - inTime)
    }
}
/**
 * 
 * 
 * @class Park
 */
class Park {
    constructor(floors) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {} // 存储摄像头拍摄返回车辆的信息
    }
    in(car) {
        // 通过摄像头获取信息
        const info = this.camera.shot(car)
        // 停到某个停车位
        const i = parseInt(Math.random() * 100 % 100)
        const place = this.floors[0].places[i]
        place.in()
    }
    out(car) {

    }
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index}层还有 ${floor.emptyPlaceNum()} 个空闲车位`
        }).join("\n")
    }
}
/**
 * 
 * 
 * @class Floor
 */
class Floor {
    constructor(index, places) {
        this.index = index
        this.places = places
    }
    emptyPlaceNum() {
        let num = 0
        this.places.forEach(p => {
            if (p.empty) {
                num = num + 1
            }
        })
        return num
    }
}
/**
 * 
 * 
 * @class Place
 */
class Place {
    constructor() {
        this.empty = true
    }
    in() {
        this.empty = false
    }
    in() {
        this.empty = true
    }
}