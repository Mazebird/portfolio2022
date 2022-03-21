import React from 'react';
import Topbar from '../components/Topbar';
import ContactComponent from '../components/Contact';

const Contact = () => {
    return (
        <div className='contact'>
            <Topbar title="Me contacter" />
            <div className="main">
                <div className="page-title">
                    <h2>Me contacter</h2>
                </div>
                <div className="content">
                    <div className="contact-text">
                        <p>Pour toute question ou proposition d'emploi, n'hésitez pas à me contacter via le formulaire de cette page. </p>
                        <p>Vous pouvez également m'envoyer un <a href="mailto:contactanthonyfernandez@gmail.com">e-mail</a>.</p>
                        <p>A bientôt !</p>
                        <div className="network">
                            <h3>Mes autres réseaux</h3>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/anthony-fernandez-dev/" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-linkedin' /></a>
                                </li>
                                <li>
                                    <a href="http://www.github.com/Arckreed" target="_blank" rel="noopener noreferrer"><i className='fa-brands fa-github' /></a>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <ContactComponent />
                </div>
            </div>

        </div>
    );
};

export default Contact;