let arr = [6,3,9,1,7,2,14,26,35];
console.log(arr.sort(compare));
// js by default does lexicographical sort

function compare(a,b){
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
}

arr.sort(function(a,b){
    return b-a;
});
console.log(arr);