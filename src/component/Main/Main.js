import React from 'react'
import profil from "../../asset/profil.png"
import design from "../../asset/design.png"
import integration from "../../asset/integration.png"
import dev from "../../asset/dev.png"
import seo from "../../asset/seo.png"

const Main = () => {
  return (
    <main>
    <div className="container flex-main">
        <section id="presentation">
            <h3> Presentation </h3>
            <div className="profil-flex">
                <img src={profil} title="Photo de prenom nom" alt="Prenom Nom"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero placeat aspernatur repudiandae
                    nihil animi, tempore illum autem consectetur tempora magni nam rerum iusto minima, ducimus in
                    delectus, temporibus minus sint?</p>
            </div>
            <div className="mise-en-avant">
                <figure>
                    <h4> Design</h4>
                    <img src={design} title="categorie" alt="design"/>
                    <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. </figcaption>
                </figure>
                <figure>
                    <h4>Front End Developpement</h4>
                    <img src={integration} title="categorie" alt="design"/>
                    <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. </figcaption>
                </figure>
                <figure>
                    <h4>Back End Developpement</h4>
                    <img src={dev}title="categorie" alt="design"/>
                    <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. </figcaption>
                </figure>
                <figure>
                    <h4>SEO</h4>
                    <img src={seo} title="categorie" alt="design"/>
                    <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. </figcaption>
                </figure>
            </div>
        </section>
        <aside>
            <div className="encart">
                <h3>Qui suis je</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt officia quam mollitia commodi iste deserunt ducimus nostrum magnam saepe eveniet. Eum tempora cum ea. Asperiores dolor doloremque nesciunt ullam repellendus.</p>
            </div>
            <div className="encart">
                <h3>Experience</h3>
                <ul>
                    <li>Experience 1</li>
                    <li>Experience 2</li>
                    <li>Experience 3</li>
                </ul>
            </div>
            <div className="encart">
                <h3>Contact</h3>
                <form action="traitement.js" method="post"> 
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" id="prenom" name="prenom"/>
                    

                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>

                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Ecrire votre message" name="message" id="message"></textarea>
                    <input type="submit"/>
                </form>
            </div>
        </aside>

    </div>
</main>
  )
}

export default Main