const Cadre = require('../models/cadre.js')

const list = ((req,res) => {
    Cadre.find({}, (err,cadres) => {
        if(err){
            console.log(err)
        }
        else {
            const data = {
                status : 200,
                cadres : cadres
            }
            res.json(data)
        }
    })
})

const add = ((req,res) => {
    const newCadre = new Cadre(req.body)
    newCadre.save().then((response) => {
        const data = {
            status : 200,
            description : "Inserted Successfully"
        }
        res.json(data)
    }).catch((err) => {
        if(err)console.log(err)
    })
})

module.exports = {
    list , add
}
