import React from 'react';
import Topbar from '../components/Topbar';

const CV = () => {
    return (
        <div className='cv'>
            <Topbar title="Mon parcours" />
            <div className="main">
                <div className="page-title">
                    <h2>Mon parcours</h2>
                </div>
                <div className="content">
                    <div className='cv-container'>
                        <h2 className="cv-container-title">Expériences professionnelles</h2>
                        <div className="cv-element">
                            <div className='cv-element-title'>
                                <div className='cv-element-title-label'><h3 >Developpeur web chez NDMAC Systems</h3></div>
                                <div className='cv-element-title-date'> <h3>(12/2021 - 01/2022)</h3></div>
                            </div>
                            <div className="cv-element-content">
                                <p>Mise en place d'une fonctionnalité de messagerie pour une application existante.</p>
                                <ul>
                                    <li>Réalisation en autonomie</li>
                                    <li>Conception modèle de données</li>
                                    <li>Back-end : création d'un microservice (MongoDB, nodeJS, Express)</li>
                                    <li>Front-end : création d'une interface (ReactJS, ReduxJS)</li>
                                    <li>Stage de Bac + 4</li>
                                </ul>
                            </div>
                        </div>
                        <div className="cv-element">
                            <div className='cv-element-title'>
                                <div className='cv-element-title-label'><h3 >Developpeur web chez Atlantis</h3></div>
                                <div className='cv-element-title-date'> <h3>(03/2020 - 04/2020)</h3></div>
                            </div>
                            <div className="cv-element-content">
                                <p>Réalisation d'un site internet permettant de déclarer un animal perdu ou trouvé.</p>
                                <ul>
                                    <li>Réalisation en autonomie</li>
                                    <li>Projet en PHP / MySQL</li>
                                    <li>Second stage de BTS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="cv-element">
                            <div className='cv-element-title'>
                                <div className='cv-element-title-label'><h3 >Developpeur web chez Com'Artisans</h3></div>
                                <div className='cv-element-title-date'> <h3>(11/2019 - 12/2019)</h3></div>
                            </div>
                            <div className="cv-element-content">
                            <p>Réalisation d'un site internet pour une association étudiante.</p>
                                <ul>
                                    <li>Réalisation en autonomie</li>
                                    <li>Utilisation de PHP / MySQL</li>
                                    <li>Réalisation d'un back-office permettant une gestion des stocks</li>
                                    <li>Premier stage de BTS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cv-container-separator"></div>
                    <div className='cv-container'>
                        <h2 className="cv-container-title">Formations</h2>
                        <div className="cv-element">
                            <div className='cv-element-title'>
                                <div className='cv-element-title-label'><h3 >Bac + 4 Concepteur Développeur d’Applications</h3></div>
                                <div className='cv-element-title-date'> <h3>(04/2021 - 02/2022)</h3></div>
                            </div>
                            <div className="cv-element-content">
                                <ul>
                                    <li>Révision des bases (HTML, CSS, POO)</li>
                                    <li>Introduction à de nouveaux langages (C#) et aprofondissement d'autres savoirs (Symfony, SpringBoot, Angular...)</li>
                                    <li>Introduction à la conception d'applications et les bonnes pratiques (developpement en couches, encapsulation...)</li>
                                    <li>Réalisation de projets en équipes (JEE & Symfony)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="cv-element">
                            <div className='cv-element-title'>
                                <div className='cv-element-title-label'><h3>BTS SIO Option Solution Logicielle et Applications Métier</h3></div>
                                <div className='cv-element-title-date'> <h3>(09/2019 - 06/2020)</h3></div>
                            </div>

                            <div className="cv-element-content">
                                <ul>
                                    <li>Introduction à la cybersécurité (Cisco)</li>
                                    <li>Introduction à divers langages (PHP / MySQL, Java, C++, Python)</li>
                                    <li>Introduction à divers concepts de développement (Algorythmie, Programmation Orientée Objet, MCD...)</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div> {/* content */}
            </div>
        </div>
    );
};

export default CV;