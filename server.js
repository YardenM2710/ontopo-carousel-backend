const express = require('express')
const cors = require('cors')
const slideRoutes = require('./api/slide/slide.routes')

const app = express()
const http = require('http').createServer(app)

app.use(express.json()) 
app.use(express.urlencoded({ extended: false })) 
app.use(express.static('public'))

const corsOptions = {
  origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:5173'],
  credentials: true
}

app.use(cors(corsOptions))

app.use('/api/slide', slideRoutes)

const port = process.env.PORT || 3030
http.listen(port, () => {
  console.log('Server is running on port: ' + port)
})
