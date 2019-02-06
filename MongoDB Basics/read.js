const {MongoClient} = require('mongodb');

// Connection URL 
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';

async function readTasks() {
    const client = await MongoClient.connect(MONGO_URL);
    const tododb = client.db(DB_NAME);
  
    const todos = tododb.collection('todos');
    // To select all rows do : table_name.find({})

    // const todoArr = await todos.find({}).toArray();

    // const todoArr = await todos.find({priority:1}).toArray();

    // const todoArr = await todos.find({priority: {$gt:1} }).toArray();

    // const todoArr = await todos.find({
    //     $and: [
    //         {priority : {$lt:4}},
    //         {priority : {$gt:2}} 
    //     ]
    // }).toArray();

    const todoArr = await todos.find({}).sort({priority:-1}).toArray();

    todoArr.forEach(function(todo){
        console.log(JSON.stringify(todo));
    })
}

readTasks();
