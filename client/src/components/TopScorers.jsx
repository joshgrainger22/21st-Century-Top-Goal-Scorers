import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import TopScorer from '../pages/TopScorersPage'



const TopScorers = (props) => {
  let navigate = useNavigate()

  return (
    <div className="container-grid">
    {props.top10Players.map((TopScorers) => (
      <div className ="Scorer-Card">
          <img src={props.image} />
          <h1>{props.name}</h1>
          </div>
        
    ))}
        </div>
)
}
