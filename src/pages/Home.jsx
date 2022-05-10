import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Photo from "../media/me.png";
import CV from "../media/CV-Dev-Anthony-Fernandez.pdf";

const Home = () => {
    return (
        <div className='home'>
            <Topbar title="Présentation" />
            <div className="main">
                <div className="page-title">
                    <h2>Présentation</h2>
                </div>
                <div className="content">
                    <div className="presentation">
                        <div className="presentation-text">
                            <p>Bonjour ! Je m'appelle <span>Anthony</span> et je suis <span>développeur web</span> junior.</p>
                            <p>Après une formation de niveau 6 (Bac + 4) de <span>Concepteur Développeur d'Applications</span> à l'<a href='https://www.eni-ecole.fr/formations/developpement/niveau-6-bac4-concepteur-developpeur-dapplications/' target="_blank" rel="noreferrer">Eni Ecole Informatique</a>,
                                je me retrouve maintenant sur le marché du travail.</p>
                            <p>
                                Afin de pouvoir un peu mieux me présenter aux entreprises, j'ai donc décidé de réaliser ce petit portfolio.
                                Ici, vous pouvez visualiser un résumé de <Link to="/Competences" >mes compétences</Link>, mais aussi quelques uns
                                des <Link to="/Projets" >projets</Link> réalisés à la fois durant ma formation mais aussi sur mon temps libre.
                            </p>
                            <p>
                                Et si mon profil vous intéresse, n'hésitez pas à <Link to="/contact" >me contacter</Link>. <br /> Je recherche principalement dans le département du Finistère (29) mais je reste mobile et accepte également le télétravail.

                            </p>

                            <p>A bientôt !</p>
                        </div>

                        <a className='downloadCV' href={CV} target="_blank" rel='noreferrer'>Télécharger mon CV</a>
                    </div>
                    <div className="picture">
                        <img src={Photo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;