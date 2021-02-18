const form = document.querySelector(".namingForm"),
    input = form.querySelector("input"),
    content1 = document.querySelector(".content1");
const h2 = document.querySelector(".name");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintContent(currentValue);
    saveName(currentValue);

}

function askForName() {

    form.addEventListener("submit", handleSubmit);
}

function paintContent(text) {
    form.classList.add(SHOWING_CN);
   content1.classList.remove(SHOWING_CN);
    h2.innerText = text;

}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        askForName();
        content1.classList.add(SHOWING_CN);

    } else {
        paintContent(currentUser);
        console.log(currentUser);
    }

}

function init() {
    loadName();

}
init();     