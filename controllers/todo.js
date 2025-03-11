const Todo = require('../models/todo');

exports.createTodo = async (req,res)=>{
    try{
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}; //400 invalid input , 500 connection , database 

exports.getTodos = async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.json(todos);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

exports.updateTodo = async (req,res)=>{
 try{
    const todo = await Todo.findByIdAndUpdate(
        req.params.id, // Gets the ID from the request URL (/:id)
        req.body, //Contains the new values (e.g., updated title or status)
        {new: true} //Ensures the response contains the updated document instead of the old one
    );
    res.json(todo);
 }catch(err){
    res.status(400).json({error:err.message});
 }
};

exports.deleteTodo = async(req,res)=>{
    try{
       const todo = await Todo.findByIdAndDelete(req.params.id);
        res.json({message : 'todo deleted'});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

