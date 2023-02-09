const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const userApi = require('./routes/user.js')
const commissionApi = require('./routes/commission.js')
const loginApi = require('./routes/login.js')
const officerApi = require('./routes/officer.js')
const cadreApi = require('./routes/cadre.js')
const taskApi = require('./routes/task.js')

const message = require('./services/message.js')

app.use(express.json())
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://kiranrevanth:vizagvizag@cluster0.9ptehyv.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL , (err) => {
    if(err){
        console.log(err)
    }
    else console.log('DB Connected')
})

const PORT = process.env.PORT || 777;
app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`)
})

message()
app.use('/api/users', userApi)
app.use('/api/commissions', commissionApi)
app.use('/api/login', loginApi)
app.use('/api/officers', officerApi)
app.use('/api/cadres' , cadreApi)
app.use('/api/tasks', taskApi)
