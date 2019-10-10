import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import {connect} from  'react-redux'    

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Register from './components/Register'
import Login from './components/Login'
import TOEFL from './components/Courses/TOEFL'
import IELTS from './components/Courses/IELTS'
import GMAT from './components/Courses/GMAT'
import Membership from './components/Membership/Membership'

import AdminDashboard from './components/Admin Dashboard/dashboard'

// Action Creator
const keepLogin = (objUser) => {
    return { // Action
        type: 'LOGIN_SUCCESS',payload: {id: objUser.id, username: objUser.username}
    }
}
class App extends Component {
    state = {
        check: false
    }

    componentDidMount() {
        // check local storage
        let userStorage = JSON.parse(localStorage.getItem('userData'))
        if(userStorage){
            this.props.keepLogin(userStorage) // kirim ke redux
        }   this.setState({check: true})
    }

    render() {
        if(this.state.check){
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
        }else {
            return <div><h1 className='text-center'>Loading</h1></div>
        }
    }
}

export default connect(null,{keepLogin})(App)