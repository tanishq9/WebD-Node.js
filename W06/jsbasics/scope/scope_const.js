const x = 10

function myFun(){
    const x = 20;
    console.log("line6 : "+x);
    if(true){
        const x = 30;
        console.log("line10 : "+x);
    }
    console.log("line12 : "+x);
}

myFun();
console.log("line16 : "+x);

// var is function scoped not block scoped