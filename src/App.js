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
import TOEFL from './components/Courses/TOEFL/TOEFL'
import TOEFLSyllabus from './components/Courses/TOEFL/TOEFLSyllabus'
import TOEFLWriting from './components/Courses/TOEFL/TOEFLWriting'
import TOEFLReading from './components/Courses/TOEFL/TOEFLReading'
import TOEFLSpeaking from './components/Courses/TOEFL/TOEFLSpeaking'
import TOEFLListening from './components/Courses/TOEFL/TOEFLListening'
import IELTS from './components/Courses/IELTS/IELTS'
import GMAT from './components/Courses/GMAT/GMAT'
import Membership from './components/Membership/Membership'
import dashboard from './components/Admin Dashboard/dashboard'

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
                    <Route path='/toefl' exact component={TOEFL}/>
                    <Route path='/toefl/toeflsyllabus' component={TOEFLSyllabus}/>
                    <Route path='/toefl/toeflwriting' component={TOEFLWriting}/>
                    <Route path='/toefl/toeflreading' component={TOEFLReading}/>
                    <Route path='/toefl/toeflspeaking' component={TOEFLSpeaking}/>
                    <Route path='/toefl/toefllistening' component={TOEFLListening}/>
                    <Route path='/ielts' component={IELTS}/>
                    <Route path='/gmat' component={GMAT}/>
                    <Route path='/membership' component={Membership}/>
                    <Route path='/dashboard' component={dashboard} exact />
                </BrowserRouter>
            )
        }
    


export default App