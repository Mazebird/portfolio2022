import React from 'react';
import Navigation from '../components/Navigation';

const CV = () => {
    return (
        <div className='cv'>
            <Navigation />
            <div className="cvContent">
                <p>Ajouter les éléments du cv : Formations, Compétences, etc (les coordonnées devraient aller dans contact)</p>
            </div>
        </div>
    );
};

export default CV;