const http = require('http');
///外から見た自分のipアドレス↓
const hostname = '192.168.11.5';
const port = 3000;

//var mime = {
//  ".html": "text/html",
//  ".css":  "text/css"
  // 読み取りたいMIMEタイプはここに追記
//};

var server = http.createServer();
server.on('request', doRequest);

// ファイルモジュールを読み込む
var fs = require('fs');

// リクエストの処理
function doRequest(req, res) {

    // ファイルを読み込んだら、コールバック関数を実行する。
    switch (req.url) {
    case "/":
      fs.readFile('../veiws/login.html', 'utf-8', doReard_loginhtml);
      break;
    case "/js/login.js":
      fs.readFile('login.js', 'utf-8', doReard_loginjs);
      break;
    case "/login.css":
      fs.readFile('../veiws/login.css', 'utf-8', doReard_logincss);
      break;
    case "/forDoctor.html":
      fs.readFile('../veiws/forDoctor.html', 'utf-8', doReard_forDoctor);
      break;
    case "/forPeople.html":
      fs.readFile('../veiws/forPeople.html', 'utf-8', doReard_forPeople);
      break
    }

    //loginhtmlのコールバック関数
    // コンテンツを表示する。(ここでコールバック関数doReardを読み込んでいる)
    function doReard_loginhtml(err, data) {
        //res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] || "text/plain"});
        //このコールバック関数は第一引数にエラー、第二引数に読み込んだデータを指定します。
        res.writeHead(200, {'Content-Type': 'text/html'});
        //これが入るとコードが見える、ないとcssが反映されない
        //res.writeHead(200, {'Content-Type': "text/css"});
        res.write(data);
        res.end();
    }

    //logincssのコールバック関数
    function doReard_logincss(err, data) {
        res.writeHead(200, {'Content-Type': 'text/css'});

        res.write(data);
        res.end();
    }

    //loginjsのコールバック関数
    function doReard_loginjs(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});

        res.write(data);
        res.end();
    }

    //forDoctor.htmlのコールバック関数

    function doReard_forDoctor(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write(data);
        res.end();
    }

    //forPeople.htmlのコールバック関数
    function doReard_forPeople(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write(data);
        res.end();
    }

}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



//けす
//https://took.jp/post-963/

//css読み込めない
//https://qiita.com/Suibari_cha/items/48da8519d6f363925b6a
