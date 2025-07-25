import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import router from './route/studentRoute.js'

const app = express();//server creation
dotenv.config(); 
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
const mongoURI = process.env.mongoURI;

app.use('/api', router);

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
  





