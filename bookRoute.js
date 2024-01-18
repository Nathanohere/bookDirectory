const express = require('express');
const bookController = require('./bookController');
const router = express.Router();

router.route('/').get(bookController.getBooks).post(bookController.createBook);

router
  .route('/:id')
  .get(bookController.getBook)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;
