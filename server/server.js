
const PORT = 8011
const express = require('express')
const app = express()

const path = require('path')

app.use(express.static(path.join(__dirname, 'build')))

app.use((req, res, next)=>{
  console.log('url', req.url)
  return next()
})

app.get('/', (req, res) => {
  return res.status(200).sendFile('index.html')
})

app.listen(PORT, ()=>console.log(`(server): listening on port ${PORT}...`))

