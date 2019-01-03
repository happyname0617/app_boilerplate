import express from 'express'
import cors from 'cors'

import data from './data'

const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  res.send(data)
})

app.listen(3000, () => {
  console.log('server running on port 3000')
})
