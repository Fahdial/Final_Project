import Axios from "axios";

const RootPath = 'http://localhost:2000';

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        Axios.get(`${RootPath}/${path}`)
        .then((result) =>{
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
}

const getDataUsers = Get('user')

const API = {
    getDataUsers,
}

export default API;

