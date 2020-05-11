
function handleShow() {
    document.querySelector('.modal').showModal();
}

function handleHide() {
    document.querySelector('.modal').close();
}

document.querySelector('.modal-show').addEventListener('click', handleShow);

document.querySelector('.modal-hide').addEventListener('click', handleHide);

const dateElement = document.getElementById("date");
const options = { weekday: "long", month: "long", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);


const addMessage = document.querySelector(".message");
const addButton = document.querySelector(".add");
const todo = document.querySelector(".todo");

let todoList = [];
/*if( localStorage.getItem('todo')){
    todoList=JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}*/
addButton.addEventListener("click", function () {
    let newToDo = {
        todo: addMessage.value,
        important: false,
        checked: false
    };
    todoList.push(newToDo);
    displayMessages()
    // localStorage.setItem('todo', JSON.stringify(todoList));
})

function displayMessages() {
    let displayMessage = "";
    todoList.forEach(function (item, i) {
        displayMessage += `
         <li>
         <input type='checkbox' id='item_${i}' ${item.checked ? checked : ""}>
         <button class="btn">delete</button>
<label for='item_${i}' class="${item.important ? 'important' : ""}">${item.todo}</label>
         </li>

         `;
        todo.innerHTML = displayMessage;

    });

    const elem = document.querySelectorAll(".btn");
    for (let k = 0; k < elem.length; k++) {
        elem[k].onclick = function () {

           this.parentNode.remove();
        }

    }
}




/*todo.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    todoList.forEach(function (item, i) {
        if (item.todo === event.target.innerHTML) {
            if(event.ctrlKey){
                 todoList.splice(i,1);
             }else{
                
             }
            item.important = !item.important;
        }

        displayMessages();
    })



});


const elem =document.querySelectorAll(".btn");
for (let k = 0; k < elem.length; k++) {
elem[k].onclick=function(){

    elem[k].remove();
}
    const btn = butt[k];
    btn.addEventListener('click', function () {
        //this.parentNode.parentNode.remove();
        butt.remove();
        todoList.slice(1,2);

        //displayMessages();
    }
    )
}*/


