// const content2 = document.querySelector(".content2"),
//  bucketCircle = content2.querySelector(".circle"),
//  bucketInput = content2.querySelector("input"),
//  bucketTA = content2.querySelector("textarea"),
//  bucketTASubmit = content2.querySelector(".fa-check"),
//  bucketTACancel = content2.querySelector(".fa-times"),
//  bucketSpan = content2.querySelector("span");

// bucketCircle.addEventListener("mouseenter",handleCircle);
// bucketCircle.addEventListener("mouseout",handleCircle);
body.addEventListener("click",handleTA);
// bucketInput.addEventListener("mouseenter",handleCircle);
// bucketInput.addEventListener("mouseout",handleCircle);
// bucketInput.addEventListener("click",handleTA);
let   circleDiv = [],
lightSpan =[],
showingInput =[],
showingTA =[],
fa_checkI =[],
fa_timesI =[],
divIndex_P =[],
content2=[];


let preTargetIndex=-1;
const ddd ="2";
function handleTA(event){
console.log(event);
console.log(event.target);

const findP = body.querySelectorAll("p");

let currentContent2 = event.target.parentNode;
console.log("previouscurrent"+currentContent2.className);

if(event.target==event.target.parentNode.querySelector(".light")|| event.target ==event.target.parentNode.querySelector("input")  ){
console.log("eventtarget이 light이나 input");

    if(event.target==event.target.parentNode.querySelector(".light"))
       currentContent2 = event.target.parentNode.parentNode;
       console.log("aftercurrent"+currentContent2.className);
const targetIndex=currentContent2.querySelector("p").innerText;
console.log("pre"+preTargetIndex + " current" + targetIndex);
if(preTargetIndex!==targetIndex){
    if(preTargetIndex>=0){
        findP[preTargetIndex].parentNode.querySelector("textarea").classList.add(SHOWING_CN);
        findP[preTargetIndex].parentNode.querySelector(".circle-check").classList.add(SHOWING_CN);
        findP[preTargetIndex].parentNode.querySelector(".circle-times").classList.add(SHOWING_CN);
        findP[preTargetIndex].parentNode.querySelector(".circle").style.transform="scale(1)";
    }
    currentContent2.querySelector("textarea").classList.remove(SHOWING_CN);
    currentContent2.querySelector("textarea").innerText =  bucketList[targetIndex].text;
    currentContent2.querySelector(".circle-check").classList.remove(SHOWING_CN);
    currentContent2.querySelector(".circle-times").classList.remove(SHOWING_CN);
    currentContent2.querySelector("input").classList.add(SHOWING_CN);
    preTargetIndex =targetIndex;
}
else{
    if(currentContent2.querySelector("textarea").className==="showing")
    {
        currentContent2.querySelector("textarea").classList.remove(SHOWING_CN);
        currentContent2.querySelector("textarea").innerText =  bucketList[targetIndex].text;
        currentContent2.querySelector(".circle-check").classList.remove(SHOWING_CN);
        currentContent2.querySelector(".circle-times").classList.remove(SHOWING_CN);
        currentContent2.querySelector("input").classList.add(SHOWING_CN);
        preTargetIndex =targetIndex;
    }
}

}
else if(event.target ==currentContent2.querySelector("textarea")){

}
    
else if(event.target ==currentContent2.querySelector(".circle-check")){
modifyBucket(preTargetIndex,currentContent2.querySelector("textarea").value);
currentContent2.querySelector("textarea").innerText =  bucketList[preTargetIndex].text;
currentContent2.querySelector("textarea").classList.add(SHOWING_CN);
    currentContent2.querySelector(".circle-check").classList.add(SHOWING_CN);
    currentContent2.querySelector(".circle-times").classList.add(SHOWING_CN);
    currentContent2.querySelector(".circle").style.transform="scale(1)";

    
}
else if(event.target ==currentContent2.querySelector(".circle-times")){ 
    console.log("대체뭐야"+currentContent2.className);
    findP[preTargetIndex].parentNode.querySelector("textarea").classList.add(SHOWING_CN);
    findP[preTargetIndex].parentNode.querySelector(".circle-check").classList.add(SHOWING_CN);
    findP[preTargetIndex].parentNode.querySelector(".circle-times").classList.add(SHOWING_CN);
    findP[preTargetIndex].parentNode.querySelector(".circle").style.transform="scale(1)";

}


else{//target이 input이나 light가 아닌 다른 것일 때
console.log("eventtarget이 외에것");
if(preTargetIndex>=0){
findP[preTargetIndex].parentNode.querySelector("textarea").classList.add(SHOWING_CN);
findP[preTargetIndex].parentNode.querySelector(".circle-check").classList.add(SHOWING_CN);
findP[preTargetIndex].parentNode.querySelector(".circle-times").classList.add(SHOWING_CN);
findP[preTargetIndex].parentNode.querySelector(".circle").style.transform="scale(1)";
}
}


// console.log(event.target==bucketSpan|| event.target == bucketInput);
// console.log(event.currentTarget);
// console.log(event.currentTarget.querySelector(".content2"));
// if(event.type==="click"){
//     if(event.target==event.currentTarget.querySelector(".light")|| event.target == bucketInput ){
// bucketInput.classList.add(SHOWING_CN); 
//     bucketTA.classList.remove(SHOWING_CN);
//     bucketCircle.style.transform="scale(2)";
//     bucketTA.innerHTML ="\n"+ bucketList[1].text;
//     bucketTASubmit.classList.remove(SHOWING_CN);
//     bucketTACancel.classList.remove(SHOWING_CN);
//     event.target.parentNode.querySelector("input").placeholder = bucketList[targetIndex].text;
//     event.target.parentNode.querySelector(".circle").style.transform="scale(2)";
//     // event.target.childNodes[1].style.width = bucketList[1].text.length;
//     event.target.parentNode.querySelector("input").classList.remove(SHOWING_CN);
//     // console.log();
//     console.log("zzzzzzzz"+event.target.parentNode.childNodes[5].className);
// }
// else{
//     if(event.target == bucketTA)
//     ;
//     else{
//     console.log("???");
//     bucketTA.classList.add(SHOWING_CN);
//     bucketTASubmit.classList.add(SHOWING_CN);
//     bucketTACancel.classList.add(SHOWING_CN);
//     bucketCircle.style.transform="scale(1)";
//     }
// }


}

