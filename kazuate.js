let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu=1;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let botton=document.querySelector('#print');
  botton.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso=Number(document.querySelector('#yoso').value);
  let kaisux=document.querySelector('#kaisu');
  let answerx=document.querySelector('#answer');
  let resultx=document.querySelector('#result');
  kaisux.textContent=kaisu;
  answerx.textContent=yoso;


  if (kaisu < 3) {
    if (yoso === kotae) {
      resultx.textContent = "正解です．おめでとう！";
      kaisu = 4; 
    } else if (yoso < kotae) {
      resultx.textContent = "まちがい．答えはもっと大きいですよ";
      kaisu++;
    } else {
      resultx.textContent = "まちがい．答えはもっと小さいですよ";
      kaisu++;
    }
  } else if (kaisu === 3) {
    if (yoso === kotae) {
      resultx.textContent = "正解です．おめでとう！";
    } else {
      result.textContent = "まちがい．残念でした答えは " + kotae + " です．";
    }
    kaisu++;
  } else {
    resultx.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  }
  
  

}


  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

