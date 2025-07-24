// used this syntax according to the common js 
const express = require('express');
const sqlite3 = require('sqlite3');
const {open} = require('sqlite');
const path = require('path');
const jwt = require('jsonwebtoken');
const app = express();



const mydbpath = path.join(__dirname, './goodreads.db')
let db = null;

const initialzeDb = async ()=>{
try{
        db = await open({
        filename: mydbpath,
        driver:sqlite3.Database
    })
// initialize the server and db 
    app.listen(3000,()=>{
    console.log("Server Started")
})
}catch(err){
    console.log("Error in DB connection");
}

}

initialzeDb();

// create book table API 
app.get('/create/',async(req,res)=>{
    const data = await db.run(`CREATE TABLE BOOK(BOOK_ID INT, BOOK_NAME TEXT)`);
    res.send('Table Created Sucessfully');
})

app.use(express.json());

function checkLogin(req,res,next){
    const authData = req.headers.authorization || '';
    const token = authData.split(' ')[1];
    jwt.verify(token, "ABC", (err, payload)=>{
        if(err){
            res.send("login required");
        }else{
            next();
        }
    })

}

//get  all Book APi
app.get('/book/',checkLogin, async(req,res)=>{
    query = `select * from book`;
    const data = await db.all(query);
    res.send(data);
})


// add the book 
app.post('/addbook/',(req,res)=>{
    const {id,name} = req.body;
    const que = `INSERT INTO BOOK(BOOK_ID, BOOK_NAME) VALUES (${id},'${name}')`
    db.run(que);
    res.send('row added successfully')
})

// get specific book book by id 
app.get('/book/:id', async(req,res)=>{
    const id = req.params.id;
    const que = `SELECT * FROM BOOK WHERE BOOK_ID = ${id}`;
    const data = await db.all(que);
    res.send(data);
})

// Login API 
app.post('/login/',(req,res)=>{
    const {username, password} = req.body;
    if(username ==="admin" && password==="admin"){
        const payload = {
            username: username,
        }
        const jwtToken = jwt.sign(payload,"ABC");
        res.send(jwtToken);
    }else{
        res.send("Invalid Credentials");
    }
})