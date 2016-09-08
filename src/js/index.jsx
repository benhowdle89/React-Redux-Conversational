import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux'
import reducers from './reducers'

import App from './containers/app.jsx'

const loggerMiddleware = createLogger()

const reducer = combineReducers(reducers)
const createStoreWithMiddleware = applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
)(createStore)
const store = createStoreWithMiddleware(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
