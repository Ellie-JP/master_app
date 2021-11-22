//SQL
const express = require('express');
const mysql = require('mysql');
const mysql2 = require('mysql2/promise');
const app = express();
app.use(express.json())

//cors追加
var cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

//cors要件追加
app.use(cors({ origin: true, credentials: true }));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
// import cors from 'cors';
app.use(cors({ origin: true, credentials: true }));
// Access-Control-Allow-Origin: http://localhost:3001
// Access-Control-Allow-Credentials: true




const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '001144',
  database: 'list_app'
});

app.get('/main',cors(corsOptions), (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.render('index.ejs', {items: results});
    }
  );
});

app.get('/new',cors(corsOptions), (req, res) => {
  res.render('new.ejs');
});


//登録
app.post('/create',cors(corsOptions), (req, res) => {
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.itemName],
    (error, results) => {
      // 一覧画面にリダイレクト
      res.redirect("/main");
    }
  );
});

app.post('/delete/:id',cors(corsOptions), (req, res) => {
  // データベースのデータを削除する処理
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.redirect('/main');
      }
    );
});

app.get('/edit/:id', cors(corsOptions),(req, res) => {
  // 選択されたメモをデータベースから取得する
  connection.query(
    'SELECT * FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.render('edit.ejs', {item: results[0]});

    }
    );

});


//相手からのレスから必要なデータを取り出し、求められたデータをjson化して送る
async function doPostRequest(req, res, next){
  //書き足した
  //json化する、ダブルクォートで囲まれる
  var id_json = JSON.stringify(req.body);
  //それをjsonじゃなくする
  var id_text = JSON.parse(id_json);
  //送られてきたIDの値がでてくる
  console.log("患者のID");
  console.log(id_text.ID);

  const createConnection = async () => {
    const connection = await mysql2.createConnection(
      {
        host: 'localhost',
        user: 'root',
        password: '001144',
        database: 'list_app'
      }
    );
    return connection;
  }

  try {
    //sqlから
    // 接続の開始
    const connection = await createConnection();

    // sqlで何かする
    const [rows, fields] = await connection.query("SELECT * FROM items where id = ?", id_text.ID); //whereにする

    // connectionを閉じる
    connection.end();

    // 返事
    res.json(rows);
  } catch (error) {
    next(error)
  }
}

app.post('/',cors(corsOptions), doPostRequest);

app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Internal Server Error'); // ステータスコード500でレスポンスを返す
});

app.listen(3001);
console.log("http://localhost:3001/main");