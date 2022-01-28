const express = require('express')
const TodosDAL = require('../DAL/todosDAL')
const router = express.Router()

router.route('/').get(async (req, res) => {
    try {
        return res.json(await TodosDAL.getAllTodoLists())
    } catch (error) {
        return res.json(error)
    }
})

router.route('/:id').get(async (req, res) => {
    try {
        return res.json(await TodosDAL.getTodoListById(req.params.id))
    } catch (error) {
        return res.json(error)
    }
})

router.route('/').post(async (req, res) => {
    try {
        return res.json(await TodosDAL.addTodoList(req.body))
    } catch (error) {
        return res.json(error)
    }
})

router.route('/:id').put(async (req, res) => {
    try {
        return res.json(await TodosDAL.updateTodoList(req.params.id, req.body))
    } catch (error) {
        return res.json(error)
    }
})

router.route('/:id').delete(async (req, res) => {
    try {
        return res.json(await TodosDAL.deleteTodoList(req.params.id))
    } catch (error) {
        return res.json(error)
    }
})

module.exports = router