let todoList = [];

let todoListContainer = document.querySelector('.todoListContainer');
let todoInput = document.querySelector('.todo-input');
let todoInputDate = document.querySelector('.todo-input-date');
function addTodo(){
    todoListContainer.innerHTML ='';
    if(todoInput.value ==='' || todoInputDate.value===''){
        alert('Enter all the fields');
    }else{
        const todo = {
            todo: todoInput.value,
            date: todoInputDate.value
        };
        todoInput.value = '';
        todoInputDate.value = '';
        todoList.push(todo);
        render();
        console.log(todoList);
    }
    

}

function render(){
    todoListContainer.innerHTML ='';
    for(let i = 0;i<todoList.length;i++){
        const todoHtml = `<div class="todoList"><p class="todo-text">${todoList[i].todo}</p><p class="todo-date">${todoList[i].date}</p><button class="remove-btn" onclick="todoList.splice(${i},1); render()">-</button></div>`
        todoListContainer.innerHTML += todoHtml;
    }
}