import React from 'react';
import Topbar from '../components/Topbar';

const Home = () => {
    return (
        <div className='home'>
            <Topbar title="Présentation" />
            <div className="content">
                <div className="presentation">
                    <p>Bonjour, je suis un développeur débutant cherchant une entreprise.</p>
                    <a href="/media/cv.pdf" target="_blank" className='downloadCV'>Télécharger mon CV</a>
                </div>
                <div className="picture">
                    <img src="/media/me.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Home;