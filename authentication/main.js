const express = require("express")
const jwt = require('jsonwebtoken')
const port = 3000
const app = express()

const user = [{
    id: 'one',
    user: "shahzad",
    email: "shahzadali@gmail.com"
    },]
    


app.get('/api', (req, res)=> {
    res.json({
        message: 'app is running on API'
    })
});

app.post('/api/posts', verifyToken, (req, res) =>{
    jwt.verify(req.token, 'secretkey', (err, authData) =>{
        if(err){
            res.status(404).send("error occurs")
        }
        else{
            res.json({
                message: "now its  running",
                authData
            })
        }
    });

});

app.post('/api/login', (req, res) =>{

    jwt.sign({user: user}, 'secretkey',  (err, token) => {
        res.json({
            token
        })
    });
});

function verifyToken(req, res, next){

    const bearerHeader = req.headers['authorization']
    
    if (bearerHeader !== undefined){

        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();
    }
    else{
        res.send("403")
    }
}

app.listen(port, () => {
    console.log("server is running")
});