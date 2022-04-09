import React from 'react'
import TopScorers from '../components/TopScorers'
import { useParams } from 'react-router-dom'


export default function TopScorersPage(props) {
    console.log(props.topScorers)
  return (
      <div>
    <div className="TopScorers">

    {props.topScorers.map((topScorers) => {
        return (
        <TopScorers key={topScorers._id}
        image={topScorers.image}
        name={topScorers.name}
        goals={topScorers.goals}
        appearances={topScorers.appearances}
        country={topScorers.country_of_origin}
        team={topScorers.current_team}
        league={topScorers.league}
        />
        )
    })}
    </div>
    </div>
    
  )
}

