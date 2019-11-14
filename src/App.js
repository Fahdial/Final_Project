import React, { useState, useEffect } from 'react'
import {Route, BrowserRouter, Link, Switch, withRouter} from 'react-router-dom'
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
import TOEFLWritingLessons from './components/Courses/TOEFL/TOEFLWritingLessons'
import TOEFLReading from './components/Courses/TOEFL/TOEFLReading'
import TOEFLSpeaking from './components/Courses/TOEFL/TOEFLSpeaking'
import TOEFLListening from './components/Courses/TOEFL/TOEFLListening'
import IELTS from './components/Courses/IELTS/IELTS'
import GMAT from './components/Courses/GMAT/GMAT'
import Membership from './components/Membership/Membership'
import Dashboard from './components/Admin Dashboard/Dashboard'
import UsersData from './components/Admin Dashboard/UsersData'
import Content from './components/Admin Dashboard/Content'
import Approval from './components/Admin Dashboard/Approval'
import Income from './components/Admin Dashboard/Income'
import ToeflDash from './components/Admin Dashboard/ToeflDash'
import IeltsDash from './components/Admin Dashboard/IeltsDash'
import GmatDash from './components/Admin Dashboard/GmatDash'
import Payment from './components/Membership/Payment'

// Action Creator
// cookies ini harus dipaling bawah semua import, diatas const app
const cookies = new Cookies()

const App = () => {
    
    // dibuat loading sebagai checker
    const [loading,setLoading]=useState(false)

    const dispatch = useDispatch()
   
    // use efect selalu bikin anonimus function karena menerima cb function
    useEffect (() => {
        let cookie = cookies.get('user')
        if (cookie){
            dispatch(keepLogin(cookie.username, cookie.email, cookie.id, cookie.role, cookie.isVerified, cookie.GMAT, cookie.IELTS, cookie.TOEFL ))
        }
        setLoading(true)
    },[])
        
        // disini loading udh jadi true
        if(loading){
            return (
                
                    <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/register' component={Register}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/toefl' exact component={TOEFL}/>
                            <Route path='/toefl/toeflsyllabus' exact component={TOEFLSyllabus}/>
                            <Route path='/toefl/toefl_writing' exact component={TOEFLWriting}/>
                            <Route path='/toefl/toefl_writing/:id' exact component={TOEFLWritingLessons}/>
                            <Route path='/toefl/toeflreading' component={TOEFLReading}/>
                            <Route path='/toefl/toeflspeaking' component={TOEFLSpeaking}/>
                            <Route path='/toefl/toefllistening' component={TOEFLListening}/>
                            <Route path='/ielts' component={IELTS}/>
                            <Route path='/gmat' component={GMAT}/>
                            <Route path='/membership' component={Membership}/>
                            <Route path='/dashboard' component={Dashboard} exact />
                            {/* <Route path='/dashboard/content' component={Content} exact /> */}
                            <Route path='/dashboard/toefldash' component={ToeflDash} exact />
                            <Route path='/dashboard/ieltsdash' component={IeltsDash} exact />
                            <Route path='/dashboard/gmatdash' component={GmatDash} exact />
                            <Route path='/dashboard/allusers' component={UsersData} exact />
                            <Route path='/dashboard/approval' component={Approval} exact />
                            <Route path='/dashboard/income' component={Income} exact />
                            <Route path='/payment' component={Payment} exact />
                    </Switch>        
                
            )
        // kalo false dia jadi 
        }else {
            return(
                null
            )
        }   
        }

export default withRouter(App)