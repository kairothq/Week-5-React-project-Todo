const express = require("express");
const app = express(); 
app.use(express.json()); // this is kindof middleware
// this convert coming json from req to Javascript format which is then made available to res


// WHAT I EXPECT FROM THIS 
// body{ 
//     title: String;
//     decription: String;
// }
// THEREFORE MAKING A ZOD FOR INPUT VALIDATION

const {createTodo, updateTodo} = require("./types");

app.post('/todo', async function(req,res){
    const createpayload = req.body;
    const parsepayload = createTodo.safeparse(createpayload); // safeparse to check that incoming JSON payload doesn't have potential malcious JSON data that lead to security vulnerablity
    if(!parsepayload){ // this is to check that it doesn't have invalid inputs (as zod does)
        res.status(411).json({
        msg : "Incorrect input",
    })
    return; 
    }
    // put it in mongodb
    await todo.create ({ // its imp to use await here since we want to send the msg todo created only after this completes 
        title: createpayload.title,
        description : createpayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created"
    })
})

app.get('/todos', async function(req,res) {
    const todos= await todo.find({
        // this await is very imp otherwise its just a promise and will not give us correct data 
    })

    res.json({
        todos
    })


})


app.put('/completed', async function(req,res){
    const updatepayload  = req.body;
    const parsepayload = updateTodo.safeParse(updatepayload)
    if (! parsepayload){
        res.status(411).json({
            msg: "Incorrect input"
        })
    return;
    }
    await todo.update({
        _id: req.body.id
    },{completed: true}) // ({what we want to update},{what we update it to})
    res.json({
        msg: "Todo marked as completed"
    }) 
}
)


app.listen(3000); 