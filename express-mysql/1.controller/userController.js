const db = require('../database')
const nodemailer = require('nodemailer')
// const {pdfcreate} = require('../3.helpers/html-pdf')

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
        console.log(req);
        
            db.query (`select * from users where email = '${req.query.email}'`,
                (err,result) => {
                if(err) throw err
                if(result.length > 0){
                    if(req.query.password === result[0].password){
                        let sql = `select isVerified from users where email = '${req.query.email}'`
                        db.query(sql, (err,result2) => {
                            console.log(result2);
                            if(result2[0].isVerified === 1) {
                            res.send({
                                status: '200',
                                result: result [0]
                            })
                            }else{
                                res.send({
                                    status: 'unVerified',
                                    message: 'Please verified your email first!'
                                })
                            }
                        })
                    }else{
                        res.send({
                            status: '401',
                            message: 'Wrong password'
                        })
                    }
                    } else {
                        let data = {
                            status: '404',
                            message: 'User not found'
                    }
                    res.send(data)
                }
            })
        },

    userRegister: (req, res) => {
            let sql = `select * from users where username = '${req.body.username}'or email = '${req.body.email}'`
            let sql2 = `insert into users value (0, '${req.body.username}', '${req.body.email}','${req.body.password}' , 'free', 'https://www.thispersondoesnotexist.com/image', 0)`
        
            db.query(sql, (err,result)=> {
                if(result.length > 0){
                    res.send({
                        status: '404',
                        message: 'username or email has been taken'
                    })
                }else {
                    db.query(sql2, (err2, result2)=> {
                        if(err2) throw err2
                        let mailOptions = {
                            from: 'finalproject_dion',
                            to: req.body.email,
                            subject:'Verify your account',
                            html: `<p>Click here to verify your account 
                                    <a href="http://localhost:2000/auth/verify?username=${req.body.username}&email=${req.body.email}"> VERIFY!</a></p>`
                        }
                        transporter.sendMail(mailOptions, (err,info) => {
                            if(err3) throw err3
                        })
                        res.send({
                            status: '201',
                            message: 'Your account has been created, please check your email to verify'
                        })
                    })
                }
            })
        
        },
        // Nyobain verify sendiri
    verify: (req,res) => {
            let sql = `update users set isVerified = 1 where username = '${req.query.username}' and email = '${req.query.email}'`
            db.query(sql, (err, result)=>{
                if (err) throw err
                res.send('<h1>Your account has been verified! Please Login here </h1>')
            })
        }
}


// userLogin: (req, res) => {
//     db.query (`select * from users where username = '${req.query.username}'`,
//         (err,result) => {
//         if(err) throw err
//         if(result.length > 0){
//             if(req.query.password === result[0].password){
//                 res.send({
//                     status: '200',
//                     result: result [0]
//                 })
//             }else{
//                 res.send({
//                     status: '401',
//                     message: 'wrong password'
//                 })
//             }
//             } else {
//                 let data= {
//                     status: '404',
//                     message: 'User not found'
//             }
//             res.send(data)
//         }
//     })
// },
// register: (req, res) => {
//     let sql = `select * from users where username = '${req.query.username}'`
//     let sql2 = `insert into users value (0, '${req.query.username}','${req.query.password}','free','${req.body.email})`

//     db.query(sql, (err,result)=> {
//         if(result.length > 0){
//             res.send({
//                 status: '400',
//                 message: 'username has been taken'
//             })
//         }else {
//             db.query(sql2, (err2, result2)=> {
//                 if(err2) throw err2
//                 let mailOptions = {
//                     from: 'finalproject_dion',
//                     to: req.body.email,
//                     subject:'Verify your account',
//                     html: `<p> <a href="http://localhost:2000/auth/verify?username=${req.body.username}&email=${req.body.email}"> </a>Click here to verify your account </p>`
//                 }
//                 transporter.sendMail(mailOptions, (err,info) => {
//                     if(err3) throw err3
//                 })
//                 res.send({
//                     status: '201',
//                     message: 'Your account has been created, please check your emai to verify'
//                 })
//             })
//         }
//     })

// },
// // Nyobain verify sendiri
// verifyEmail: (req,res) => {
//     let sql = `update users set isVerified = 1 where username = '${req.query.username}' and email = '${req.query.email}'`
//     db.query(sql, (err, result)=>{
//         if (err) throw err

//         res.send('Your account has been verified')
//     })
// }
// }


// err,err2, err3 untuk membedakan agara tidak tebaca sama seperti err yang