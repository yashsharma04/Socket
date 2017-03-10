export function updateState(data){
    console.log("action ",data)
    return {
        type : "updateState",
        payload : data
    }
}
export function addMessages(data){
    return {
        type:"addMessages",
        payload: data
    }
}
export function currentMessage(data){
    return {
        type:"currentMessage",
        payload : data
    }
}
export function setSocket(data){
    return {
        type :"setSocket",
        payload : data
    }
}
export function setUsers(data){
    return {
        type :"setUsers",
        payload : data
    }
}