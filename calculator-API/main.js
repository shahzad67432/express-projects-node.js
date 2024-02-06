const express = require('express')
const app = express()
const port = 3000


function add(a, b){
    return a + b;

}

function minus(a, b){
    return a - b;

}

function mul(a, b){
    return a * b;

}

function Divide(a, b){
    return a / b;

}
app.get('/add', (req, res)=> {

    const {a, b} = req.query;
    if (a && b){
        const result = add(Number(a), Number(b))
        res.send(`result is ${result}`)
    }
    else{
        res.status(200).send("the query parameters are not correct")
    }
});
app.get('/minus', (req, res)=> {

    const {a, b} = req.query;
    if (a && b){
        const result = minus(Number(a), Number(b))
        res.send(`result is ${result}`)
    }
    else{
        res.status(200).send("the query parameters are not correct")
    }

});
app.get('/mul', (req, res)=> {

    const {a, b} = req.query;

    if (a && b){
        const result = mul(Number(a), Number(b))
        res.send(`result is ${result}`)
    }
    else{
        res.status(200).send("the query parameters are not correct")
    }

});
app.get('/Divide', (req, res)=> {

    const {a, b} = req.query;

    if (a && b){
        const result = Divide(Number(a), Number(b))
        res.send(`result is ${result}`)
    }
    else{
        res.status(200).send("the query parameters are not correct")
    }
});

app.listen(port, ()=>{
    console.log("port is runnning on ${port}")
})