const body = document.querySelector("body");



// function handleImageLoad(){

// }

function paintImage(imgNumber){
const image = new Image();
image.src = `images/${imgNumber}.jpg`
body.appendChild(image);
image.classList.add("bgImage");
}

// function genRandom(){
//     const number = Math.floor(Math.random()*IMG_NUMBER);
//     return number;
// }

function init(){
//const randomNumber = genRandom();
paintImage(3);
}

init();