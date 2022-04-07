const { Schema } = require('mongoose')

const comment = new Schema(
    {
        name: { type: String, required: true },
        comment: {type: String, required : true },

    },
    {timestamps: true}
)
module.exports = Comment