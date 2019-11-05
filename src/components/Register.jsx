import React, {Fragment, useState} from 'react'
import { Route, Link } from 'react-router-dom'
import Header from "./Header/Header"
import API from '../services'
import Swal from 'sweetalert2'


const Register = () => {

    const [ state, setState ] = useState({
        username: '',
        email: '',
        password: '',
        // repPassword: ''
    })

    const [ state2, setState2 ] = useState({
        loading: false,
        error: '',
        success: '',
        notification: ''
    })

    const onRegisterClick = () => {
        setState2({...state2, loading: true})
        const {username, email, password} = state
        const data = {
            username: username,
            email: email,
            password: password,
            // repPassword: repPassword
        }
        if (username && email && password) {
            API.userRegister(data)
            .then(res => {
                const {status, message} = res.data
                if (status == 404) {
                    Swal.fire({
                        type: 'error',
                        title: message
                    })
                } else {
                    Swal.fire({
                        type: 'success',
                        title: message,
                    })
                }
                setTimeout(() => {
                    setState2({...state2, loading: false })
                }, 100);
            })
        } else {
            setTimeout(() => {
                setState2({...state2, loading: false, error: 'Please fill out the form first'})  
            }, 100);
            setTimeout(() => {
                setState2({...state2, error: ''})
            }, 5000);
        }   
    }
       const loadingButton = () => {
        if(state2.loading){
            return (
                <div className= 'text-center'>
                <div className='spinner-grow' role='status'>
                    <span className='sr-only'></span>
                </div>
                </div>
            )}
            return (
                <button 
                className='searchcolor1'
                onClick={onRegisterClick}>Sign up</button>
            )}

        const notification = () => {
                if(state2.error){
                    // notif error, danger
                    return (
                        <div className='alert alert-danger mt-4 text-center'>
                            {state2.error}
                        </div>
                    )
                    } else {
                        return null
                    }
            }

    return (

        <Fragment>
            <Header/>
                <div>
                <div className='col-sm-4 mx-auto card mt-70'>
                    <div className='card-body'>

                        <div className="card-title border-bottom border-secondary">
                            <h1>Sign up</h1>
                        </div>
                        
                        <form className='form-group'>
                            <div className="card-title ">
                                <h4>Username</h4>
                            </div>
                            <input value= {state.username} onChange ={ e => setState({...state, username: e.target.value})} type='text' className='form-control'/>

                            <div className="card-title mt-3 ">
                                <h4>Email</h4>
                            </div>
                            <input  value= {state.email} onChange ={ e => setState({...state, email: e.target.value})} type='text' className='form-control'/>

                            <div className="card-title mt-3">
                                <h4>Password</h4>
                            </div>
                            <input value= {state.password} onChange ={ e => setState({...state, password: e.target.value})} type='password' className='form-control'/>

                            {/* <div className="card-title mt-3">
                                <h4>Repeat Password</h4>
                            </div>
                            <input value= {state.repPassword} onChange ={ e => setState({...state, repPassword: e.target.value})} type='password' className='form-control'/> */}
                        </form>
                            {loadingButton()}
                            {notification()}
                        <p className="text-center mt-3">Sudah memiliki akun?<Link to="/login"> Masuk Sekarang</Link></p>
                        
                    </div>
                </div>
            </div>
    </Fragment>
    )
}

export default Register
