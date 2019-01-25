let obj = {
    a : 10,
    b : 'hello',
    c : true,
    d : {
        p : 10,
        q : 4,
        r : {
            x : 'value'
        }
    }
}
console.log(obj);
console.log(obj.a);
console.log(obj.d.r.x);
// Modifying an object
obj.l = 1000;
console.log(obj);
delete obj.a;
console.log(obj);
