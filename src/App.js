import React, { useState, useEffect } from 'react'
import {Route, BrowserRouter, Link, Switch, withRouter} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import moment from 'moment'
import Swal from 'sweetalert2'


import Home from './components/Home/Home'
import Header from './components/Header/Header'
import {keepLogin} from './actions/userAction'

import Register from './components/Register'
import Login from './components/Login'

import TOEFL from './components/Courses/TOEFL/TOEFL'

import TOEFLWriting from './components/Courses/TOEFL/TOEFLWriting'
import TOEFLWritingLessons from './components/Courses/TOEFL/TOEFLWritingLessons'

import TOEFLReading from './components/Courses/TOEFL/TOEFLReading'
import TOEFLReadingLessons from './components/Courses/TOEFL/TOEFLReadingLessons'

import TOEFLSpeaking from './components/Courses/TOEFL/TOEFLSpeaking'
import TOEFLSpeakingLessons from './components/Courses/TOEFL/TOEFLSpeakingLessons'

import TOEFLListening from './components/Courses/TOEFL/TOEFLListening'
import TOEFLListeningLessons from './components/Courses/TOEFL/TOEFLListeningLessons'

import IELTS from './components/Courses/IELTS/IELTS'

import IELTSWriting from './components/Courses/IELTS/IELTSWriting'
import IELTSWritingLessons from './components/Courses/IELTS/IELTSWritingLessons'

import IELTSReading from './components/Courses/IELTS/IELTSReading'
import IELTSReadingLessons from './components/Courses/IELTS/IELTSReadingLessons'

import IELTSSpeaking from './components/Courses/IELTS/IELTSSpeaking'
import IELTSSpeakingLessons from './components/Courses/IELTS/IELTSSpeakingLessons'

import IELTSListening from './components/Courses/IELTS/IELTSListening'
import IELTSListeningLessons from './components/Courses/IELTS/IELTSListeningLessons'

import GMAT from './components/Courses/GMAT/GMAT'

import GMATWriting from './components/Courses/GMAT/GMATWriting'
import GMATWritingLessons from './components/Courses/GMAT/GMATWritingLessons'

