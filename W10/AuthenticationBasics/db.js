const Sequelize = require('sequelize');

const db = new Sequelize(
    'userdb',
    'userpassportjs',
    'mypass',
    {
        dialect : 'mysql',
        host : 'localhost'
    }
)

const Users = db.define('users',{
    username : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    firstName : Sequelize.STRING,
    lastName : Sequelize.STRING

})

// db.sync() returns a promise function
db.sync().then(function(){
    console.log("Database has been synced.")
}).catch(function(err){
    console.log("Error creating database.")
});


module.exports = {
    Users,
    db
};