let p = {
    a : 10 
}

let q = Object.create(p);
q.b = 20;

let r = Object.create(q);
r.c = 30;

console.log(p);
console.log(q);
console.log(r);

console.log(r.__proto__== q);
console.log(q.__proto__== p);
console.log(r.a);
console.log(r.b);
console.log(r.c);

q.a = q.a + 1;
// RHS will look into prototype of q i.e p and see that value of a is 10
// Prototype is only read-only mode and we cannot edit it
// Thus , a new property(key) is created for q object that i.e 'a'
// Whenever , we do r.a , we don't look into prototype of q and instead output q.a i.e 11 
// which is present in prototype of r
console.log(r.a);
console.log(q);
console.log(r);
