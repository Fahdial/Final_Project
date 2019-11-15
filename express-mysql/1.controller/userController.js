const db = require('../database')
const nodemailer = require('nodemailer')
const moment = require('moment')
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
                            db.query(`update users set lastlogin = '${moment().format('YYYY-MM-DD HH:mm:ss')}' where email = '${req.query.email}'`,
                            (err,result3)=>{
                                res.send({
                                    status: '200',
                                    result: result [0]
                                })
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
                'user',0,'free','free','free',null)`
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
                res.send(result)
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
    },

    premium: (req,res) => {
        console.log(req.body.id);
        var sql = `select * from users where email = '${req.body.email}'`
        var sql2 = `update payment set status = 'approve' where id = ${req.body.id}`
        db.query(sql, (err, result)=>{
            try {
                if (err) throw err
            db.query(`insert into plandate values (0, ${result[0].id}, '${req.body.plan}', '${req.body.datestart}','${req.body.dateend}')`, 
            (err2, result2)=> {
                if (err2) throw err2
                db.query(sql2, (err,result)=> {
                    if (err) throw err
                    db.query(`update users set ${req.body.plan} = 'premium' where email = '${req.body.email}'`,
                    (err3, result3)=> {
                        if (err3) throw err3
                        res.send('success')

                    })
                })
            })
            } catch (error) {
                console.log(error)
            }
        })
    },

    reject: (req,res) => {
        var sql = `update payment set status = 'reject' where id= ${req.body.id}`
        var sql2 = `update users set ${req.body.plan} = 'free' where email= '${req.body.email}'`
        db.query(sql, (err, result)=>{
            try {
                if (err) throw err
            db.query(sql2, (err,result)=> {
                if (err) throw err
                res.send ('success')
            })
            } catch (error) {
                console.log(error)
            }
        })
    },

    getToeflData: (req,res)=>{
        var sql =`select * from lesson where subject_id in (select id from subject where subject_id = 1)`
        console.log(req.query);
        db.query(sql, (err, result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (error) {
                console.log(error)
            }
        })
    },
    getIeltsData: (req,res)=>{
        var sql =`select * from lesson where subject_id in (select id from subject where subject_id = 2)`
        console.log(req.query);
        db.query(sql, (err, result)=>{
            try {
                if (err) throw err
                console.log(result)
                res.send(result)
            } catch (error) {
                console.log(error)
            }
        })
    },
    getGmatData: (req,res)=>{
        var sql =`select * from lesson where subject_id in (select id from subject where subject_id = 3)`
        console.log(req.query);
        db.query(sql, (err, result)=>{
            try {
                if (err) throw err
                console.log(result)
                res.send(result)
            } catch (error) {
                console.log(error)
            }
        })
    },

    addLesson: (req,res) => {
    let sql = `insert into lesson values (0,
        '${req.body.subject_id}',
        '${req.body.title}',
        '${req.body.episode}',
        '${req.body.link}',
        '${req.body.description}',0,
        '${req.body.pdf}','${moment().format('YYYY-MM-DD HH:mm:ss')}')`
        db.query(sql, (err,result)=> {
            if (err) throw err
            res.send({
                message: 'berhasil add video baru'
            }) 
        })
    },

    editLesson: (req,res) => {
            let sql = `update lesson set 
                subject_id = '${req.body.subject_id}',
                title= '${req.body.title}',
                episode= '${req.body.episode}',
                link= '${req.body.link}',
                description='${req.body.description}',
                material='${req.body.material}',
                dateupload='${moment().format('YYYY-MM-DD HH:mm:ss')}'
                where id =${req.body.id}`
                db.query(sql, (err,result)=> {
                    if (err) throw err
                    res.send({
                        message: 'edit berhasil'
                    }) 
                })
            },

    deleteLesson: (req,res) => {

            let sql = `DELETE from lesson where id = ${req.body.id}`
                // console.log(req.body);
                // console.log(req.data);
                // console.log(req.query);
                db.query(sql, (err,result)=> {
                    if (err) throw err
                    res.send({
                        message: 'berhasil delete video'
                    }) 
                })
                
            },

    getUsersTransaction: (req,res) => {
        var sql = `select u.id, username, u.email, TOEFL, IELTS, GMAT,
        max(dateupload) LastTransaction
        , count(p.email) jumlahTransaksi from users u join payment p on p.email = u.email group by u.id`

        db.query(sql, (err, result)=>{
            try {
                if (err) throw err
                res.send(result)
            } catch (error) {
                console.log(error)
            }
        })
    },
}