const express = require('express')
const {
  getDuess,
  getDues,
  createDues,
  deleteDues,
  updateDues,
  getDuesByShopName,
  getDuesByRollNo
} = require('../controllers/duesController')
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all dues routes
// router.use(requireAuth)

// GET all Duess
router.get('/', getDuess)

//GET Dues by rollNo
router.get('/rollNo/:rollNo', getDuesByRollNo)

//get Dues by ShopName
router.get('/:shopName',getDuesByShopName)

// POST a new Dues
router.post('/', createDues)


// DELETE a Dues
router.delete('/:id', deleteDues)

// UPDATE a Dues
router.patch('/:id', updateDues)


module.exports = router