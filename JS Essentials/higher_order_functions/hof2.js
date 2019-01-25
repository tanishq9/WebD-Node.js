// TYPE : Function is returned
function createGreeter(name){
    let firstName = name.split(" ")[0];
    function greater(asas){
        console.log('Hello '+firstName+' '+asas);
    }
    return greater;
}

let johngetter = createGreeter("Jon Snow");
let harrygetter = createGreeter("Harry Potter");

johngetter('Doe');
harrygetter('Potter');