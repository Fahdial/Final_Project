const db = require('../database')
const nodemailer = require('nodemailer')
const {pdfcreate} = require('../3.helpers/html-pdf')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fahdialahyatamma@gmail.com',
        pass: 'zlfjhrfyhmbygtai' // pass yang didapat dari gmail
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = {
    userLogin: (req, res) => {
        db.query (`select * from users where username = '${req.query.username}'`,
            (err,result) => {
            if(err) throw err
            if(result.length > 0){
                if(req.query.password === result[0].password){
                    res.send({
                        status: '200',
                        result: result [0]
                    })
                }else{
                    res.send({
                        status: '401',
                        message: 'wrong password'
                    })
                }
                } else {
                    let data= {
                        status: '404',
                        message: 'User not found'
                }
                res.send(data)
            }
        })
    },
    register: (req, res) => {
        let sql = `select * from users where username = '${req.query.username}'`
        let sql2 = `insert into users value (0, '${req.query.username}','${req.query.password}','free','${req.body.email})`

        db.query(sql, (err,result)=> {
            if(result.length > 0){
                res.send({
                    status: '400',
                    message: 'username has been taken'
                })
            }else {
                db.query(sql2, (err2, result2)=> {
                    if(err2) throw err2
                    let mailOptions = {
                        from: 'finalproject_dion',
                        to: req.body.email,
                        subject:'Verify your account',
                        html: `<p> <a href="http://localhost:2000/auth/verify?username=${req.body.username}&email=${req.body.email}"> </a>Click here to verify your account </p>`
                    }
                    transporter.sendMail(mailOptions, (err,info) => {
                        if(err3) throw err3
                    })
                    res.send({
                        status: '201',
                        message: 'Your account has been created, please check your emai to verify'
                    })
                })
            }
        })

    },
    // Nyobain verify sendiri
    verifyEmail: (req,res) => {
        let sql = `update users set isVerified = 1 where username = '${req.query.username}' and email = '${req.query.email}'`
        db.query(sql, (err, result)=>{
            if (err) throw err

            res.send('Your account has been verified')
        })
    }
}