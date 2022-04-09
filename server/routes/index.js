const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// router.get('/', (req, res) => res.send('Home Page'))

router.get('/bundesliga', controllers.getAllBundesligaPlayers)

router.get('/bpl', controllers.getAllBplPlayers)

router.get('/ligue1', controllers.getAllLigue1Players)

router.get('/laliga', controllers.getAllLaLigaPlayers)

router.get('/topscorers', controllers.getAllTopScorers)

router.get('/getAllPosts', controllers.getAllPost)

router.post('/createPost', controllers.createPost)

router.post('/createComment', controllers.createComment)

router.get('/getAllComments', controllers.getAllComments)



module.exports = router