function modifyBucket(index,value){
    bucketList[index].text = value;
    localStorage.setItem("BUCKET_LS", JSON.stringify(bucketList));
    
}


function handleCircle(event){
    // console.log(event);
   
    // console.log("targgggggg",event.target.className);
    // console.log("bbbbbbbbb"+event.target.childNodes[1].className);
    // console.log("mkmkmkmkmkmk"+event.target.parentNode.parentNode.className);
    // console.log(bucketTA.className.length);
    // console.log(event.target.parentNode.querySelector("p").className);
    if(event.type==="mouseenter"){
        const targetIndex=event.target.parentNode.querySelector("p").innerText;
        // if(bucketTA.className.length>0){
            if(event.target.parentNode.querySelector("textarea").className.length>1){
    // bucketCircle.style.transform="scale(2)";
    // bucketInput.placeholder = bucketList[1].text;
    // bucketInput.style.width = bucketList[1].text.length;
    // bucketInput.classList.remove(SHOWING_CN);
    // console.log(event.target.parentNode.querySelector("input"))
    
    event.target.parentNode.querySelector("input").placeholder = bucketList[targetIndex].text;
    event.target.parentNode.querySelector(".circle").style.transform="scale(2)";
    // event.target.childNodes[1].style.width = bucketList[1].text.length;
    event.target.parentNode.querySelector("input").classList.remove(SHOWING_CN);
    // console.log();
    // console.log("zzzzzzzz"+event.target.parentNode.childNodes[5].className);
    // console.log("aaaaaaaaa"+event.target.childNodes[1].className);
        }
    }
    else if(event.type==="mouseout"){
        // if(bucketTA.className.length>0)
      
        if(event.target.className==="light"){
        if(event.target.parentNode.parentNode.querySelector("textarea").className.length>1)
    // bucketCircle.style.transform="scale(1)";
    // bucketInput.classList.add(SHOWING_CN);
    event.target.parentNode.parentNode.querySelector(".circle").style.transform="scale(1)";
    event.target.parentNode.parentNode.querySelector("input").classList.add(SHOWING_CN);
    // console.log(event.target.parentNode.childNodes[1]);
               
    }
        else{
            if(event.target.parentNode.querySelector("textarea").className.length>1)
            event.target.parentNode.querySelector(".circle").style.transform="scale(1)";
            event.target.parentNode.querySelector("input").classList.add(SHOWING_CN);
        }
    }
}
function deleteCircle(){
    for(let i =0; i<bucketList.length-1;i++)
    body.removeChild(content2[i]);
}

