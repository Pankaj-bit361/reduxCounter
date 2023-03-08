import { ADD, REDUCE } from "./actiontypes"


export const reduce=(state,{type,payload})=>{

    switch(type){
        case ADD:{
            return {...state,counter:state.counter+payload}
        }
        case REDUCE:{
            return {...state,counter:state.counter-payload}
        }
        default:{
            return state
        }
    }
}