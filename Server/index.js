//Importing express and other required libraries
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

//Creating an application
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Creating an simple GET route
app.get('/', (req, res) => {
    res.send('Server is connected')
})

// Attaching the server to a port
app.listen(process.env.PORT, () => {
    console.log(`Server is running sucessfully on ${process.env.PORT} `)
})