let arr = [6,3,9,1,7,2,14,26,35];

let arr2 = arr.map(function(item){
    return 100-item;
});
console.log(arr2);

let arr3 = arr.map(function(item){
    return item*item;
});
console.log(arr3);
let arr4 = arr.map(Math.sqrt);
/* Implementation of square root function
function(sqr){
    return squareroot(sqr);
}*/
console.log(arr4);
