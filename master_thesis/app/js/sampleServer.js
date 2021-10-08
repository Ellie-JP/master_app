import http from 'http';
const hostname = 'localhost';
const port = 3000;

var server = http.createServer();
server.on('request', doRequest);

function doRequest(req, res) {
  var data = '';
  req.on('readable', function(chunk) {
    data += req.read();
  });
  req.on('end', function() {
    console.log(data);
    res.end(data);
  });
  
  //jsのオブジェクト
  // const data = {hoge: 'fuga'};
  // const data = {
  //   "squadName": "Doctor VC",
  //   "members": [
  //     {
  //       "name": "Doctor",
  //       "ID": 1
  //     },
  //     {
  //       "name": "friend",
  //       "ID": 2
  //     },
  //     {
  //       "name": "normal",
  //       "ID": 3
  //     }
  //   ]
  // }
  

  res.writeHead(200, {'Content-Type': 'json'});
  //jsonのオブジェクトからストリングに変換
  res.write(JSON.stringify(data));
  //投げ返す
  res.end();
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
