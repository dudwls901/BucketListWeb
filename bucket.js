const plusBtn = document.querySelector(".plusBtn"),
plusSvg = plusBtn.querySelector("svg"),
bucketBox = document.querySelector(".bucketBox")
bucketBoxTextArea = bucketBox.querySelector("textarea"),
bucketBoxSubmit = bucketBox.querySelector(".fa-check"),
bucketBoxCancel = bucketBox.querySelector(".fa-times");

let bucketList = [];


plusSvg.addEventListener("click",function(){
    handleBucketBox(true);});
bucketBoxSubmit.addEventListener("click",handleBucketSubmit);
bucketBoxCancel.addEventListener("click",function(){handleBucketBox(false);});


function saveBucket() {
    //localstorage는 자바의 데이터를 못 받음  다 string으로 받음
   
    localStorage.setItem("BUCKET_LS", JSON.stringify(bucketList));
    bucketBoxTextArea.innerHTML="";
    console.log(bucketBoxTextArea.value);
    console.log(bucketList.length+"todoslast");
}

function paintBucket(text){
    const newId = bucketList.length;
    
        console.log(bucketBoxTextArea.value);
        const bucketObj = {
         text: text,
         id: newId
        };
    bucketList.push(bucketObj);
    saveBucket();
    
  
}

function handleBucketSubmit(){
    console.log(bucketList.length+"first");
    if(bucketBoxTextArea.value!==""){
    paintBucket(bucketBoxTextArea.value);
    bucketBox.classList.remove("showingBucketBox");
    plusBtn.classList.remove(SHOWING_CN);
    }
    bucketBoxTextArea.value="";
    deleteCircle();
    paintCircle();
}

function handleBucketBox(bool){
   console.log(bool);
    if(bool){
    bucketBox.classList.add("showingBucketBox");
    plusBtn.classList.add(SHOWING_CN);
    }
    else{
        bucketBox.classList.remove("showingBucketBox");
        plusBtn.classList.remove(SHOWING_CN);
    }
}
function loadBucketList() {
    const loadedBucket = localStorage.getItem("BUCKET_LS");
    console.log(loadedBucket);
    if (loadedBucket !== null) {
        //localstorage에 있는 string을 자바스크립트의 오브젝트로 변환(파싱)
        const parsedBucket = JSON.parse(loadedBucket);
        console.log(parsedBucket+"zzzzzzzzzzzzz");
        parsedBucket.forEach(function (bucket) {
            console.log(bucket.text+"111111111111");
            paintBucket(bucket.text);
        });
    }
}



function init(){
loadBucketList();

}

init();
