const usernameReducer = (state = {
    username : "",
    content :"",
    cur_msg:"",
    socket : {},
    users:[]

},action) => {
    switch(action.type){
        case "updateState":
            state = {
                ...state ,
                username : action.payload
            }
            break
        case "addMessages":
            var prev = state.content
            state =  {
                ...state ,
                content : prev +'\n'+ action.payload
            }
            break
        case "currentMessage" :
            state = {
                ...state ,
                cur_msg : action.payload
            }
            break
        case "setSocket":
            state= {
                ...state ,
                socket:action.payload
            }
            break
        case "setUsers":
            state= {
                ...state ,
                users : action.payload
            }
            break
    }
    return state
}
export default usernameReducer 