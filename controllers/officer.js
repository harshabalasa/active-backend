const Officer = require('../models/officer.js')

const list = ((req,res) => {
    Officer.find({},(err,officers) => {
        if(err){
            console.log(err)
        }
        else {
            const data = {
                status : 200,
                officers : officers
            }
            res.json(data)
        }
    })
})

const add = ((req,res) => {
    const newOfficer = new Officer(req.body)
    newOfficer.save().then((response) => {
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
        officerId : req.body.officerId,
        officerName : req.body.officerName,
        mobile : req.body.mobile,
        email : req.body.email,
        cadreId : req.body.cadreId
    }
    Officer.findOneAndUpdate({_id : req.body._id} , update, {
        new : true
    }).then((response) => {
        const data = {
            status : 200,
            description : "Updated successfully"
        }
        res.json(data)
    }).catch((err)=>{
        if(err)console.log(err)
    })
})

const remove = ((req,res) => {
    Officer.deleteOne({_id : req.body._id} , (err) => {
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
