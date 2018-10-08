//观察者模式
// 发布和订阅
// 一对多

// 主题，保存状态，状态变化之后触发所有观察者对象
class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.notifyAllObservers();
    }
    // 通知所有的观察者
    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }
    //派发
    attach(observer) {
        this.observers.push(observer)
    }
}

// 观察者
class Observer {
    constructor(name,subject){
         this.name = name;
         this.subject = subject;
         this.subject.attach(this);
    }
    update(){
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

// 测试
let s = new Subject();
let o1 = new Observer("o1",s);
let o2 = new Observer("o2",s);

s.setState(1);
s.setState(2);

// 场景
// 网页事件绑定
// Promise
// nodejs自定义事件,vue的生命周期，vue 的 watch 

// 主题和观察者分离，不是主动触发而是被动监听，两者解耦