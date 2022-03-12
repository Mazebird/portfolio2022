import React from 'react';
import Topbar from '../components/Topbar';

const Projects = () => {
    return (
        <div className='projects'>
            <Topbar title="Mes projets" />
            <div className="content">
                <p>Ajouter quelques Projets en format Card (BlackJack, Morpion, Messenger, ToDoList...</p>
            </div>
        </div>
    );
};

export default Projects;