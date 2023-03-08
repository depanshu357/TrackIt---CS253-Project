const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseSchema = new Schema({
  Item: {
    type: String,
    required: true
  },
  MoneySpent: {
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
  },
  TransactionType:{
    type: String,
    default:"Paid",
    required:true
  }
}, { timestamps: true })

module.exports = mongoose.model('Expense', expenseSchema)