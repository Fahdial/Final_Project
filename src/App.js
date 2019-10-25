import React, { useState, useEffect } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'


import Home from './components/Home/Home'
import Header from './components/Header/Header'
import {keepLogin} from './actions/userAction'

import Register from './components/Register'
import Login from './components/Login'
import TOEFL from './components/Courses/TOEFL'
import IELTS from './components/Courses/IELTS'
import GMAT from './components/Courses/GMAT'
import Membership from './components/Membership/Membership'

import AdminDashboard from './components/Admin Dashboard/dashboard'

// Action Creator
// cookies ini harus dipaling bawah semua import, diatas const app
const cookies = new Cookies()

const App = () => {
    
    const dispatch = useDispatch()
   
    // use efect selalu bikin anonimus function seperti dibawah
    useEffect (() => {
        let cookie = cookies.get('user')
        if (cookie){
            dispatch(keepLogin(cookie.username, cookie.email))
        }
    },[])
    
        return (
                <BrowserRouter>
                    <Header/> 
                    <Route path='/' exact component={Home}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/toefl' component={TOEFL}/>
                    <Route path='/ielts' component={IELTS}/>
                    <Route path='/gmat' component={GMAT}/>
                    <Route path='/membership' component={Membership}/>
                </BrowserRouter>
            )
        }
    


export default App