const express = require('express');
const router = express.Router();
const config = require('config');

// @route    POST api/users
// @desc     Register user
// @access   Public

router.get('/',[], async (req, res) => {
  console.log('oi')
  return res
          .status(200)
          .json({ result: [{ msg: 'ok!' }] });

})

router.post(
  '/',
  [],
  async (req, res) => {
   
  }
);

module.exports = router;
