
// 課題3-2 のプログラムはこの関数の中に記述すること




function print(data) {
  console.log(data.results.shop[0].name);
  console.log(data.results.shop[0].genre.catch);
  console.log(data.results.shop[0].access);
  console.log(data.results.shop[0].address);
  console.log(data.results.shop[0].budget.average);
  console.log(data.results.shop[0].catch);
  console.log(data.results.shop[0].close);
  console.log(data.results.shop[0].wedding);
  console.log(data.results.shop[0].coupon_urls.pc);
  console.log(data.results.shop[0].coupon_urls.sp);

  console.log(data.results.shop[1].name);
  console.log(data.results.shop[1].access);
  console.log(data.results.shop[1].address);
  console.log(data.results.shop[1].genre.catch);
  console.log(data.results.shop[1].genre.name);
  console.log(data.results.shop[1].budget.average);
  console.log(data.results.shop[1].free_drink);
  console.log(data.results.shop[1].coupon_urls.pc);
  console.log(data.results.shop[1].coupon_urls.sp);
}






  
    






// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let result = document.querySelector('#result');
  result.textContent = '';
  result.setAttribute('style', 'display: flex; gap: 20px; flex-wrap: wrap;'); 
  let shops = data.results.shop;

  

  for (let i = 0; i < shops.length; i++) {
    let shop = shops[i];

    let div = document.createElement('div');
    div.setAttribute('class', 'kekka'); 

    let h3 = document.createElement('h3');
    h3.textContent = shop.name;
    div.insertAdjacentElement('beforeend', h3);

    let ul = document.createElement('ul');

    let items = [
      { label: 'アクセス', value: shop.access },
      { label: '住所', value: shop.address },
      { label: '予算', value: shop.budget.name },
      { label: 'キャッチコピー', value: shop.catch },
      { label: 'ジャンル', value:shop.genre.name }
    ];

    for (let item of items) {
      let li = document.createElement('li');

      let strong = document.createElement('strong');
      strong.textContent = item.label + ':';

      li.insertAdjacentElement('beforeend', strong);
      li.insertAdjacentText('beforeend', ' ' + item.value);

      ul.insertAdjacentElement('beforeend', li);
    }

    div.insertAdjacentElement('beforeend', ul);
    result.insertAdjacentElement('beforeend', div);
  }
}


   




// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b=document.querySelector('button#sendRequest');
b.addEventListener('click',sendRequest);





// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let n=document.querySelector('input#skey').value;
  let id;
  switch (n) {
    case '居酒屋':
      id = 'G001';
      break;
    case 'ダイニングバー・バル':
      id = 'G002';
      break;
    case '創作料理':
      id = 'G003';
      break;
    case '和食':
      id = 'G004';
      break;
    case '洋食':
      id = 'G005';
      break;
    case 'イタリアン・フレンチ':
      id = 'G006';
      break;
    case '中華':
      id = 'G007';
      break;
    case '焼肉・ホルモン':
      id = 'G008';
      break;
    case 'アジア・エスニック料理':
      id = 'G009';
      break;
    case '各国料理':
      id = 'G010';
      break;
    case 'カラオケ・パーティ':
      id = 'G011';
      break;
    case 'バー・カクテル':
      id = 'G012';
      break;
    case 'ラーメン':
      id = 'G013';
      break;
    case 'カフェ・スイーツ':
      id = 'G014';
      break;
    case 'その他グルメ':
      id = 'G015';
      break;
    case 'お好み焼き・もんじゃ':
      id = 'G016';
      break;
    case '韓国料理':
      id = 'G017';
      break;
      
  }

  
  let url ='https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+id+'.json';
  axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);
  
}



// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let datas=resp.data;
  if (typeof datas === 'string') {
        datas = JSON.parse(datas);
  }
  console.log(datas);
  printDom(datas);

  

}

  

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
    
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}




// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let datas=resp.data;
  if (typeof datas === 'string') {
        datas = JSON.parse(datas);
  }
  console.log(datas);
  printDom(datas);

  

}

  

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
    
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
