import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className="id">
                <div className="idContent">
                    <img src="./media/me.png" alt="" />
                    <h1>Anthony Fernandez</h1>
                </div>
            </div>
            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink to="/">
                            <i className='fa-solid fa-mug-saucer' />
                            <span>Présentation</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projets">
                            <i className='fa-solid fa-code-branch' />
                            <span>Mes projets</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/CV">
                            <i className='fa-solid fa-file-lines' />
                            <span>Mon CV</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <i className='fa-solid fa-paper-plane' />
                            <span>Me contacter</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sideNetwork">
                <h2>Aussi sur...</h2>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/anthony-fernandez-dev/" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-linkedin' /></a>
                    </li>
                    <li>
                        <a href="http://www.github.com/Arckreed" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-github' /></a>
                    </li>
                </ul>
            </div>
            <div className="signature">
                <p>Anthony Fernandez - 2022</p>
            </div>
        </div>
    );
};

export default Navigation;