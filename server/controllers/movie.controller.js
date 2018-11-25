// using const Book = require('mongoose').model('Book'); instead of using mongoose and book seperate
const Movie = require('mongoose').model('Movie');
const Review = require('mongoose').model('Review');


// const Book = mongoose.model('Book');


module.exports = {
  // get all of resource
  index(request, response) {
    console.log("getting movies");
    Movie.find({})
      .then(movies => response.json(movies))
      .catch(console.log)
  },

  // get a single resource
  show(request, response) {
    console.log(request.params.movie_id)
    Movie.findById(request.params.movie_id)
      .then(movie => {
        console.log("movie movie", movie);
        response.json(movie)
      })
      .catch(console.log())
  },

  showReview(request, response) {
    console.log(request.params.movie_id)
    Movie.findById(request.params.movie_id)
      .then(movie => {
        console.log("review reveiw", movie);
        response.json(movie)

      })
  },


  // create resource

  // create(request, response) {
  //   console.log("request.body", request.body)
  //   Movie.create(request.body)
  //     .then((movie) => {
  //       console.log("movie movie create", movie);
  //       Review.create(request.body)
  //         .then((review) => {
  //           console.log("review review create", review);
  //           Movie.findOneAndUpdate({
  //               title: request.body.title
  //             }, {
  //               $push: {
  //                 reviews: review._id
  //               }
  //             }, (err) => {
  //               if (err) {
  //                 console.log("you missed reviews database")
  //               }
  //             })
  //             .then(reviewedMovie => {
  //               console.log("final final final", reviewedMovie);
  //               response.json(reviewedMovie)
  //             })
  //             .catch(error => {
  //               const errors = Object.keys(error.errors).map(key => error.errors[key].message)

  //               response.status(402).json(errors);
  //             });
  //         })
  //     })
  // },
  // 이게 기본 포스트 create
  create(request, response) {
    console.log("request.body", request.body)
    Movie.create({
        title: request.body.title,
        stars: request.body.star,
        reviews: request.body,
      })
      // .then(movie => { r })
      .then(movie => {
        console.log("what i just made", movie);
        response.json(movie)
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message)

        response.status(402).json(errors);
      });

  },

  // update resource
  update(request, response) {
    console.log("request.params.movie_id", request.params.movie_id);
    console.log('request.body', request.body.name);
    Movie.findByIdAndUpdate(request.params.movie_id, request.body, {
        new: true
      })
      .then(movie => response.json(movie))
      .catch(console.log)
  },

  addReview(request, response) {
    console.log("adding review", request.params.movie_id);
    Movie.findByIdAndUpdate(request.params.movie_id, {
        $push: {
          stars: request.body.star,
          reviews: request.body
        }
      })
      .then(movie => {
        console.log(movie);
        response.json(movie)
      });

    // Movie.findById(request.params.movie_id)
    //   .then(movie => {
    //     console.log(movie);
    //     Review.create(request.body)
    //       .then(review => {
    //         console.log(review);
    //         Movie.findOneAndUpdate({
    //             title: movie.title
    //           }, {
    //             $push: {
    //               reviews: review._id
    //             }
    //           })
    //           .then(result => {
    //             console.log(result)
    //             response.json(result)
    //           })
    //       })
    //     // response.json(movie)
    //   });

  },


  // delete/remove resource
  destroy(request, response) {
    Movie.findByIdAndRemove(request.params.movie_id)
      .then(movie => response.json(movie))
      .catch(console.log)
  },

  destoryReview(request, response) {
    console.log(request.params.id)
    console.log(request.params.movie_id)
    Movie.update({
        _id: request.params.movie_id
      }, {
        $pull: {
          reviews: {
            _id: request.params.id
          }
        }
      })
      .then(movie => response.json(movie))

  }

};
