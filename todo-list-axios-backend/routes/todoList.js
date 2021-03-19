const express = require('express');
const router = express.Router();
const todoListControllers = require('../controllers/todoList')
const passport = require('passport')
//middle ware ต้อง login ก่อนถึงสามารถ
const authentication = passport.authenticate('nameJwt',{session:false});

//get
router.get('/',authentication,todoListControllers.getTodoList)
//create
router.post('/',authentication,todoListControllers.createTodoList)
//update
router.put('/:id',authentication,todoListControllers.updateTodoList)
//delete
router.delete('/:id',authentication,todoListControllers.deleteTodoList);

module.exports = router