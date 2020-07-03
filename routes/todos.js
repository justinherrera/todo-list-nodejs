const express = require('express')
const router = express.Router()

// Model
const Todo = require('../models/Todo')

// GET ALL TODOS
router.get('/', async (req,res) =>  {
    try{
        const todo = await Todo.find();
        res.render('home', {items: todo})
        // await Todo.find().toArray( items => {
        //     res.render('home', { items: items }, function(err,html){
        //         console.log(html)
        //         res.send(html)
        //     })
        // })
        // res.render('home', { name: 'Tobi' }, function(err, html){
        //     res.send(html)
        // })
    }catch(err){}
})

// CREATE A TODOS
router.post('/', async (req,res) => {
    const todo = new Todo({
        item: req.body.item,
        dueDate:  req.body.dueDate,
        status: req.body.status
    })
    try{
        const save_todo = await todo.save()
        res.redirect('/todos');
        res.json(save_todo)
    }catch(err){
        res.json({ message: err })
    }
})
// FIND TODOS
router.get('/:id', async (req,res) => {
    try{
        const todo = await Todo.findById(req.params.id)
        res.json(todo)
    }catch(err){
        res.json({ message: err })
    }
})

// DELETE TODOS
router.delete('/:id', async (req,res) => {
    try{
        const remove_todo = await Todo.deleteOne({ _id: req.params.id })
        res.json(remove_todo)
    }catch(err){
        res.json({ message: err })
    }
   
})

// UPDATE TODOS
router.patch('/:id', async (req,res) => {
    try{
        const update_todo = await Todo.updateOne(
            { _id: req.params.id }, 
            { $set: { 
                item: req.body.item,
                dueDate: req.body.dueDate,
                status: req.body.status
            } }
            )
        res.json(update_todo)
    }catch(err){
        res.json({ message: err })
    }
   
})
module.exports = router