const express = require("express")
const cors = require("cors")
const products = require("./products")
const mongoose = require('mongoose')
const app = express()
const registre = require('./routes/register')
const login = require('./routes/login')



require("dotenv").config()


app.use(express.json())//middleware
app.use(cors())
app.use('/api/register',registre)
app.use('/api/login',login)


app.get('/', (req,res)=>{
    res.send("welcome to api ")
})
app.get('/products', (req,res)=>{
    res.send(products)//send them to the front end
})

const port = process.env.PORT || 5000
const uri = process.env.DB_URI

app.listen(port , console.log('server runing on port ', port))

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then (()=>console.log("MongoDB connection successful.."))
.catch((error)=>console.log("MongoBD connection failed.."))