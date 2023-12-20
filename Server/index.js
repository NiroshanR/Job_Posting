//Importing express and other required libraries
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const User = require('./models/user')
const jobDetails = require('./models/jobs')
const mongoose = require('mongoose')
dotenv.config()

//Creating an application
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Creating schemas






//Creating a simple health API using a GET route
app.get('/', (req, res) => {
    try{
        res.json({
                status: 'SUCCESS',
                message: 'Server running sucsessfully!'
            })
        }catch(error){
            res.json({
                status: 'FAILED',
                message: 'Something went wrong!'
    
            })
        }
})



// Attaching the server to a port and database
app.listen(process.env.PORT, () => {
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log(`Server is running sucessfully on ${process.env.PORT} `))
    .catch((error) => console.log(error))
    
})