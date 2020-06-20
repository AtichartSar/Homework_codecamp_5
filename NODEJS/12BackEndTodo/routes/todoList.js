const express =require('express')
const router = express.Router()
const todoListController = require('../controller/todoList')

router.get('/',todoListController.getodoList)
router.post('/',todoListController.createTodoList)
router.put('/:id',todoListController.updateTodoList)
router.delete('/:id',todoListController.deleteTodoList)


module.exports = router