const express = require("express");
import { todo } from "./db";
import { createTodo, updateTodo } from "./types";


const app = express();
app.use(express.json())

app.post('/todo',async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    else{
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: createPayload.completed
        })
        res.json({
            msg: "Todo created"
        })
    }
});

app.get('/todo',async (req,res)=> {
    const todos = await todo.find({});
    res.json({
        todos
    })

});
app.put('/completed',async (req,res)=> {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    await todo.update({
        _id: req.body.id,
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);