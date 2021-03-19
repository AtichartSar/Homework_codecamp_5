
const db = require('../models/index')

const getTodoList = async (req, res) => {
    console.log(req.user);
    const todoList = await db.TodoList.findAll({ where: { user_id: req.user.id } });
    res.status(200).send(todoList);
    // res.status(200).send(req.user);
}

const createTodoList = async (req, res) => {
    console.log(req.body.task)
    try {

        const newTodo = await db.TodoList.create({
            task: req.body.task,
            user_id: req.user.id
        });
        res.status(201).send(newTodo);
    } catch (error) {
        console.log(error);
    }
}

const updateTodoList = async (req, res) => {
    const targetId = req.params.id
    const newTask = req.body.task
    const targetTodo = await db.TodoList.findOne({ where: { id: targetId, user_id: req.user.id } })
    if (targetTodo) {
        await targetTodo.update({
            task: newTask
        })
        res.status(200).send('update success')
    } else {
        res.status(404).send({ message: 'todolist not found' })
    }

}

const deleteTodoList = async (req, res) => {
    const targetId = req.params.id
    const targetTodo = await db.TodoList.findOne({ where: { id: targetId, user_id: req.user.id } })
    if (targetTodo) {
        await targetTodo.destroy();
        res.status(204).send()
    } else {
        res.status(404).send({ message: "todo list not found" });
    }
    // await db.TodoList.destroy({
    //     where: { id: targetId }
    // })

}

module.exports = {
    getTodoList,
    createTodoList,
    updateTodoList,
    deleteTodoList
}