function createCounter(initVal,delta){
    let val = initVal;
    function counter(){
        val = val + delta;
        return val;
    }
    return counter;
}
let fiveCount = createCounter(5,5);
let anotherCounter = createCounter(10,4);

console.log(fiveCount());
console.log(fiveCount());
console.log(fiveCount());

console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());