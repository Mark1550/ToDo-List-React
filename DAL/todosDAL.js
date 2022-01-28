const todosModel = require('../Models/TodoModel')

const getAllTodoLists = () => {
    return new Promise((resolve, reject) => {
        todosModel.find({}, (err, data) => err ? reject(err) : resolve(data))
    })
}

const getTodoListById = (id) => {
    return new Promise((resolve, reject) => {
        todosModel.findById(id, (err, data) => err ? reject(err) : resolve(data))
    })
}

const addTodoList = (newTodoList) => {
    return new Promise((resolve, reject) => {
        const todoList = new todosModel(newTodoList);
        todoList.save((err) => err ? reject(err) : resolve("Todo List was added successfully"))
    })
}

const updateTodoList = (id, updatedTodoList) => {
    return new Promise((resolve, reject) => {
        todosModel.findByIdAndUpdate(id, updatedTodoList, (err) => err ? reject(err) : resolve("Todo List was updated successfully"))
    })
}

const deleteTodoList = (id) => {
    return new Promise((resolve, reject) => {
        todosModel.findByIdAndDelete(id, (err) => err ? reject(err) : resolve("Todo List was deleted successfully"))
    })
}

module.exports = { getAllTodoLists, getTodoListById, addTodoList, updateTodoList, deleteTodoList }