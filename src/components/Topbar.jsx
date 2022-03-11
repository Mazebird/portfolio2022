import React from 'react';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="id">
                <div className="idContent">
                    <img src="./media/me.png" alt="" />

                </div>
                <h1>Anthony Fernandez</h1>
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

        </div>
    );
};

export default Topbar;