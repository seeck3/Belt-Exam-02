const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const reg = new RegExp('\\.js$', 'i')
const modelsPath = path.resolve('server/models');
// const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://heroku_2lj0fd9c:ehdcks85@ds231133.mlab.com:31133/heroku_2lj0fd9c', {
  useNewUrlParser: true,
});
// mongoose.connect('mongodb://localhost:27017/beltexam02', {
//   useNewUrlParser: true,
// });


mongoose.connection.on('connected', () => console.log('MongDB connected'));

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
