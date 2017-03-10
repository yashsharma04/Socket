import React from 'react'
import {render} from 'react-dom'
import {Modal,Button,Label} from 'react-bootstrap'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {addMessages,updateState,currentMessage,setSocket,setUsers} from '../actions/actions.jsx'
import store from '../store.jsx'

class Username extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            value:""
        })
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        console.log("Inside handle change",event.target.value)
        this.props.updateState(event.target.value)
    }
    render(){
        return (
            <div>
                <input type="text"  onChange={this.handleChange} placeholder="Enter your username"></input>
                <Button>
                    <Link to="/chat">Chat Now!</Link>
                </Button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        usernameReducer: state.usernameReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateState : (data) => {
            dispatch(updateState(data))
        },
        addMessages : (data) => {
            dispatch(addMessages(data))
        },
        currentMessage:(data) => {
            dispatch(currentMessage(data))
        },
        setSocket:(data) => {
            dispatch(setSocket(data))
        },
        setUsers:(data) =>{
            dispatch(setUsers(data))
        }
    };
};
export  default connect(mapStateToProps,mapDispatchToProps)(Username);