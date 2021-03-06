import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers.js'
import './mock'
const store = createStore(rootReducer, applyMiddleware(reduxThunk))

import App from './app'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementsByTagName('BODY')[0],
)