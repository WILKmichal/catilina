const express = require('express')
const app = express()

const concour = require('./rout/concour')

app.use('/prefix', concour)

app.listen(3000, () => console.log('lancé'))