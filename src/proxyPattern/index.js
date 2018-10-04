// 代理模式
class RealImage {
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromdisk();  // 初始化从硬盘中加载
    }
    display() {
        console.log("display...." + this.fileName);
    }
    loadFromdisk() {
        console.log("loading..." + this.fileName);
    }
}

class ProxyImage {
    constructor(fileName) {
        this.real = new RealImage(fileName);
    }
    display() {
        this.real.display();
    }
}

// 测试

let proxy = new ProxyImage("js设计模式");
proxy.display();

// 使用场景
// 网页事件代理
// es6中的proxy