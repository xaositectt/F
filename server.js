const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json({ extended: false }))

app.post('/what', (req, res) => {
  console.log(req.body)
  res.send({ msg: 'done' })
})

app.get('/what', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log('listening on port 3000')
})


