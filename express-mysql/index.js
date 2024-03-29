var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const port = 2000
const { userRouter, adminRouter } = require('./2.router')

app.use(bodyParser.json())
app.use(cors())
// app.use('/subscription', express.static('subscription')) 
// app.use('/profile', express.static('profile'))
app.use('/paymentproof', express.static('./uploads/paymentproof'))
app.use('/material', express.static('./uploads/material'))

app.use('/auth', userRouter)
// app.use('/admin', adminRouter)

app.get('/', (req,res) => {
    res.send('<h1>Welcome to API</h1>')
})



app.listen(port, () => console.log('Listening in port : ' + port))