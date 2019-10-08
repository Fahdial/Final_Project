import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import App from './App';
import reducers from './reducers/index'

// ReactDOM.render(<App/>, document.getElementById('root')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const STORE = createStore(reducers,composeEnhancers(applyMiddleware(thunk))
)
ReactDOM.render(<Provider store={STORE}><App/></Provider>, document.getElementById('root')
)
// line 4, import something dari react redux yaitu storenya
// render ayang menerima 2 inputan app dan element by id