let arr = [6,3,9,1,7,2,14,26,35];

let arr2 = arr.reduce(function(accum,item){
    console.log(accum);
    return accum*item;
});

console.log(arr2);
