const { Router } = require('express');
const { getToDo, addToDo, updateToDo, deleteToDo } = require('../controllers/ToDoController');

const router = Router();

router.get('/', getToDo)
router.post('/add', addToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;