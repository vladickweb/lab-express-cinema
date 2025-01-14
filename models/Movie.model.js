const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
}, {
    timestamps: true
})

const Cinema = mongoose.model("Cinema", movieSchema);

module.exports = Cinema