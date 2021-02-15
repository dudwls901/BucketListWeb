console.log('i am working');
/*
js 팁 
1. ctrl + alt + n으로 코드 실행
2. ctrl + shift + p로 js code의 모든 것 검색
*/

// 상수 웬만하면 다 상수로 const a = 5;
//가변 let b = 3;

//''벡틱 
//console.log(`Hello ${name} you are ${age} years old`);

/* 함수
function sayHello(name, age)
{
  console.log('Hello!', name, "you have", age, "years of age.");

}
*/
function sayHello(name, age)
{
  return 'Hello!' + name + "you have" + age + "years of age.";

}
function sayHello1(name, age)
{
  return `Hello ${name} you are ${age} years old`;

}
const greetkyj = sayHello("kyj", 23);
const greetkyj1 = sayHello1("kyj", 23);
console.log(greetkyj);
console.log(greetkyj1);

const calculator = {
  plus : function(a,b){
    return a + b;
  }
}
const plus = calculator.plus(5,5);
console.log(plus);

//html을 dom객체로 변경해서 사용
//html의 정적 디자인 요소들을 js로 동적으로 다루기, 자바스크립트로 이벤트 다루기
const title = document.getElementById("title");

//id로 찾기const title = document.querySelector("#title");
//클래스로 찾고 싶으면 .title document.getElementsByClassName 

//console.log(title);
title.innerHTML = "HHHHHHHHHHHHH";
title.style.color  = "white";

//console.dir(title);
document.title = "i wish";

function handleResize()
{
console.log("I have been resized");
}
//필요한 시점에 handleResize함수 호출
window.addEventListener("resize", handleResize);
//handleresize를 바로 호출
window.addEventListener("resize", handleResize());
if(10 === 5)
{

  console.log("hi");
}
else if (20>5 && 10 <20){
;
}
//이거 오래된 거라 잘 안쓰거 커스텀한 거 씀 html의 좋은 폼으로
//const age = prompt("how old are you");
//console.log(age);
//toggle은 클래스를 add, remove를 알아서 해줌