function paintCircle(){

bucketList.forEach(function(buckets, index){

console.log(`buckets: ${buckets.text} index : ${index} b : ${buckets.id}`);

content2[index] = document.createElement("div");

circleDiv[index] = document.createElement("div");

lightSpan[index] = document.createElement("span");
showingInput[index] = document.createElement("input");
showingTA[index] = document.createElement("textarea");
fa_checkI[index] = document.createElement("i");
fa_timesI[index] = document.createElement("i");
divIndex_P[index] = document.createElement("p");

// contentDiv[index].classList.add("randPosition");
content2[index].classList.add("content2");
circleDiv[index].classList.add("circle");

// circleDiv[index].classList.add("circleNew");
lightSpan[index].classList.add("light");
showingInput[index].classList.add("showing");
showingTA[index].classList.add("showing");
fa_checkI[index].classList.add("fas");
fa_checkI[index].classList.add("fa-check");
fa_checkI[index].classList.add("circle-check");
fa_checkI[index].classList.add("showing");
fa_timesI[index].classList.add("fas");
fa_timesI[index].classList.add("fa-times");
fa_timesI[index].classList.add("circle-times");
fa_timesI[index].classList.add("showing");
divIndex_P[index].classList.add("showing");
divIndex_P[index].innerText = index;

body.appendChild(content2[index]);

content2[index].appendChild(circleDiv[index]);
circleDiv[index].appendChild(lightSpan[index]);

content2[index].appendChild(showingInput[index]);
content2[index].appendChild(showingTA[index]);
content2[index].appendChild(fa_checkI[index]);
content2[index].appendChild(fa_timesI[index]);
content2[index].appendChild(divIndex_P[index]);
// circleDiv[index].style.offset({left : 50 * buckets.id});

// readonly type="text" maxlength="50" placeholder="NAME"
showingInput[index].type = "text";
showingInput[index].maxlength = "50";
showingInput[index].placeholder= "NAME";
showingInput[index].readOnly =true;

showingTA[index].rows ="2";
showingTA[index].cols="40";
showingTA[index].style="resize:none; overflow:hidden";

const ranLeft=Math.floor(Math.random()*1200+1),
ranTop =Math.floor(Math.random()*320+1)

content2[index].style.left = `${ranLeft}px`;
content2[index].style.top = `${ranTop}px`;
console.log("cccccccccccccc"+circleDiv[index].style.top);

circleDiv[index].addEventListener("mouseenter",handleCircle);
circleDiv[index].addEventListener("mouseout",handleCircle);
showingInput[index].addEventListener("mouseenter",handleCircle);
showingInput[index].addEventListener("mouseout",handleCircle);

});

}

paintCircle();