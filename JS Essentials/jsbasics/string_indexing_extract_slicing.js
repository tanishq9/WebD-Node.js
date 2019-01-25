let name = 'Tanishq'
let str = 'this is a string'
let longstr = "this is a \n very long \n string."

// Printing

console.log(str)
console.log(longstr)

// Searching

let s = "this is an easy job"
let s2 = "ab aab abbcd ba aab"
console.log(s.indexOf('is'))
// By default , it is read as s.indexOf('is',0) , it starts reading from the 0th index
console.log(s2.lastIndexOf('ab'))
// This means last occurance starting from 1st index , not from 0

// Extracting

let mainStr = 'this-is-a-long-string'
let smallStr = mainStr.slice(2,3)
console.log(smallStr)
console.log(mainStr.substring(7,10))
console.log(mainStr.substr(-6,4))
// In substr method '4' doesn't signify the end positon , it tells about the length which has to be printed

