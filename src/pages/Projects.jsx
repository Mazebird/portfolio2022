import React from 'react';
import Topbar from '../components/Topbar';
import WIP from "../media/wip.png";

const Projects = () => {
    return (
        <div className='projects'>
            <Topbar title="Mes projets" />
            <div className="main">
                <div className="page-title">
                    <h2>Mes projets</h2>
                </div>
                <div className="content">
                    <div className='project-container'>
                        <div className="picture">
                            <img src={WIP} alt="" />
                        </div>
                        <h1>En construction</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;