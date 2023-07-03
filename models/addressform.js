const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addressSchema = new Schema({
    text: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('address', addressSchema)