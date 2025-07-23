// used this syntax according to the common js 
const express = require('express');
const sqlite3 = require('sqlite3');
const {open} = require('sqlite');
const path = require('path');
const app = express();


const mydbpath = path.join(__dirname, './goodreads.db')
let db = null;

const initialzeDb = async ()=>{
    db = await open({
        filename: mydbpath,
        driver:sqlite3.Database
    })
}

initialzeDb();

// create book table API 
app.get('/create/',async(req,res)=>{
    const data = await db.run(`CREATE TABLE BOOK(BOOK_ID INT, BOOK_NAME TEXT)`);
    res.send('Table Created Sucessfully');
})

app.use(express.json());
app.get('/book/', async(req,res)=>{
    query = `select * from book`;
    const data = await db.all(query);
    res.send(data);
})

app.post('/addbook/',(req,res)=>{
    const {id,name} = req.body;
    const que = `INSERT INTO BOOK(BOOK_ID, BOOK_NAME) VALUES (${id},'${name}')`
    db.run(que);
    res.send('row added successfully')
})


app.get('/book/:id', async(req,res)=>{
    const id = req.params.id;
    const que = `SELECT * FROM BOOK WHERE BOOK_ID = ${id}`;
    const data = await db.all(que);
    res.send(data);
})

app.listen(3000,()=>{
    console.log("Server Started")
})
