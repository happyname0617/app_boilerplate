import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import data from './data'

mongoose.connect('mongodb://db:27017')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('were connected!')
})
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  res.send(data)
})

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})
