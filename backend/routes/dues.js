const express = require('express')
const {
  getDuess,
  getDues,
  createDues,
  deleteDues,
  updateDues
} = require('../controllers/duesController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all Duess
router.get('/', getDuess)

//GET a single Dues
router.get('/:id', getDues)

// POST a new Dues
router.post('/', createDues)

// DELETE a Dues
router.delete('/:id', deleteDues)

// UPDATE a Dues
router.patch('/:id', updateDues)


module.exports = router