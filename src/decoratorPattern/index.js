// 装饰器模式
// 为对象添加新功能
// 不改变其原有的结构和功能
class Target{
    draw(){
        console.log("画一个圆")
    }
}
class Decorator {
     constructor(target){
         this.target = target;
     }
     newAddFuture(){
         console.log("添加red边框");
     }
     draw(){
         this.target.draw();
         this.newAddFuture();
     }
}

let target = new Target();
let decorator = new Decorator(target);
decorator.draw();

// 应用场景