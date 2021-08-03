function verify() {
  let result;
  //let id = 1
  //let id = 2
  let id = document.getElementById('input').value;
  if (id === 1) {
    result = 'Doctor';
  } else {
    console.log(id);
    result = 'NOT Doctor';
  }
  return result;
  alert (result);
}
//console.log(verify());




//サーバーを立てるのに使えそうなコード
//const express = require('express');
//const app = express();

// CSSや画像ファイルを置くフォルダを指定するコードを貼り付けてください
//app.use(express.static('public'));

//app.get('/', (req, res) => {
//  res.render('hello.ejs');
//});

//app.get('/top', (req, res) => {
//  res.render('top.ejs');
//});

//app.listen(3000);
