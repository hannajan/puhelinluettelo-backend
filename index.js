require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const Person = require('./models/person')

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

morgan.token('body', (req, res) => { return JSON.stringify(req.body) })

app.use(morgan((tokens, req, res) => {

    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      tokens['body'](req, res)
    ].join(' ')
  }))

app.get('/', (req, res) => {
    res.send('<h1>Persons backend</h1>')
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id).then(person => {
        res.json(person)
    })
})

app.get('/info', (req, res) => {
    Person.find({}).then(persons => {
        const content = `Phonebook has info for ${persons.length} people</br></br>${new Date()}`
        res.send(content)          
    })
})

app.post('/api/persons', (req, res) => {
    const body = req.body

    if(!body.name || !body.number) {
        return res.status(400).json({
            error: 'name or phonenumber missing'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        res.json(savedPerson)
    })
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
    })
    .catch(error => {
        console.log(error)
        return next(error)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})