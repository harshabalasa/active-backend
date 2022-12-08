const Commission = require('../models/commission.js')

const list = ((req,res)=>{
    Commission.find({},(err,commissions) => {
        if(err){
            res.sendStatus(404)
        }
        else {
            const data = {
                status : 200,
                commissions : commissions
            }
            res.json(data)
        }
    })
})

const add = ((req,res) => {
    const newCommission = new Commission(req.body)
    newCommission.save().then((response)=>{
        const data = {
            status : 200,
            description : "Inserted successfully"
        }
        res.json(data)
    }).catch((err) => {
        if(err)console.log(err)
    })
})



module.exports = {
    list , add
}
