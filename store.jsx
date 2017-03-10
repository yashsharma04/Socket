import {createStore , combineReducers,applyMiddleware} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { routerReducer } from 'react-router-redux'
import usernameReducer from './reducers/usernameReducer.jsx'
export default createStore(
    combineReducers({
        routing : routerReducer,
        usernameReducer  
    }),
    {},
    applyMiddleware(logger(),thunk,promise())
);