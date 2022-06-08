/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const mongoose = require("./connection.js")

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
// const Schema = mongoose.Schema
// const model = mongoose.model
// NOTE: This is the same as creating the variables above, this is using destructuring. It's a shorthand method that will create two variables at once and pull them from mongoose.
const { Schema, model } = mongoose

// make fruits schema
const fruitsSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean
})

const Fruit = model("Fruit", fruitsSchema) // Make fruit model

////////////////////////////////////////////////
// Export Models
////////////////////////////////////////////////
module.exports = Fruit