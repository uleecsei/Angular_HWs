const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).send(todos);
    }
    catch (err){
        res.status(500).json({status: 'Can not get todos', error: err});
    }
});

router.post('/', async (req, res) => {
    try {
        await Todo.create(req.body, (err, todo) => {
            if(err) {
                res.status(500).json({status: 'Todo was not created', err});
            }
            res.status(200).send({});
        });
    }
    catch (err){
        res.status(500).json({status: 'Can not post todo', error: err});
    }
});

router.post('/:id', async(req, res) => {
    try {
        console.log(req.body);
        const isUpdated = await Todo.findOneAndUpdate({id: Number(req.params.id)}, {title: req.body.title});
        if(isUpdated) {
        res.status(200).send({});
        }
        else{
            res.status(500).json({status: 'Todo was not created', err});
        }
    }
    catch (err){
        res.status(500).json({status: 'Can not post todo', error: err});
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const isDeleted = await Todo.findOneAndDelete({id: Number(req.params.id)});
        if(isDeleted) {
            res.status(200).send({});
            }
            else{
                res.status(500).json({status: 'Todo was not deleted', err});
            }
    }
    catch (err){
        res.status(500).json({status: 'Can not delete todo', error: err});
    }
});

module.exports = router;