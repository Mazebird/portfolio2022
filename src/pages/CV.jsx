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
                    <p>Ajouter les éléments du cv : Formations & Expériences</p>
                </div>
            </div>
        </div>
    );
};

export default CV;