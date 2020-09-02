const express = require('express')
const app = express()

const router1 = require('./routes/route1')

app.use('/prefix',router1)

app.listen(3000,() => console.log('lancé'))