import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Header from "./Header/Header"
// import Swal from 'sweetalert2'
import {onLoginUser} from '../actions/userAction'
import { Route, Link } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const user = useSelector( state => state.auth )

    const [ data, setData ] = useState({
        email: '',
        password: ''
    })

    const onLoginClick = () => {
        dispatch(onLoginUser(data.email, data.password))
        // setShouldRender(true)
    }

    return (
        <Fragment>
            <Header/>
            <div>
                {
                    // (user.username === ''? ini agat lebih sepesifik dan tidak bisa masuk ke login lagi kalau ada username )
                    user.username === '' ?
                    <div className='col-sm-4 mx-auto card mt-70'>
                    <div className='card-body'>

                        <div className="card-title border-bottom border-secondary">
                            <h1>Sign in</h1>
                        </div>
                        
                        <form className='form-group' onSubmit={onLoginClick}>
                            <div className="card-title ">
                                <h4>Email</h4>
                            </div>
                            <input 
                                className="form-control"
                                id="email"
                                value={data.email}
                                onChange={e => {setData({...data, email: e.target.value})}}
                                type="text"
                                autoFocus
                                required
                            />
                            <div className="card-title mt-3">
                                <h4>Password</h4>
                            </div>
                            
                            <input 
                            className="form-control"
                            id="password"
                            value={data.password}
                            onChange={e => {setData({...data, password: e.target.value})}}
                            type="password"
                            required/>
                        </form>

                        <button 
                            className="searchcolor1"
                            onClick={onLoginClick}
                        >Sign in</button>
                        <p className="text-center mt-3">Belum memiliki akun?<Link to="/register"> Daftar Sekarang</Link></p>
                    </div>
                </div>
                :
                <Redirect to='/'/>
                }
            </div>
            </Fragment>
    )
}

export default Login