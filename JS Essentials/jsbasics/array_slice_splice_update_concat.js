// Arrays - Data Changing
let notes = ['do','re','mi','fa','so','la','ti','do']

// slice - doesn't destruct the array
notes.slice(4,6)
console.log(notes.slice(4,6))
console.log(notes)

// splice - mutates the array
let omit = notes.splice(4,2) // .splice(start,num_items_to_be_removed
console.log(omit)
console.log(notes)
// notes.splice(2)
// console.log(notes)

// Updating Array using splice
notes.splice(0,2,0,1); // Updating the array 
console.log(notes) // start,num_items_to_be_removed,[items...]

// Concat - non destructive
console.log(notes.concat('a','b','c'))
console.log(notes)
