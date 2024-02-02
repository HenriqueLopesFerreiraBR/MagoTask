const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/registe',UserController.register)
router.get('/', UserController.getAll)
router.get('/:id', UserController.getById)
router.put('/:id',UserController.update)
router.delete('/:id', UserController.delete)


module.exports = router