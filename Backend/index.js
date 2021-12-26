const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 9000

connectToMongo()

app.use(cors())
app.use(express.json())

app.use('/auth/', require('./Routes/auth'))

app.listen(PORT, () => {
    console.log(`React native expo login screen backend listening at http://localhost:${PORT}`)
})