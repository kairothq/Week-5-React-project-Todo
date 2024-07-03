// this is defining the schemas of mongodb to store things in it if correct inputs
/*
format somewhat like this 
Todo {
    title: 
    description:
    completed:
}
*/

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://divykairoth:<password>@cluster0.huawqmw.mongodb.net/");

const todoSchemca= mongoose.Schema({ // if using new mongoose.schema then keep the S of schema capital
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model(todos, todoSchemca); // this is storing of todo inside folder todos by todoschema method 

module.exports = {
    todo
}