import React from 'react'
import TopScorers from '../components/TopScorers'
import { useParams } from 'react-router-dom'
import Review from '../components/Review';


export default function TopScorersPage(props) {
    let {name} = useParams()
    console.log(props.topScorers)
    
    // const topScorers = props.topScorers.find((result) => name === result.name)
  return (
      <div>
          <h1> {props.topScorers.name}</h1>
    <div className="TopScorers">

    {props.topScorers.map((topScorers) => {
            <Review id={topScorers._id}/>
        return (
        <TopScorers key={topScorers._id}
        image={topScorers.image}
        name={topScorers.name}
        />
        )
    })}
    </div>
    </div>
    
  )
}



// export default function TopScorersPage(props) {
//     let {name} = useParams

//     // let navigate = useNavigate()
//     const topScorers = props.topScorers.find((result) => name === result.name)
    
//   return (
//       <div > 
//     <div className="info">
//         <div className="info-picture" >
// <br />
// <img src={topScorers.image} alt="footballer" />
//         </div>
//             <h1>{topScorers.name}</h1>
//             <h4>{topScorers.appearances}</h4>
//             <h4>{topScorers.goals}</h4>



//     </div>

// </div>
//   )
// }
