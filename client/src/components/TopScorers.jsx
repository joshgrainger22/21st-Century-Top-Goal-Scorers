import React from 'react'
import Review from './Review'


export default function TopScorers(props) {
  return (


    <div className="image-container">
    <img src={props.image} id="player-image"/>
    <div className ="card">

    <div className ="Scorer-card">
      <h1> {props.name}</h1>
      <h6>Appearances: {props.appearances}</h6>
      <h6>Goals :{props.goals}</h6>
      <h6>Team: {props.team}</h6>
      <h6> League: {props.league}</h6>
      <h6>Country Of Origin: {props.country}</h6>
      {/* <Review /> */}
    </div>
    </div>
    </div>
  )
}
