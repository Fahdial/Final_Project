import {combineReducers} from 'redux'

const initial = {
    id:"", 
    username: '',
    email: '',
    role:'',
    isVerified:"",
    cookie: false, 
    GMAT: "", 
    IELTS:"", 
    TOEFL:"",   
  
}

const AuthReducer = (state = initial, action) => {
    switch (action.type) {
        case 'KEEP_LOGIN':
            return {...state, 
                id:action.payload.id,
                username: action.payload.username,
                email: action.payload.email, 
                cookie: true,
                role:action.payload.role,
                isVerified: action.payload.isVerified,
                GMAT:action.payload.GMAT,
                IELTS:action.payload.IELTS,
                TOEFL:action.payload.TOEFL,   
            }
        case 'LOGIN_SUCCESS':
            return {...state, 
                id:action.payload.id,
                username: action.payload.username,
                email: action.payload.email, 
                cookie: true,
                role:action.payload.role,
                isVerified: action.payload.isVerified,
                GMAT:action.payload.GMAT,
                IELTS:action.payload.IELTS,
                TOEFL:action.payload.TOEFL,   
            }
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