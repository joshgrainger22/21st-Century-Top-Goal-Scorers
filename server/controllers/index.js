import React from 'react'
const { TopScorers, BarclaysPremierLeague, Bundesliga, LaLiga, Ligue1} = require('../models')


const getAllBplPlayers = async (req, res) => {
  try {
    const bPL = await BarclaysPremierLeague.find()
    return res.status(200).json({ BarclaysPremierLeague})
  } catch (err) {
    return res.status(500).send(err.message)
  }
  }





  module.exports = {
    getAllBplPlayers
  }