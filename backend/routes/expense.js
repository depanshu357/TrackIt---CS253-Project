const express = require('express')
const {
  getExpenses,
  getExpense,
  createExpense,
  deleteExpense,
  updateExpense
} = require('../controllers/expenseController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all workouts
router.get('/', getExpenses)

//GET a single workout
router.get('/:id', getExpense)

// POST a new workout
router.post('/', createExpense)

// DELETE a workout
router.delete('/:id', deleteExpense)

// UPDATE a workout
router.patch('/:id', updateExpense)


module.exports = router