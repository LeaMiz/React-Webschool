import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar';
import './Toogle.css'

const Toogle = () => {

    const [Toogle, setToogle] = useState(false);
    
    const ActivToogle = () => {
      setToogle(!Toogle)
    }

   
  return (
 
    <div className='toogle'>
       <Navbar/>
      { Toogle === true &&
      <div className='validation'>Toogle </div>
      }
      <button className='btnT' onClick={()=> ActivToogle() } >Active Toogle</button>
    </div>
  )
}
 
export default Toogle