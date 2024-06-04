// const $btn = document.getElementById("button");
// const $value = document.getElementById("value");
// let value = 0;

const $btn = document.getElementById("btn");
const $btn1 = document.getElementById("btn1");
const $btn2 =document.getElementById("btn2");

const $result = document.getElementById("result");

const $irasuto = document.getElementsByClassName("irasuto");

// タイマーを設定

//set関数の変数の代わりのIDを指定
// const intervalId =unko;


  // let unko =setInterval(function () {
  //   // タイマー処理
  //   $btn.click();
  // }, 100);

 
  let unko =setInterval(function () {
    // タイマー処理
    setUp();
  }, 100);

 

   
  

 


// タイマーを停止する
let indexCount =0
$btn1.addEventListener("click",()=>{ 
  clearInterval(unko);
  indexCount=1;

})
//タイマーを再開
$btn2.addEventListener("click",()=>{ 
if(indexCount===0){


}else{
  unko =setInterval(function () {
    // タイマー処理
    setUp();
  }, 100);
  indexCount=0;
}
  

  
})
 


// うらない スタート


  // ランダム数字 0～0.999までの割り当て 関数は大文字定期
  


　const setUp = () => {


  const num = Math.random();

  let index = 0;
  let $irasutoLen = $irasuto.length;
  while (index < $irasutoLen) {
    $irasuto[index].style.display = "none";
    index++;
  }

  if (num <= 0.2) {
    $result.textContent = "大大吉";
    $irasuto[0].style.display = "block";
  } else if (num <= 0.5) {
    $result.textContent = "大吉";
    $irasuto[1].style.display = "block";
  } else if (num <= 0.7) {
    $result.textContent = "中吉";
    $irasuto[2].style.display = "block";
  } else if (num <= 0.999) {
    $result.textContent = "小吉";
    $irasuto[3].style.display = "block";
  };
  
}
 
  





   
   
