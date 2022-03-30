import React from 'react'
import { Link } from 'react-router-dom'



export default function Navigation() {
  return (
        <nav className = "nav">
            <h1>21st Century Top Goal Scorers</h1>
            <div className="link-button">
                <Link to="/topscorers"> TopScorers</Link>
            </div>
        </nav>
  )
}
