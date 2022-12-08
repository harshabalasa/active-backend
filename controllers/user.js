const express = require('express');
const User = require('../models/user.js');

const list = ((req,res)=>{
    User.find({},(err,users)=> {
        if(err)res.sendStatus(404);
        else {
            const data = {
                status : 200,
                users : users
            }
            res.json(data);
        }

    })
})

const add = ((req,res) => {
    const newUser = new User(req.body)
    newUser.save().then((response) => {
        const data = {
            status : 200,
            description : "Inserted successfully"
        }
        res.json(data)
    }).catch((err) => {
        if(err)console.log(err)
    })
})

const update = ((req,res) => {
    const update = {
        mobile : req.body.mobile,
        password : req.body.password,
        commission : req.body.commission
    }
    User.findOneAndUpdate({ _id : req.body._id }, update , {
        new : true
    }).then((response) => {
        const data = {
            status : 200,
            description : "Updated successfully"
        }
        res.json(data)
    }).catch((err) => {
        if(err)console.log(err)
    })
})

const remove = ((req,res) => {
    User.deleteOne({_id : req.body._id} , (err)=>{
        if(err)console.log(err)
        else {
            const data = {
                status : 200,
                description : "Deleted successfully"
            }
            res.json(data)
        }
    })
})

module.exports = {
    list, add , update , remove
}
