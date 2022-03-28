import React from 'react';

const Frontend = (props) => {
    const langages = props.elements;
    return (
        <div className={langages.className}>
            <h3 className='title'>{langages.title}</h3>
            <div className="content">
                {langages.entries.map((item) => (
                    <fieldset>
                        <legend>{item.title}</legend>
                        <ul>
                            {item.entries.map((item2) => (
                                <li>{item2.value}</li>
                            ))
                            }
                        </ul>
                    </fieldset>
                ))
                }
            </div>
        </div>
    );
};

export default Frontend;