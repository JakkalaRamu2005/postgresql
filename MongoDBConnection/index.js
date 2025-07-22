import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'




const app = express();//server creation
dotenv.config(); 
const port = process.env.PORT || 3000;
const mongoURI = process.env.mongoURI


mongoose
.connect(mongoURI)
.then(()=>{
    console.log('MongoDB connected sucessfully');

    app.listen(port,()=>{
    console.log("Server Started");
});
})
.catch(()=>{
    console.log("MongoDB connected failed")
    
})
  


// 

