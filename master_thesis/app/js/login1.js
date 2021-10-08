//JSON送受信のクライアント
import { XMLHttpRequest } from 'xmlhttprequest'; 
//console.log("test!");


//jsonを読み込んで条件分岐するものを書く
//取得したい JSON がある URL を変数へ代入
// let requestURL = 'https://raw.githubusercontent.com/Ellie-JP/VCtest/main/VCdata1.json';
const requestURL = 'http://localhost:3000'
//XMLHttpRequest から新しいリクエストオブジェクトをつくる

//IDのデータ
var myID = {"ID": 1};
//JSをJSONにエンコード
var json_text = JSON.stringify(myID);

//リクエストを定義
let request = new XMLHttpRequest();
//リクエスト作る
// request.open('GET', requestURL);
request.open('POST', requestURL, true);
request.setRequestHeader('Content-Type', 'application/json');
request.responseType = 'json';
//返って来るの待ちonload
request.onload = function() {
  const res = request.responseText;
  const resObject = JSON.parse(res);
  console.log(resObject.members[1].name);
  //console.log(json_text);
};

//リクエスト送る
// request.send();
//console.log(json_text);
//入ってはいる
request.send(json_text);




/*
function verify() {
  let result;
  //let id = 1
  //let id = 2
  let id = document.getElementById('input').value;
  console.log(id);
  if (id == 1) {
    result = 'Doctor';
    window.open( '/forDoctor.html' );
  } else {
    console.log(id);
    result = 'wrong ID!';
    alert (result);
  }
  //return result;
  //alert (result);
}

//console.log(verify());
*/