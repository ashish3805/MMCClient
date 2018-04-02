let zmq = require('zmq');

class Client {
  constructor () {
    this.socket = zmq.socket('req');
    process.on('SIGINT', function () {
      disconnect();
    });
  }

  connect () {
    this.socket.connect('tcp://localhost:5555');
  }

  request (data) {
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

module.exports = Client;
