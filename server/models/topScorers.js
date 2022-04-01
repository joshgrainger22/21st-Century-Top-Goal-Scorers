const { Schema } = require('mongoose')

const TopScorers = new Schema(
    {
        name: { type: String, require: true },
        appearances: { type: String, require: true},
        goals: { type: String, require: true},    
        age: { type: String, require: true},
        country_of_origin: { type: String, require: true},
        current_team: { type: String, require: true},
        league: { type: String, require: true },
        image: { type: String, require: true },
    },
    { timestamps: true }
)

module.exports = TopScorers