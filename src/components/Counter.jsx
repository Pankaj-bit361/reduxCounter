import React, { useState } from 'react'
import { addAction, reduceAction } from '../redux/action'

import { store } from '../redux/store'

const Counter = () => {

const [render,setrender]=useState(0)
const {getState,dispatch,subscribe}=store

subscribe(()=>{
  setrender((prev)=>prev+1)
})
  return (
    <div>
    <h1>Counter: {getState().counter}</h1>
      <button onClick={()=>dispatch(addAction())} >ADD</button>
      <button  onClick={()=>dispatch(reduceAction())}>REDUCE</button>
    </div>
  )
}

export default Counter
