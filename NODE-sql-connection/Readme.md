->loging api
-> JWT Token
-> middleware 
// are things are we are gonna discuss in this class 

        req
localhost:3000/book client----------> server ----> DB- data 
   <----------------------
        res

--> without login the server doesn't respond to you, first it will ask you to login first to access the data. 

localhost:3000/login/
{ 
    username: "admin",
    password: "admin"
}

the token is returned by ther server- you send this token along with req,  if the token is correct it will check and you will get the access

--> JWT - JSON web token
--> npm i jsonwebtoken is the command