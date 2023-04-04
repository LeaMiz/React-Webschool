import React from 'react'
import { Link} from "react-router-dom"
import './Navbar.css'

 const Navbar = () => {
  return (
    <nav>
    <div className="container">
        <div className="flex-menu">
            
            <Link to="/">Accueil</Link>
            
            
            <Link to="/Counter">Compteur</Link>
            <Link to="/Toogle">Toogle</Link>
            <Link to="/List">List</Link>
            <Link to="/Avenir">Avenir</Link>
       
            
        </div>
    </div>
</nav>
  )
}
export default Navbar