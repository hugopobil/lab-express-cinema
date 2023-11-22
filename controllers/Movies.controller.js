const Movies = require('../models/Movie.model.js');

module.exports.all_movies = (req, res, next) => {
    Movies.find()
        .then(movies => res.render('movies.hbs', { movies : movies }))
        .catch(next)
}

module.exports.movie_details = (req, res, next) => {
    Movies.findById(req.params.id)
        .then((movie) => {
            console.log(movie)
            res.render('movie-details.hbs', { movie : movie })
        })
        .catch(next)
}
