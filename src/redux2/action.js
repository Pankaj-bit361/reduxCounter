import { ADD, REDUCE } from "./actiontypes"


export const addaction=()=>{
    return {type:ADD,payload:1}
}

export const reduceaction=()=>{
    return {type:REDUCE,payload:1}
}