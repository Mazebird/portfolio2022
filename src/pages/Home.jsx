import React from 'react';
import Topbar from '../components/Topbar';

const Home = () => {
    return (
        <div className='home'>
            <Topbar title="Présentation" />
            <div className="content">
                <div className="presentation">
                    <div className="presentation-text">
                        <p>Bonjour ! Je m'appelle <span>Anthony</span> et je suis <span>développeur web</span> junior.</p>
                        <p>Après une formation de niveau 6 (Bac + 4) de <span>Concepteur Développeur d'Applications</span> à l'<a href='https://www.eni-ecole.fr/formations/developpement/niveau-6-bac4-concepteur-developpeur-dapplications/' target="_blank">Eni Ecole Informatique</a>,
                         je me retrouve maintenant sur le marché du travail.</p>
                        <p>
                            Afin de pouvoir un peu mieux me présenter aux entreprises, j'ai donc décidé de réaliser ce petit portfolio.
                            Ici, vous pouvez visualiser un résumé de <a href={'./CV'} >mes compétences</a>, mais aussi quelques uns 
                            des <a href={'./Projets'}>projets</a> réalisés à la fois durant ma formation mais aussi sur mon temps libre.
                        </p>
                        <p>
                            Je recherche principalement dans le département du Finistère (29) mais je reste mobile et accepte également le télétravail.
                        </p>
                        <p>A bientôt !</p>
                    </div>

                    <a className='downloadCV' href="/media/cv.pdf" target="_blank">Télécharger mon CV</a>
                </div>
                <div className="picture">
                    <img src="/media/me.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Home;