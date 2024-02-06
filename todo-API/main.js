const express = require('express')
const app = express()
port = process.env.port || 5500

app.use(express.json());

let todoList = [
    {
    todo: "my first todo"
    },
    {
    todo: "seccond todo"
    },
];

app.get('/todo', (req, res) => {
    res.json(todoList)
});
app.post('/todo', (req, res)=> {

    const { todo } = req.body

    // let newTodoList = todoList.push({todo})
    // res.json(`no of todos you have : ${newTodoList}`)

    if (todo == undefined){

        todoList.push({todo: `${todo}`});
        res.json( {message: 'todo added successfully', todoList});      
    }
    else{
        res.status(404).send("error 404 incorrect parameters");
    }

});

app.listen(port, ()=>{
    console.log(`app is running on port: ${port}`)
})