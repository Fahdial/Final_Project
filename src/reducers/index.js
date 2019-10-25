import {combineReducers} from 'redux'

const initial = {
    username: '',
    email: ''
}

const AuthReducer = (state = initial, action) => {
    switch (action.type) {
        case 'KEEP_LOGIN':
            return {...state, username: action.payload.username, email: action.payload.email}
        case 'LOGIN_SUCCESS':
            return {...state, username: action.payload.username, email: action.payload.email}
        case 'LOGOUT_SUCCESS':
            return {...state, username: '', email: ''}
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

// Pertama kali app running, reducer akan menjalankan kode yang ada di 'default'
// pada default kita akan return 'state' yang berisi object 'init' sebagai data awal


// urutan di line 3 harus (state - action)
// state harus memiliki data awal
// Pertama kali running reducer apa yang ada didalam default, dan didalam default harus mereturn,
// makan akan mereturn stat yaitu init sebagai data awal
// untuk menciptakan lacinya kita menggunakan sebuah tools combineReducer
// agar bisa mengaksese dia kita harus mengexport dia line 28