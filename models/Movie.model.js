require("mongoose")
const schema = require("mongoose").Schema

const movieSchema = new schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

const Movie = require("mongoose").model("Movie", movieSchema)

module.exports = Movie

