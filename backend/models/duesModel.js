const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseSchema = new Schema({
  Item: {
    type: String,
    required: true
  },
  RollNo: {
    type: Number,
    required: true
  },
  Amount: {
    type: Number,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  Date:{
    type: Date,
    default : Date.now
  }
}, { timestamps: true })

module.exports = mongoose.model('Due', expenseSchema)