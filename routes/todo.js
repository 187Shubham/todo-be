const express = require('express');
const router = express.Router();

const {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo,
} = require("../controllers/todo");

router.post('/' ,createTodo);
router.get('/',getTodos);
router.put('/:id',updateTodo); // id for  which todo to update.
router.delete('/:id',deleteTodo); // id for  which todo to delete

module.exports = router;
