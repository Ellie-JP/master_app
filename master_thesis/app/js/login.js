let id = 1;
function verify(id) {
  let result;
  if (id === 1) {
    result = 'Doctor';
  } else {
    result = 'NOT Doctor';
  }
  return result;
}

console.log(verify());
//console.log(testNum(-5));
// expected output: "NOT positive"




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
