const Dues = require('../models/duesModel')
const mongoose = require('mongoose')

// get all Duess
const getDuess = async (req, res) => {
  const user_id = req.user._id

  const Duess = await Dues.find({user_id}).sort({createdAt: -1})

  res.status(200).json(Duess)
}

// get a single Dues
const getDues = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Duess'})
  }

  const Dues = await Dues.findById(id)

  if (!Dues) {
    return res.status(404).json({error: 'No such Dues'})
  }
  
  res.status(200).json(Dues)
}


// create new Dues
const createDues = async (req, res) => {
  const {Item, Amount,RollNo, Description,Date} = req.body

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
    const Dues = await Dues.create({Item, MoneySpent, Description, user_id,Date})
    res.status(200).json(Dues)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout
const deleteDues = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Duess'})
  }

  const Dues = await Dues.findOneAndDelete({_id: id})

  if (!Dues) {
    return res.status(400).json({error: 'No such Duess'})
  }

  res.status(200).json(Dues)
}

// update a workout
const updateDues = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Duess'})
  }

  const Dues = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!Dues) {
    return res.status(400).json({error: 'No such Duess'})
  }

  res.status(200).json(Dues)
}


module.exports = {
    getDuess,
  getDues,
  createDues,
  deleteDues,
  updateDues
}