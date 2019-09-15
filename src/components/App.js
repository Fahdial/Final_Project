import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import {Route, BrowserRouter} from 'react-router-dom'
import './stylenavbar.css'


class App extends Component {

render() {
    return (
        <div>
            <BrowserRouter>
                <Header/> 
                <Route path='/' exact component={Home}/>
            </BrowserRouter>
        </div>
    )
}
}

export default App