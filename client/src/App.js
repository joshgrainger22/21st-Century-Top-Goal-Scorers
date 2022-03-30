import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react/cjs/react.production.min'
import './styles/App.css'
import React from 'react'
import axios from 'axios'
import Navigation from './components/Navigation'
// import TSData from './server/data/topPlayerData'
import BPLPage from './pages/BPLPage'
import LaLigaPage from './pages/LaLigaPage'
import TopScorersPage from './pages/TopScorersPage'
import BundesligaPage from './pages/BundesligaPage'
import Ligue1Page from './pages/Ligue1Page'
import TopScorer from './components/TopScorers'



export default function App() {
  const BASE_URL = 'http://localhost:3000/topscorers'
    const [topScorers, setTopScorers] = useState([])



    const getTopScorers = async () => {
      // setTopScorers(TSData)
      const result = await axios.get(`${BASE_URL}/topscorers`)
      setTopScorers(result.data)
    }

    useEffect( () => {
      getTopScorers()

    }, [])


  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route exact path ="/topscorers" element={<TopScorersPage topScorers={topScorers}/>}/>
        </Routes>
      </main>
      <h1>Hello World</h1>
    </div>
  )
}




