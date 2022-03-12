import React from 'react';
import Topbar from '../components/Topbar';

const Home = () => {
    return (
        <div className='home'>
            <Topbar title="Présentation"/>
            <div className="content">
                <p>Hello home</p>
            </div>
        </div>
    );
};

export default Home;