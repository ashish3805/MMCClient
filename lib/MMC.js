let Spotify = require('./Spotify');
let Util = require('./Util');
let ClassifierClient = require('./ClassifierClient');

class MMC {
  constructor (config) {
    this.sp = new Spotify(config.clientId, config.clientSecret);
    this.schema = config.attributes;
    this.classifier = new ClassifierClient();
    this.classifier.connect();
  }

  async createFeatureVector (title, artist) {
    let song = {
      title: title,
      artist: artist,
    };
    song.analysis = await this.sp.getAnalysis(title, artist);
    song.features = await this.sp.getFeatures(title, artist);
    let flatData = Util.flattenTheObject(song, this.schema);
    let featureVector = [];
    let keys = Object.keys(this.schema);
    for (let i = 0; i < keys.length; i++) {
      featureVector.push(flatData[keys[i]]);
    }
    return featureVector;
  }

  async classifySong (title, artist) {
    let featureVector = await this.createFeatureVector(title, artist);
    let result = await this.classifier.classify(featureVector);
    return result;
  }
}

module.exports = MMC;
