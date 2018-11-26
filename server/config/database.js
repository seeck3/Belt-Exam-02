const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const reg = new RegExp('\\.js$', 'i')
const modelsPath = path.resolve('server/models');
// const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://seeck3:ehdcks85@ds163683.mlab.com:53198/heroku_mc15nx4d', {
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
