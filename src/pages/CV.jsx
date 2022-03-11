import React from 'react';
import Topbar from '../components/Topbar';

const CV = () => {
    return (
        <div className='cv'>
            <Topbar />
            <div className="cvContent">
                <p>Ajouter les éléments du cv : Formations, Compétences, etc (les coordonnées devraient aller dans contact)</p>
            </div>
        </div>
    );
};

export default CV;