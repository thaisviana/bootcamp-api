const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  plot: {
    type: String,
    required: true
  },
  genres: {
    type: [String]
  },  
  cast: {
    type: [String]
  },
  num_mflix_comments :{
      type: Number
  },
  poster:{
    type: String 
  },
  title:{
    type: String,
    required: true
  }

});

module.exports = mongoose.model('movies', MovieSchema);
