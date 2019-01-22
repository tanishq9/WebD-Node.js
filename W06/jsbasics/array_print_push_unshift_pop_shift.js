let arr = [1,2,3]
console.log(arr)
console.log(arr.length)
console.log(arr[1])
// js arrays are not type specific like python list
let arr2 = ['1',2,'hey',5]
console.log(arr2[2])
console.log(typeof arr2[1])
console.log(typeof arr2[2])
// normal for loop
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}
// same as for range loop
for(let item of arr2){
    console.log(item)
}
// going through all indices of array
for(let index in arr2){
    console.log(arr2[index])
}

// Push and pop items 
// These 2 methods are used to add and remove items from list end
arr2.push('Apple')
console.log(arr2)
// You can add more than 2 items at the end
arr2.push('j','k')
console.log(arr2)
arr2.pop()
console.log(arr2)

// shift and unshift
arr2.shift()
console.log(arr2)
arr2.unshift('kiwi')
console.log(arr2)
// You can add more than 2 items at beginning
arr2.unshift('m','n')
console.log(arr2)