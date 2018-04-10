# MMCClient
Client Libraries for Music Moods Classifier. it is used by [MMCHttpServer]()

## Installation instructions
First install it with npm.
```bash
npm install git+https://github.com/ashish3805/MMCClient.git
```
Next, create a config file. Example shown below.
```javascript
module.exports = {
  'clientId': 'xyz',
  'clientSecret': 'mysecret',
  'attributes': {
    'track_mode_confidence': 'number',
    'track_key_confidence': 'number',
    'track_time_signature_confidence': 'number',
    'track_time_signature': 'number',
    'track_tempo_confidence': 'number',
    'track_end_of_fade_in': 'number',
    'duration_ms': 'number',
    'tempo': 'number',
    'valence': 'number',
    'liveness': 'number',
    'instrumentalness': 'number',
    'acousticness': 'number',
    'speechiness': 'number',
    'mode': 'number',
    'loudness': 'number',
    'key': 'number',
    'energy': 'number',
    'danceability': 'number',
  },
};
```

## Usages instructions
```javascript
let MMC = require('./lib/mmcclient');
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
```