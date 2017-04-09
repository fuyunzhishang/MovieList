const express = require('express')
const app = express()
const mongoose = require('mongoose')
const index = require('./router/index')
const movie = require('./router/movie')


mongoose.connect('mongodb://localhost:27017/movielist')	
app.use('/',index)
app.use('/api',movie)
app.listen(3000,() => {
	console.log('app listening on port 3000.')
})