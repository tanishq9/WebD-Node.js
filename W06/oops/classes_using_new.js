function Person(name,age){
    this.firstName = name.split(" ")[0];
    this.lastName = name.split(" ")[1];
    this.age= age;
    // random variable illustrating the concept of private varible
    let mAge = age;
    // mAge acts like a private varible
    this.isAdult = function(){
        if(mAge>18){
            return true;
        }
        return false;
    }
}

let p = new Person('Jon Snow',30);
console.log(p);
console.log(p.isAdult());
console.log(p.lastName);