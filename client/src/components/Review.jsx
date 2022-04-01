// import React from 'react';
// import { useState } from 'react'
// import axios from 'axios'

// const BASE_URL = 'http://localhost:3001/api'

// export default function Review (props) {
    
//  const [reviews, setReviews] = useState([])
//  const [sendReviews, setSendReviews] = useState({comment: [...reviews]})
//  const [userReview, setUserReview] = useState ('')

//  const getReviews = async () => {
//      if (userReview !== '') {
//      let newReviews = [...sendReviews.comment. userReview]
//      console.log(newReviews)
//      setReviews(reviews => [...reviews,newReviews])
//      setSendReviews({comment: [...newReviews]})
//      console.log(sendReviews)
//      await axios.post(`${BASE_URL}/topscorers/${props.id}`, sendReviews)
//  }
// }

// const handleReview = (event) => {
//     setUserReview(event.target.value)

// }
// return (

//     <div>
//         <input type = "text" name="review" placeholder="Leave a rating" value={userReview} onChange={(event) => handleReview(event)} />
//         <button onClick={getReviews}>Submit </button>
//     </div>

// )

// }

