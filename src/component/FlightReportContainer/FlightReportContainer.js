import React from 'react';

import './FlightReportContainer.css';

export const FlightReportContainer = ({ children, carrier, price }) => {
    return (
        <div className="card-box">
            <div className="heading">

                <div className="carrier">
                <p className="carrier__name">
                    {carrier.caption}
                </p>
                </div>

                <div className="price-box">
                <span className="price-box__price">
                    {price.total.amount}
                </span>
                <span className="price-box__passenger-type">
                    Стоимость для одного взрослого человека
                </span>
                </div>

                </div>
            {children}
            <button className="btn btn--select" type="button">Выбрать</button>
        </div>
    )
}