class Person {
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
}

let p = new Person("maoguotao11");

alert(p.name)