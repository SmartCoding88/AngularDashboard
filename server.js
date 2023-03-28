const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

//use process.env.... <npm i  dotenv>
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

//server Index page
app.use(express.static(path.join(__dirname, "server/www")));

//RUN <npm run startDev> to run the server
app.listen(process.env.PORT, ()=>{
  console.log(`Server listening on port: ${process.env.PORT} ...`)
})

//connect to mongo
mongoose.connect(
  "mongodb+srv://prisma:prisma@prisma.kni8ffr.mongodb.net/dashboard-angular?retryWrites=true&w=majority"
).then(()=>{
  console.log("Connected to MongoDB")
}).catch((err)=>{
  console.log(`Connection failed ${err}`)
})
