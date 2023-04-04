import React from 'react'
import { useState } from 'react'

import Navbar from '../../component/Navbar/Navbar'
import './Counter.css'


const Counter = () => {

  const [Counter, setCounter] = useState(0)
  
  const Increment = () => {
    setCounter(Counter + 1)
  }
  
  const Decrement = () => {
    setCounter(Counter - 1)
  }
  
  const Reset = () => {
    setCounter(0)
  }

  return (
    <div>  
      <Navbar />
      <div className="compteur">{Counter}</div> 
      <div className="Increment">
        <button className="button button-blue" onClick={()=> Increment()}>Increment +</button>
        <button className="buttonC" onClick={()=> Decrement()}>Increment -</button>
        <button className="button button-grey" onClick={()=> Reset()}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
