const express = require('express')
const cors = require('cors')
require('../Database/TodoListDB')
const todosRouter = require('../Routers/TodosRouter')

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/todos', todosRouter)

app.listen(port,async()=>{
    console.log(`server is listening at http://localhost:${port}`)
})