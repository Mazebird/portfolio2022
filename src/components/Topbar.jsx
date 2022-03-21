import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Photo from "../media/me.png";

const Topbar = (prop) => {

    const [isActive, setActive] = useState(false);

    return (
        <>
            <div className='topbar'>
                <div className="id">
                    <div className="idContent">
                        <img src={Photo} alt="" />

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
                            <NavLink to="/Competences">
                                <i className='fa-solid fa-file-lines' />
                                <span>Mes compétences</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/Parcours">
                                <i className='fa-solid fa-signs-post' />
                                <span>Mon parcours</span></NavLink>
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
            <div className="topbar-min">
                <div className="topbar-min-title">
                    <h2>{prop.title}</h2>
                </div>
                <div className="menu" onClick={() => setActive(!isActive)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>
            <div className={isActive ? "menu-active" : "menu-disable"}>
                <ul>
                    <NavLink to="/">
                        <li>
                            <i className='fa-solid fa-mug-saucer' />
                            <span>Présentation</span>
                        </li>
                    </NavLink>
                    <NavLink to="/projets">
                        <li>
                            <i className='fa-solid fa-code-branch' />
                            <span>Mes projets</span>
                        </li>
                    </NavLink>
                    <NavLink to="/Competences">
                        <li>
                            <i className='fa-solid fa-file-lines' />
                            <span>Mes compétences</span>
                        </li>
                    </NavLink>
                    <NavLink to="/Parcours">
                        <li>
                            <i className='fa-solid fa-signs-post' />
                            <span>Mon parcours</span>
                        </li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li>
                            <i className='fa-solid fa-paper-plane' />
                            <span>Me contacter</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
};

export default Topbar;