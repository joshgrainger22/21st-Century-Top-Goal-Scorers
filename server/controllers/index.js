// import res from 'express/lib/response'
// import { send } from 'express/lib/response'
const { TopScorers, BarclaysPremierLeague, Bundesliga, LaLiga, Ligue1, Comment, Post} = require('../models')


const getAllBplPlayers = async (req, res) => {
  try {
    const bPL = await BarclaysPremierLeague.find()
    return res.status(200).json({ BarclaysPremierLeague})
  } catch (err) {
    return res.status(500).send(err.message)
  }
  }

  const getAllBundesligaPlayers = async (req, res) => {
    try {
      const bundesliga = await Bundesliga.find()
      return res.status(200).json({ Bundesliga })
    } catch (err) {
      return res.status(500).send(err.message)
    }
    }

    const getAllLigue1Players = async (req, res) => {
      try {
        const ligue1 = await Ligue1.find()
        return res.status(200).json({ Ligue1 })
      } catch (err) {
        return res.status(500).send(err.message)
      }
      }
    
      const getAllLaLigaPlayers = async (req, res) => {
        try {
          const laLiga = await LaLiga.find()
          return res.status(200).json({ LaLiga })
        } catch (err) {
          return res.status(500).send(err.message)
        }
        }
    
      const getAllTopScorers = async (req, res) => {
        try {
          const topScorers = await TopScorers.find()
          return res.status(200).json({ topScorers })
        } catch (err) {
          return res.status(500).send(err.message)
        }
        }

        const getAllComments = async (req, res) => {
          try {
            const comments = await Comment.find()
            return res.status(200).json({ comments })
          } catch (err) {
            return res.status(500).send(err.message)
          }
        }
        const createPost = async (req, res) => {
          try {
            const post = await new Post(req.body)
            console.log(req.body)
            await post.save()
            return res.status(201).json({
              post
            })
          } catch (error) {
            return res.status(500).json({ error: error.message })
          }
        }
        const createComment = async (req, res) => {
          try {
            // const createComment = await req.body
            // Comment.insertMany(createComment)
            // return res.status(201).json({ Comment })
            const comment = await new Comment(req.body)
            console.log(req.body)
            await comment.save()
            res.send(comment)
          } catch (error) {
            return res.status(500).json({ error: error.message })
          }
        }
        const getAllPost = async (req, res) => {
          try {
            const posts = await Post.find()
            return res.status(200).json({ posts })
          } catch (err) {
            return res.status(500).send(err.message)
          }
        }
      



  module.exports = {
    getAllBplPlayers,
    getAllBundesligaPlayers,
    getAllLigue1Players,
    getAllLaLigaPlayers,
    getAllTopScorers,
    getAllPost,
    createComment,
    createPost,
    getAllComments
  }