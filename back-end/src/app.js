const express = require('express')
const router = require('./router/userRouter')

const app = express()

app.use(express.json())
app.use(router)

module.exports = app