import express from 'express'
import cors from  'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

//app congiguration / checking app instance
const app =express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares  needed

app.use(express.json())// we will request  any of the request , the  the request will get pased w using this method , that is express.json method
app.use(cors())// it is used because it is used to connect frontend with our backend

//api endpoint

app.get('/',(req,res)=>{
    res.send("api is working very very fine ohh you zing zing ")
})
app.listen(port,()=> console.log("server started successfully",port))
