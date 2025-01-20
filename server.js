import express from 'express'
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('Hello ' + req.query.name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})