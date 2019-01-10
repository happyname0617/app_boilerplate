import express from 'express'
import cors from 'cors'

require('dotenv').config() 
import data from './data'

const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  res.send(data)
})

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})
