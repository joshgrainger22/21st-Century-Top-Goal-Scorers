const mongoose = require('mongoose')
const BarclaysPremierLeagueSchema = require ('./bPL')
const BundesligaSchema = require('./bundesliga')
const LaLigaSchema = require('./laLiga')
const Ligue1Schema = require('./ligue1')
const TopscorersSchema = require('./topScorers')
const CommentSchema = require ('./Comments')
const PostSchema = require ('./Post')


const TopScorers = mongoose.model('TopScorers', TopscorersSchema)
const BarclaysPremierLeague = mongoose.model('BarclaysPremierLeague', BarclaysPremierLeagueSchema)
const Bundesliga = mongoose.model('Bundesliga', BundesligaSchema)
const LaLiga = mongoose.model('LaLiga', LaLigaSchema)
const Ligue1 = mongoose.model('Ligue1', Ligue1Schema)
const Comment = mongoose.model('Comment', CommentSchema )
const Post = mongoose.model('Post', PostSchema)

module.exports = {
TopScorers,
BarclaysPremierLeague,
Bundesliga,
LaLiga,
Ligue1,
Comment,
Post
}