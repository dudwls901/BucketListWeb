const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function saveToDos() {
    //localstorage는 자바의 데이터를 못 받음  다 string으로 받음
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

}

function deleteToDo(event) {
    const btn = event.target;
    console.dir(event.target);
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        //if true return toDo.id
        console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id);

    });

    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text) {
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        //localstorage에 있는 string을 자바스크립트의 오브젝트로 변환(파싱)
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();