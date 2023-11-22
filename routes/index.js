const express = require('express');
const router = express.Router();
const controller = require('../controllers/Movies.controller.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index.hbs'));
router.get('/movies', controller.all_movies);
router.get('/movies/:id', controller.movie_details);

module.exports = router;
