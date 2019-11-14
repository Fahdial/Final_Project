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
                }else{
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
            let sql2 = `insert into users value (0,
                '${req.body.username}',
                '${req.body.email}',
                '${req.body.password}',
                'user',0,'free','free','free')`
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
        },
        
    getAboutLink: (req,res) => {
            let sql = `select link from about`
            db.query(sql, (err, result)=>{
                try {
                    if (err) throw err
                    res.send(result[0])
                } catch (error) {
                    console.log(error)
                }
            })
        },

    getVideoData: (req, res) => {
        var sql = `select title, episode, link, description, material from lesson where subject_id = '${req.query.subject_id}'`
        console.log(req.query);
        // `select * from toefl_writing where id = '${req.params.id}'`
        db.query(sql, (err,result) => {
            try {
                if(err) throw err
                res.send(result)
                // console.log(result);
            } catch (err){
                console.log(err)
            }
        })
    },

    transactionUpload: (req,res) => {
        // console.log('msk g')
        // console.log(req.body)
        // console.log(req.body.data)
        // console.log(req.body);
        // console.log(req);
        let path = req.file.path.replace('uploads', 'paymentproof')
        let data = JSON.parse(req.body.data)
        const {email, phone, plan, type, totalprice, dateupload} = data
        var sql = `insert into payment values (0,
        '${email}',
        '${phone}',
        '${plan}',
        '${type}',
        '${totalprice}',
        'pending',
        '${req.file.filename}',
        '${dateupload}')`
        db.query(sql, (err,result) => {
            try {
                if(err) throw err
                res.send(result)
                // console.log(result);
            } catch (err){
                console.log(err)
            }
        })
    },

    pendingAccount:(req,res)=>{
        // console.log(req.data);
        // let data = JSON.parse(req.body.data)
        // console.log(data);
        var sql = `UPDATE users SET ${req.body.plan} = 'pending' WHERE email = '${req.body.email}'`
        console.log(sql);
        db.query(sql,(err,result)=>{
            try {
                if(err) throw err
                res.send(result)
                console.log(result);
            }catch (err){
                console.log(err)
            }
        }) 
    },

    getPendingUser: (req,res) => {
        var sql = `select * from payment where status = 'pending'`
        db.query(sql, (err, result)=>{
            try {
                if (err) throw err
                res.send(result[0])
            } catch (error) {
                console.log(error)
            }
        })
    },

    getChangeState: (req,res)=>{
        var sql =`select * from users where id = ${req.query.userid}`
        console.log(req.query);
        
        db.query(sql, (err, result)=>{
            try {
                if (err) throw err
                res.send(result[0])
            } catch (error) {
                console.log(error)
            }
        })
    }
    

}