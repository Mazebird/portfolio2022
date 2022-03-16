import React from 'react';
import Topbar from '../components/Topbar';
import ContactComponent from '../components/Contact';

const Contact = () => {
    return (
        <div className='contact'>
            <Topbar title="Me contacter" />
            <div className="content">
                <p>Me contacter ?</p>
                <ContactComponent />
            </div>
        </div>
    );
};

export default Contact;