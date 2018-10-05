const EventEmitter = require("events").EventEmitter;

class Person extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}

let p = new Person("mao");

p.on("eat", something =>{
    console.log("eat something",something);
});
p.on("eat",something =>{
    console.log("eat lajiao",something);
});

setInterval(()=>{
    p.emit("eat","maodu")
},1000)