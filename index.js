const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
   res.send(" Welcome to API web ! ")
})
//API user
app.get('/Users', (req, res) => {
   res.send(' API web !')
})
//API User id
app.get('/Users/:id', (req, res) => {
   res.send(req.params)
})
//API Post
app.post('/Users/:id', (req, res) => {
   res.send(req.params)
})

//API put
app.put('/Users/:id', (req, res) => {
   res.send(req.params)
})

//API Delete data
app.delete('/Users/:id', (req, res) => {
   res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})