import React from 'react';
import Topbar from '../components/Topbar';

const NotFound = () => {
    return (
        <div className='notFound'>
            <Topbar title="Menu" />
            <div className="main">
                <div className="content">
                    <div className="icon">
                        <i class="fa-solid fa-face-surprise"></i>
                    </div>
                    <div className="notFound-text">
                        <h1>Erreur 404 - </h1><h1>Cette page n'existe pas.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;