let arr = [6,3,9,1,7,2,14,26,35];

let arr2 = arr.filter(function(item){
    if(item%3==0){
        return true;
    }
    return false;
});

console.log(arr2);