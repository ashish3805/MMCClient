let Client = require('./lib/Client');
let data = [
  0,
  0,
  1,
  4,
  0.556,
  0.08127,
  107760,
  164.755,
  0.961,
  0.0626,
  0.000598,
  0.0342,
  0.0599,
  1,
  -9.163,
  4,
  0.79,
  0.599,
];


let client = new Client();
client.connect();
client.request(data).then((res)=>{
  console.log(res);
  client.disconnect();
}, (err)=>{
  console.log(err);
  client.disconnect();
});