import Membership from './components/Membership/Membership'
import Dashboard from './components/Admin Dashboard/Dashboard'
import UsersData from './components/Admin Dashboard/UsersData'
// import Content from './components/Admin Dashboard/Content'
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

    const user = useSelector(state => state.auth)
   
    // use efect selalu bikin anonimus function karena menerima cb function
    useEffect (() => {
        let cookie = cookies.get('user')
        if (cookie){
            dispatch(keepLogin(cookie.username, cookie.email, cookie.id, cookie.role, cookie.isVerified, cookie.GMAT, cookie.IELTS, cookie.TOEFL ))
        }
        setLoading(true)
    },[])
    
        // disini loading udh jadi true
        if(loading) {
            if (user.role === 'user') {
                if (user.TOEFL == 'premium' && user.GMAT == 'premium' && user.IELTS == 'premium') {
                    return (
                            <Switch>
                                    <Route path='/' exact component={Home}/>
                                    <Route path='/register' component={Register}/>
                                    <Route path='/login' component={Login}/>
                                    <Route path='/toefl' exact component={TOEFL}/>
                                    
                                    <Route path='/toefl/toefl_writing' exact component={TOEFLWriting}/>
                                    <Route path='/toefl/toefl_writing/:id' exact component={TOEFLWritingLessons}/>

                                    <Route path='/toefl/toefl_reading' exact component={TOEFLReading}/>
                                    <Route path='/toefl/toefl_reading/:id' exact component={TOEFLReadingLessons}/>

                                    <Route path='/toefl/toefl_speaking' exact component={TOEFLSpeaking}/>
                                    <Route path='/toefl/toefl_speaking/:id' exact component={TOEFLSpeakingLessons}/>

                                    <Route path='/toefl/toefl_listening' exact component={TOEFLListening}/>
                                    <Route path='/toefl/toefl_listening/:id' exact component={TOEFLListeningLessons}/>

                                    <Route path='/ielts' exact component={IELTS}/>

                                    <Route path='/ielts/ielts_writing' exact component={IELTSWriting}/>
                                    <Route path='/ielts/ielts_writing/:id' exact component={IELTSWritingLessons}/>

                                    <Route path='/ielts/ielts_reading' exact component={IELTSReading}/>
                                    <Route path='/ielts/ielts_reading/:id' exact component={IELTSReadingLessons}/>

                                    <Route path='/toefl/toefl_speaking' exact component={TOEFLSpeaking}/>
                                    <Route path='/toefl/toefl_speaking/:id' exact component={TOEFLSpeakingLessons}/>

                                    <Route path='/toefl/toefl_listening' exact component={TOEFLListening}/>
                                    <Route path='/toefl/toefl_listening/:id' exact component={TOEFLListeningLessons}/>

                                    <Route path='/gmat' exact component={GMAT}/>
                                    
                                    <Route path='/membership' component={Membership}/>
                                    <Route path='/payment' component={Payment} exact />
                            </Switch>
                    )
                } 
                else if(user.TOEFL == 'premium' ) {
                    return (
                        <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/register' component={Register}/>
                                <Route path='/login' component={Login}/>
                                
                                <Route path='/toefl' exact component={TOEFL}/>

                                    <Route path='/toefl/toefl_writing' exact component={TOEFLWriting}/>
                                    <Route path='/toefl/toefl_writing/:id' exact component={TOEFLWritingLessons}/>

                                    <Route path='/toefl/toefl_reading' exact component={TOEFLReading}/>
                                    <Route path='/toefl/toefl_reading/:id' exact component={TOEFLReadingLessons}/>
                                    
                                    <Route path='/toefl/toefl_speaking' exact component={TOEFLSpeaking}/>
                                    <Route path='/toefl/toefl_speaking/:id' exact component={TOEFLSpeakingLessons}/>

                                    <Route path='/toefl/toefl_listening' exact component={TOEFLListening}/>
                                    <Route path='/toefl/toefl_listening/:id' exact component={TOEFLListeningLessons}/>

                                <Route path='/ielts' exact component={IELTS}/>
                                    
                                    <Route path='/ielts/ielts_writing' exact component={IELTSWriting}/>
                                    <Route path='/ielts/ielts_reading' exact component={IELTSReading}/>
                                    <Route path='/ielts/ielts_speaking' exact component={IELTSSpeaking}/>
                                    <Route path='/ielts/ielts_listening' exact component={IELTSListening}/>

                                <Route path='/membership' component={Membership}/>
                                <Route path='/payment' component={Payment} exact />
                        </Switch>
                    )
                } 
                else if(user.TOEFL == 'pending' ) {
                    return (
                        <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/register' component={Register}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/toefl' exact component={TOEFL}/>
                                <Route path='/toefl/toefl_writing' exact component={TOEFLWriting}/>
                                <Route path='/toefl/toefl_reading' exact component={TOEFLReading}/>
                                <Route path='/toefl/toefl_speaking' exact component={TOEFLSpeaking}/>
                                <Route path='/toefl/toefl_listening' exact component={TOEFLListening}/>
                                <Route path='/membership' component={Membership}/>
                                <Route path='/payment' component={Payment} exact />
                        </Switch>
                    )
                } 
                else if(user.GMAT == 'premium' ) {
                    return (
                        <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/register' component={Register}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/gmat' component={GMAT}/>
                                <Route path='/membership' component={Membership}/>
                                <Route path='/payment' component={Payment} exact />
                                <Route path='/toefl' exact component={TOEFL}/>
                                <Route path='/toefl/toefl_writing' exact component={TOEFLWriting}/>
                                <Route path='/toefl/toefl_reading' exact component={TOEFLReading}/>
                                <Route path='/toefl/toefl_speaking' exact component={TOEFLSpeaking}/>
                                <Route path='/toefl/toefl_listening' exact component={TOEFLListening}/>
                        </Switch>
                    )
                } else if(user.IELTS == 'premium' ) {
                    return (
                        <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/register' component={Register}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/ielts' exact component={IELTS}/>
                                <Route path='/membership' component={Membership}/>
                                <Route path='/payment' component={Payment} exact />
                                <Route path='/toefl' exact component={TOEFL}/>
                                <Route path='/toefl/toefl_writing' exact component={TOEFLWriting}/>
                                <Route path='/toefl/toefl_reading' exact component={TOEFLReading}/>
                                <Route path='/toefl/toefl_speaking' exact component={TOEFLSpeaking}/>
                                <Route path='/toefl/toefl_listening' exact component={TOEFLListening}/>
                        </Switch>
                    )
                } 
                else {
                    return (
                        <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/register' component={Register}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/membership' component={Membership}/>
                                <Route path='/payment' component={Payment} exact />
                                <Route path='/toefl' exact component={TOEFL}/>
                                <Route path='/toefl/toefl_writing' exact component={TOEFLWriting}/>
                                <Route path='/toefl/toefl_reading' exact component={TOEFLReading}/>
                                <Route path='/toefl/toefl_speaking' exact component={TOEFLSpeaking}/>
                                <Route path='/toefl/toefl_listening' exact component={TOEFLListening}/>
                        </Switch>
                    )
                }
            } else if (user.role == 'admin') {
                return (
                    <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/register' component={Register}/>
                            <Route path='/login' component={Login}/>

                            <Route path='/toefl' exact component={TOEFL}/>

                            <Route path='/toefl/toefl_writing' exact component={TOEFLWriting}/>
                            <Route path='/toefl/toefl_writing/:id' exact component={TOEFLWritingLessons}/>
                            <Route path='/toefl/toefl_reading' exact component={TOEFLReading}/>
                            <Route path='/toefl/toefl_reading/:id' exact component={TOEFLReadingLessons}/>
                            <Route path='/toefl/toefl_speaking' exact component={TOEFLSpeaking}/>
                            <Route path='/toefl/toefl_speaking/:id' exact component={TOEFLSpeakingLessons}/>
                            <Route path='/toefl/toefl_listening' exact component={TOEFLListening}/>
                            <Route path='/toefl/toefl_listening/:id' exact component={TOEFLListeningLessons}/>

                            <Route path='/ielts' exact component={IELTS}/>

                            <Route path='/ielts/ielts_writing' exact component={IELTSWriting}/>
                            <Route path='/ielts/ielts_writing/:id' exact component={IELTSWritingLessons}/>
                            <Route path='/ielts/ielts_reading' exact component={IELTSReading}/>
                            <Route path='/ielts/ielts_reading/:id' exact component={IELTSReadingLessons}/>
                            <Route path='/ielts/ielts_speaking' exact component={IELTSSpeaking}/>
                            <Route path='/ielts/ielts_speaking/:id' exact component={IELTSSpeakingLessons}/>
                            <Route path='/ielts/ielts_listening' exact component={IELTSListening}/>
                            <Route path='/ielts/ielts_listening/:id' exact component={IELTSListeningLessons}/>

                            <Route path='/gmat' exact component={GMAT}/>
                            <Route path='/gmat/gmat_writing' exact component={GMATWriting}/>
                            <Route path='/gmat/gmat_writing/:id' exact component={GMATWritingLessons}/>


                            <Route path='/membership' component={Membership}/>
                            <Route path='/dashboard' component={Dashboard} exact />
                            <Route path='/dashboard/toefldash' component={ToeflDash} exact />
                            <Route path='/dashboard/ieltsdash' component={IeltsDash} exact />
                            <Route path='/dashboard/gmatdash' component={GmatDash} exact />
                            <Route path='/dashboard/allusers' component={UsersData} exact />
                            <Route path='/dashboard/approval' component={Approval} exact />
                            <Route path='/dashboard/income' component={Income} exact />
                            <Route path='/payment' component={Payment} exact />
                    </Switch>
                )
            } else {
                return (
                    <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/register' component={Register}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/membership' component={Membership}/>
                            <Route path='/payment' component={Payment} exact />
                            <Route path='/toefl' exact component={TOEFL}/>
                            <Route path='/ielts' exact component={TOEFL}/>
                            <Route path='/gmat' exact component={TOEFL}/>
                                <Route path='/toefl/toefl_writing' exact component={TOEFLWriting}/>
                                <Route path='/toefl/toefl_reading' exact component={TOEFLReading}/>
                                <Route path='/toefl/toefl_speaking' exact component={TOEFLSpeaking}/>
                                <Route path='/toefl/toefl_listening' exact component={TOEFLListening}/>
                                
                                <Route path='/ielts/ielts_writing' exact component={IELTSWriting}/>
                                <Route path='/ielts/ielts_reading' exact component={IELTSReading}/>
                                <Route path='/ielts/ielts_speaking' exact component={IELTSSpeaking}/>
                                <Route path='/ielts/ielts_listening' exact component={IELTSListening}/>
                    </Switch>
                )
            }
        // kalo false dia jadi 
        }else {
            return(
                null
            )
        }   
        }

export default withRouter(App)