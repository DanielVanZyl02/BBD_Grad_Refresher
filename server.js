import express from 'express'
require('dotenv').config();

const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('Hello ' + req.query.name)
})

app.get('/funfact', (req, res) => {
  res.send('CI/CD is fun')
})


app.listen(port, () => {})