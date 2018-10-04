class Adaptee {
    specificRequest () {
        return "香港标准插头"
    }
}

class Target {
    constructor(){
        this.adaptee = new Adaptee();
    }
    request () {
        let  info = this.adaptee.specificRequest();
        return `${info} - 转换器 - 中国标准插头`
    }
}

let target =  new Target();

// 测试
let res  = target.request();
console.log("res",res);


// 应用场景

// 封装旧的接口
// vue component 
// 尽量不要去在旧的代码上做修改，而是封装它，代码风格干净整洁，原子性，