let zmq = require('zmq');

class ClassifierClient {
  constructor () {
    this.socket = zmq.socket('req');
    let socket = this.socket;
    process.on('SIGINT', function () {
      socket.close();
    });
  }

  connect () {
    this.socket.connect('tcp://localhost:5555');
  }

  classify (data) {
    return new Promise((resolve, reject) => {
      this.socket.send(data.toString());
      this.socket.on('message', function (reply) {
        console.log('Received reply: ', reply.toString());
        resolve(reply.toString());
      });
    });
  }

  disconnect () {
    this.socket.close();
  }
}

module.exports = ClassifierClient;
