import React, { useState } from 'react'
import { addaction, reduceaction } from '../redux2/action'
import { store } from '../redux2/store'

const Counter2 = () => {
const [render,setrender]=useState(0)
const {getState,dispatch,subscribe}=store

subscribe(()=>{
setrender((prev)=>prev+1)
})

  return (
    <div>
    <h1>Counter:{getState().counter}</h1>
    <button onClick={()=>dispatch(addaction())}>ADD</button>
    <button onClick={()=>dispatch(reduceaction())}>Reduce</button>
      
    </div>
  )
}

export default Counter2
