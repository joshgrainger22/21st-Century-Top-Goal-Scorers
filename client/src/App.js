import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './styles/App.css'
import axios from 'axios'
import Navigation from './components/Navigation'
// import TSData from './server/data/topPlayerData'
import BPLPage from './pages/BPLPage'
import LaLigaPage from './pages/LaLigaPage'
import TopScorersPage from './pages/TopScorersPage'
import BundesligaPage from './pages/BundesligaPage'
import Ligue1Page from './pages/Ligue1Page'
import TopScorer from './components/TopScorers'

const BASE_URL = 'http://localhost:3001/api'


export default function App() {

    const [topScorers, setTopScorers] = useState([])
  


    const getTopScorers = async () => {
      // setTopScorers(TSData)
      const result = await axios.get(`${BASE_URL}/topscorers`)
      console.log(result)
      setTopScorers(result.data.topScorers)
    }
    useEffect( () => {
      getTopScorers()
    }, [])
    // getTopScorers()


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




