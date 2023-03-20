const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const cors = require('cors')

const app = express()
app.use(express.json())
const corsOptions = {
  origin : 'https://slyderslash-snage-reimagined-train-qjgprgjp7v92gjr-3001.preview.app.github.dev/'
}

app.use(cors(corsOptions))
app.use(express.static(path.resolve(__dirname,'./public')))



const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to the database.')
})

const deviceKeyMiddleware = (req, res, next) => {
    const deviceKey = req.headers['key']
    if (!deviceKey) {
      res.status(401).send('Unauthorized')
      return
    }
  
    db.get('SELECT id FROM deviceKey WHERE key = ?', [deviceKey], (err, row) => {
      if (err) {
        console.error(err.message)
        res.status(500).send('Internal server error')
      } else if (!row) {
        res.status(401).send('Unauthorized')
      } else {
        req.deviceId = row.id
        next()
      }
    })
}
  

db.run(`CREATE TABLE IF NOT EXISTS pizzas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT,
    photo TEXT NOT NULL
)`)

db.run(`CREATE TABLE IF NOT EXISTS deviceKey (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    key TEXT NOT NULL
)`)

app.get('/pizzas', deviceKeyMiddleware, (req, res) => {
  db.all('SELECT * FROM pizzas', (err, rows) => {
    if (err) {
      console.error(err.message)
      res.status(500).send('Internal server error')
    } else {
      res.json(rows)
    }
  })
})

app.get('/pizzas/:id', deviceKeyMiddleware, (req, res) => {
  const id = req.params.id
  db.get('SELECT * FROM pizzas WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message)
      res.status(500).send('Internal server error')
    } else if (!row) {
      res.status(404).send('Pizza not found')
    } else {
      res.json(row)
    }
  })
})

app.post('/pizzas', deviceKeyMiddleware, (req, res) => {
  const { name, price, description, photo } = req.body
  db.run('INSERT INTO pizzas (name, price, description, photo) VALUES (?, ?, ?, ?)', [name, price, description, photo], (err) => {
    if (err) {
      console.error(err.message)
      res.status(500).send('Internal server error')
    } else {
      res.send('Pizza added successfully')
    }
  })
})

app.put('/pizzas/:id', deviceKeyMiddleware, (req, res) => {
  if(req.deviceId !== 1){
    return res.status(401).send('Unauthorized')
  }
  const id = req.params.id
  const { name, price, description, photo } = req.body
  db.run('UPDATE pizzas SET name = ?, price = ?, description = ?, photo = ? WHERE id = ?', [name, price, description, photo, id], (err) => {
    if (err) {
      console.error(err.message)
      res.status(500).send('Internal server error')
    } else {
      res.send('Pizza updated successfully')
    }
  })
})

app.delete('/pizzas/:id', deviceKeyMiddleware, (req, res) => {
  if(req.deviceId !== 1){
    return res.status(401).send('Unauthorized')
  }
  const id = req.params.id
  db.run('DELETE FROM pizzas WHERE id = ?', [id], (err) => {
    if (err) {
      console.error(err.message)
      res.status(500).send('Internal server error')
    } else {
      res.send('Pizza deleted successfully')
    }
  })
})

// Démarrage du serveur
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})