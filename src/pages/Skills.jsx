import React from 'react';
import Topbar from '../components/Topbar';

const Skills = () => {
    return (
        <div className='skills'>
            <Topbar title="Mes compétences" />
            <div className="main">
                <div className="page-title">
                    <h2>Mes compétences</h2>
                </div>
                <div className="content">
                    <div className="skills-left">
                        <fieldset className="languages">
                            <legend>Langages</legend>
                            <div className="languages-web">
                                <p>Langages Web</p>
                            </div>
                            <div className="languages-app">
                                <p>Langages Application</p>
                            </div>
                        </fieldset>
                        <fieldset className="frameworks">
                            <legend>Frameworks</legend>
                            <div className="frameworks-js">
                                <p>FrameworkJS</p>
                            </div>
                            <div className="frameworks-css">
                                <p>FrameworkCSS</p>
                            </div>
                        </fieldset>
                        <fieldset className="dev-env">
                            <legend>Environnement</legend>
                            <div className="dev-env-app">
                                <p>Dev App</p>
                            </div>
                            <div className="dev-env-system">
                                <p>Dev Sys</p>
                            </div>
                        </fieldset>
                    </div>
                    <div className="skills-right">
                        <fieldset className="sgbd">
                            <legend>SGBD</legend>
                            
                                <p>Les BDD</p>
                            
                        </fieldset>
                        <fieldset className="devops">
                            <legend>Déploiement</legend>
                                <p>Les skills DevOPS</p>
                        </fieldset>
                        <fieldset className="soft-skills">
                            <legend>SoftSkills</legend>
                                <p>Les compétences transverses</p>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;