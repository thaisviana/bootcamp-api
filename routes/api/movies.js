const express = require('express');
const router = express.Router();
const Movie = require('../../models/Movie');

// @route    GET /movie
// @desc     LIST movie
// @access   Public
router.get('/', async (req, res, next) => {
    try {
      const movie = await Movie.find({}).limit(50)
      res.json(movie)
    } catch (err) {
      console.error(err.message)
      res.status(500).send({ "error": "Server Error" })
    }
  })


module.exports = router;
  