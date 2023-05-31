const express = require('express')
const app = express()
const port = 3030
const axios = require('axios')


app.get('/data', (req, res) => {
    const data = { a: 1, b: 2}
    res.json(data)
  })

app.get('/',async (req, res) => {
  const { data } = await axios.get(`http://localhost:${port}/data`)
  res.json(data);
})



app.listen(port, () => { console.log(`[DEBUG] ${Date.now()} listening`) })
