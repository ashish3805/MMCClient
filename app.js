let MMC = require('./lib/MMC');
let config = require('./config');

let mmc = new MMC(config);
mmc.classifySong('Poker Face', 'Lady Gaga').then(
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);
