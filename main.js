'use strict'

// 1
console.log("HelloWorld");

// 2
console.log(3 + 7);

// 3
console.log("3 + 7");

// 4
console.log(5 * 2);

// 5
console.log("プログラミング" + "スクール");

// 6
let name = "プログラミングスクール";
console.log(name);

// 7
let a = Number(5);
console.log(a * a);

// 8
name = "キャリアテック";
console.log(name);

// 9
const language = "日本語";
console.log(language + "を話せます。");

// 10
// ローカルスコープを活用
{
const name = "山田太郎";
const age = "24";
console.log(`僕の名前は${name}です。\n現在${name}は${age}です。 よろしくお願いします。`);
}

// 11
const level = 20;
if(level >= 10){
  console.log("強い");
}
else{
  console.log("弱い");
}

// 12
const n = 2;
switch(n){
  case 1:
    console.log("大吉");
    break;
  case 2:
    console.log("吉");
    break;
  case 3:
    console.log("小吉");
    break;
  default:
    break;
}

// 13
for(let i = 1; i <= 100; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  }
  else if(i % 3 == 0){
    console.log("Fizz");
  }
  else if(i % 5 == 0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}