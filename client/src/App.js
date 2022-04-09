import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './styles/App.css'
import axios from 'axios'
import Navigation from './components/Navigation'
import CreatePost from './components/CreatePost'
import Comment from './components/Comment'
import TopScorersPage from './pages/TopScorersPage'
import TopScorer from './components/TopScorers'

const BASE_URL = 'http://localhost:3001/api'


export default function App() {

    const [topScorers, setTopScorers] = useState([])
    const [allComments, setAllComments] = useState([])


    const getTopScorers = async () => {
      const result = await axios.get(`${BASE_URL}/topscorers`)
      console.log(result.data.topscorers)
      setTopScorers(result.data.topScorers)
    }


    const getAllComments = async () => {
      const result = await axios.get(`${BASE_URL}/getAllComments`)
      console.log(result.data.comments)
      setAllComments(result.data.comments)
    }

    useEffect( () => {
      getAllComments()
      getTopScorers()
    }, [])


//   return (
//     <div className="App">
//       <header>
//         <Navigation />
//         {/* <CreatePost /> */}
//         <Comment />
//       </header>
//       <main>
//         <Routes>
//           <Route exact path ="/topscorers" element={<TopScorersPage topScorers={topScorers}/>}/>
//         </Routes>
//       </main>
//     </div>
//   )
// }

return (
  <div className="App">
    <header className="App-Header">Header</header>
      <main>
        <div>
      {/* <CreatePost element={<TopScorersPage topScorers={topScorers}/>} /> */}
      <Comment allComments={allComments} />
      <Navigation />
      <Routes>
        <Route exact path ="/topscorers" element={<TopScorersPage topScorers={topScorers}/>}/>
      </Routes>
    </div>  
    </main>
  </div>
)
}



