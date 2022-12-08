const Task = require('../models/task.js')


const pendingList = ((req,res) => {
    const filterId = req.body.id
    Task.find({ commissionId : filterId , status : 0 }, (err,tasks) => {
        if(err)console.log(err)
        else {
            const data = {
                status : 200,
                tasks : tasks
            }
            res.json(data)
        }
    })
})

const completedList = ((req,res) => {
    const filterId = req.body.id
    Task.find({ commissionId : filterId , status : 1 }, (err,tasks) => {
        if(err)console.log(err)
        else {
            const data = {
                status : 200,
                tasks : tasks
            }
            res.json(data)
        }
    })
})


const add = ((req,res) => {
    const newTask = new Task(req.body)
    newTask.save().then((response) => {
        const data = {
            status : 200,
            description : "Created sucessfully"
        }
        res.json(data)
    }).catch((err)=>{
        if(err)console.log(err)
    })
})

const update = ((req,res) => {
    const update = {
        id1 : req.body.id1,
        id2 : req.body.id2,
        commissionId : req.body.commissionId,
        commissionName : req.body.commissionName,
        officer : req.body.officer,
        due : req.body.due,
        assigned : req.body.assigned,
        status : req.body.status
    }
    Task.findOneAndUpdate({_id : req.body._id}, update , {
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

const remove = ((req,res) =>{
    const update = {
        status : 1
    }
    Task.findOneAndUpdate({_id : req.body._id} , update , {
        new : true
    }).then((response) => {
        const data = {
            status : 200,
            description : "Completed successfully"
        }
        res.json(data)
    }).catch((err) =>{
        if(err)console.log(err)
    })
})

module.exports = {
    add , pendingList , completedList , update , remove
}