const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuesSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true }
})

const Menue = mongoose.model('Menue', menuesSchema)
module.exports = Menue