const express = require('express')
//const mongoose = require('mongoose')
const colors = require('colors')
require('dotenv').config()
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const projectRoutes = require('./routes/projectRoutes')

const port = process.env.PORT || 5000
connectDB()

const app = express()

// mongoose.connect(process.env.DBURI, { useNewUrlParser: true, useUnifiedTopology: true})
// .then((result) => {
//     console.log('connected to db')
//     app.listen(port)
//     console.log('server started')
// })
// .catch((err) => console.log(`error: ${err}`))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(errorHandler)
app.use('/api/projects', projectRoutes)
app.listen(port)

