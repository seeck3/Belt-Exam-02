const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const MovieSchema = new Schema({
  title: [{
    type: String,
    required: [true, "Enter movie's title"],
    trim: true,
    minLength: [3, "title must be more than 3 chracters"]
  }],
  stars: [{
    type: Number,
    required: [true, "Please select star"],
  }],
  reviews: [{
    review: {
      type: String,
      trim: true,
      required: [true, "Enter movie's review"],
      minlength: [3, "review must be more than 3 chracters"]
    },
    name: {
      type: String,
      trim: true,
      required: [true, "Enter your name"],
      minlength: [3, "Name must be more than 3 chracters"]
    },
    star: {
      type: Number,
      required: [true, "Please select star"],
      // }],
    },
  }],
  // review: [{
  //   type: String,
  //   trim: true,
  //   required: [true, "Enter movie's review"],
  //   minlength: [3, "review must be more than 3 chracters"]
  // }],
  // name: [{
  //   type: String,
  //   trim: true,
  //   required: [true, "Enter your name"],
  //   minlength: [3, "Name must be more than 3 chracters"]
  // }],
  // stars: [{
  //   type: Number,
  //   required: [true, "Please select star"],
  // }],
  // reviews: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Review'
  // }]

}, {
  timestamps: true,
});

module.exports = mongoose.model('Movie', MovieSchema);
