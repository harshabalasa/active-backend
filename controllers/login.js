const User = require('../models/user.js')
const Admin = require('../models/admin.js')

const validateUser = ((req,res)=> {
    User.findOne({mobile : req.body.mobile , password : req.body.password}, (err, user) => {
        if(err){
            console.log(err)
        }
        else {
            const data = {
                status : 200,
                user : user
            }
            res.json(data)
        }
    })
})

const validateAdmin = ((req,res) => {
    Admin.findOne({mobile : req.body.mobile , password : req.body.password}, (err, admin) => {
        if(err){
            console.log(err)
        }
        else {
            const data = {
                status : 200,
                admin : admin
            }
            res.json(data)
        }
    })
})

module.exports = {
    validateUser, validateAdmin
}
