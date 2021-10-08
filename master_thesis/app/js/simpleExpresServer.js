import express from "express";
const hostname = 'localhost';
const port = 3000;

const app = express();

var server = app.listen(port, function(){
  console.log("Node.js is listening to PORT:" + server.address().port);
});

const data = {
  "squadName": "Doctor VC",
  "members": [
    {
      "name": "Doctor",
      "ID": 1
    },
    {
      "name": "friend",
      "ID": 2
    },
    {
      "name": "normal",
      "ID": 3
    }
  ]
}

//JSONで上のdataをとってきて、レスポンス待ちする関数
function doGetRequest(req, res) {
  console.log(req);
  res.json(data);
}

//doGetRequestのレスは[/]に紐づいて実行
app.get('/', doGetRequest);

//
function doPostRequest(req, res){
  //console.log(req);  
  console.log(req.body);
  res.json(data);
}
app.post('/', doPostRequest);