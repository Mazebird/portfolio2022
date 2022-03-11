import React from 'react';
import Topbar from '../components/Topbar';

const Home = () => {
    return (
        <div className='home'>
            <Topbar/>
            <div className="homeContent">
                <p>Hello home</p>
            </div>
        </div>
    );
};

export default Home;