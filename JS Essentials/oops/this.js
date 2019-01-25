console.log(this==global)
function print(){
    console.log(this==global);
}
print();
var x = 5; 
console.log(global.x);

function fun(){
    this.p = "something";
    return 10;    
    // the return statement has no purpose if I call it with a return purpose
}
let o1 = fun();
let o2 = new fun();
console.log(o1);
console.log(o2);
console.log(o1.p);
console.log(o2.p);