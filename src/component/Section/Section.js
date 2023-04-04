import React from 'react'
import responsive from "../../asset/responsive.png"

const Section = () => {
  return (
    <section id="slider">
    <div className="container flex-slider">
        <figure id="milieu-haut-gauche">
            <a href="/">
                <img src={responsive} alt="image qui represente plusieurs ecrans pour le responsive"
                    title="responsive design"/>
            </a>
            <figcaption>
                <a href="/">Projet Responsive Design</a>
               
            </figcaption>
        </figure>
        <div id="milieu-haut-droit">
            <h2>Vous etes à la recherche d'un developpeur pour gérer vos projets web?</h2>
            <p>Je peux renforcer votre équipe autant sur la partie graphique que developpement</p>
            <p>Seriez vous pret à me donner ma chance?</p>
        </div>
    </div>
</section>
  )
}

export default Section