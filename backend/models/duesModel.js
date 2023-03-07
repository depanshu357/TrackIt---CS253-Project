const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseSchema = new Schema({
  Item: {
    type: String,
    required: false
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
    required: false
  },
  user_id: {
    type: String,
    required: false
  },
  Date:{
    type: Date,
    default : Date.now
  },
  shopName:{
    type:String,
    required: false
  },
  TransactionType:{
    type: String,
    default:"Borrowed",
    required:true
  }
}, { timestamps: true })

module.exports = mongoose.model('Due', expenseSchema)