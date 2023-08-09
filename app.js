const express = require('express')
// const port = 3200
const app = express()
const cors=require('cors')

const fileUpload = require("express-fileupload")
const cloudinary = require('cloudinary')
const dotenv = require('dotenv')
const connectdb = require('./db/connectdb')
const web = require('./routes/web')





app.use(express.json())
app.use(cors())

app.use(fileUpload({useTempFiles: true}))

dotenv.config({
    path:'.env'
})





connectdb()

app.use('/api',web)

app.listen(process.env.PORT, ()=>{
    console.log(`server started on localhost ${process.env.PORT}`);
})