const express = require('express')
const router = express.Router();
const { createBook, getAllBooks, getAbook, updateAbook, deleteAbook } = require('../Controllers/booksControllers')

router.route('/')
.get(getAllBooks)
.post(createBook)
router.route('/:id')
.get(getAbook)
.put(updateAbook)
.delete(deleteAbook)

module.exports = router;