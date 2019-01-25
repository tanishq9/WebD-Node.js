// TYPE : Function is one the arguments

function getFirstName(name){
    return name.split(" ")[0];
}

function greet(findName,name){
    let firstName = findName(name)
    return firstName;
}

console.log(greet(getFirstName,"Tanishq Saluja"));

