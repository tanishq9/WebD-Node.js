const express = require('express');
const server = express();

const teacherRoute = require('./routes/teachers')
const studentRoute = require('./routes/students')
// Adds a middleware to read these 2 types of data
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use('/students',studentRoute)
server.use('/teachers',teacherRoute)

server.listen(2323)