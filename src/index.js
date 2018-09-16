class Person {
    constructor(name,age){
        this.name = name
        this.age =age
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
}

class Student extends Person {
       constructor(name,age,number){
           super(name,age)
           this.number = number
       }
       study(){
           alert(`${this.name} 学习`)
       }
}

let s = new Student("小明",21,"141304011015")
s.study()