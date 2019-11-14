import Get from '../services'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'
import API from '../services/'
const cookies = new Cookies()

const type = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    KEEP_LOGIN: 'KEEP_LOGIN',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHANGE_SUCCESS: 'CHANGE_SUCCESS'
}

export const onLoginUser = (email, password) => {
    return dispatch => {
        let params = {
            email,
            password
        }
        API.userLogin(params)
        .then(res => {
            console.log(res)
            let { status, message } = res
            if (status == 404) {
                Swal.fire({
                    type: 'error',
                    title: message
                })
            } else if (status == 401) {
                Swal.fire({
                    type: 'error',
                    title: message
                })
            } else if (status == 'unVerified') {
                Swal.fire({
                    type: 'error',
                    title: message
                })
            }else {
                let { username, GMAT, IELTS, TOEFL, id, role, isVerified} = res.result
                console.log(res);
                Swal.fire({
                    type: 'success',
                    title: 'Login Success!'
                })
                cookies.set('user', { username, email, GMAT, IELTS, TOEFL, id, role, isVerified }, { path: '/' })
                dispatch({
                    type: type.LOGIN_SUCCESS,
                    payload: {
                        username,
                        email, 
                        GMAT, 
                        IELTS, 
                        TOEFL, 
                        id, 
                        role, 
                        isVerified
                    }
                })
            }
        })
        
    }
}

export const keepLogin = (username, email, id, role, isVerified,GMAT,IELTS,TOEFL) => {
    return (
        {
            type: type.KEEP_LOGIN,
            payload: {
                username, 
                email, id, role, isVerified,GMAT,IELTS,TOEFL
            }
        }
    )
}

export const onLogoutUser = () => {
    return dispatch => {
        // console.log('masuk ga');
        cookies.remove('user')
        dispatch ({
            type: type.LOGOUT_SUCCESS
        })
    }
}

export const changeState = (userid) =>{
    console.log(userid);
    
    return dispatch => {
        API.getChangeState({userid})
        .then(res =>{
            console.log(res);
            let { username, email,  GMAT, IELTS, TOEFL, id, role, isVerified} = res   
            cookies.set('user', { username, email, GMAT, IELTS, TOEFL, id, role, isVerified }, { path: '/' })
            dispatch({
                type: type.LOGIN_SUCCESS,
                payload: {
                    username,
                    email, 
                    GMAT, 
                    IELTS, 
                    TOEFL, 
                    id, 
                    role, 
                    isVerified
                }
            })
        })
    }
}