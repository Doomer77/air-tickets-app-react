import React from 'react';

import './MainContainer.css';


export const MainContainer = ({ children }) => {
    return (
        <section className="cards"> 
            <div>{children}</div>
            <div className="more">
                <button className="more__btn">Показть еще</button>
            </div>
        </section>
    )
}