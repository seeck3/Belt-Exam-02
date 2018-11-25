const movieController = require('../controllers/movie.controller');
const router = require('express').Router();

//    /resource/:id   => after index.js it goes to /books/:id
// and /api/books/:id

module.exports = router
  .get('/', movieController.index)
  .get('/:movie_id', movieController.show)
  .get('/:movie_id/review', movieController.showReview)
  .post('/', movieController.create)
  .put('/:movie_id/review', movieController.addReview)
  .put('/:movie_id', movieController.update)
  .delete('/:movie_id', movieController.destroy)
  .delete('/:movie_id/:id', movieController.destoryReview)
