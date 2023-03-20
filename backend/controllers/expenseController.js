const Expense = require('../models/expenseModel')
const mongoose = require('mongoose')

// get all expenses
const getExpenses = async (req, res) => {
  const user_id = req.user._id

  const expenses = await Expense.find({user_id}).sort({createdAt: -1})

  res.status(200).json(expenses)
}

// get a single expense
const getExpense = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such expenses'})
  }

  const expense = await Expense.findById(id)

  if (!expense) {
    return res.status(404).json({error: 'No such expense'})
  }
  
  res.status(200).json(expense)
}


// create new expense
const createExpense = async (req, res) => {
  const {Item, MoneySpent, Description,Date,Category} = req.body

  let emptyFields = []

  if(!Item) {
    emptyFields.push('Item')
  }
  if(!MoneySpent) {
    emptyFields.push('MoneySpent')
  }
  if(!Description) {
    emptyFields.push('Description')
  }
  if(!Date){
    emptyFields.push('Date')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const expense = await Expense.create({Item, MoneySpent, Description, user_id,Date,Category})
    res.status(200).json(expense)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a expense
const deleteExpense = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Expenses'})
  }

  const expense = await Expense.findOneAndDelete({_id: id})

  if (!expense) {
    return res.status(400).json({error: 'No such expenses'})
  }

  res.status(200).json(expense)
}

// update a expense
const updateExpense = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such expenses'})
  }

  const expense = await expense.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!expense) {
    return res.status(400).json({error: 'No such expenses'})
  }

  res.status(200).json(expense)
}


module.exports = {
    getExpenses,
  getExpense,
  createExpense,
  deleteExpense,
  updateExpense
}