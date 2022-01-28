import axios from 'axios'

const url = 'http://localhost:8000/todos'

const getAllTodoLists = async () => await axios.get(url)

const getTodoListById = async (id) => await axios.get(`${url}/${id}`)

const updateTodoList = async (updatedTodoList, id) => await axios.put(`${url}/${id}`, updatedTodoList)

const addTodoList = async (newTodoList) => await axios.post(url, newTodoList)

const deleteTodoList = async (id) => await axios.delete(`${url}/${id}`)

export { getAllTodoLists, getTodoListById, updateTodoList, addTodoList, deleteTodoList }    