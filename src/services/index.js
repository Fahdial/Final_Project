import Axios from "axios";

const RootPath = 'http://localhost:2000';

const Get = (path, params) => {
    const promise = new Promise((resolve, reject) => {
        Axios.get(`${RootPath}/${path}`,{
            params
        })
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

// GET
const userLogin = (input) => Get('auth/userlogin', input)
const getAboutLink = () => Get('auth/getaboutlink')

// POST
const userRegister = (data) => Post('auth/userRegister', data)

// API
const API = {
    userRegister,
    userLogin,
    getAboutLink
}

export default API;