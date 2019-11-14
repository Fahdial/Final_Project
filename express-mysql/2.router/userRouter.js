const router = require('express').Router()
var multer = require('multer')
// const {userController} = require('../1.controller')


// UPLOAD PROOF PAYMENT
let multerStorageConfig = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './uploads/paymentproof')
    },

    filename : (req, file, cb) => {
        cb(null, `PRD-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})

let filterConfig = (req, file, cb) => {
    if(file.mimetype.split('/')[1] == 'png' || file.mimetype.split('/')[1] == 'jpeg'){
        cb(null, true)
    }else{
        req.validation = {error : true, msg : 'File must be an image'}
        cb(null, false)
    }
}

let upload = multer({
    storage: multerStorageConfig,
    fileFilter: filterConfig
})

// UPLOAD MATERIAL

let multerStorageConfig1 = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './uploads/paymentproof')
    },

    filename : (req, file, cb) => {
        cb(null, `PRD-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})

let filterConfig1 = (req, file, cb) => {
    if(file.mimetype.split('/')[1] == 'png' || file.mimetype.split('/')[1] == 'jpeg'){
        cb(null, true)
    }else{
        req.validation = {error : true, msg : 'File must be an image'}
        cb(null, false)
    }
}

let upload1 = multer({
    storage: multerStorageConfig1,
    fileFilter: filterConfig1
})





// GET
const {userLogin, userRegister, verify, getAboutLink, getVideoData, transactionUpload, getPendingUser, pendingAccount, getChangeState} = require ('../1.controller').userController

router.get('/userlogin', userLogin)
router.post('/userRegister', userRegister)
router.get('/verify', verify)
router.get('/getaboutlink', getAboutLink)
router.get('/video', getVideoData)
router.get('/payment/pendinguser', getPendingUser)
router.get('/payment/changestate', getChangeState)

// POST
router.post('/payment/paymentupload', upload.single('img'), transactionUpload)

// PATCH
router.patch('/payment/pendingaccount', pendingAccount)

module.exports = router