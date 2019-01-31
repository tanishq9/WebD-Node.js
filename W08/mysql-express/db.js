const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'myuser',
    password : 'mypass',
    database : 'mytestdb'
})

function getAllPersons(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * FROM person`,
            function(err,row,cols){ // callback function
                if(err){
                    reject(err);
                }else{
                    console.log(row);
                    resolve(row); // the value of row will be send to the callback function
                }
            }
        )
    })
}   

function addNewPerson(name,age,city){
    return new Promise(function(resolve,reject){
        connection.query(
            `INSERT INTO person(name,age,city) 
            VALUES(?,?,?)`
            ,[name,age,city]
            ,function(err,results){
                if(err){
                    reject(err);
                }else{
                    console.log(results);
                    resolve();
                }
            }
        )
    })
}

exports = module.exports = {
    getAllPersons,
    addNewPerson
}