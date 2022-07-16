import React, { Component } from 'react';
import Frontend from './Frontend';

//Ici mettre les components Front et back ?

class Languages extends Component {
    state = {
        front: {
            title: "Front-End",
            className: "skills-front",
            entries: [
                {
                    title: "Langages",
                    entries: [
                        { id: 1, value: "HTML" },
                        { id: 2, value: "CSS" },
                        { id: 3, value: "Sass" },
                        { id: 4, value: "JavaScript" }
                    ]
                },
                {
                    title: "Frameworks",
                    entries: [
                        { id: 1, value: "Angular" },
                        { id: 2, value: "ReactJS" },
                        { id: 3, value: "BootStrap" },
                        { id: 4, value: "FoundationCSS" }
                    ]
                }
            ]
        },
        back: {
            title: "Back-End",
            className: "skills-back",
            entries: [
                {
                    title: "Langages & Frameworks",
                    entries: [
                        { id: 1, value: "PHP" },
                        { id: 2, value: "Symfony" },
                        { id: 3, value: "NodeJS" },
                        { id: 4, value: "Java" }
                    ]
                },
                {
                    title: "Bases de données & Déploiement",
                    entries: [
                        { id: 1, value: "MySQL" },
                        { id: 2, value: "MongoDB" },
                        { id: 3, value: "Docker" },
                        { id: 4, value: "Git" }
                    ]
                }
            ]
        }
    }

    render() {
        let { front, back } = this.state;

        return (
            <div className="skills-languages">
                <Frontend elements= {front} />
                <Frontend elements= {back} />
            </div>
        );
    }
}

export default Languages;