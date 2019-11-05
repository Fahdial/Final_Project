import {combineReducers} from 'redux'

const initial = {
    username: '',
    email: '',
    cookie: false
}

const AuthReducer = (state = initial, action) => {
    switch (action.type) {
        case 'KEEP_LOGIN':
            return {...state, username: action.payload.username, email: action.payload.email, cookie: true}
        case 'LOGIN_SUCCESS':
            return {...state, username: action.payload.username, email: action.payload.email, cookie: true}
        case 'LOGOUT_SUCCESS':
            return {...state, username: '', email: '', cookie: true}
        default:
            return state
    }
}


const reducers = combineReducers(
    {
        auth: AuthReducer
    }
)

export default reducers