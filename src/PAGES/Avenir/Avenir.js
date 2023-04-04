import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Avenir.css'


const Avenir = () => {
  const [state, setState] = useState({
    id: 1,
    metier: "Fullstack Developpeur",
    Niveau: "en formation",
  })

  const handleJunior = () => {
    setState((prevstate) => ({...prevstate, Niveau: "Junior"}))
  }

  const handleIntermediaire = () => {
    setState((prevstate) => ({...prevstate, Niveau: "Intermediaire"}))
  }

  const handleSenior = () => {
    setState((prevstate) => ({...prevstate, Niveau: "Senior"}))
  }
  
  return (
    <div className='button'>
      <Navbar />
      <h1 className='presentation'>Je suis {state.metier} {" "} {state.Niveau} </h1>
<div className='btn1'> 
  <button className="button1" onClick={() => handleJunior()}>Dans trois mois je serai </button>
</div>
<button className="button2" onClick={() => handleIntermediaire()}>Dans un an je serai </button>
<button className="button3" onClick={() => handleSenior()}>Dans 5 ans je serai </button>
    </div>
  )
}

export default Avenir;

