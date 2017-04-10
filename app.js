/*const express = require('express')
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
*/



const pkg = require('./package')
const config = require('./config/db')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const index = require('./router/index')
const movie = require('./router/movie')

mongoose.connect(config.mongodb)
mongoose.Promise = global.Promise

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(favicon(__dirname + '/src/assets/favicon.ico'))
app.use(express.static('dist'))
app.use('/',index)
app.use('/api',movie)

app.listen(port, () => {
  console.log(`${pkg.name} listening on port ${port}`)
})

module.exports = app
