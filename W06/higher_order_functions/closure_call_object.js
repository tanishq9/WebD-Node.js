function createCounter(initVal,delta){
    let val = initVal;
    let obj = {
        inr : function(){
            val += delta;
        },
        dcr : function(){
            val -= delta;
        },
        show : function () {
            console.log(val);
        }
    }
    return obj;
}

let a = createCounter(50,5);
a.show();
a.inr();
a.inr();
a.show();
console.log(typeof a);
console.log(typeof a.show);
console.log(typeof a.show())
