import React from 'react'

export default function TopScorers(props) {
  return (
    <div className ="card">
    <div className ="Scorer-card">
      <img src={props.image} />
      <h1> {props.name}</h1>
    </div>
    </div>
  )
}
