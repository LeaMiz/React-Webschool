import React from 'react'

 const Header = () => {
  return (
    <header>
    <div className="container">
        <div className="normal-flex">
            <div className="haut-gauche">
                <h1>Mizrahi Lea</h1>
                <strong><span>C</span>ommunication</strong> /
                <strong><span>M</span>arketing</strong> /
                <strong><span>D</span>igital</strong>

            </div>
            <div className="haut-droit">
                <a href="#">Telecharger mon cv</a>
            </div>
        </div>
    </div>
    </header>
  )
}
export default Header
