import React, { useState } from 'react';


import './FlightReport.css';


export const FlightReport = ( {departureCity, departureAirport, arrivalCity, arrivalAirport, departureDate, arrivalDate, duration, starting, handlerTransfer, airline}) => {

    console.log(airline);

    const [transfer, setTransfer] = useState(false);

    const splitDepartureTime = (time) => {
        const newTime = time.slice(11)  
        return newTime;
    };

    const splitDepartureData = (data) => {
        const newData = data.slice(0, 10)  
        return newData;
    };

    const translationMin = (duration) => {
        let minDuration = (duration / 60).toFixed(2).slice(3);
        return minDuration;
    };

    const translationHours = (duration) => {
        let HoursDuration = (duration / 60).toFixed(0).slice(0, 2);
        return HoursDuration;
    };

    return(
        <div>
            <div className="card">
                <div className="flight-segment">
                    {/* flight-direction-full */}
                    <div className="flight-direction-full-wrapper">
                        <div className="flight-direction-full">
                        <div className="departure-full">
                            <span className="departure-full__city">{departureCity?.caption}</span> 
                            <span className="departure-full__airport">{departureAirport?.caption}</span>
                            <span className="departure-full__abbreviation">({departureAirport?.uid})</span> 
                        </div>

                        <div className="flight-direction-full__arrow"><i className="fa fa-long-arrow-right"></i></div>

                        <div className="arrival-full">
                            <span className="arrival-full__city">{arrivalCity?.caption}</span>
                            <span className="arrival-full__airport">{arrivalAirport?.caption}</span>
                            <span className="arrival-full__abbreviation">({arrivalAirport?.uid})</span> 
                        </div>
                        </div>

                        {/* flight-time-full */}
                        <div className="flight-time-full">
                            <div className="departure-time-full">
                                <span className="departure-time-full__time">{splitDepartureTime(departureDate)}</span> 
                                <span className="departure-time-full__data">{splitDepartureData(departureDate)}</span>
                            </div>

                            <div className="flight-time-full__time">
                                <i className="fa fa-clock-o"></i>
                                <span className="flight-time-full__horse">{translationHours(duration)}ч</span>
                                <span className="flight-time-full__minutes">{translationMin(duration)}мин</span>
                            </div>

                            <div className="arrival-time-full">
                                <span className="arrival-time-full__time">{splitDepartureTime(arrivalDate)}</span>
                                <span className="arrival-time-full__data">{splitDepartureData(arrivalDate)}</span> 
                            </div>
                        </div>
                        {/* <!-- transfer-visible --> */}
                        <div className="transfer"><span className="transfer__overview" onClick={handlerTransfer}>1 пересадка</span></div>
                        <div className="carrier-info">
                            <p className="carrier-info__text">
                                Рейс выполняет: 
                                <span className="carrier-info__name">{airline?.caption}</span>
                            </p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
