import React from 'react'
import { useParams } from 'react-router-dom'

export default function TopScorersPage(props) {
    let {name} = useParams

    // const topScorer = props.topScorers.find((result) => name === result.name)
    
    console.log(props.topScorers)


  return (
    <div className="TopScorers">
        {/* <h1>{topScorers.name}</h1> */}
    </div>

    
  )
}
