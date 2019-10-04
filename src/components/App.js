import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import {connect} from  'react-redux'


import Header from './Header'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import TOEFL from './Courses/TOEFL'
import './stylenavbar.css'
import './stylecourses.css'

// Action Creator
const keepLogin = (objUser) => {
    
    // Action
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            id: objUser.id,
            username: objUser.username
        }
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
            // kirim ke redux
            this.props.keepLogin(userStorage)
        }

        this.setState({check: true})
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
                </BrowserRouter>
            )
        }else {
            return <div><h1 className='text-center'>Loading</h1></div>
        }
    }
}

export default connect(null,{keepLogin})(App)