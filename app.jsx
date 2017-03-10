import React from 'react'
import Username from './components/Username.jsx'
import {store} from './store.jsx'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'

class Home extends React.Component{
   constructor(props){
      super(props);
   }
   render(){
      return (
         <div>
            <Username/>
         </div>
         )
   }
}
// const history = syncHistoryWithStore(browserHistory,store)
export default Home