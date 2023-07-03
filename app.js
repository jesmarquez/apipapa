const express = require('express')
const db = require('./db/index')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API REST for lapapa!')
})

app.get('/api/foods', (req, res) => {
  const foods = 
    [
      {
        "id": 101,
        "isActive":true,
        "urlImage":"https://firebasestorage.googleapis.com/v0/b/lapapa-faabf.appspot.com/o/arepa-queso-carne-mechada.jpg?alt=media&token=1a85b5d8-3858-439a-bc58-8d26af1a6b7d",
        "foodName":"Arepa queso y carne",
        "calories":"900 cals",
        "precio":"8.00"
      },
      {
        "id": 102,
        "isActive":true,
        "urlImage":"https://firebasestorage.googleapis.com/v0/b/lapapa-faabf.appspot.com/o/arepa-reina-pepiada.jpg?alt=media&token=a5ca93d6-28ed-4a88-bb8b-90835a38fc9c",
        "foodName":"Arepa reina pepiada",
        "calories":"1900 cals",
        "precio":"9.50"
      }
    ]
  res.json(foods);
})

app.get('/api/users', async (req, res) => {
  
  results = await db.getUsers();

  res.json(results)
})

app.listen(port, () => {
  console.log(`Api papa listening on port ${port}`)
})