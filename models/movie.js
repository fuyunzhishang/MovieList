const mongoose = require('mongoose')

const movieSchemea = mongoose.Schema({
	title: {type: String, required: true},
	poster: String,
	raging: String,
	introduction: String,
	created_at: {type: Date, default: Date.now},
	update_at: {type: Date, default: Date.now}
})

const Movie = module.exports = mongoose.model('Movie',movieSchemea)