const Dues = require('../models/duesModel')
const mongoose = require('mongoose')

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'noreplytrackit98@gmail.com',
    pass: 'nfkyirhkalqckdop'
  }
});

// get all Duess
const getDuess = async (req, res) => {
//   const user_id = req.user._id
//   const dues = req.user._id
  const Duess = await Dues.find({}).sort({createdAt: -1})

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
  const {Item, Amount,RollNo, Description,Date,shopName} = req.body

  let emptyFields = []

//   if(!Item) {
//     emptyFields.push('Item')
//   }
  if(!Amount) {
    emptyFields.push('MoneySpent')
  }
//   if(!Description) {
//     emptyFields.push('Description')
//   }
//   if(!Date){
//     emptyFields.push('Date')
//   }
  if(!RollNo){
    emptyFields.push('RollNo')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    // const user_id = req.user._id
    const dues = await Dues.create({Item, Amount, Description,RollNo,Date,shopName})
    res.status(200).json(dues)

    var mailOptions = {
        from: 'noreplytrackit98@gmail.com',
        to: `depanshus21@iitk.ac.in`,
        subject: `Dues`,
        text: `An amount of ${Amount} is added to your dues for item ${Item}`
      };

      // transporter.sendMail(mailOptions, function(error, info){
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log('Email sent: ' + info.response + ` ${RollNo}@iitk.ac.in`);
      //   }
      // });
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