import React from 'react'
import {Button } from 'react-bootstrap'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {addMessages,updateState,setSocket,currentMessage,setUsers} from '../actions/actions.jsx'


class Chat extends React.Component {
    constructor(props){
        super(props);
        this.message = this.message.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
    }
    componentDidMount(){
        var socket = io.connect('http://localhost:8000', {
            'sync disconnect on unload': true });
        console.log(this)
        this.props.setSocket(socket)
        socket.on('news',(data)=> {
            console.log(data)
            console.log("chat")
            socket.emit('username', { user: this.props.usernameReducer.username });
        });
        socket.on('group_message',(data)=>{
            console.log("Receiving Group message",data)
            this.props.addMessages(data.msg)
        })
        socket.on('user_added',(data)=>{
            console.log("inside user added",data)
            this.props.setUsers(data)
            console.log(this.props.usernameReducer.users)
        })
    }
    sendMessage(){
        var socket = this.props.usernameReducer.socket
        socket.emit('group_message',{
            "msg" : this.props.usernameReducer.cur_msg,
            "user":this.props.usernameReducer.username
        })
        console.log("sss")
        this.props.currentMessage("")
    }
    message(event){
        console.log("Current Message",event.target.value)
        this.props.currentMessage(event.target.value)
    }

    render(){
        console.log(this.props.usernameReducer.username)
        return (
            <div className="center">
               <textarea rows="25" cols="160" value={this.props.usernameReducer.content} ></textarea><br/>
               <input type ='text' height="100" size="160" value= {this.props.usernameReducer.cur_msg} onChange = {this.message}  placeholder="type your message"></input><br/>
               <Button className="btn1" onClick={()=>this.sendMessage()}>Submit</Button>
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
        setUsers:(data) => {
            dispatch(setUsers(data))
        }
    };
};
export  default connect(mapStateToProps,mapDispatchToProps)(Chat);