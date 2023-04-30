const express = require('express')
const categoris = require('./data/categories.json')
const news = require('./data/Newes.json')
const app = express()
var cors = require('cors')
const port = 5000
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/categoris', (req, res) => {
  res.send(categoris)
})
app.get('/categoris/:id', (req, res) => {
  const id= parseInt(req.params.id);
  if(id===0){
  res.send(news)
     
  }else{
    const filtercategorig=news.filter(n=>parseInt(n.category_id)==id)
    res.send(filtercategorig)
  }

})

app.get('/news', (req, res) => {
  res.send(news)
})
app.get('/news/:id', (req, res) => {
  const id=req.params.id;
  const findid=news.find(n=>n._id==id)

  res.send(findid)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})