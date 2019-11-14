import Axios from "axios";

const RootPath = 'http://localhost:2000';

const Get = (path, params) => {
    const promise = new Promise((resolve, reject) => {
        Axios.get(`${RootPath}/${path}`, {params})
        .then((result) =>{
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise
}

const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.post(`${RootPath}/${path}`, data)
        .then(result => {
            resolve(result)
        }, err => {
            reject(err)
        })
    })
    return promise
}
const Patch = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.patch(`${RootPath}/${path}`, data)
        .then(result => {
            resolve(result)
        }, err => {
            reject(err)
        })
    })
    return promise
}
const Delete = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        Axios.delete(`${RootPath}/${path}`, {
            data
        })
        .then(result => {
            resolve(result)
        }, err => {
            reject(err)
        })
    })
    return promise
}

// GET
const userLogin = (input) => Get('auth/userlogin', input)
const getAboutLink = () => Get('auth/getaboutlink')
const getVideoData = (input) => Get('auth/video', input)
const getPendingUser = (input) => Get('auth/payment/pendinguser', input)
const getChangeState = (input) => Get('auth/payment/changestate', input)
const getToeflData = (input) => Get('auth/dashboard/toefldata', input)
const getIeltsData = (input) => Get('auth/dashboard/ieltsdata', input)
const getGmatData = (input) => Get('auth/dashboard/gmatdata', input)
const getUsersTransaction = (input) => Get('auth/dashboard/getuserstransaction', input)

// POST
const userRegister = (data) => Post('auth/userRegister', data)
const transactionUpload = (data) => Post('auth/payment/paymentupload', data)
const addlesson = (data) => Post('auth/dashboard/addlesson', data)

// PATCH
const pendingAccount = (data) => Patch('auth/payment/pendingaccount', data)
const premium = (data) => Patch('auth/dashboard/approval/premium', data)
const reject = (data) => Patch('auth/dashboard/approval/reject', data)
const editlesson = (data) => Patch('auth/dashboard/editlesson', data)

//DELETE
const deleteLesson = (data) => Delete('auth/dashboard/deletelesson',data)

// API
const API = {
    userRegister,
    userLogin,
    getAboutLink,
    getVideoData,
    transactionUpload,
    pendingAccount,
    getPendingUser,
    RootPath,
    getChangeState,
    premium,
    reject,
    getToeflData,
    getIeltsData,
    getGmatData,
    addlesson,
    editlesson,
    deleteLesson,
    getUsersTransaction
}

export default API;