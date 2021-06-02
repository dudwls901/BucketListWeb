const body = document.querySelector("body");

<<<<<<< HEAD


// function handleImageLoad(){

// }

function paintImage(imgNumber){
const image = new Image();
image.src = `images/${imgNumber}.jpg`
=======
const IMG_NUMBER =3;

function handleImageLoad(){

}
function paintImage(imgNumber){
const image = new Image();
image.src = `images/${imgNumber +1}.jpg`
>>>>>>> 65b5f8872d19819156ad0e6ff9fe6e537c5a1f1f
body.appendChild(image);
image.classList.add("bgImage");
}

<<<<<<< HEAD
// function genRandom(){
//     const number = Math.floor(Math.random()*IMG_NUMBER);
//     return number;
// }

function init(){
//const randomNumber = genRandom();
paintImage(3);
=======
function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
const randomNumber = genRandom();
paintImage(randomNumber);
>>>>>>> 65b5f8872d19819156ad0e6ff9fe6e537c5a1f1f
}

init();