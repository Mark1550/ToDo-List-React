const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const subSchema = new Schema({
    task: String,
    date: Date,
    completed: Boolean,
    priority: Number,
    status:String
})
const TodoSchema = new Schema({
    name:String,
    createdDate: Date,
    todos: [subSchema]
})
module.exports = mongoose.model('todos', TodoSchema)
