const router = require('express').Router()
var multer = require('multer')
// const {userController} = require('../1.controller')

let multerStorageConfig = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './uploads')
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

const {userLogin, userRegister, verify, getAboutLink, getVideoData} = require ('../1.controller').userController

let upload = multer({
    storage: multerStorageConfig,
    fileFilter: filterConfig
})


router.get('/userlogin', userLogin)
router.post('/userRegister', userRegister)
router.get('/verify', verify)
router.get('/getaboutlink', getAboutLink)
router.get('/video', getVideoData)

module.exports = router