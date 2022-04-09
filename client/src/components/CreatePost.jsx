// import React, { useEffect } from 'react'
// import { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import { connect } from 'react-redux'



// export default function CreatePost(props) {
// console.log(props)
//   // useEffect(() => {
//   //   props.fetchPosts()
//   // }, [])

//   const handleSubmit = (event) => {
//     event.preventDefault()
//   }

//   //const navigate = useNavigate()
//   const [name, setName] = useState('')
//   const [posts, setPosts] = useState('')
//   const [create, setCreate] = useState(false)


//   function CreatePost(e) {
//     e.preventDefault()
//     //console.log(name, posts)
//     //console.log(FormData)
//     //window.location.reload(true)
//   }

//   return (
//     <div>
//       <h1>CreatePost</h1>
//       <div>
//         {create ? (
//           <form onSubmit={(e) => CreatePost(e)}>
//             <label>Name</label>
//             <div>
//               <input
//                 type="text"
//                 name="name-input"
//                 placeholder="Enter your name here"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <label>Comments</label>
//             <div>
//               <textarea
//                 className="comments-input"
//                 placeholder="Leave your comments here"
//                 value={posts}
//                 onChange={(e) => setPosts(e.target.value)}
//               />
//             </div>
//             <button>Submit</button>
//           </form>
//         ) : (
//           <button
//             type="submit"
//             className="review-button"
//             onClick={() => setCreate(true)}
//           >
//             Create a Post
//           </button>
//         )}
//       </div>
//     </div>
//   )
// }