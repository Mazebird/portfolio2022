import React from 'react';
import Topbar from '../components/Topbar';

const NotFound = () => {
    return (
        <div className='404'>
            <Topbar title="Menu"/>
            <div className="content">
                <p>Erreur 404</p>
            </div>
        </div>
    );
};

export default NotFound;