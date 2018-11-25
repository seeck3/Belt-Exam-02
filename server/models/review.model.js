const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const ReviewSchema = new Schema({
  // review: {
  //   type: String,
  //   trim: true,
  //   required: [true, "Enter movie's review"],
  //   minlength: [3, "review must be more than 3 chracters"]
  // },
  // name: {
  //   type: String,
  //   trim: true,
  //   required: [true, "Enter your name"],
  //   minlength: [3, "Name must be more than 3 chracters"]
  // },
  // star: Number,
  // movies: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Movie'
  // }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Review', ReviewSchema);
