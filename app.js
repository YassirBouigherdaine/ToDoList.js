// JavaScript source code

const input = document.querySelector(".container input");
const inputBtn = document.querySelector(".container .myButton");
const itemList = document.querySelector(".itemList");
const displaytasksNum = document.querySelector('.clearAll span')
const deleteAll = document.querySelector('.clearAll button')
let tasksNum = 0;

input.onkeyup = () => {

    let userInpt = input.value;

    if (userInpt.trim() != 0) {
        inputBtn.classList.add("active");
    } else {
        inputBtn.classList.remove("active");
    }
}


inputBtn.onclick = () => {

    let storage = localStorage.getItem("New Todo")
    let userInpt = input.value;

    if (storage == null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(storage);
    }

    tasks.push(userInpt);
    localStorage.setItem("New Todo", JSON.stringify(tasks));
    displayTask();  
}

function displayTask() {
   
    let storage = localStorage.getItem("New Todo");
    let listElem = '';
    

    if (storage == null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(storage);
    }
    
    tasks.forEach((element, index) => {
        listElem += `<li> ${element} <button onclick="deleteTask(${index})";>&#10006;</button></li>`;
    });

    itemList.innerHTML = listElem;
    input.value = "";
    tasksNum = tasks.length;
    displaytasksNum.textContent = tasksNum;
}

function deleteTask(index) {
    let storage = localStorage.getItem("New Todo");
    tasks = JSON.parse(storage);
    tasks.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(tasks));
    displayTask();
}

deleteAll.onclick = () => {

    tasks = [];
    localStorage.setItem("New Todo", JSON.stringify(tasks));
    displayTask();
}

displayTask();