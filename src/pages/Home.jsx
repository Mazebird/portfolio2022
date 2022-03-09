import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className="homeContent">
                <p>Hello home</p>
            </div>
        </div>
    );
};

export default Home;