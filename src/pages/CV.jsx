import React from 'react';
import Topbar from '../components/Topbar';

const CV = () => {
    return (
        <div className='cv'>
            <Topbar title="Mon CV" />
            <div className="content">
                <p>Ajouter les éléments du cv : Formations, Compétences, etc (les coordonnées devraient aller dans contact)</p>
            </div>
        </div>
    );
};

export default CV;