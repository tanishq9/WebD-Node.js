const {MongoClient} = require('mongodb');

// Connection URL 
const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';

// ASYNC IIFE
async function writeTask() {
    const client = await MongoClient.connect(MONGO_URL);
    // Get the reference of the database
    const tododb = client.db(DB_NAME);
    // Get the reference of the table tododb in the database
    const todos = tododb.collection('todos');
    const todo = {
        task : 'an important task',
        priority : 2,
        owner : 'manager'
    }
    // todos.insertOne returns a Promise
    const result = await todos.insertOne(todo);
    console.log(result);
}

async function writeTasks() {
    const client = await MongoClient.connect(MONGO_URL);
    // Get the reference of the database
    const tododb = client.db(DB_NAME);
    // Get the reference of the table tododb in the database
    const todos = tododb.collection('todos');
    const todoList = [
        {task : 'another important task',priority : 1,owner : 'security'}
        ,{task : 'complicated',priority : 3}
        ,{task : 'simple',priority : 4,owner : 'manager'}
    ]
    // todos.insertOne returns a Promise
    const result = await todos.insertMany(todoList);
    console.log(result);
}

writeTask();
writeTasks();