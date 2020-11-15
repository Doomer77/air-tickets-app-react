import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import FlightReportContainer from '../FlightReportContainer';
import MainContainer from '../MainContainer';
import FlightReport from '../FlightReport';
import dataMock from '../../flights.json';
import './App.css';


function App() {

  const flightAdapter = ( segments ) => {
    let lengthSegments = segments.length -1;
    return {
      airline: segments[0]?.airline,
      departureCity: segments[0]?.departureCity, 
      departureAirport: segments[0]?.departureAirport, 
      departureAirportUid: segments[0]?.departureAirport,
      arrivalCity: segments[lengthSegments]?.arrivalCity, 
      arrivalAirport: segments[lengthSegments]?.arrivalAirport, 
      arrivalAirportUid: segments[lengthSegments]?.arrivalAirport,
      departureDate: segments[0]?.departureDate, 
      arrivalDate: segments[lengthSegments]?.arrivalDate,
    } 
  }

  return (
    <div className="app">
      <Navigation />
      <MainContainer>
        {dataMock.result.flights.map(( { flight: { carrier, price, legs } } ) => {
          return <FlightReportContainer carrier={carrier} price={price}>
            {legs.map(({ segments, duration }) => {
              return <FlightReport { ...flightAdapter(segments) } duration={duration} handlerTransfer={() => console.log('click')}/>
              // return segments.map(( props ) => {
              //   return <FlightReport { ...props } duration={duration}/>
              // }) 
            })}
            </FlightReportContainer>
          }
        )}   
      </MainContainer>
    </div>
  );
}

export default App;